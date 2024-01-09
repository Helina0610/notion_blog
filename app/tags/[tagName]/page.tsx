import { getDatabaseFromNotion } from '@/cms/notionClient';
import CardSection from '@/components/intro/CardSection';
import { TagHeroSection } from '@/components/tags/TagHeroSection';
import { parseDatabaseItems } from '@/utils/parseDatabaseItems';
import { Metadata } from 'next';
import React, { cache } from 'react'

interface TagPrams  {
  params  : {tagName : string}
}

export async function generateMetadata({params} : TagPrams) : Promise<Metadata> {
  const tagName = params.tagName;
  const pascalTagName = tagName[0].toUpperCase() + tagName.slice(1);

  return {
    title : `${tagName} | HJ`,
    description : `${tagName} Collection`,
    keywords : tagName,
    metadataBase: new URL(process.env.BASE_URL ?? 'http://localhost:3000'),
    openGraph : {
      images : [
        {
          url : `/api/og?title=${tagName}`,
          width : 1200,
          height : 630,
        }
      ]
    }
  }
}

export default async function page ( {params} : TagPrams) {
  if(!process.env.DATABASE_ID) throw new Error("DATABASE_ID is not defined");
  const data = await getItem({params});
  const tagName = params.tagName;
  const pascalTagName = tagName[0].toUpperCase() + tagName.slice(1);
  return (
    <div>
      <TagHeroSection title={`${pascalTagName}`} />
      <CardSection cardItems = {data}/>
    </div>
  )
}

//revalidate 사용하기 위해 react-cache 사용..? 맞나..?
const getItem = cache(async ({params} : TagPrams) => {
  if(!process.env.DATABASE_ID) throw new Error("DATABASE_ID is not defined");

  const tagName = params.tagName;

  //params 로 넘어온 tagName 은 대소문자 구별 안됨
  const pascalTagName = tagName[0].toUpperCase() + tagName.slice(1);
  const res = await getDatabaseFromNotion(process.env.DATABASE_ID, {
    filter : {
      tagName : pascalTagName
    }
  });
  const parsedDatabaseItems = parseDatabaseItems(res);

  return parsedDatabaseItems;
})



