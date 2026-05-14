# Excel Avançado — Funções Matemáticas e Estatísticas

# 1. Funções Matemáticas

---

# 1.1 SOMASES

## O que é?

A função **SOMASES** é utilizada para realizar a soma de valores com base em **um ou mais critérios**.

Ela é muito usada em:
- Controle financeiro
- Relatórios de vendas
- Controle de estoque
- Dashboards
- Análises de departamentos, cidades, produtos etc.

---

## Quando utilizar?

Use a função SOMASES quando precisar:
- Somar vendas de um vendedor específico
- Somar produtos de determinada categoria
- Somar valores entre datas
- Somar dados usando múltiplas condições

---

## Sintaxe

```excel
=SOMASES(intervalo_soma; intervalo_critério1; critério1; [intervalo_critério2; critério2])
```

---

## Explicação da Sintaxe

| Argumento | Explicação |
|---|---|
| intervalo_soma | Intervalo que contém os valores a serem somados |
| intervalo_critério1 | Intervalo onde será aplicado o critério |
| critério1 | Condição utilizada |
| intervalo_critério2 | Segundo intervalo opcional |
| critério2 | Segundo critério opcional |

---

## Exemplo Prático

### Tabela

| Vendedor | Produto | Cidade | Valor |
|---|---|---|---|
| Ana | Notebook | Campinas | 3500 |
| João | Mouse | Campinas | 120 |
| Ana | Monitor | São Paulo | 900 |
| Carlos | Notebook | Campinas | 4000 |
| Ana | Mouse | Campinas | 80 |

---

## Exemplo 1 — Somar vendas da Ana

```excel
=SOMASES(D2:D6; A2:A6; "Ana")
```

### Resultado

```excel
4480
```

---

## Exemplo 2 — Somar vendas da Ana em Campinas

```excel
=SOMASES(D2:D6; A2:A6; "Ana"; C2:C6; "Campinas")
```

### Resultado

```excel
3580
```

---

# 1.2 SOMARPRODUTO

## O que é?

A função **SOMARPRODUTO** multiplica valores correspondentes entre intervalos e depois soma os resultados.

Muito utilizada para:
- Cálculo de faturamento
- Controle de estoque
- Análise financeira
- Média ponderada

---

## Quando utilizar?

Use SOMARPRODUTO quando precisar:
- Multiplicar quantidade × preço
- Fazer cálculos ponderados
- Trabalhar com múltiplas matrizes

---

## Sintaxe

```excel
=SOMARPRODUTO(matriz1; [matriz2])
```

---

## Explicação da Sintaxe

| Argumento | Explicação |
|---|---|
| matriz1 | Primeiro conjunto de valores |
| matriz2 | Segundo conjunto de valores |

---

## Exemplo Prático

### Tabela

| Produto | Quantidade | Valor Unitário |
|---|---|---|
| Notebook | 2 | 3500 |
| Mouse | 5 | 120 |
| Monitor | 3 | 900 |

---

## Objetivo

Calcular o faturamento total.

---

## Fórmula

```excel
=SOMARPRODUTO(B2:B4; C2:C4)
```

---

## Cálculo realizado

| Conta | Resultado |
|---|---|
| 2 × 3500 | 7000 |
| 5 × 120 | 600 |
| 3 × 900 | 2700 |

### Soma Total

```excel
10300
```

---

# 2. Funções Estatísticas

---

# 2.1 CONTASES

## O que é?

A função **CONTASES** conta quantas células atendem a um ou mais critérios.

---

## Quando utilizar?

Use CONTASES para:
- Contar alunos aprovados
- Contar vendas por cidade
- Contar produtos por categoria
- Contar funcionários por setor

---

## Sintaxe

```excel
=CONTASES(intervalo_critério1; critério1; [intervalo_critério2; critério2])
```

---

## Explicação da Sintaxe

| Argumento | Explicação |
|---|---|
| intervalo_critério1 | Intervalo onde será analisado |
| critério1 | Condição |
| intervalo_critério2 | Segundo intervalo opcional |
| critério2 | Segundo critério opcional |

---

## Exemplo Prático

### Tabela

| Nome | Cidade | Status |
|---|---|---|
| Ana | Campinas | Ativo |
| João | São Paulo | Ativo |
| Carlos | Campinas | Inativo |
| Mariana | Campinas | Ativo |

---

## Exemplo 1 — Contar pessoas de Campinas

```excel
=CONTASES(B2:B5; "Campinas")
```

### Resultado

```excel
3
```

---

## Exemplo 2 — Contar ativos em Campinas

```excel
=CONTASES(B2:B5; "Campinas"; C2:C5; "Ativo")
```

### Resultado

```excel
2
```

---

# 2.2 MÉDIASES

## O que é?

A função **MÉDIASES** calcula a média de valores que atendem a um ou mais critérios.

---

## Quando utilizar?

Use MÉDIASES para:
- Média de vendas por vendedor
- Média salarial por setor
- Média de notas por turma
- Média de faturamento por região

---

## Sintaxe

```excel
=MÉDIASES(intervalo_média; intervalo_critério1; critério1; [intervalo_critério2; critério2])
```

---

## Explicação da Sintaxe

| Argumento | Explicação |
|---|---|
| intervalo_média | Intervalo dos valores para calcular média |
| intervalo_critério1 | Intervalo do critério |
| critério1 | Condição |
| intervalo_critério2 | Segundo intervalo opcional |
| critério2 | Segundo critério opcional |

---

## Exemplo Prático

### Tabela

| Vendedor | Cidade | Venda |
|---|---|---|
| Ana | Campinas | 3500 |
| João | Campinas | 1200 |
| Ana | São Paulo | 900 |
| Carlos | Campinas | 4000 |
| Ana | Campinas | 800 |

---

## Exemplo 1 — Média das vendas da Ana

```excel
=MÉDIASES(C2:C6; A2:A6; "Ana")
```

### Resultado

```excel
1733,33
```

---

## Exemplo 2 — Média das vendas da Ana em Campinas

```excel
=MÉDIASES(C2:C6; A2:A6; "Ana"; B2:B6; "Campinas")
```

### Resultado

```excel
2150
```

---

# Resumo das Funções

| Função | Objetivo |
|---|---|
| SOMASES | Soma com múltiplos critérios |
| SOMARPRODUTO | Multiplica e soma matrizes |
| CONTASES | Conta usando critérios |
| MÉDIASES | Calcula média usando critérios |

---

# Dicas Importantes

- Todos os intervalos devem possuir o mesmo tamanho  
-  Critérios de texto devem ficar entre aspas  
-  Pode utilizar operadores lógicos

| Operador | Exemplo |
|---|---|
| > | ">1000" |
| < | "<500" |
| >= | ">=100" |
| <= | "<=200" |
| <> | "<>Ana" |

---

# Exemplo com Operador

```excel
=SOMASES(D2:D10; D2:D10; ">1000")
```

Soma todos os valores maiores que 1000.