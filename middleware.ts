import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Remover barras duplas
  if (request.nextUrl.pathname.includes('//')) {
    return NextResponse.redirect(
      new URL(request.nextUrl.pathname.replace(/\/+/g, '/'), request.url)
    )
  }

  // Remover trailing slash
  if (request.nextUrl.pathname.endsWith('/') && request.nextUrl.pathname !== '/') {
    return NextResponse.redirect(
      new URL(request.nextUrl.pathname.slice(0, -1), request.url)
    )
  }

  // Forçar lowercase
  if (request.nextUrl.pathname !== request.nextUrl.pathname.toLowerCase()) {
    return NextResponse.redirect(
      new URL(request.nextUrl.pathname.toLowerCase(), request.url)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /api/ (API routes)
     * 2. /_next/ (Next.js internals)
     * 3. /_static (inside /public)
     * 4. /_vercel (Vercel internals)
     * 5. /favicon.ico, /sitemap.xml, /robots.txt (static files)
     */
    '/((?!api|_next|_static|_vercel|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}