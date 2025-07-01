import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    message: 'Aqui vão os resultados do BacBo (simulado por enquanto).',
  })
}
