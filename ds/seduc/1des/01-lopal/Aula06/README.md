# Atividade

1. Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escreva: F - Feminino, M - Masculino, Sexo Inválido.
```portugol
Var
// Seção de Declarações das variáveis 
sexo: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

   escreva("Digite F para Feminino ou M para Masculino: ")
   leia(sexo)

   se (sexo = "F") ou (sexo = "f") entao
      escreval("F - Feminino")
   senao
      se (sexo = "M") ou (sexo = "m") entao
         escreval("M - Masculino")
      senao
         escreval("Sexo Inválido")
      fimse
   fimse

Fimalgoritmo
```

2. Faça um Programa que verifique se uma letra digitada é vogal ou consoante.
```portugol
Var
// Seção de Declarações das variáveis 
  letra: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva("Digite uma letra: ")
   leia(letra)

   se (letra = "a") ou (letra = "e") ou (letra = "i") ou (letra = "o") ou (letra = "u") ou
      (letra = "A") ou (letra = "E") ou (letra = "I") ou (letra = "O") ou (letra = "U") entao

      escreval("A letra digitada é uma VOGAL")

   senao
      escreval("A letra digitada é uma CONSOANTE")

   fimse

Fimalgoritmo
```

3. Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar: A mensagem "Aprovado", se a média alcançada for maior ou igual a sete; A mensagem "Reprovado", se a média for menor do que sete; A mensagem "Aprovado com Distinção", se a média for igual a dez.

```portugol
Var
// Seção de Declarações das variáveis 
   nota1, nota2, media: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva("Digite a primeira nota: ")
   leia(nota1)

   escreva("Digite a segunda nota: ")
   leia(nota2)

   media <- (nota1 + nota2) / 2

   escreval("Média: ", media)

   se (media = 10) entao
      escreval("Aprovado com Distinção")
   senao
      se (media >= 7) entao
         escreval("Aprovado")
      senao
         escreval("Reprovado")
      fimse
   fimse

Fimalgoritmo
```
4. Faça um Programa que leia três números e mostre o maior e o menor deles.

```portugol
Var
// Seção de Declarações das variáveis 
n1, n2, n3: real
maior, menor: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
 escreva("Digite o primeiro número: ")
   leia(n1)

   escreva("Digite o segundo número: ")
   leia(n2)

   escreva("Digite o terceiro número: ")
   leia(n3)

   // Inicializando maior e menor
   maior <- n1
   menor <- n1

   // Verificando o maior
   se (n2 > maior) entao
      maior <- n2
   fimse

   se (n3 > maior) entao
      maior <- n3
   fimse

   // Verificando o menor
   se (n2 < menor) entao
      menor <- n2
   fimse

   se (n3 < menor) entao
      menor <- n3
   fimse

   escreval("Maior número: ", maior)
   escreval("Menor número: ", menor)

fimalgoritmo
```

5. Faça um Programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno.
Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.

```portugol
Var
// Seção de Declarações das variáveis 
 turno: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreva("Digite o turno que você estuda (M-Matutino, V-Vespertino, N-Noturno): ")
   leia(turno)

   se (turno = "M") ou (turno = "m") entao
      escreval("Bom Dia!")
   senao
      se (turno = "V") ou (turno = "v") entao
         escreval("Boa Tarde!")
      senao
         se (turno = "N") ou (turno = "n") entao
            escreval("Boa Noite!")
         senao
            escreval("Valor Inválido!")
         fimse
      fimse
   fimse

Fimalgoritmo
```

## Link para enviar as atividades

https://forms.gle/LSs6NkXpXBko7FVV7