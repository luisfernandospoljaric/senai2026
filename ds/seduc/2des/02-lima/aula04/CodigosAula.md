# HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo 2</title>
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