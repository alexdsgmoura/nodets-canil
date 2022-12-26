import path from 'path'
import dotenv from 'dotenv'
import express from 'express'
import mustache from 'mustache-express'

import mainRoutes from './routes'

dotenv.config()

const server = express()

server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

server.use(express.static(path.join(__dirname, '../public')))

server.use(mainRoutes)

server.use((req, res) => {
  res.status(404).render('pages/404')
})

// Rotas

server.listen(process.env.PORT, () => console.log(`Servidor rodando na porta: ${process.env.PORT}`))
