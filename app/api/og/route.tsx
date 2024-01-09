import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.
 
export const runtime = 'edge';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title');

  return new ImageResponse(
    (
      <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(90deg, rgba(6,182,212,1) 0%, rgba(59,130,246,1) 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem 1rem",
          textAlign: "center",
          width: "75%",
          background: "white",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "1.5rem",
        }}
      >
        <h1
          style={{
            background:
              "linear-gradient(90deg, rgba(6,182,212,1) 0%, rgba(59,130,246,1) 100%)",
            backgroundClip: "text",
            fontFamily: "Pretendard Black",
            padding: "1rem",
            color: "transparent",
            fontSize: "96px",
          }}
        >
          {title}
        </h1>
      </div>
    </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}