import { Client } from "@notionhq/client";
import { PageObjectResponse, PartialPageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionAPI } from "notion-client";

interface DatabaseQueryOption{
  filter? : {
    tagName : string
  }
}

export const notionClient = new Client({
  auth : process.env.NOTION_TOKEN,
});

//revalidateTag 사용 버전 - 불필요한 렌더링 방지
const notionClient2 = new Client({
  auth : process.env.NOTION_TOKEN,
  fetch : (url , opts) => {
    return fetch(url,{
      ...opts,
      next : {tags : ['notion']},
      cache : 'force-cache',
    })
  }
})

export const getDatabaseFromNotion =async (databaseId:string, option? : DatabaseQueryOption) => {
  const response = await notionClient2.databases.query({
    database_id : databaseId,
    filter : {
      and :[
        {
          property : "showYn",
          checkbox : {
            equals : true
          }
        },
        {
          property : "tags",
          multi_select : {
            contains : option?.filter?.tagName ?? ""
          }
        }
      ]
    },
    sorts : [
      {
        property : "createDate",
        direction : "descending"
      }
    ]
  });

  

  return response.results as (PageObjectResponse | PartialPageObjectResponse )[];
}

export const notionX = new NotionAPI();

export const getPageContent =async (pageId:string) => {
  const recordMap = await notionX.getPage(pageId);
  
    //singed_urls 을 필터링 하여 페이지 내부의 사진 불필요한 빌드 방지
    const filteredSignedUrl = Object.keys(recordMap.signed_urls).reduce<
    typeof recordMap.signed_urls>((acc,cur) => {
    if(recordMap.signed_urls[cur].indexOf("expirationTimestamp") > -1) return acc;

    acc[cur] = recordMap.signed_urls[cur];

    return acc;
  },{});

  recordMap.signed_urls = filteredSignedUrl;

  return recordMap;
}

export const getSearch =async (query:string) => {
  const res = await notionClient.search({
    query : query,
    filter : {
      value : "page",
      property :"object"
    },
    sort : {
      direction : "descending",
      timestamp : "last_edited_time"
    }
  })

  return res.results as (PageObjectResponse | PartialPageObjectResponse )[];
}

export const getItem =async (pageId:string) => {
  const response = await notionClient.pages.retrieve({
    page_id : pageId,
  })
  return response
}