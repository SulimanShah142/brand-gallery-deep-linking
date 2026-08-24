import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse(
    JSON.stringify({
      applinks: {
        apps: [],
        details: [
          {
            appID: "5AQ7N2L38R.com.slliman.userapp",
            paths: ["/products/*"],
          },
        ],
      },
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=3600",
      },
    }
  );
}