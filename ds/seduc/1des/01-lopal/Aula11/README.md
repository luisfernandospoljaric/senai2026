# Variáveis, Entrada e Saída em C

## 1. O que são variáveis?

Variáveis são espaços na memória do computador usados para armazenar valores.

Pense nelas como "caixas" com nomes, onde você guarda informações.

---

## 2. Tipos de variáveis em C

Em C, é obrigatório definir o tipo da variável antes de usá-la.

### Principais tipos:

| Tipo   | Descrição                  | Exemplo        |
|--------|--------------------------|----------------|
| int    | Números inteiros          | 10, -5, 200    |
| float  | Números com casas decimais| 3.14, 2.5      |
| char   | Um único caractere        | 'A', 'b'       |

---

## 3. Declaração de variáveis

### Apenas declarando:

```c
int idade;
float altura;
char letra;
```

### Declarando com valor:

```c
int idade = 25;
float altura = 1.75;
char letra = 'L';
```

---

## 4. Entrada de dados (scanf)

A função `scanf()` permite receber dados do usuário.

### Exemplo:

```c
int idade;

printf("Digite sua idade: ");
scanf("%d", &idade);
```

### Especificadores de formato:

| Tipo   | Código |
|--------|--------|
| int    | %d     |
| float  | %f     |
| char   | %c     |

Importante:
- Sempre usar `&` antes da variável (exceto strings, que veremos depois)

---

## 5. Saída de dados (printf)

A função `printf()` exibe informações na tela.

### Exemplo:

```c
printf("Olá, mundo!");
```

### Com variável:

```c
printf("Sua idade é: %d", idade);
```

---

## 🔄 6. Manipulação de variáveis

Podemos realizar operações matemáticas normalmente:

```c
int a = 10;
int b = 5;
int soma;

soma = a + b;
```

### Outros exemplos:

```c
int resultado = (a * b) + 10;
```

---

## 7. Programa completo

```c
#include <stdio.h>

int main() {
    int idade;
    float altura;

    printf("Digite sua idade: ");
    scanf("%d", &idade);

    printf("Digite sua altura: ");
    scanf("%f", &altura);

    printf("\n--- RESULTADO ---\n");
    printf("Idade: %d\n", idade);
    printf("Altura: %.2f\n", altura);

    return 0;
}
```

---

## 8. Erros comuns

- Esquecer `;` no final das linhas  
- Não usar `&` no `scanf`  
- Usar especificador errado (`%d` para float, por exemplo)  
- Confundir aspas:  
  - `"` → textos (strings)  
  - `'` → caractere (char)

---

## Download IDE

Clique no link abaixo para acessar:

[Download IDE](https://drive.google.com/drive/folders/1bpCsFyrE3elYRe_b198ZO0kfH5AQRJlV?usp=sharing)

---
## 9. Exercícios

### Exercício 1
Peça um número inteiro e mostre ele na tela.

```c
#include <stdio.h>

int main() {
    int numero;

    printf("Digite um numero inteiro: ");
    scanf("%d", &numero);

    printf("O numero digitado foi: %d\n", numero);

    return 0;
}
```

---

### Exercício 2
Peça dois números e mostre:
- Soma  
- Subtração  
- Multiplicação  

```c
#include <stdio.h>

int main() {
    int num1, num2;

    printf("Digite o primeiro numero: ");
    scanf("%d", &num1);

    printf("Digite o segundo numero: ");
    scanf("%d", &num2);

    printf("Soma: %d\n", num1 + num2);
    printf("Subtracao: %d\n", num1 - num2);
    printf("Multiplicacao: %d\n", num1 * num2);

    return 0;
}
```
---

### Exercício 3
Peça a idade e mostre:

Você tem X anos!

```c
#include <stdio.h>

int main() {
    int idade;

    printf("Digite sua idade: ");
    scanf("%d", &idade);

    printf("Voce tem %d anos!\n", idade);

    return 0;
}
```

---

### Exercício 4 
Peça:
- Valor de um produto  
- Quantidade  

Calcule e mostre:

Total da compra: R$ XX.XX

```
#include <stdio.h>

int main() {
    float valor;
    int quantidade;
    float total;

    printf("Digite o valor do produto: ");
    scanf("%f", &valor);

    printf("Digite a quantidade: ");
    scanf("%d", &quantidade);

    total = valor * quantidade;

    printf("Total da compra: R$ %.2f\n", total);

    return 0;
}
```

---

## Exercicios dentro de sala:

### Exercicio 1:
Faça um Programa que peça as 4 notas bimestrais e mostre a média.

### Exercicio 2:
Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.

### Exercicio 3:
João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho.

Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente.

João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso.

Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas.

### Exercicio 4: 
Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês.

Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11% para o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê: salário bruto. quanto pagou ao INSS. quanto pagou ao sindicato. o salário líquido. calcule os descontos e o salário líquido, conforme a tabela abaixo:

```
+ Salário Bruto : R$
- IR (11%) : R$
- INSS (8%) : R$
- Sindicato ( 5%) : R$
= Salário Liquido : R$
```

Obs.: Salário Bruto - Descontos = Salário Líquido.

