export async function GET() {
  return new Response(JSON.stringify({ message: 'Padrões avançados simulados do BacBo.' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
