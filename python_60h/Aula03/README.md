# Aula03

# Algoritmos

Conjunto de passos lógicos e iterativos para resolução de um problema.

## Problema
Algo que possua uma solução porém não trivial.

## Exemplo de problema
- Escovar os dentes - Não é um problema (Possui solução trivial)
- Tocar a superfície do Sol - Não é um problema (Não possui solução)
- Trocar uma lâmpada - É um problema (Possui solução porém não trivial)

## Exemplo de algoritmo
### Problema: Trocar uma lâmpada (Portugol)
```portugol
0 - Início
1 - Pegar a escada e uma lâmpada nova
2 - Posicionar a escada
3 - Subir na escada
4 - Ajustar a lâmpada e fazer um teste, se acender ir para o passo 6, senão ir para o passo 5
5 - Trocar a lâmpada e ir para o passo 4.
6 - Descer da escada
7 - Guardar a escada e a lampada nova ou descartar a lâmpada queimada
8 - Fim
```

### Desafio: Pérolas e balança
Um joalheiro possui 9 pérolas e uma balançã do tipo prato de dois pratos. Todas as pérolas possuem o mesmo peso, exceto uma que é mais leve. Utilizando a balança, escreva um algoritmo que descura quantas pesagens no mínimo são necessárias para descobrir qual é a pérola mais leve?

## Conhecimentos:
- 1 Lógica e algoritmos
	- 1.1. Definição
	- 1.2. Estruturas
		- 1.2.1.Sequência
		- 1.2.2.Seleção
		- 1.2.3.Repetição



# EXERCICIOS

1 - Faça um Programa que peça dois números e imprima o maior deles.
```c
#include <stdio.h>

int main() {
    int n1, n2;

    printf("Digite o primeiro número: ");
    scanf("%d", &n1);

    printf("Digite o segundo número: ");
    scanf("%d", &n2);

    if (n1 > n2) {
        printf("O maior número é: %d\n", n1);
    } else if (n2 > n1) {
        printf("O maior número é: %d\n", n2);
    } else {
        printf("Os números são iguais.\n");
    }

    return 0;
}
```

2 - Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.
```c
#include <stdio.h>

int main() {
    int valor;

    printf("Digite um número: ");
    scanf("%d", &valor);

    if (valor > 0) {
        printf("O número é positivo.\n");
    } else if (valor < 0) {
        printf("O número é negativo.\n");
    } else {
        printf("O número é zero.\n");
    }

    return 0;
}
```
3 - Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.
```c
#include <stdio.h>

int main() {
    char letra;

    printf("Digite F para Feminino ou M para Masculino: ");
    scanf(" %c", &letra); // espaço antes de %c ignora enter pendente

    if (letra == 'F' || letra == 'f') {
        printf("F - Feminino\n");
    } else if (letra == 'M' || letra == 'm') {
        printf("M - Masculino\n");
    } else {
        printf("Sexo Inválido.\n");
    }

    return 0;
}
```
4 - Faça um Programa que verifique se uma letra digitada é vogal ou consoante.
```c
#include <stdio.h>

int main() {
    char letra;

    printf("Digite uma letra: ");
    scanf(" %c", &letra);

    if (letra == 'a' || letra == 'A' ||
        letra == 'e' || letra == 'E' ||
        letra == 'i' || letra == 'I' ||
        letra == 'o' || letra == 'O' ||
        letra == 'u' || letra == 'U') {
        printf("É uma vogal.\n");
    } else {
        printf("É uma consoante.\n");
    }

    return 0;
}
```
5 - Faça um Programa que leia três números e mostre o maior deles.
```c
#include <stdio.h>

int main() {
    int n1, n2, n3, maior;

    printf("Digite três números: ");
    scanf("%d %d %d", &n1, &n2, &n3);

    maior = n1;

    if (n2 > maior) {
        maior = n2;
    }
    if (n3 > maior) {
        maior = n3;
    }

    printf("O maior número é: %d\n", maior);

    return 0;
}
```
6 - Faça um Programa que leia três números e mostre o maior e o menor deles.
```c
#include <stdio.h>

int main() {
    int n1, n2, n3, maior, menor;

    printf("Digite três números: ");
    scanf("%d %d %d", &n1, &n2, &n3);

    maior = n1;
    menor = n1;

    if (n2 > maior) maior = n2;
    if (n3 > maior) maior = n3;

    if (n2 < menor) menor = n2;
    if (n3 < menor) menor = n3;

    printf("O maior número é: %d\n", maior);
    printf("O menor número é: %d\n", menor);

    return 0;
}
```
7 - Faça um Programa que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.
```c
#include <stdio.h>

int main() {
    int dia;

    printf("Digite um número (1 a 7): ");
    scanf("%d", &dia);

    if (dia == 1) {
        printf("Domingo\n");
    } else if (dia == 2) {
        printf("Segunda-feira\n");
    } else if (dia == 3) {
        printf("Terça-feira\n");
    } else if (dia == 4) {
        printf("Quarta-feira\n");
    } else if (dia == 5) {
        printf("Quinta-feira\n");
    } else if (dia == 6) {
        printf("Sexta-feira\n");
    } else if (dia == 7) {
        printf("Sábado\n");
    } else {
        printf("Valor inválido.\n");
    }

    return 0;
}
```
# Formulário para envio:

https://docs.google.com/forms/d/e/1FAIpQLSe5b-4Aa7qBUPC5GB5sSY84HEmId4PTVL83vRbz9dpRf1I7jA/viewform?usp=sf_link
