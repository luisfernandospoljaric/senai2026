# Aula de Excel — PROCV e PROCH

As funções `PROCV` e `PROCH` são utilizadas para buscar informações em tabelas.

---

# O que é PROCV?

O `PROCV` significa:

```text
PROCurar na Vertical
```

Ele procura um valor na primeira coluna de uma tabela e retorna informações de outra coluna.

---

# Sintaxe do PROCV

```excel
=PROCV(valor_procurado;tabela;núm_índice_coluna;[procurar_intervalo])
```

---

# Parâmetros

| Parâmetro | Função |
|---|---|
| valor_procurado | Valor que deseja encontrar |
| tabela | Intervalo da tabela |
| núm_índice_coluna | Coluna que deseja retornar |
| procurar_intervalo | VERDADEIRO ou FALSO |

---

# IMPORTANTE

## Use FALSO para busca exata

```excel
=PROCV(A2;A10:D20;2;FALSO)
```

---

# Exemplo Básico — Cadastro de Produtos

| Código | Produto | Preço |
|---|---|---|
| 101 | Mouse | 50 |
| 102 | Teclado | 120 |
| 103 | Monitor | 900 |

---

## Buscar o nome do produto

### Fórmula

```excel
=PROCV(102;A2:C4;2;FALSO)
```

---

## Resultado

```text
Teclado
```

---

# Como o PROCV funciona

O Excel:

1. Procura `102` na primeira coluna
2. Encontra na linha do teclado
3. Retorna a coluna 2

---

# Exemplo — Buscar preço

```excel
=PROCV(103;A2:C4;3;FALSO)
```

Resultado:

```text
900
```

---

# Erros comuns no PROCV

| Erro | Motivo |
|---|---|
| #N/D | Valor não encontrado |
| #REF! | Coluna inexistente |
| Resultado errado | Uso incorreto do VERDADEIRO |

---

# O que é PROCH?

O `PROCH` significa:

```text
PROCurar na Horizontal
```

Ele procura valores na primeira linha da tabela.

---

# Sintaxe do PROCH

```excel
=PROCH(valor_procurado;tabela;núm_índice_linha;[procurar_intervalo])
```

---

# Exemplo de PROCH

|   | A | B | C |
|---|---|---|---|
| 1 | Janeiro | Fevereiro | Março |
| 2 | 1000 | 1500 | 2000 |

---

## Buscar valor de Fevereiro

```excel
=PROCH("Fevereiro";A1:C2;2;FALSO)
```

Resultado:

```text
1500
```

---

# Diferença entre PROCV e PROCH

| PROCV | PROCH |
|---|---|
| Busca vertical | Busca horizontal |
| Procura na coluna | Procura na linha |

---

# Quando usar cada um?

| Situação | Melhor função |
|---|---|
| Cadastro de clientes | PROCV |
| Tabela mensal horizontal | PROCH |
| Estoque | PROCV |
| Metas mensais | PROCH |

---

# EXERCÍCIOS BÁSICOS

# Exercício 1 — PROCV Básico

## Tabela

| Código | Produto | Preço |
|---|---|---|
| 201 | Caderno | 25 |
| 202 | Caneta | 5 |
| 203 | Mochila | 120 |
| 204 | Régua | 8 |

---

## Faça:

1. Busque o nome do produto código 203
2. Busque o preço do código 202


# Exercício 2 — PROCH Básico

## Tabela

|   | Janeiro | Fevereiro | Março | Abril |
|---|---|---|---|---|
| Vendas | 1500 | 2200 | 1800 | 3000 |

---

## Faça:

1. Busque as vendas de Março
2. Busque as vendas de Abril

---

# Exercício 3 — Sistema de Funcionários

## Tabela

| Matrícula | Funcionário | Cargo | Salário |
|---|---|---|---|
| 1001 | Carlos | Analista | 4500 |
| 1002 | Mariana | Gerente | 8500 |
| 1003 | João | Suporte | 3000 |
| 1004 | Fernanda | RH | 5000 |
| 1005 | Ricardo | Diretor | 12000 |

---

# Faça

Crie um sistema onde o usuário digita a matrícula e o Excel retorna:

- Nome
- Cargo
- Salário

---

