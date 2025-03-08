import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export const config = {
  matcher: [
    '/login/:path*',
    '/signup/:path*',
    '/my-account/:path*',
  ]
}

export function middleware(request: NextRequest) {
  const cookiesStore = cookies()
  const accessToken = cookiesStore.get('accessToken')?.value
  console.log('middleware', request.nextUrl.pathname);

  if(accessToken && request.nextUrl.pathname!='/my-account'){
    return NextResponse.redirect(new URL('/store', request.url))
  }

  // Definir las rutas protegidas... si no está autenticado, redirigir al login
  const protectedRoutes = ['/my-account'];
  if (protectedRoutes.includes(request.nextUrl.pathname) && !accessToken) {
      // Redirigir al login si no está autenticado
      return NextResponse.redirect(new URL('/login', request.url));
  }

}
 