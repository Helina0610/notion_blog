
import NotionPageRenderer from '@/components/notion/NotionPageRenderer';
import { NotionAPI } from 'notion-client';
import React, { cache } from 'react'

interface PostParams{
  params  : {pageId : string}
}

export default async function Posts  ({params} : PostParams)  {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage(params.pageId);
  return (
    <>
      {/* <PageHead title={title} description={description} keywords={keywords} image={ogImage}/> */}
      <NotionPageRenderer recordMap={recordMap} />
    </>
  )
}





