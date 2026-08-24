import { NextResponse } from "next/server";

export async function GET() {
  const association = {
    applinks: {
      apps: [],
      details: [
        {
          appID: "5AQ7N2L38R.com.slliman.userapp",
          paths: ["/products/*"],
        },
      ],
    },
  };

  return NextResponse.json(association, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}