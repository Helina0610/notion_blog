import { getDatabaseFromNotion } from "@/cms/notionClient";
import { CardSection } from "@/components/intro/CardSection";
import HeroSection from "@/components/intro/HeroSection";
import { ParsedDatabaseItemType, parseDatabaseItems } from "@/utils/parseDatabaseItems";

export interface HomeProps {
  databaseItems : ParsedDatabaseItemType[],
}

export default async function Home() {
  if(!process.env.DATABASE_ID) throw new Error("DATABASE_ID is not defined");
  const data = await getData();
  return (
    <div>
      <HeroSection />
      <CardSection cardItems = {data}/>
    </div>
  )
}

// getStaticProps : 페이지 콘텐츠가 외부데이터에 연동된다 -> nextjs 13버전 이후 getStaticProps 사용안함
async function getData () {
  if(!process.env.DATABASE_ID) throw new Error("DATABASE_ID is not defined");
  const res = await getDatabaseFromNotion(process.env.DATABASE_ID);
  const parsedDatabaseItems = parseDatabaseItems(res);

  return parsedDatabaseItems;
}