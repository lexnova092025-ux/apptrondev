import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const pw = process.env.STAGE_PASSWORD
  // If no stage password is set, allow everything (no protection)
  if (!pw) return NextResponse.next()

  // Allow static and internal Next endpoints
  const path = req.nextUrl.pathname
  if (path.startsWith('/_next') || path.startsWith('/api') || path === '/pilot-login' || path.startsWith('/favicon')) {
    return NextResponse.next()
  }

  // Check cookie or authorization header
  const cookie = req.cookies.get('pilot_auth')?.value
  const header = req.headers.get('authorization')
  if (cookie === pw) return NextResponse.next()
  if (header === `Bearer ${pw}`) return NextResponse.next()

  // Redirect to pilot login
  const url = req.nextUrl.clone()
  url.pathname = '/pilot-login'
  url.searchParams.set('from', req.nextUrl.pathname)
  return NextResponse.redirect(url)
}

export const config = {
  matcher: '/((?!_next|api|favicon).*)',
}
