import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient()

app.use(express.json())
app.listen(3000)

app.post('/User', (req, res) => {
    const userData = req.body

    console.log('Dados recebidos: ', userData)

    res.json({ message: 'Usuário criado.', data: userData })
})

app.get('/User', (req, res) => {
    const users = req.body

    console.log('Usuários: ', users)

    res.json({ message: 'Usuários: ', data: users })
})

app.delete('/User/:id', (req, res) => {
    console.log('Dados removidos. ')

    res.json({ message: 'Usuário deletado.' })
})

app.put('/User/:id', (req, res) => {
    const userData = req.body

    console.log('Dados atualizados: ', userData)

    res.json({ message: 'Usuário atualizado.', data: userData })
})