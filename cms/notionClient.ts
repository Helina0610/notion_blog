import { Client } from "@notionhq/client";
import { PageObjectResponse, PartialPageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

interface DatabaseQueryOption{
  filter? : {
    tagName : string
  }
}

export const notionClient = new Client({
  auth : process.env.NOTION_TOKEN,
});

export const getDatabaseFromNotion =async (databaseId:string, option? : DatabaseQueryOption) => {
  const response = await notionClient.databases.query({
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