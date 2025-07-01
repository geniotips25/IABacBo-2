export async function GET() {
  return new Response(JSON.stringify({ message: 'Padrões simulados do BacBo.' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
