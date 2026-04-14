## O que é uma Matriz?

Uma **matriz** é uma estrutura de dados que armazena informações em forma de **tabela**, organizada em:

- Linhas
- Colunas

Diferente do vetor, a matriz possui **duas dimensões**.

---

## Declaração no Visualg

```portugol
var
   matriz: vetor[1..3, 1..3] de inteiro
```

---

## Percorrendo a Matriz

Utilizamos dois laços:

```portugol
para i de 1 ate 3 faca
   para j de 1 ate 3 faca
      escreva(matriz[i,j])
   fimpara
fimpara
```

---

## Exemplo Completo

```portugol
algoritmo "matriz_exemplo"

var
   m: vetor[1..2,1..2] de inteiro
   i, j: inteiro

inicio

para i de 1 ate 2 faca
   para j de 1 ate 2 faca
      escreva("Digite um valor: ")
      leia(m[i,j])
   fimpara
fimpara

para i de 1 ate 2 faca
   para j de 1 ate 2 faca
      escreva(m[i,j], " ")
   fimpara
   escreval("")
fimpara

fimalgoritmo
```

---

## Diagonais

- Diagonal principal: i = j
- Diagonal secundária: i + j = tamanho + 1

---

## Resumo

- Matriz = 2 dimensões
- Acesso: m[i,j]
- Usa dois laços

---

## Exercício 1 

Leia uma matriz 2x2 e mostre todos os valores.

## Exercício 2

Leia uma matriz 2x2 e mostre a soma de todos os elementos.

## Exercício 3

Leia uma matriz 3x3 e mostre apenas a diagonal principal.

## Exercício 4 

Leia uma matriz 3x3 e conte quantos números são maiores que 10.

---
## Formulário de entrega:

https://forms.cloud.microsoft/r/YBvnkmWRmq