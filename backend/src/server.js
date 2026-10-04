import express from 'express';
import { port } from './config/env.js';
import { errorHandler } from './middleware/errorHandler.js';
import { notFound } from './middleware/notFound.js';
import healthRoutes from './routes/healthRoutes.js';

const app = express();

app.use(express.json());
app.use('/api/health', healthRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`);
});