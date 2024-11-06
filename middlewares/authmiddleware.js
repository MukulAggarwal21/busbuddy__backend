import { request } from "http";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const path = request.nextUrl.pathname;

  const isPublicPath =
    path === "/login" || path === "/signup";

  const token = request.cookies.get("token")?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

}

// See "Matching Paths" below to learn more
export const config = {
  //Matcher matlab is path par jaane se phle middleware chalega
  matcher:[
    '/',
    '/login',
    '/signup',
    '/profile',
    '/verifyemail'
  ]
};

