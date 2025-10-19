import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const GERMAN_COUNTRY_CODES = new Set(["DE"]);
const LOCALE_REDIRECT_PATH = "/en";

export function middleware(request: NextRequest) {
  const { nextUrl } = request;

  // Skip redirects for assets, API routes, or non-HTML requests.
  if (
    nextUrl.pathname.startsWith("/_next") ||
    nextUrl.pathname.startsWith("/api") ||
    nextUrl.pathname.startsWith("/en") ||
    nextUrl.pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const visitorCountry = request.headers
    .get("x-vercel-ip-country")
    ?.toUpperCase();

  if (visitorCountry && !GERMAN_COUNTRY_CODES.has(visitorCountry)) {
    const redirectUrl = nextUrl.clone();
    redirectUrl.pathname = `${LOCALE_REDIRECT_PATH}${nextUrl.pathname === "/" ? "" : nextUrl.pathname}`;

    return NextResponse.redirect(redirectUrl, 307);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
