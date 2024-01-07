import { getSearch } from "@/cms/notionClient";
import { parseDatabaseItems } from "@/utils/parseDatabaseItems";
import { NextResponse } from "next/server";

export async function GET(request:Request) {
  const {searchParams} = new URL(request.url);
  if(!searchParams) throw Error("Query is required");

  const searchQuery = searchParams.get("search");
  if(!searchQuery) throw Error("search params is required");

  const data = await getSearch(searchQuery);
  const parsedData = parseDatabaseItems(data);
  return NextResponse.json(parsedData);
}