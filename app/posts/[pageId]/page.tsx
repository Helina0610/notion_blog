
import { Comments } from '@/components/common/Comments';
import { PageHead } from '@/components/layout/PageHead';
import NotionPageRenderer from '@/components/notion/NotionPageRenderer';
import { NotionAPI } from 'notion-client';
import { getPageProperty, getPageTitle } from 'notion-utils';
import React, { cache } from 'react'

interface PostParams{
  params  : {pageId : string}
}

export default async function Posts  ({params} : PostParams)  {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage(params.pageId);

  // const propertyValue = Object.values(recordMap.block)[0].value;
  // const title = getPageTitle(recordMap);
  // const keywords = getPageProperty<string[]>("태그", propertyValue, recordMap).join(",");
  // const description = getPageProperty<string>("설명", propertyValue, recordMap);

  return (
    <>
      {/* <PageHead title={title} description={description} keywords={keywords} image={ogImage}/> */}
      <NotionPageRenderer recordMap={recordMap} />
      <Comments />
    </>
  )
}





