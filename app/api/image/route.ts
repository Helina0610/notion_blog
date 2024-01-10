import { getItem } from "@/cms/notionClient";
import { NextResponse } from "next/server";


export async function GET(request:Request) {
  const {searchParams} = new URL(request.url);

  //url 의 params 가져오기
  const type = searchParams.get("type");
  if (!type) throw new Error("Type is required");

  const pageId = searchParams.get("pageId");
  if (!pageId) throw new Error("Page ID is required");

  //pageId 의 해당 데이터 가져오기
  const pageItem = await getItem(pageId.toString());
  if(!("properties" in pageItem)) throw new Error("PageItem is not exist");

  // image url
  const {cover , icon} = pageItem;
  const parsedCover = cover?.type === "file" ? cover.file.url : cover?.external.url ?? "";

  let url = "";
  switch (type) {
    case "cover":
      url = parsedCover;
      break;

    case "icon":
      if (icon?.type === "emoji") {
        url = "";
        break;
      }
      url = (icon?.type === "file" ? icon.file.url : icon?.external.url) ?? "";
      break;
  }

  // image url -> arrayBuffer
  const res = await fetch(url);
  const blob = await res.arrayBuffer();
 
  // header 설정
  const headers = new Headers(res.headers);
  headers.append("Content-Type" , "image/*");


  return new NextResponse(blob, { headers : headers})

}
