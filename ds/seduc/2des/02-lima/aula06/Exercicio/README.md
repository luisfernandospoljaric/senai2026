# HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Notas</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main class="container">
        <h1>Sistema de Notas</h1>

        <div class="formulario">
            <label for="nome">Nome do Aluno: </label>
            <input type="text" id="nome" placeholder="Digite o nome do aluno">

            <label for="nota1">Nota 1: </label>
            <input type="number" id="nota1" min="0" max="10" placeholder="Digite a primeira nota">

            <label for="nota2">Nota 2: </label>
            <input type="number" id="nota2" min="0" max="10" placeholder="Digite a segunda nota">

            <label for="nota3">Nota 3: </label>
            <input type="number" id="nota3" min="0" max="10" placeholder="Digite a terceira nota">


            <div class="botao">
                <button id="btnCalcular">Calcular Média</button>
                <button id="btnLimpar">Limpar</button>
            </div>
        </div>

        <section id="resultado" class="resultado">
            <h2>Resultados</h2>

            <p id="nomeResultado"></p>
            <p id="mediaResultado"></p>
            <p id="situacaoResultado"></p>
        </section>

    </main>
    <script src="script.js"></script>
</body>
</html>
```

# CSS

```css
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100vh;
}

.container {
    width: 420px;
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    margin-bottom: 25px;
}

.formulario {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

label {
    font-weight: bold;
}

input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 16px;
}

input:focus {
    outline: none;
    border-color: #007bff;
}

.botoes {
    display: flex;
    gap: 10px;
    margin-top: 10px;
}

button {
    flex: 1;
    padding: 12px;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 16px;
    cursor: pointer;
}

#btnCalcular {
    background-color: #007bff;
}

#btnCalcular.hover {
    background-color: #0056ff;
}

#btnLimpar{
    background-color: #007bff;
}

#btnLimpar.hover {
    background-color: #0056ff;
}

.resultado {
    margin-top: 25px;
    padding: 15px;
    background-color: #f5f5f5;
    border-radius: 5px;
    text-align: center;
}

.resultado h2 {
    margin-top: 0;
}

.resultado p {
    font-size: 18px;
}

.aprovado {
    color: green;
    font-weight: bold;
}

.recuperacao {
    color: orange;
    font-weight: bold;
}

.reprovado {
    color: red;
    font-weight: bold;
}
```

# JS

```javaScript
//pegando os input
const nome = document.getElementById("nome");
const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const nota3 = document.getElementById("nota3");

//pegando o botão
const btnCalcular = document.getElementById("btnCalcular");
const btnLimpar = document.getElementById("btnLimpar");

//pegando os paragráfos de resultado
const nomeResultado = document.getElementById("nomeResultado");
const mediaResultado = document.getElementById("mediaResultado");
const situacaoResultado = document.getElementById("situacaoResultado");

btnCalcular.addEventListener("click", function(){
    //pegando os valores dos campos
    const nomeAluno = nome.value;
    const valorNota1 = parseFloat(nota1.value);
    const valorNota2 = parseFloat(nota2.value);
    const valorNota3 = parseFloat(nota3.value);

    // Validação dos Dados
    if (nomeAluno === ""){
        alert("Digite o nome do aluno");

        return;
    }

    if(isNaN(valorNota1) || isNaN(valorNota2) || isNaN(valorNota3)){
        alert("Preencha todas as notas!");

        return;
    }

    if (valorNota1 < 0 || valorNota1 > 10 ||
        valorNota2 < 0 || valorNota2 > 10 ||
        valorNota3 < 0 || valorNota3 > 10 ){
            alert("As notas devem ser entre 0 e 10 !");
    }

    const media = (valorNota1 + valorNota2 + valorNota3)/3;

    let situacao;
    let classeSituacao;

    if(media >= 7){
        situacao = "Aprovado!"
        classeSituacao = "aprovado"
    } else if (media >= 5 ){
        situacao = "Recuperação!"
        classeSituacao = "recuperacao"
    } else {
        situacao = "Reprovado!"
        classeSituacao = "reprovado"
    }

    //Mostrar os Resultados
    nomeResultado.textContent = `Aluno: ${nomeAluno}`;

    mediaResultado.textContent = `Média: ${media.toFixed(2)}`;

    situacaoResultado.textContent = `Situação: ${situacao}`;

    situacaoResultado.className = classeSituacao;

});

btnLimpar.addEventListener("click", function(){
    
    nome.value = "";
    nota1.value = "";
    nota2.value = "";
    nota3.value = ""

    nomeResultado.textContent = "";
    mediaResultado.textContent = "";
    situacaoResultado.textContent = "";

});
```