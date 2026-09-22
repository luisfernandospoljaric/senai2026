function analisarNumeros() {

    // Criamos um array para armazenar os números
    let numeros = [];


    // Pegamos os 5 números digitados
    numeros.push(Number(document.getElementById("numero1").value));
    numeros.push(Number(document.getElementById("numero2").value));
    numeros.push(Number(document.getElementById("numero3").value));
    numeros.push(Number(document.getElementById("numero4").value));
    numeros.push(Number(document.getElementById("numero5").value));


    // Começamos considerando o primeiro número
    // como o maior e o menor
    let maior = numeros[0];
    let menor = numeros[0];


    // Variável para armazenar a soma
    let soma = 0;


    // Contadores
    let pares = 0;
    let impares = 0;


    // Percorre todos os números
    for (let i = 0; i < numeros.length; i++) {

        // Pega o número atual
        let numero = numeros[i];


        // Soma o número
        soma = soma + numero;


        // Verifica se é maior
        if (numero > maior) {

            maior = numero;
        }


        // Verifica se é menor
        if (numero < menor) {

            menor = numero;
        }


        // Verifica se é par
        if (numero % 2 === 0) {

            pares++;

        } else {

            impares++;
        }
    }


    // Calcula a média
    let media = soma / numeros.length;


    // Mostra o resultado
    document.getElementById("resultado").innerHTML =

        "Maior número: " + maior +
        "<br>Menor número: " + menor +
        "<br>Soma: " + soma +
        "<br>Média: " + media.toFixed(2) +
        "<br>Quantidade de pares: " + pares +
        "<br>Quantidade de ímpares: " + impares;
}