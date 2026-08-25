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

.lista {
    margin-top: 30px;
}

ul {
    padding: 0px;
    list-style: none;
}

li {
    display: flex;
    justify-content: space-between;
    background-color: #f5f5f5;
    padding: 12px;
    margin-bottom: 8px;
    border-radius: 5px;
}

.total {
    margin-top: 30px;
    text-align: right;
    border-top: 2px solid #ddd;
    padding-top: 15px;
}

.total p {
    font-size: 24px;
    font-weight: bold;
}

```

## Exercicio - Sitema de Nota

Criar uma página web utilizando **HTML, CSS e JavaScript** para calcular a média de um aluno e informar sua situação.

O exercício deverá ser desenvolvido utilizando três arquivos separados:

```text
projeto/
│
├── index.html
├── style.css
└── script.js
```

---

## Requisitos

A página deverá possuir:

### HTML

Crie:

* Um título escrito **"Sistema de Notas"**;
* Um campo para informar o **nome do aluno**;
* Um campo para informar a **Nota 1**;
* Um campo para informar a **Nota 2**;
* Um botão chamado **"Calcular Média"**;
* Uma área para apresentar o resultado.

---

### JavaScript

Ao clicar no botão **"Calcular Média"**, o programa deverá:

1. Pegar o nome do aluno;
2. Pegar a Nota 1;
3. Pegar a Nota 2;
4. Calcular a média:

```text
média = (nota1 + nota2) / 2
```

5. Exibir o nome do aluno;
6. Exibir a média calculada;
7. Informar a situação do aluno.

---

## Regras da situação

| Média                            | Situação    |
| -------------------------------- | ----------- |
| Maior ou igual a 7               | Aprovado    |
| Maior ou igual a 5 e menor que 7 | Recuperação |
| Menor que 5                      | Reprovado   |

---

## Exemplo

Se o usuário informar:

```text
Aluno: João
Nota 1: 8
Nota 2: 6
```

O resultado deverá ser:

```text
Aluno: João
Média: 7
Situação: Aprovado
```

---

## Validação

O programa deverá verificar se os campos foram preenchidos.

Caso o usuário tente calcular sem preencher os dados, deverá aparecer uma mensagem informando:

```text
Preencha todos os campos!
```

---

## CSS

Utilize CSS para deixar a página organizada.

O aluno deverá:

* Centralizar o conteúdo;
* Criar um fundo para a página;
* Estilizar os campos de entrada;
* Estilizar o botão;
* Utilizar `:hover` no botão;
* Criar uma área visualmente destacada para o resultado.

---

## Desafios extras

Depois de finalizar o exercício, tente implementar:

### Desafio 1

Adicionar um botão **"Limpar"** que apague os campos e o resultado.

### Desafio 2

Adicionar uma terceira nota e calcular a média de três notas.

### Desafio 3

Alterar a cor da situação:

* 🟢 Aprovado;
* 🟡 Recuperação;
* 🔴 Reprovado.

### Desafio 4

Impedir que sejam informadas notas menores que `0` ou maiores que `10`.
