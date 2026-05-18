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

# Base de Dados para o exercício

Monte a seguinte tabela no Excel:

| ID | Nome       | Setor   | Salário | Vendas | Faltas | Nota Avaliação |
|----|-----------|--------|--------|--------|--------|----------------|
| 1  | Ana       | Vendas | 2500   | 12000  | 2      | 8,5            |
| 2  | Bruno     | TI     | 4000   | 3000   | 0      | 9,0            |
| 3  | Carlos    | Vendas | 2700   | 15000  | 1      | 7,0            |
| 4  | Daniela   | RH     | 3200   | 0      | 3      | 6,5            |
| 5  | Eduardo   | TI     | 4500   | 2000   | 0      | 8,0            |
| 6  | Fernanda  | Vendas | 2600   | 18000  | 4      | 9,5            |
| 7  | Gabriel   | RH     | 3000   | 0      | 2      | 7,5            |
| 8  | Helena    | TI     | 4200   | 3500   | 1      | 8,8            |
| 9  | Igor      | Vendas | 2800   | 22000  | 0      | 9,2            |
| 10 | Juliana   | RH     | 3100   | 0      | 5      | 6,0            |
| 11 | Kleber    | TI     | 3900   | 2500   | 2      | 7,8            |
| 12 | Larissa   | Vendas | 2600   | 14000  | 1      | 8,3            |

---

# Exercícios

## 1. Total de Vendas
Calcule o total de vendas da empresa.

---

## 2. Média Salarial
Calcule a média dos salários.

---

## 3. Total de Vendas (Setor Vendas)
Some apenas as vendas do setor "Vendas".

---

## 4. Funcionários de TI
Conte quantos funcionários pertencem ao setor de TI.

---

## 5. Maior e Menor Salário
Identifique:
- Maior salário
- Menor salário

---

## 6. Situação do Funcionário
Crie uma coluna chamada **Situação**:

Regras:
- Nota ≥ 8 → "Alto Desempenho"
- Nota ≥ 7 → "Bom"
- Caso contrário → "Melhorar"

---

## 7. Bônus por Vendas
Crie uma coluna chamada **Bônus**:

Regras:
- Vendas > 15000 → 10% do salário
- Vendas > 10000 → 5% do salário
- Caso contrário → 0

---

## 8. Controle de Faltas
Crie uma coluna:

- Faltas ≤ 1 → "Assíduo"
- Caso contrário → "Faltoso"

---

## 9. Média de Notas (TI)
Calcule a média das notas apenas do setor TI.

---

## 10. Ranking de Vendas
Crie um ranking baseado nas vendas (maior valor = 1º lugar).

---

# Desafio Final

Crie uma coluna chamada **Resultado Final**:

Regras:
- Nota ≥ 8 e Faltas ≤ 2 → "Excelente"
- Nota ≥ 7 → "Bom"
- Caso contrário → "Ruim"

---
