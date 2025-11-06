import express from 'express';
import { PrismaClient } from './generated/prisma/index.js';
import logger from './middlewares/loggerMiddleware.js';
import authRoutes from './routes/authRoutes.js';
import fuelRoutes from './routes/fuelRoutes.js';
import transactionRoutes from './routes/transactionRoutes.js';
import errorMiddleware from './middlewares/errorMiddleware.js';

const app = express();
export const prisma = new PrismaClient();

app.use(express.json());
app.use(logger);

app.use('/api/auth',authRoutes);
app.use('/api/fuel',fuelRoutes);
app.use('/api/transaction',transactionRoutes);

app.use(errorMiddleware);

export default app;