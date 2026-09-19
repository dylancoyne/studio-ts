import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PROTECTED_PATHS = ['/work/nissan']
const COOKIE_NAME = 'case-study-access'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isProtected = PROTECTED_PATHS.some((path) => pathname.startsWith(path))
  if (!isProtected) return NextResponse.next()

  const hasAccess = request.cookies.get(COOKIE_NAME)?.value === 'granted'
  if (hasAccess) return NextResponse.next()

  const url = request.nextUrl.clone()
  url.pathname = '/work-locked'
  url.searchParams.set('redirect', pathname)
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/work/nissan/:path*'],
}