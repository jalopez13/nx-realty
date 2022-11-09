// middleware.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
  const { nextUrl: url, geo } = req;
  const city = geo.city || 'los angeles';
  const region = geo.region || 'ca';

  url.searchParams.set('geoLocation', `${city}, ${region}`);
  return NextResponse.rewrite(req.nextUrl);
}
