# HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo 2</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Calculadora de soma!</h1>

    <label for="numero1">Primeiro Número: </label>
    <input type="number" id="n1">

    <br><br>

    <label for="numero2">Segundo Número: </label>
    <input type="number" id="n2">

    <br><br>

    <button onclick="somar()">Somar</button>
    <button onclick="subtrair()">Subtrair</button>
    <button onclick="multiplicar()">Multiplicar</button>
    <button onclick="divisao()">Dividir</button>

    <p id="resultado"></p>

    <script src="script.js"></script>
</body>
</html>
```

# JavaScript

```javaScript
function somar(){

    //Encontrando o elemento pelo ID e pegando o valor digitado
    const numero1 = Number(document.getElementById("n1").value);
    // Pegamos o segundo input
    const numero2 = Number(document.getElementById("n2").value);

    // Fazemos a soma
    const resultado = numero1 + numero2;

    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}

function subtrair(){
    const numero1 = Number(document.getElementById("n1").value);
    const numero2 = Number(document.getElementById("n2").value);

    const resultado = numero1 - numero2;

    document.getElementById("resultado").textContent = "Resultado: " + resultado.toFixed(2);
}

function multiplicar(){
    const numero1 = Number(document.getElementById("n1").value);
    const numero2 = Number(document.getElementById("n2").value);

    const resultado = numero1 * numero2;

    document.getElementById("resultado").textContent = "Resultado: " + resultado.toFixed(2);
}

function divisao(){
    const numero1 = Number(document.getElementById("n1").value);
    const numero2 = Number(document.getElementById("n2").value);

    if (numero2 === 0){
        document.getElementById("resultado").textContent = 
            "Não existe divisão por zero";
        
        return;
    }

    const resultado = numero1 / numero2;

    document.getElementById("resultado").textContent = 
        "Resultado: " + resultado.toFixed(2);
}
```

# CSS
```css
/* vou remover as margens padrões do navegador e trocar a fonte */
/* removendo as configurações básicas */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f2f2f2;

    /*Vou centralizar a minha calculadora */
    display: flex;
    justify-content: center;
    align-items: center;

    /*meu elemento tem PELO MENOS a altura total da tela*/
    min-height: 100vh;
}

/* Para chamar uma classe, coloque um ponto e o nome dela  */
.container {
    background-color: white;
    width: 350px;
    padding: 30px;

    border-radius: 10px;

    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

h1 {
    text-align: center;
    margin-bottom: 25px;
}

label {
    display: block;
    padding: 5px;
    /*Fonte em negrito*/
    font-weight: bold;
}

input {
    width: 100%;
    padding: 10px;  
    
    border: 1px solid #ccc;
    border-radius: 5px;

    font-size: 16px;
}

.botoes {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 20px;
}

/*botões*/
button {
    padding: 12px;
    border: none;
    border-radius: 5px;
    background-color: rgb(158, 173, 202);
    color: white;
    font-size: 16px;

    cursor: pointer;
}

button:hover{
    background-color: #0056b3;
}

/* fazendo css pelo ID */
#resultado {
    margin-top: 25px;
    text-align: center;
    font-size: 20px;
}
```