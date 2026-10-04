export function getHealth(request, response) {
  response.json({ status: 'ok', message: 'Backend is running' });
}