import { getDatabaseFromNotion } from "@/cms/notionClient";
import { MultiSelectPropertyItemObjectResponse, PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { it } from "node:test";

export interface ParsedDatabaseItemType{
  id : string;
  cover : string;
  icon : PageObjectResponse["icon"]
  tags : MultiSelectPropertyItemObjectResponse["multi_select"]
  published : string;
  description : string;
  title : string;
  previewImage? : unknown;
}

// getDatabaseFromNotion 함수의 typeof 의 returntype 의 기다려준 값
export const parseDatabaseItems = (items : Awaited<ReturnType<typeof getDatabaseFromNotion>>) => {
  const parseItems = items.reduce<ParsedDatabaseItemType[]>((acc, item) => {
    
    //PageObjectResponse | PartialPageObjectResponse 구분하기 위해, properties 가 없는것 => PartialPageObjectResponse
    if(!("properties" in item)) return acc;

    //데이터베이스 아이디가 아닌것(Block_id) 스킵
    if(item.parent.type !== "database_id") return acc; 

    const {id, cover, icon} = item;

    const {description ,createDate ,tags , 이름 } = item.properties;

    // A 이면 B 하고, A가 아니면 C로, 근데 C 가 D 이면
    //const parsedCover = (cover?.type == "file") ? (cover.file.url) : ((cover?.external.url) ?? "")
    const pCover = cover?.type === "file" ? cover.file.url : cover?.external.url ?? ""
    const pPublished = (createDate.type === "date" ? createDate.date?.start : "") ?? ""
    const pTitle = (이름.type === "title" ? 이름.title[0]?.plain_text : "") ?? "";
    const pDescription = (description.type === "rich_text" ? description.rich_text[0]?.plain_text : "") ?? ""
    const pTags = tags.type === "multi_select" ? tags.multi_select : [];
    
    const parsedResult : ParsedDatabaseItemType = {
      id,
      icon,
      cover : pCover,
      published : pPublished,
      description : pDescription,
      title : pTitle,
      tags : pTags,


    }

    return [
      ...acc,
      parsedResult
      
    ]
  }, [])

  return parseItems;
}