import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  if (url.pathname === "/login") return NextResponse.next();

  url.pathname = "/";
  return NextResponse.rewrite(new URL("/", request.url));
}

export const config = {
  matcher: "/:username",
};
