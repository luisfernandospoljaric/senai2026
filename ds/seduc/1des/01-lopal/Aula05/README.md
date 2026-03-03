
# Tabela Verdade em Programação

## O que é Tabela Verdade?

A **tabela verdade** é uma ferramenta usada na lógica matemática e na programação para representar todas as possíveis combinações de valores lógicos de uma expressão.

Em programação, trabalhamos com valores do tipo **lógico (booleano)**:

- `Verdadeiro (V)`
- `Falso (F)`

Esses valores são muito utilizados em **estruturas de decisão**, como:

se (condição) então
---

## Principais Operadores Lógicos

| Operador | Nome        | Símbolo em Portugol | Significado |
|-----------|------------|--------------------|--------------|
| E         | AND        | `e`                | Verdadeiro apenas se ambas forem verdadeiras |
| OU        | OR         | `ou`               | Verdadeiro se pelo menos uma for verdadeira |
| NÃO       | NOT        | `nao`              | Inverte o valor lógico |

---

# Tabelas Verdade

##  Operador E (AND)

A condição só será verdadeira se **as duas forem verdadeiras**.

| A | B | A e B |
|---|---|-------|
| V | V | V     |
| V | F | F     |
| F | V | F     |
| F | F | F     |

---

## Operador OU (OR)

A condição será verdadeira se **pelo menos uma for verdadeira**.

| A | B | A ou B |
|---|---|--------|
| V | V | V      |
| V | F | V      |
| F | V | V      |
| F | F | F      |

---

## Operador NÃO (NOT)

Inverte o valor lógico.

| A | nao A |
|---|-------|
| V | F     |
| F | V     |

---

# Exemplo Prático em Portugol

```portugol
algoritmo "exemplo_tabela"

var
   idade: inteiro
   temCarteira: logico

inicio
   escreva("Digite sua idade: ")
   leia(idade)

   escreva("Possui carteira? (V/F): ")
   leia(temCarteira)

   se (idade >= 18 e temCarteira = verdadeiro) entao
      escreva("Pode dirigir.")
   senao
      escreva("Não pode dirigir.")
   fimse

fimalgoritmo
``` 

# Exercícios -- Tabela Verdade e Condições em Portugol

## Exercício 1 -- Número Positivo

Peça um número ao usuário e informe se ele é **positivo ou negativo**.

------------------------------------------------------------------------

## Exercício 2 -- Par ou Ímpar

Peça um número inteiro e informe se ele é **par ou ímpar**.

------------------------------------------------------------------------

## Exercício 3 -- Acesso ao Sistema

Peça: - Usuário - Senha

Se o usuário for `"admin"` **e** a senha for `"1234"`, exiba:

Acesso permitido

Caso contrário:

Acesso negado

------------------------------------------------------------------------

## Exercício 4 -- Aprovação do Aluno

Peça: - Nota - Frequência

O aluno será aprovado se:

-   Nota \>= 6 **e**
-   Frequência \>= 75

Caso contrário, reprovado.

------------------------------------------------------------------------

## Exercício 5 -- Pode Votar?

Peça a idade da pessoa e informe:

-   Se idade \>= 18 → "Voto obrigatório"
-   Se idade \>= 16 e \< 18 → "Voto facultativo"
-   Caso contrário → "Não pode votar"

------------------------------------------------------------------------

# Desafio Extra

Crie um programa que peça três números e informe qual é o maior deles
usando apenas estruturas de decisão.
