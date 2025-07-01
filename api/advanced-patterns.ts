import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    message: 'Padrões avançados simulados do BacBo.',
  })
}
