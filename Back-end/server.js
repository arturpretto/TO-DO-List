import express from 'express'
import cors from 'cors'
import authRoutes from './routes/auth.js';
import taskRoutes from './routes/tasks.js';
import 'dotenv/config'

const app = express();

app.use(express.json())
app.use(cors())

app.use('/auth', authRoutes)
app.use('/tasks', taskRoutes)

app.listen(3000)