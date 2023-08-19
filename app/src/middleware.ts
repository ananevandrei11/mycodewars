import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const BASIC_AUTH_USER = process.env.BASIC_AUTH_USER as string;
const BASIC_AUTH_PASSWORD = process.env.BASIC_AUTH_PASSWORD as string;

export function middleware(request: NextRequest) {
  const basicAuth = request.headers.get('Authorization');
  if (!BASIC_AUTH_USER || !BASIC_AUTH_PASSWORD) {
    return NextResponse.next();
  }
  if (basicAuth) {
    const auth = basicAuth.split(' ')[1];
    // Buffer is not used because TypeError in NextJS >= 12.2 https://nextjs.org/docs/api-reference/edge-runtime
    const [user, pwd] =
      atob(auth).toString().split(':') ||
      decodeURIComponent(atob(auth)).toString().split(':');
    if (user === BASIC_AUTH_USER && pwd === BASIC_AUTH_PASSWORD) {
      return NextResponse.next();
    }
  }
  request.nextUrl.pathname = '/api/login';
  return NextResponse.rewrite(request.nextUrl);
}
