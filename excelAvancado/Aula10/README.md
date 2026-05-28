# Tabela Dinâmica no Excel 

## O que é uma Tabela Dinâmica?

A **Tabela Dinâmica** é uma ferramenta do Excel usada para:

- resumir grandes volumes de dados;
- organizar informações;
- fazer análises rápidas;
- criar relatórios;
- agrupar dados;
- calcular totais automaticamente.

Ela é chamada de “dinâmica” porque você pode reorganizar os dados rapidamente apenas arrastando campos.

---

# Exemplo Prático

Tabela de vendas:

| Data | Vendedor | Produto | Categoria | Cidade | Quantidade | Valor |
|---|---|---|---|---|---|---|
| 01/05/2026 | Ana | Notebook | Informática | Campinas | 2 | 7000 |
| 01/05/2026 | Carlos | Mouse | Informática | São Paulo | 5 | 500 |
| 02/05/2026 | Ana | Mesa | Móveis | Campinas | 1 | 1200 |
| 03/05/2026 | João | Cadeira | Móveis | Rio de Janeiro | 3 | 1800 |

Com a Tabela Dinâmica você consegue responder perguntas como:

- Qual vendedor vendeu mais?
- Qual cidade teve maior faturamento?
- Quanto foi vendido por categoria?
- Quantos produtos foram vendidos?
- Qual mês teve maior receita?

---

# Estrutura da Tabela Dinâmica

Ao criar uma Tabela Dinâmica, o Excel mostra 4 áreas principais:

| Área | Função |
|---|---|
| Filtros | Filtrar informações |
| Linhas | Organizar os dados verticalmente |
| Colunas | Organizar horizontalmente |
| Valores | Realizar cálculos |

---

# Como Criar uma Tabela Dinâmica

## Passo 1 — Selecionar os Dados

Selecione toda a tabela.

### Dicas

- Não deixe linhas vazias;
- Todas as colunas devem possuir título.

### Exemplo correto

| Data | Produto | Valor |
|---|---|---|

---

## Passo 2 — Inserir Tabela Dinâmica

Vá em:

```text
Inserir → Tabela Dinâmica
```

O Excel perguntará:

- Intervalo dos dados;
- Onde deseja criar a tabela.

Escolha:

```text
Nova planilha
```

Clique em:

```text
OK
```

---

# Entendendo os Campos

Após criar, aparecerá a lista de campos.

### Exemplo

```text
☑ Data
☑ Produto
☑ Cidade
☑ Quantidade
☑ Valor
```

Você arrasta esses campos para:

- Linhas
- Colunas
- Valores
- Filtros

---

# Primeiro Exemplo

## Objetivo

Descobrir o total vendido por vendedor.

### Linhas

```text
Vendedor
```

### Valores

```text
Valor
```

### Resultado

| Vendedor | Soma de Valor |
|---|---|
| Ana | 8200 |
| Carlos | 500 |
| João | 1800 |

---

# Alterando o Tipo de Cálculo

Por padrão o Excel usa:

```text
SOMA
```

Mas você pode trocar para:

- Contagem
- Média
- Máximo
- Mínimo
- Produto
- Desvio padrão

---

## Como alterar

Clique na seta do campo em:

```text
Valores
```

Depois:

```text
Configurações do Campo de Valor
```

---

# Exemplo de Média

Se trocar de SOMA para MÉDIA:

| Vendedor | Média de Valor |
|---|---|
| Ana | 4100 |
| Carlos | 500 |
| João | 1800 |

---

# Agrupamento de Datas

Uma das funções mais poderosas.

Você pode agrupar por:

- Dias
- Meses
- Anos
- Trimestres

---

## Como fazer

Clique com botão direito em uma data:

```text
Agrupar
```

Escolha:

```text
Meses
```

---

# Exemplo

| Mês | Soma de Valor |
|---|---|
| Maio | 10500 |

---

# Segmentação de Dados (Slicer)

A Segmentação cria botões visuais para filtros.

---

## Como inserir

Vá em:

```text
Inserir → Segmentação de Dados
```

Escolha um campo:

```text
Cidade
```

Agora você terá botões:

- Campinas
- São Paulo
- Rio de Janeiro

Ao clicar, a Tabela Dinâmica filtra automaticamente.

---

# Linha do Tempo

Usada para filtrar datas visualmente.

---

## Inserir Linha do Tempo

```text
Inserir → Linha do Tempo
```

Escolha o campo de data.

---

# Atualizar Tabela Dinâmica

Se os dados mudarem:

Clique com botão direito:

```text
Atualizar
```

ou:

```text
Dados → Atualizar Tudo
```

---

# Gráfico Dinâmico

Você pode transformar a Tabela Dinâmica em gráfico.

---

## Como criar

Selecione a Tabela Dinâmica:

```text
Inserir → Gráfico Dinâmico
```

### Tipos mais usados

- Coluna
- Pizza
- Linha
- Barras

---

# Campos Calculados

Permitem criar fórmulas dentro da Tabela Dinâmica.

---

## Exemplo

Criar:

```text
Comissão = Valor * 10%
```

---

## Caminho

```text
Analisar Tabela Dinâmica →
Campos, Itens e Conjuntos →
Campo Calculado
```

---

# Atualização Automática da Base

Transforme sua base em:

```text
Tabela do Excel
```

### Atalho

```text
CTRL + T
```

Assim, quando novos dados forem adicionados, a Tabela Dinâmica poderá ser atualizada facilmente.

---

# Boas Práticas

## 1. Nunca deixe colunas sem nome

### Errado

```text
| Produto | | Valor |
```

---

## 2. Não misture tipos de dados

### Errado

```text
100
ABC
200
```

na mesma coluna.

---

## 3. Evite linhas vazias

---

## 4. Use formatação consistente

- Datas como data;
- Valores como moeda;
- Quantidade como número.

---

# Principais Aplicações

| Área | Uso |
|---|---|
| Financeiro | Relatórios financeiros |
| RH | Controle de funcionários |
| Comercial | Análise de vendas |
| Estoque | Movimentação de produtos |
| Marketing | Resultados de campanhas |

---

# Ativividade Prática 1

Monte uma Tabela Dinâmica que mostre:

- Total vendido por cidade.

---

# Ativividade Prática 2

Monte uma Tabela Dinâmica que mostre:

- Total vendido por categoria;
- Separado por vendedor.

---

# Ativividade Prática 3

Monte uma Tabela Dinâmica com:

- Soma de vendas;
- Média de vendas;
- Filtro por cidade;
- Segmentação de dados;
- Gráfico dinâmico.

---

# Dicas Profissionais

## Use atalhos

| Atalho | Função |
|---|---|
| ALT + N + V | Criar Tabela Dinâmica |
| CTRL + T | Transformar em tabela |
| ALT + F5 | Atualizar Tabela Dinâmica |

---

# Erros Mais Comuns

| Erro | Causa |
|---|---|
| Dados não aparecem | Intervalo errado |
| Soma vira contagem | Dados como texto |
| Datas não agrupam | Datas inválidas |
| Atualização não funciona | Base fora da tabela |

---

# Resumo

A Tabela Dinâmica permite:

- resumir;
- analisar;
- comparar;
- filtrar;
- visualizar dados rapidamente.

