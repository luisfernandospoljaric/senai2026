# Aula 03 - Portugol 

Visualg é uma ferramenta para **aprender lógica de programação**, usando comandos em português.
Ele **não é uma linguagem usada no mercado**, mas é excelente pra aprender a pensar como programador.

## Estrutura básica:

Todo algoritmo em Visualg tem essa cara:

```portugol
algoritmo "MeuPrimeiroPrograma"

inicio
   // comandos aqui
fimalgoritmo

```

### Componentes
```
- algoritmo
- inicio
- fimalgoritmo
- //: Comentários
```
--- 
## Declarações de Variáveis:
As variáveis devem ser declaradas antes do bloco ```inicio```.

### Tipos de Variáveis:
```
- inteiro
- real
- caractere
- logico
```

```
var
   idade: inteiro
   nome: caractere
   altura: real

```
---

## Entrada e Saída de Dados:

### Saída:
```
escreva("Olá mundo")
escreval("Mensagem com quebra de linha")

```

Comando **escreval/escreva** serve para digitar uma mensagem ao usuário.

### Entrada de dados:
```
leia(idade)
```
Comando **leia** lê o que o usuário digitou e armazena dentro de uma variável.

---
## Operadores Aritméticos
```
resultado <- a + b
resultado <- a - b
resultado <- a * b
resultado <- a / b
```

A atribuição em Visualg é feita com ```<-```.

---

# Exemplo:
```
algoritmo "Apresentacao"

var
   nome: caractere
   idade: inteiro

inicio
   escreval("Digite seu nome:")
   leia(nome)

   escreval("Digite sua idade:")
   leia(idade)

   escreval("Olá, ", nome, "!")
   escreval("Você tem ", idade, " anos.")
fimalgoritmo
```

## O que o programa está fazendo?
1. Lê o **nome**
2. Lê a **idade**
3. Exibe uma **mensagem personalizada**
---

**Exercício 01**
Faça um Programa que mostre a mensagem "Alo mundo" na tela.

**Exercício 02**
Faça um Programa que peça um número e então mostre a mensagem "O número informado foi [número]".

**Exercício 03**
Faça um Programa que peça dois números e imprima a soma.

**Exercício 04**
Faça um Programa que peça as 4 notas bimestrais e mostre a média.

**Exercício 05**
Faça um Programa que converta metros para centímetros.

**Exercício 06**
Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.

**Exercício 07**
Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.

**Exercício 08**
Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.