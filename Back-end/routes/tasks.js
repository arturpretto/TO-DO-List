import express from 'express'
import { PrismaClient } from '@prisma/client'

const taskRoutes = express.Router()
const prisma = new PrismaClient()

taskRoutes.post('/tasks/:id', async (req, res) => {})

taskRoutes.get('/tasks/:id', async (req, res) => {})

export default taskRoutes