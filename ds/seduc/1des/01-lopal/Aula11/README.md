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

---

### Exercício 2
Peça dois números e mostre:
- Soma  
- Subtração  
- Multiplicação  

---

### Exercício 3
Peça a idade e mostre:

Você tem X anos!

---

### Exercício 4 
Peça:
- Valor de um produto  
- Quantidade  

Calcule e mostre:

Total da compra: R$ XX.XX


