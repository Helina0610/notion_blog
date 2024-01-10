import { NextResponse } from "next/server";

export default  function middleware(request : Request){
  console.log("middleware");

  request.headers.set("Content-Type" , "image/*");
  const content = request.headers.get("Content-Type");
  console.log(content);

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|.*\\.jpg$).*)'
  ],
};