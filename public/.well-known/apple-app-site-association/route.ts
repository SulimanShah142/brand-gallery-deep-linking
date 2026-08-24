import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      applinks: {
        apps: [],
        details: [
          {
            appID: "5AQ7N2L38R.com.slliman.userapp",
            paths: ["/products/*"],
          },
        ],
      },
    },
    {
      headers: {
        "Cache-Control": "public, max-age=3600",
      },
    }
  );
}