import 'dotenv/config';
import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/api/health', (request, response) => {
  response.json({ status: 'ok', message: 'Backend is running' });
});

app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`);
});