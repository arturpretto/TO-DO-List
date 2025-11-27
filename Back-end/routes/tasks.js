import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const router = express.Router();
const prisma = new PrismaClient()

router.post('/:id', (req, res) => {})

router.post('/:id', (req, res) => {})

export default taskRoutes