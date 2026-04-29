# Estruturas de Condição em Linguagem C ( IF )

As **estruturas de condição** permitem que um programa tome decisões com base em determinadas condições.

---

## 1. Estrutura `if`

### Sintaxe:
```c
if (condicao) {
    // código executado se a condição for verdadeira
}
```

### Exemplo:
```c
#include <stdio.h>

int main() {
    int idade = 18;

    if (idade >= 18) {
        printf("Maior de idade\n");
    }

    return 0;
}
```

---

## 2. Estrutura `if...else`

### Sintaxe:
```c
if (condicao) {
    // verdadeiro
} else {
    // falso
}
```

### Exemplo:
```c
#include <stdio.h>

int main() {
    int idade = 16;

    if (idade >= 18) {
        printf("Maior de idade\n");
    } else {
        printf("Menor de idade\n");
    }

    return 0;
}
```

---

## 3. Estrutura `if...else if...else`

### Sintaxe:
```c
if (condicao1) {
    // código
} else if (condicao2) {
    // código
} else {
    // código padrão
}
```

### Exemplo:
```c
#include <stdio.h>

int main() {
    int nota = 7;

    if (nota >= 9) {
        printf("Excelente\n");
    } else if (nota >= 7) {
        printf("Aprovado\n");
    } else if (nota >= 5) {
        printf("Recuperação\n");
    } else {
        printf("Reprovado\n");
    }

    return 0;
}
```

---

## 4. Operadores de Comparação

| Operador | Significado |
|----------|------------|
| == | Igual |
| != | Diferente |
| > | Maior |
| < | Menor |
| >= | Maior ou igual |
| <= | Menor ou igual |

---

## 5. Operadores Lógicos

```c
| Operador | Significado | Exemplo |
|----------|------------|--------|
| && | E (AND) | idade >= 18 && idade <= 60 |
| || | OU (OR) | nota >= 7 || trabalho == 10 |
| ! | NÃO (NOT) | !(idade < 18) |
```
### Exemplo:
```c
#include <stdio.h>

int main() {
    int idade = 25;

    if (idade >= 18 && idade <= 60) {
        printf("Idade válida\n");
    }

    return 0;
}
```

---

## 6. Estrutura `switch`

### Sintaxe:
```c
switch (variavel) {
    case valor1:
        // código
        break;
    case valor2:
        // código
        break;
    default:
        // padrão
}
```

### Exemplo:
```c
#include <stdio.h>

int main() {
    int opcao = 2;

    switch (opcao) {
        case 1:
            printf("Opção 1\n");
            break;
        case 2:
            printf("Opção 2\n");
            break;
        default:
            printf("Opção inválida\n");
    }

    return 0;
}
```

---

## Resumo

- `if` → uma decisão  
- `if/else` → duas decisões  
- `if/else if` → várias decisões  
- `switch` → múltiplos valores fixos  

## Atividade: 

### Exercício 1
Faça um Programa que peça dois números e imprima o maior deles.

---

### Exercício 2
Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.

---

### Exercício 3
Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.

- Lembre-se que em C existe a diferença entre letas **maiúsculas e minúsculas** 