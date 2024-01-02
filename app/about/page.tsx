import NotionPageRenderer from '@/components/notion/NotionPageRenderer'
import { NotionAPI } from 'notion-client';
import React from 'react'

export default async function About() {
  const notion = new NotionAPI(); 

  const profileId = process.env.PROFILE_ID; 

  if(!profileId) throw new Error("PROFILE_ID is not defined");
  
  const recordMap = await notion.getPage(profileId);

  return (
    <div>
      <NotionPageRenderer recordMap={recordMap} />
    </div>
  )
}
