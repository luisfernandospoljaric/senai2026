const pedidos = require("../../dados/pedidos.json")

function subotais() {
    pedidos.forEach(p => {
        p.subtotal = p.quantidade * p.preco
    })
}

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(pedidos[pedidos.length - 1].id) + 1 //autoIncrement
    pedidos.push(dados)
    res.status(201).json(dados)
}

const listar = (req, res) => {
    subotais()
    res.json(pedidos)
}

const alterar = (req, res) => { 
    const id = req.params.id
    const dados = req.body

    pedidos.forEach((pedido) => {
        if(pedido.id == id) {
            pedido.cliente_id = dados.cliente_id
            pedido.produto_id = dados.produto_id
            pedido.quantidade = dados.quantidade
            pedido.preco = dados.preco
        }
    });
    res.send("Pedido alterado com sucesso")
}

const excluir = (req, res) => { 
    const id = req.params.id
    
    pedidos.forEach((pedido, indice) => { 
        if(pedido.id == id) {
            pedidos.splice(indice, 1)
        }
    });
    res.send("Pedido excluído com sucesso")
}

module.exports = {
    criar, listar, alterar, excluir
}
