import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const cart = true;
  const userAuth = true;
  if (cart && userAuth) {
    NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/checkout", "/admin"],
};
