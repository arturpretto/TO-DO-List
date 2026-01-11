import express from 'express'
import { PrismaClient } from '@prisma/client'

const taskRoutes = express.Router()
const prisma = new PrismaClient()

taskRoutes.post('/', async (req, res) => {
    try {
        const task = await prisma.task.create({
            data: {
                title: req.body.title,
                userId: req.body.userId
            }
        })

        res.status(201).json(task)
    } catch (error) {
        res.status(401).json(error)
    }
})

taskRoutes.get('/', async (req, res) => {
    const userId = req.headers.authorization

    if (!userId) {
        res.status(401).send('Usuário não autorizado.')
    } else {
        try {
            const tasks = await prisma.task.findMany({
                where: {
                    userId: userId
                }
            })

            res.status(201).json(tasks)
        } catch (error) {
            res.status(500).json(error)
        }
    }
})

taskRoutes.put('/', async (req, res) => {
    try {
        const task = await prisma.task.update({
            data: {
                completed: req.body.completed
            },
            where: {
                id: req.body.id
            }
        })

        res.status(201).json(task)
    } catch (error) {
        res.status(500).json(error)
    }
})

taskRoutes.delete('/', async (req, res) => {
    try {
        const task = await prisma.task.delete({
            where: {
                id: req.body.id
            }
        })

        res.status(201).json(task)
    } catch (error) {
        res.status(500).json(error)
    }
})

export default taskRoutes