# Atividade 2 - Faça o CSS para a atividade anterior.

---

## Correção da atividade 1

### HTML:
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pedidos - Lanchonete</title>
</head>
<body>
    <form id="formPedido">
        <!--Nome do cliente-->
        <label for="nome">Nome: </label>
        <input type="text" id="nome" required>

        <br><br>

        <!--Escolha do lanche-->
        <label for="lache">Escolha o Lache: </label>
        <select id="lanche" required>
            <option value="">Selecione</option>
            <option value="15">Hamburguer - R$15,00</option>
            <option value="18">X-salada - R$18,00</option>
            <option value="22">X-bacon - R$22,00</option>
        </select>

        <br><br>

        <label for="quantidade">Quantidade: </label>
        <input type="number" id="quantidade" min="1" value="1" required>

        <br><br>

        <label for="bebida">Escolha a Bebida: </label>
        <select id="bebida" required>
            <option value="0">Nenhuma - R$0,00</option>
            <option value="6">Refigerante - R$6,00</option>
            <option value="7">Suco - R$7,00</option>
        </select>

        <br><br>

        <button type="submit">Finalizar Pedido</button>
    </form>

    <hr>

    <div id="resultado"></div>

    <script src="script.js"></script>
</body>
</html>
```

### Javascript
```
// Pagamos o formulário pelo ID
const formulario = document.getElementById("formPedido");

//Adicionando um evento ao formulário
//o evento acontece quando o usuário clicar em "finalizar pedido"
formulario.addEventListener("submit", function(event){
    //Impedir que a página seja recarregada
    event.preventDefault();

    //Pegando os dados digitados pelo usuário
    const nome = document.getElementById("nome").value;

    //pegando o preço do lanche selecionado
    //O value padrão o option é um String
    //Temos que converter para Number() para virar um número
    const precoLanche = Number(document.getElementById("lanche").value);
    
    //pegando a quantidade
    const quantidade = Number(document.getElementById("quantidade").value);

    //pegando o preço da bebida
    const precoBebida = Number(document.getElementById("bebida").value);

    //Calculando o preço do pedido

    const totalLanche = precoLanche * quantidade;

    //Calculando o preço dos lanches + bebida
    const subtotal = totalLanche + precoBebida;

    //Verificando se tem desconto
    //iniciando uma variavel chamada desconto com ZERO;
    let desconto = 0;

    //Verificando se o subtotal é maior OU igual a 50
    if (subtotal >= 50){
        desconto = subtotal * 0.10;
    }

    //subtraindo o valor do desconto e calculando o valor total do pedido
    const total = subtotal - desconto;

    //Monstrando o resultado

    //pegando a div onde o resultado será mostrado;
    const resultado = document.getElementById("resultado");

    //Colocando informações dentro da DIV
    resultado.innerHTML =  `
        <h2>Pedido realizado</h2>

        <p><strong>Cliente: </strong> ${nome}</p>

        <p><strong>Quantidade de lanches: </strong> R$: ${subtotal.toFixed(2)} </p>

        <p><strong>Desconto: </strong> R$ ${desconto.toFixed(2)} </p>

        <h3> Total: R$ ${total.toFixed(2)}</h3>
    `;
});
```