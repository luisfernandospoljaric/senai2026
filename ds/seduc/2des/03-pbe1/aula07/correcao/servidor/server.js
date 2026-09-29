const express = require("express");
const inventario = require("../inventario.json")

//Mostrar todos os resultados:
const mostrarItens = (req, res) => {
    res.send(inventario)
};

const mostrarItem = (req, res) => {
    const id = req.params.id;

    let encontrou = false;

    inventario.forEach((item) => {
        if (item.id == id){
            res.send(item)
            encontrou = true
        }
    });

    if (!encontrou){
        res.status(404).send("Item não encontrado");
    }
};

const alterarPedido = (req, res) => {
    const id = req.params.id;
    const dados = req.body;

    inventario.forEach((item) => {
        if(item.id == id){
            item.item = dados.item;
            item.local = dados.local;
            item.dataRegistro = dados.dataRegistro;
            item.valor = dados.valor;
            item.patrimonio = dados.patrimonio;
        }
    });

    res.send("Item atualizado com sucesso!")
}

const excluirItem = (req, res) => {
    const id = req.params.id;

    inventario.forEach((item, indice) => {
        if(item.id == id){
            inventario.splice(indice, 1)
        }
    });

    res.send("Item Excluido com sucesso");
}

const novoItem = (req, res) => {
    if(req.body){
        const novoId = inventario.length + 1;

        req.body.id = novoId;

        inventario.push(req.body);

        res.send("Item cadastrado com Sucesso!!")
    } else {
        res.send("Erro ao cadastrar.")
    }
}

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const porta = 3000;

//ROTAS
app.get("/", mostrarItens);
app.get("/:id", mostrarItem);
app.put("/:id", alterarPedido);
app.delete("/:id", excluirItem);
app.post("/", novoItem);

app.listen(porta, () => {
    console.log(`Servidor: http://127.0.0.1:${porta}`);
})