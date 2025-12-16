import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000' // Coloque aqui a porta do seu Back-end (Node)
})

export default api