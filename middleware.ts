import { NextResponse } from 'next/server'

export async function middleware(request: Request) {
  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: ['/todos'],
}
