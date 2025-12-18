import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // const token = request.cookies.get('av_token');
  // if (token && token.value === process.env.NEXT_PUBLIC_TOKEN) {
  //   return NextResponse.next();
  // }
  //   return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: ['/admin/:path*'],
};
