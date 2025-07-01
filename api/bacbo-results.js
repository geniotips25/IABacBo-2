export async function GET() {
  return new Response(JSON.stringify({ message: 'Aqui vão os resultados do BacBo (simulado por enquanto).' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
