import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  role?: string;
}

export function middleware(request: NextRequest) {
  const token = request.cookies.get("accessToken")?.value;
  console.log(token);
  const url = request.nextUrl.clone();

  if (url.pathname.startsWith("/admin-dashboard")) {
    if (!token) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }

    try {
      const decoded = jwtDecode<DecodedToken>(token);

      if (decoded.role !== "admin") {
        url.pathname = "/login";
        return NextResponse.redirect(url);
      }
    } catch {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin-dashboard/:path*"],
};
