# Manipulação de Arquivos em C — Básico para Iniciantes

## O que é Manipulação de Arquivos?

Manipulação de arquivos é a capacidade de um programa **salvar informações em um arquivo** ou **ler informações já existentes**.

Por exemplo:

- Salvar nomes de alunos
- Salvar notas
- Criar relatórios
- Ler dados cadastrados anteriormente

Sem arquivos, os dados são perdidos quando o programa é fechado.

---

# Biblioteca Necessária

Para trabalhar com arquivos em C, utilizamos:

```c
#include <stdio.h>
```

---

# Criando uma Variável de Arquivo

Em C, utilizamos o tipo `FILE`.

```c
FILE *arquivo;
```

Essa variável será responsável por controlar o arquivo.

---

# Abrindo um Arquivo

Utilizamos a função:

```c
fopen()
```

Exemplo:

```c
FILE *arquivo;

arquivo = fopen("dados.txt", "w");
```

### Significado dos parâmetros

```c
fopen("dados.txt", "w");
```

- `"dados.txt"` → nome do arquivo
- `"w"` → modo de escrita

---

# Modos Mais Utilizados

| Modo | Função |
|--------|---------|
| r | Ler arquivo |
| w | Escrever arquivo |
| a | Adicionar conteúdo ao final |

---

# Escrevendo em um Arquivo

Utilizamos a função `fprintf()`.

Exemplo:

```c
#include <stdio.h>

int main()
{
    FILE *arquivo;

    arquivo = fopen("dados.txt", "w");

    fprintf(arquivo, "Ola Mundo!");

    fclose(arquivo);

    return 0;
}
```

Após executar o programa, será criado um arquivo chamado:

```txt
dados.txt
```

Com o conteúdo:

```txt
Ola Mundo!
```

---

# Fechando o Arquivo

Sempre que terminar de usar um arquivo:

```c
fclose(arquivo);
```

Isso evita erros e perda de dados.

---

# Lendo um Arquivo

Para ler uma linha utilizamos:

```c
fgets()
```

Exemplo:

```c
#include <stdio.h>

int main()
{
    FILE *arquivo;
    char texto[100];

    arquivo = fopen("dados.txt", "r");

    fgets(texto, 100, arquivo);

    printf("%s", texto);

    fclose(arquivo);

    return 0;
}
```

Saída:

```txt
Ola Mundo!
```

---

# Verificando se o Arquivo Foi Aberto

É uma boa prática verificar se o arquivo existe.

```c
if (arquivo == NULL)
{
    printf("Erro ao abrir o arquivo!");
}
```

Exemplo:

```c
arquivo = fopen("dados.txt", "r");

if (arquivo == NULL)
{
    printf("Arquivo nao encontrado!");
    return 1;
}
```

---

# Exemplo Completo: Salvar Nome

```c
#include <stdio.h>

int main()
{
    FILE *arquivo;
    char nome[50];

    printf("Digite seu nome: ");
    scanf("%s", nome);

    arquivo = fopen("nome.txt", "w");

    fprintf(arquivo, "%s", nome);

    fclose(arquivo);

    printf("Nome salvo com sucesso!");

    return 0;
}
```

---

# Exemplo Completo: Ler Nome

```c
#include <stdio.h>

int main()
{
    FILE *arquivo;
    char nome[50];

    arquivo = fopen("nome.txt", "r");

    fgets(nome, 50, arquivo);

    printf("Nome lido: %s", nome);

    fclose(arquivo);

    return 0;
}
```

---

# Fluxo Básico da Manipulação de Arquivos

```txt
1. Declarar FILE *
        ↓
2. Abrir com fopen()
        ↓
3. Ler ou escrever
        ↓
4. Fechar com fclose()
```

---

# Exercício 1

Crie um programa que:

1. Peça ao usuário uma cidade.
2. Salve a cidade em um arquivo chamado `cidade.txt`.

Exemplo:

```txt
Digite uma cidade: Campinas
```

Arquivo:

```txt
Campinas
```

---

# Exercício 2

Crie um programa que:

1. Leia o arquivo `cidade.txt`.
2. Mostre a cidade na tela.

---

# Exercício 3

Crie um programa que:

1. Solicite três nomes.
2. Grave cada nome em uma linha do arquivo `alunos.txt`.

Exemplo do arquivo:

```txt
Maria
João
Pedro
```

---

# Resumo

As funções básicas que você precisa aprender no início são:

| Função | Utilidade |
|----------|-----------|
| `fopen()` | Abrir arquivo |
| `fprintf()` | Escrever no arquivo |
| `fgets()` | Ler do arquivo |
| `fclose()` | Fechar arquivo |

Se você dominar essas quatro funções, já conseguirá criar pequenos sistemas que salvam e recuperam informações em arquivos.
