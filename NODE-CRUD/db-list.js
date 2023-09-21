import { randomUUID } from "crypto"

export class DataBaseTemp{

    produtos = []

    adicionar = (produto) => {      
        console.log('Produto',produto)
        return this.produtos.push(produto)
    }

    listarTodos = () => {
       return this.produtos;
    }
    
    atualizar = () => {

    }

    excluir = () => {

    }

}