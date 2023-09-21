import {fastify} from "fastify";
import { request } from "http";

const server = fastify();

const host = 'localhost'
const port = 5000

// Declare a route
server.get('/', async (req, res) => {

    res.send('Servidor Rodando!!!');
})

server.listen({
    host,
    port   
})
.then(() => console.log(`servidor rodando em http://${host}:${port}`))
.catch(err => console.log('Erro ao Subir o Servidor:',err))