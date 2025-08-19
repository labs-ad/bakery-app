// Simple health check endpoint for Docker health checks
export async function GET() {
  return new Response('OK', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
