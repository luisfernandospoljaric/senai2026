# Aula 06 - HTML + CSS + JavaScript

Aula demonstrativa + atividade.

## HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Compras</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main class="container">
        <h1>Lista de Compras</h1>

        <section class="formulario">
            <div>
                <label for="produto">Produto</label>
                <input type="text" id="produto" placeholder="Ex: Arroz">
            </div>

            <div>
                <label for="preco">Preço</label>
                <input type="number" id="preco" placeholder="Ex: 25.90">
            </div>

            <div>
                <label for="quantidade">Quantidade</label>
                <input type="number" id="quantidade" value="1" min="1">
            </div>

            <button id="btnAdicionar">Adicionar produto</button>
        </section>

        <section class="lista">
            <h2>Produtos</h2>

            <ul id="listaProdutos">
                <!--Os produtos aparecerão aqui-->
            </ul>
        </section>

        <section class="total">
            <h2>Total da Compra</h2>

            <p id="total">R$ 0,00</p>
        </section>

    </main>
    
    <script src="script.js"></script>
</body>
</html>
```
---
## JavaScript

```javascript
//Pegando os elementos do HTML
const produto = document.getElementById("produto");
const preco = document.getElementById("preco");
const quantidade = document.getElementById("quantidade");

const botao = document.getElementById("btnAdicionar");

const listaProdutos = document.getElementById("listaProdutos");

const total = document.getElementById("total");

//Variavel que armazena o valor total
let valorTotal = 0;

//Evento do Botão
botao.addEventListener("click", function(){

    //Pegando os valores digitados
    const nomeProduto = produto.value;

    const valorProduto = parseFloat(preco.value);

    const qtd = parseInt(quantidade.value);

    //Verificando se os campos foram preenchidos
    if (nomeProduto === "" || isNaN(valorProduto) || isNaN(qtd)){
        alert("Preencha todos os campos!");

        return;
    }

    //calculando o valor do produto
    const subtotal = valorProduto * qtd;

    // somando ao total
    valorTotal = valorTotal + subtotal

    //Criando um novo elemento <li>
    const item = document.createElement("li")

    //Colocando informações dentro do <li>
    item.textContent = `${nomeProduto} - ${qtd} - R$ ${subtotal.toFixed(2)}`;

    //adicionando o item na lista
    listaProdutos.appendChild(item);

    //atualizando o Total
    total.textContent = `R$ ${valorTotal.toFixed(2)}`;

    //limpando os campos
    produto.value = "";
    preco.value = "";
    quantidade.value = 1;
});

```
---

## CSS

```css
* {
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f2f2f2;
    margin: 0;
    padding: 30px;
}

.container {
    max-width: 700px; /*largura máxima*/
    margin: auto;
    background-color: white;
    padding: 30px;
    border-radius: 10px;
}

h1 {
    text-align: center;
    margin-bottom: 30px;
}

.formulario {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
}

.formulario div {
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 5px;
    font-weight: bold;
}

input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

button {
    grid-column: 1 / 3;
    padding: 12px;
    background-color: #3998ff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}

button:hover{
    background-color: #0056b3;
}

```