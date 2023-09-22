import { randomUUID } from "crypto"

export class DataBaseTemp{

    produtos = []

    adicionar = (produto) => {      
        console.log('Produto_antes',produto)
        
        // Add propriedade com ID Randomico
        produto.id = randomUUID();

        console.log('Produto_depois',produto)
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