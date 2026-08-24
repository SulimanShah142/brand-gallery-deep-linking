import { NextResponse } from 'next/server';

export async function GET() {
  const aasaConfig = {
    applinks: {
      apps: [],
      details: [
        {
          // Replace with your exact Team ID and Bundle ID
          appID: "YOUR_APPLE_TEAM_ID.com.yourcompany.yourapp", 
          paths: ["/products/*", "/"]
        }
      ]
    }
  };

  return new NextResponse(JSON.stringify(aasaConfig), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400, must-revalidate',
    },
  });
}
