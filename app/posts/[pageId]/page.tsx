
import { Comments } from '@/components/common/Comments';
import { PageHead } from '@/components/layout/PageHead';
import NotionPageRenderer from '@/components/notion/NotionPageRenderer';
import type { Metadata } from 'next'
import { NotionAPI } from 'notion-client';
import { getPageProperty, getPageTitle } from 'notion-utils';
import React, { cache } from 'react'

interface PostParams{
  params  : {pageId : string}
}

// generateMetadata 의 props 는 page.tsx 함수인 Posts 함수의 props 와 같게
export async function generateMetadata({params}:PostParams) : Promise<Metadata>{
  const notion = new NotionAPI();
  const recordMap = await notion.getPage(params.pageId);

  const propertyValue = Object.values(recordMap.block)[0].value;
  const title = getPageTitle(recordMap);
  const keywords = getPageProperty<string[]>("tags", propertyValue, recordMap).join(",");
  const description = getPageProperty<string>("description", propertyValue, recordMap);

  return {
    title : ` ${title} | HJ`,
    description : description,
    keywords : keywords,
    metadataBase: new URL(process.env.BASE_URL ?? 'http://localhost:3000'),
    openGraph : {
      images : [
        {
          url : `/api/og?title=${title}`,
          width : 1200,
          height : 630,
        }
      ]
    }
  }
}

export default async function Posts  ({params } : PostParams)  {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage(params.pageId);

  return (
    <>
      <NotionPageRenderer recordMap={recordMap} />
      <Comments />
    </>
  )
}





