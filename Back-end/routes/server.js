import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import taskRoutes from './tasks';
import authRoutes from './auth';

const app = express();
const prisma = new PrismaClient()

app.use(express.json())
app.use(cors())

app.use('/auth', authRoutes)
app.use('/tasks', taskRoutes)

app.listen(3000)