import { NextRequest, NextResponse } from 'next/server'
// спарсить ссылки из файла  json
import { ASINS } from './asins'
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const cookieName = 'kuka-kotaet'

  // Если зашли на /redirect
  if (url.pathname === '/key-pop') {
    const response = NextResponse.redirect(new URL('/', request.url))
    response.cookies.set(cookieName, '1', {
      path: '/',
      maxAge: 60,
      httpOnly: true,
    })
    return response
  }

  // Если зашли на / и есть кука
  if (url.pathname === '/') {
    const redirectFlag = request.cookies.get(cookieName)

    if (redirectFlag) {
      const randomUrl = ASINS[Math.floor(Math.random() * ASINS.length)]

      const response = NextResponse.redirect("https://www.amazon.com/dp/" + randomUrl + "/?tag=spacesavers-20")

      // удаляем cookie
      response.cookies.set(cookieName, '', {
        path: '/',
        maxAge: 0,
      })

      return response
    }
  }

  return NextResponse.next()
}

// применяем middleware только к / и /redirect
export const config = {
  matcher: ['/', '/key-pop'],
}
