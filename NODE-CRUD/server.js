import {fastify} from "fastify";
import { request } from "http";
import { DataBaseTemp } from "./db-list.js";

const server = fastify();

const host = 'localhost'
const port = 5000

const db = new DataBaseTemp()

// Declare a route
server.get('/', async (req, res) => {
    
    res.send('Servidor Rodando!!!');
})

server.get('/produtos',(req,res)=>{
    let produtos = db.listarTodos();
    return res.status(200).send({
        size: produtos.length,
        data: produtos
    })
})

server.post('/produto',(req,res) => {
    let produto = {
        nome:'Nike',
        modelo:'Air Force',
        preco: 1400,
    }
    db.adicionar(produto);
    res.status(201).send(produto)
})


server.get('/produto/:id',(req,res) => {
    let idParam = req.params.id
    let produto = db.listarPorId(idParam)
    return res.status(200).send(produto);
})

server.listen({
    host,
    port   
})
.then(() => console.log(`servidor rodando em http://${host}:${port}`))
.catch(err => console.log('Erro ao Subir o Servidor:',err))