import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales = ["en", "pl"];
const defaultLocale = "en";

function getLocale(request: NextRequest): string {
    const negotiatorHeaders = Object.fromEntries(request.headers.entries());
    const languages = new Negotiator({headers: negotiatorHeaders}).languages();
    return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    const response = NextResponse.next();
    const locale = pathname.split("/")[1];
    response.cookies.set("locale", locale, { path: "/" });
    return response;
  }

  const locale = getLocale(request);
  const response = NextResponse.redirect(
    new URL(`/${locale}${pathname}`, request.url)
  );
  response.cookies.set("locale", locale, { path: "/" });
  return response;
}

export const config = {
    matcher: [
      "/((?!_next|api|fonts).*)",
    ],
};