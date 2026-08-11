# Exemplo de Funções:

```javaScript
// As funções é bloco de código criado para executar uma determinada tarefa
function saudacao(){
    console.log("Olá, mundo!!");
}

//Uma função só é executada quando é chamada
saudacao();

function saudacao2(nome){
    console.log("Olá, " + nome)
}

saudacao2("Luis")

```

# Exemplo de funções de média:

```javaScript
function calcularMedia(nota1, nota2){
    let media = (nota1 + nota2)/2
    
    console.log("Média: ", media)
}

calcularMedia(50,20)


function verificarAprovacao(nota){
    if(nota >= 6){
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

let resultado = verificarAprovacao(7);

console.log(resultado);

function verificaAprovacao(nota){
    if(nota >= 6){
        return "Aprovado"
    }

    return "Reprovado"
}

function mostrarResultado(nome, nota){
    let situacao = verificaAprovacao(nota);

    console.log(nome + ": " + situacao);
}

mostrarResultado("Pedro Henrique", 3);

```

# Exercícios de Funções em JavaScript

Lista de exercícios para praticar **funções, parâmetros, `return`, condicionais e funções trabalhando em conjunto**.


## Exercício 1 — Dobro de um número

Crie uma função chamada `dobro()` que receba um número e retorne o dobro dele.

### Exemplos

```javascript
dobro(5);
```

Resultado:

```text
10
```

Outro exemplo:

```javascript
dobro(12);
```

Resultado:

```text
24
```


---

## Exercício 2 — Número positivo, negativo ou zero

Crie uma função chamada `verificarNumero()` que receba um número e retorne:

- `"Positivo"` se for maior que zero;
- `"Negativo"` se for menor que zero;
- `"Zero"` se for igual a zero.

### Exemplos

```javascript
console.log(verificarNumero(10));
console.log(verificarNumero(-5));
console.log(verificarNumero(0));
```

Resultado:

```text
Positivo
Negativo
Zero
```


---

## Exercício 3 — Maior entre dois números

Crie uma função chamada `maiorNumero()` que receba dois números e retorne qual deles é o maior.

### Exemplo

```javascript
console.log(maiorNumero(10, 20));
```

Resultado:

```text
20
```


---

## Exercício 4 — Calculadora de idade

Crie uma função chamada `calcularIdade()` que receba:

- Ano de nascimento;
- Ano atual.

A função deverá retornar a idade da pessoa.

### Exemplo

```javascript
console.log(calcularIdade(2000, 2026));
```

Resultado:

```text
26
```


---

## Exercício 5 — Conversão de temperatura

Crie duas funções:

```text
celsiusParaFahrenheit()
fahrenheitParaCelsius()
```

### Fórmulas

#### Celsius para Fahrenheit

```text
F = C × 1.8 + 32
```

#### Fahrenheit para Celsius

```text
C = (F - 32) / 1.8
```

### Exemplos

```javascript
console.log(celsiusParaFahrenheit(30));
```

Resultado:

```text
86
```

E:

```javascript
console.log(fahrenheitParaCelsius(86));
```

Resultado:

```text
30
```



---

## Exercício 6 — Calculadora de IMC

Crie uma função chamada `calcularIMC()` que receba:

- Peso em quilogramas;
- Altura em metros.

A função deverá calcular e retornar o IMC.

### Fórmula

```text
IMC = peso / (altura × altura)
```

Depois, crie uma segunda função chamada `classificarIMC()`.

Ela deverá retornar:

| IMC | Classificação |
|---|---|
| Menor que 18.5 | Abaixo do peso |
| 18.5 até 24.9 | Peso normal |
| 25 até 29.9 | Sobrepeso |
| 30 ou mais | Obesidade |

### Exemplo

```javascript
let imc = calcularIMC(70, 1.75);

console.log(imc);
console.log(classificarIMC(imc));
```
---


#  Desafio — Sistema de Notas

Crie as seguintes funções:

```text
calcularMedia()
verificarSituacao()
mostrarResultado()
```

## Regras

### `calcularMedia()`

Deve receber três notas e retornar a média.

### `verificarSituacao()`

Deve receber a média e retornar:

| Média | Situação |
|---|---|
| Maior ou igual a 6 | Aprovado |
| Maior ou igual a 4 e menor que 6 | Recuperação |
| Menor que 4 | Reprovado |

### `mostrarResultado()`

Deve receber:

- Nome do aluno;
- Nota 1;
- Nota 2;
- Nota 3.

A função deverá utilizar as outras funções para mostrar o resultado.

### Exemplo de saída

```text
Aluno: João
Média: 7.33
Situação: Aprovado
```

