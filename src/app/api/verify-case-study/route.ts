import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { password } = await request.json()

  if (password === process.env.CASE_STUDY_PASSWORD) {
    const response = NextResponse.json({ success: true })

    response.cookies.set('case-study-access', 'granted', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    })

    return response
  }

  return NextResponse.json(
    { error: 'Incorrect password' },
    { status: 401 }
  )
}