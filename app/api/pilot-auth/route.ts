import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const password = body?.password
  const pw = process.env.STAGE_PASSWORD
  if (!pw) return NextResponse.json({ message: 'STAGE_PASSWORD não configurada' }, { status: 500 })
  if (password !== pw) return NextResponse.json({ message: 'Senha incorreta' }, { status: 401 })

  // Set cookie pilot_auth
  const res = NextResponse.json({ ok: true })
  res.cookies.set('pilot_auth', pw, { httpOnly: true, path: '/', sameSite: 'lax' })
  return res
}
