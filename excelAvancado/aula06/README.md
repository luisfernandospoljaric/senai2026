# Funções BD

| Função em Português | Função em Inglês | Descrição da Função |
|---|---|---|
| BDSOMA | DSUM | Soma os valores de um campo (coluna) em uma base de dados que atendam a determinados critérios. |
| BDCONTAR | DCOUNT | Conta células numéricas em um campo da base de dados que atendam aos critérios especificados. |
| BDMÁX | DMAX | Retorna o maior valor de um campo da base de dados que corresponda aos critérios definidos. |
| BDMÍN | DMIN | Retorna o menor valor de um campo da base de dados que corresponda aos critérios definidos. |
| BDMÉDIA | DAVERAGE | Calcula a média dos valores de um campo da base de dados que atendam aos critérios especificados. |

---

## O que são Funções de Banco de Dados?

As funções de Banco de Dados do Excel permitem realizar cálculos em tabelas grandes utilizando critérios específicos.

Elas funcionam de maneira semelhante a:

- `SOMASE`
- `CONT.SE`
- `MÉDIASE`

Porém, são mais poderosas porque permitem:

- múltiplos critérios;
- critérios dinâmicos;
- filtragens avançadas;
- cálculos semelhantes a SQL;
- análises empresariais.

---

# Estrutura das Funções BD

Todas seguem praticamente a mesma estrutura:

```excel
=FUNÇÃO_BD(Banco_de_Dados; Campo; Critérios)
```

---

# Explicando os Parâmetros

| Parâmetro | Função |
|---|---|
| Banco_de_Dados | Intervalo completo da tabela incluindo cabeçalhos |
| Campo | Coluna que será analisada |
| Critérios | Intervalo onde ficam as condições da pesquisa |

---

# Estrutura Obrigatória da Tabela

As funções BD exigem:

- Cabeçalhos  
- Tabela organizada  
- Critérios separados da tabela

---

# Exemplo Base

## Tabela de Vendas

| ID | Vendedor | Produto | Região | Valor |
|---|---|---|---|---|
| 1 | Ana | Notebook | Sul | 3500 |
| 2 | Carlos | Mouse | Norte | 120 |
| 3 | Ana | Teclado | Sul | 250 |
| 4 | Pedro | Notebook | Norte | 4200 |
| 5 | Ana | Mouse | Sul | 90 |

---

# Área de Critérios

## Exemplo:

| Região |
|---|
| Sul |

---

# 1. BDSOMA (DSUM)

## Objetivo

Somar valores de uma coluna obedecendo critérios.

---

## Sintaxe

```excel
=BDSOMA(Banco; "Campo"; Critérios)
```

---

## Exemplo

### Somar vendas da Região Sul

```excel
=BDSOMA(A1:E6;"Valor";G1:G2)
```

---

## Resultado

```text
3840
```

Porque:

```text
3500 + 250 + 90
```

---

# 2. BDCONTAR (DCOUNT)

## Objetivo

Contar registros numéricos obedecendo critérios.

---

## Exemplo

### Quantas vendas ocorreram no Sul?

```excel
=BDCONTAR(A1:E6;"Valor";G1:G2)
```

---

## Resultado

```text
3
```

---

# 3. BDMÁX (DMAX)

## Objetivo

Retornar o maior valor encontrado.

---

## Exemplo

### Maior venda da Região Norte

Critério:

| Região |
|---|
| Norte |

Fórmula:

```excel
=BDMÁX(A1:E6;"Valor";G1:G2)
```

---

## Resultado

```text
4200
```

---

# 4. BDMÍN (DMIN)

## Objetivo

Retornar o menor valor encontrado.

---

## Exemplo

```excel
=BDMÍN(A1:E6;"Valor";G1:G2)
```

---

## Resultado

```text
120
```

---

# 5. BDMÉDIA (DAVERAGE)

## Objetivo

Calcular média obedecendo critérios.

---

## Exemplo

### Média das vendas da Ana

Critério:

| Vendedor |
|---|
| Ana |

Fórmula:

```excel
=BDMÉDIA(A1:E6;"Valor";G1:G2)
```

---

## Resultado

```text
1280
```

Cálculo:

```text
(3500 + 250 + 90) / 3
```

---

# Critérios Avançados

---

# Critério com Número

## Exemplo

| Valor |
|---|
| >1000 |

---

# Critério com Texto

| Produto |
|---|
| Notebook |

---

# Critério com Duas Condições (E)

## Exemplo

| Região | Produto |
|---|---|
| Sul | Notebook |

Significa:

```text
Região = Sul E Produto = Notebook
```

---

# Critério com OU

## Exemplo

| Região |
|---|
| Sul |
| Norte |

Significa:

```text
Sul OU Norte
```

---

# Operadores Permitidos

| Operador | Significado |
|---|---|
| > | Maior que |
| < | Menor que |
| >= | Maior ou igual |
| <= | Menor ou igual |
| <> | Diferente |
| = | Igual |

---

# Exemplo Empresarial Completo

## Cenário

Você possui milhares de vendas e precisa:

- descobrir o total vendido por região;
- encontrar a maior venda;
- calcular média por vendedor;
- contar pedidos acima de determinado valor.

As funções BD fazem isso rapidamente.

---

# Diferença Entre BD e SOMASES

| Funções BD | SOMASES |
|---|---|
| Mais flexíveis | Mais simples |
| Critérios dinâmicos | Critérios fixos |
| Ideal para dashboards | Ideal para cálculos rápidos |
| Muito usadas em automações | Muito usadas no dia a dia |

---

# Erros Mais Comuns

---

## 1. Cabeçalhos Diferentes

ERRADO:

```text
Valor Total
```

Tabela:

```text
Valor
```

Os nomes precisam ser idênticos.

---

## 2. Critérios Fora do Padrão

Critérios precisam ter cabeçalhos.

---

## 3. Intervalo sem Cabeçalho

As funções BD exigem cabeçalhos.

---

# Dica Profissional

Transforme a tabela em:

```text
CTRL + T
```

Isso facilita:

- organização;
- expansão automática;
- dashboards;
- fórmulas dinâmicas.

---

# Exemplo Avançado

## Somar vendas acima de 1000 da Região Sul

Critérios:

| Região | Valor |
|---|---|
| Sul | >1000 |

Fórmula:

```excel
=BDSOMA(A1:E6;"Valor";G1:H2)
```

---

# Exercício 1 — Básico

Monte uma tabela de vendas e:

- some as vendas do Norte;
- conte quantas vendas existem;
- descubra a maior venda.

---

# Exercício 2 — Intermediário

Utilize:

| Região | Valor |
|---|---|
| Sul | >500 |

Faça:

- BDSOMA;
- BDMÉDIA;
- BDCONTAR.

---

# Exercício 3 — Avançado

Crie critérios para:

```text
Região Sul E Produto Notebook
```

Depois:

- encontre maior venda;
- menor venda;
- média.

---

# Resumo Final

| Função | Objetivo |
|---|---|
| BDSOMA | Soma |
| BDCONTAR | Contagem |
| BDMÁX | Maior valor |
| BDMÍN | Menor valor |
| BDMÉDIA | Média |

---

# Quando usar?

Use funções BD quando:

- Trabalhar com grandes tabelas  
- Criar dashboards  
- Fazer análises empresariais  
- Utilizar múltiplos critérios  
- Desenvolver relatórios avançados  
- Trabalhar com automações no Excel/VBA