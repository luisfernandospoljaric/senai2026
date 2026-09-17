# Aula de Revisão – Excel

## Funções básicas

Nesta aula vamos revisar algumas das principais funções do Excel:

* SOMA
* MÉDIA
* MÁXIMO
* MÍNIMO
* SE

---

## 1. SOMA

### O que faz?

A função **SOMA** adiciona vários valores.

### Quando usar?

Use quando precisar descobrir o **total** de vários números.

### Sintaxe

```excel
=SOMA(intervalo)
```

### Exemplo

Imagine a seguinte tabela:

| Valor |
| ----: |
|    10 |
|    20 |
|    30 |

Para somar os valores:

```excel
=SOMA(A2:A4)
```

**Resultado:**

```text
60
```

---

## 2. MÉDIA

### O que faz?

A função **MÉDIA** calcula a média dos valores.

### Quando usar?

Use quando quiser descobrir a média de:

* Notas
* Vendas
* Preços
* Salários
* Temperaturas

### Sintaxe

```excel
=MÉDIA(intervalo)
```

### Exemplo

| Nota |
| ---: |
|    6 |
|    8 |
|   10 |

Fórmula:

```excel
=MÉDIA(A2:A4)
```

**Resultado:**

```text
8
```

---

## 3. MÁXIMO

### O que faz?

A função **MÁXIMO** encontra o maior valor dentro de um intervalo.

### Quando usar?

Use quando precisar descobrir:

* Maior nota
* Maior salário
* Maior venda
* Maior preço

### Sintaxe

```excel
=MÁXIMO(intervalo)
```

### Exemplo

| Valor |
| ----: |
|    10 |
|    50 |
|    30 |
|    80 |
|    20 |

Fórmula:

```excel
=MÁXIMO(A2:A6)
```

**Resultado:**

```text
80
```

---

## 4. MÍNIMO

### O que faz?

A função **MÍNIMO** encontra o menor valor dentro de um intervalo.

### Quando usar?

Use quando precisar descobrir:

* Menor nota
* Menor salário
* Menor venda
* Menor preço

### Sintaxe

```excel
=MÍNIMO(intervalo)
```

### Exemplo

| Valor |
| ----: |
|    10 |
|    50 |
|    30 |
|    80 |
|    20 |

Fórmula:

```excel
=MÍNIMO(A2:A6)
```

**Resultado:**

```text
10
```

---

## 5. SE

### O que faz?

A função **SE** verifica uma condição e apresenta um resultado dependendo da resposta.

Podemos pensar da seguinte forma:

> SE uma condição for verdadeira, faça uma coisa.
> SENÃO, faça outra.

### Quando usar?

Use quando precisar tomar uma **decisão** com base em um valor.

Por exemplo:

* Aprovado ou Reprovado
* Sim ou Não
* Dentro ou Fora da meta
* Maior ou Menor
* Pago ou Pendente

### Sintaxe

```excel
=SE(condição;resultado_se_verdadeiro;resultado_se_falso)
```

### Exemplo

Imagine que a célula `A1` tenha a nota:

```text
7
```

Queremos verificar se o aluno foi aprovado.

```excel
=SE(A1>=6;"Aprovado";"Reprovado")
```

**Resultado:**

```text
Aprovado
```

Se a nota fosse `5`, o resultado seria:

```text
Reprovado
```

---

# Resumo das funções

| Função   | O que faz              | Exemplo                             |
| -------- | ---------------------- | ----------------------------------- |
| `SOMA`   | Soma valores           | `=SOMA(A1:A5)`                      |
| `MÉDIA`  | Calcula a média        | `=MÉDIA(A1:A5)`                     |
| `MÁXIMO` | Encontra o maior valor | `=MÁXIMO(A1:A5)`                    |
| `MÍNIMO` | Encontra o menor valor | `=MÍNIMO(A1:A5)`                    |
| `SE`     | Verifica uma condição  | `=SE(A1>=6;"Aprovado";"Reprovado")` |

---

# Como memorizar?

Uma forma simples de lembrar:

```text
SOMA   → TOTAL
MÉDIA  → MÉDIA
MÁXIMO → MAIOR
MÍNIMO → MENOR
SE     → CONDIÇÃO / DECISÃO
```

---

# Conclusão

As funções estudadas são algumas das funções mais utilizadas no Excel.

```text
=SOMA()
=MÉDIA()
=MÁXIMO()
=MÍNIMO()
=SE()
```
