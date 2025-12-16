import express from 'express'
import cors from 'cors'
import authRoutes from './auth.js';
import taskRoutes from './tasks.js';

const app = express();

app.use(express.json())
app.use(cors())

app.use('/auth', authRoutes)
app.use('/tasks', taskRoutes)

app.listen(3000)