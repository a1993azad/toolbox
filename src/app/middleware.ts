import { NextRequest, NextResponse } from "next/server";

export function middleware(request:NextRequest) {
  // retrieve the current response
  const res = NextResponse.next();
  if (request.nextUrl.pathname.startsWith("/api")) {
    // add the CORS headers to the response
    res.headers.append("Access-Control-Allow-Credentials", "true");
    res.headers.append('origin', 'https://nextjs-graphql-server-client.vercel.app')
    res.headers.append("Access-Control-Allow-Origin", "*"); // replace this your actual origin
    res.headers.append(
      "Access-Control-Allow-Methods",
      "GET,OPTIONS,DELETE,PATCH,POST,PUT"
    );
    res.headers.append(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );
  }
  return res;
}
