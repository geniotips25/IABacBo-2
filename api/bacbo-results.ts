import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Aqui vai os resultados do BacBo (simulação por enquanto).' });
}
