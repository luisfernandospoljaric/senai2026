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

1 - Somatório de Números: Escreva um programa que peça ao usuário 5 números e calcule a soma deles.
```c
#include <stdio.h>

int main() {
    int i, num, soma = 0;

    for (i = 1; i <= 5; i++) {
        printf("Digite o %dº número: ", i);
        scanf("%d", &num);
        soma += num;
    }

    printf("A soma dos números é: %d\n", soma);
    return 0;
}

```
2 - Tabuada: Escreva um programa que pede um número e imprime a tabuada desse número de 1 a 10.
```c
#include <stdio.h>

int main() {
    int num, i;

    printf("Digite um número para ver a tabuada: ");
    scanf("%d", &num);

    for (i = 1; i <= 10; i++) {
        printf("%d x %d = %d\n", num, i, num * i);
    }

    return 0;
}

```

3 -  Validação de Entrada: Crie um programa que continue pedindo um número positivo ao usuário até que ele insira um número negativo.
```c
#include <stdio.h>

int main() {
    int num;

    printf("Digite um número positivo (negativo para sair): ");
    scanf("%d", &num);

    while (num >= 0) {
        printf("Você digitou: %d\n", num);
        printf("Digite outro número positivo (negativo para sair): ");
        scanf("%d", &num);
    }

    printf("Programa encerrado.\n");
    return 0;
}
```

4 - Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.
```c
#include <stdio.h>

int main() {
    int nota;

    do {
        printf("Digite uma nota entre 0 e 10: ");
        scanf("%d", &nota);

        if (nota < 0 || nota > 10) {
            printf("Valor inválido! Tente novamente.\n");
        }

    } while (nota < 0 || nota > 10);

    printf("Nota válida: %d\n", nota);
    return 0;
}

```
5 - Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois modifique o programa para que ele mostre os números um ao lado do outro.
```c

#include <stdio.h>

int main() {
    int i;

    for (i = 1; i <= 20; i++) {
        printf("%d\n", i);
    }

    return 0;
}
```
6 - Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.
```c
#include <stdio.h>

int main() {
    int i;

    for (i = 1; i <= 50; i++) {
        if (i % 2 != 0) {
            printf("%d ", i);
        }
    }

    printf("\n");
    return 0;
}

```

# Formulário de entrega
https://docs.google.com/forms/d/e/1FAIpQLSdgq_7JTy500LHL4gGCx7SNRDWtBv8UY7XpcksBnUdF5mB82g/viewform?usp=sf_link
