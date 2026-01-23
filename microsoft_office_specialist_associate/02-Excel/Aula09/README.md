
# 📊 Aprendendo a Criar Gráficos no Excel

## 🧩 1. O que são gráficos no Excel?
Gráficos servem para **visualizar dados** de forma mais clara e rápida, transformando tabelas em representações visuais (barras, linhas, pizza, etc.).  
Eles ajudam a **comparar valores**, **entender tendências** e **analisar resultados**.

---

## 🪄 2. Como criar um gráfico no Excel
### Passo a passo:
1. **Selecione os dados**
   - Inclua títulos de colunas e valores (Ex: Mês e Vendas).
2. **Insira o gráfico**
   - Vá até a guia **Inserir** → grupo **Gráficos**.
   - Escolha o tipo de gráfico desejado (Colunas, Linhas, Pizza, etc.).
3. **Personalize**
   - Clique no gráfico → aparecem as guias:
     - **Design do Gráfico** → alterar tipo, layout, cores.
     - **Formatar** → mudar fontes, bordas e estilos.
   - Você pode adicionar **títulos**, **rótulos de dados** e **legendas**.

---

## 📊 3. Tipos principais de gráficos

| Tipo de Gráfico | Quando Usar | Exemplo |
|-----------------|--------------|----------|
| **Colunas** | Comparar valores entre categorias | Vendas por mês |
| **Barras** | Comparar valores horizontais | Lucro por produto |
| **Linhas** | Mostrar tendência ao longo do tempo | Crescimento de vendas |
| **Pizza** | Mostrar proporções de um total | Participação de mercado |
| **Área** | Mostrar evolução e volume | Despesas acumuladas |
| **Dispersão (XY)** | Comparar duas variáveis numéricas | Altura x Peso |
| **Gráfico combinado** | Misturar tipos de gráficos | Linhas e colunas juntas |

---

## 💡 4. Exemplo prático 1 — Gráfico de colunas

### 📋 Tabela de dados
| Mês | Vendas |
|-----|---------|
| Janeiro | 1200 |
| Fevereiro | 1500 |
| Março | 1800 |
| Abril | 2100 |

### 🧠 Como fazer:
1. Selecione a tabela (A1:B5).  
2. Vá em **Inserir → Gráfico de Colunas**.  
3. O Excel criará o gráfico automaticamente.  
4. Adicione título:  
   - Clique no gráfico → “+” → **Título do gráfico** → digite *“Vendas por Mês”*.

---

## 💡 5. Exemplo prático 2 — Gráfico de pizza

### 📋 Tabela de dados
| Produto | Vendas |
|----------|---------|
| Mouse | 500 |
| Teclado | 300 |
| Monitor | 200 |

### 🧠 Como fazer:
1. Selecione a tabela.  
2. Vá em **Inserir → Gráfico de Pizza → Pizza 2D**.  
3. Adicione rótulos de dados para mostrar os valores.

---

## 💡 6. Exemplo prático 3 — Gráfico de linha

### 📋 Tabela de dados
| Mês | Temperatura Média |
|-----|--------------------|
| Jan | 28 |
| Fev | 29 |
| Mar | 27 |
| Abr | 25 |
| Mai | 23 |

### 🧠 Como fazer:
1. Selecione os dados.  
2. Vá em **Inserir → Gráfico de Linhas**.  
3. Personalize a cor e adicione título: *Temperatura Média Mensal*.

---

# 📘 Exercícios sobre Gráficos no Excel

Abaixo estão **5 exercícios práticos** para você dominar a criação de gráficos no Excel, utilizando também **funções básicas** como `SOMA`, `MÉDIA` e `MÁXIMO`.

---

## 🧮 **Exercício 1 — Gráfico de Colunas com SOMA**
### 🎯 Objetivo:
Criar um gráfico que mostre o total de vendas por produto.

| Produto | Janeiro | Fevereiro | Março |
|----------|----------|-----------|--------|
| Mouse | 120 | 180 | 150 |
| Teclado | 90 | 130 | 110 |
| Monitor | 60 | 70 | 80 |

**Tarefas:**
1. Calcule o **total de vendas** de cada produto usando `=SOMA(B2:D2)`.  
2. Crie uma nova coluna chamada **Total**.  
3. Selecione os produtos e seus totais.  
4. Insira um **gráfico de colunas** mostrando o total de vendas de cada produto.  
5. Adicione o título *“Vendas Totais por Produto”*.

---

## 📊 **Exercício 2 — Gráfico de Linhas com MÉDIA**
### 🎯 Objetivo:
Analisar a média de temperatura ao longo dos meses.

| Mês | Temperatura (°C) |
|-----|-------------------|
| Janeiro | 28 |
| Fevereiro | 30 |
| Março | 27 |
| Abril | 25 |
| Maio | 22 |

**Tarefas:**
1. Calcule a **média** das temperaturas com `=MÉDIA(B2:B6)`.  
2. Insira um **gráfico de linhas** mostrando a variação da temperatura.  
3. Insira uma **linha de média** no gráfico (use *linha de tendência* ou adicione manualmente).  
4. Dê o título *“Variação de Temperatura Mensal”*.

---

## 🍕 **Exercício 3 — Gráfico de Pizza com Porcentagem**
### 🎯 Objetivo:
Mostrar a participação de cada produto nas vendas totais.

| Produto | Vendas |
|----------|---------|
| Notebook | 3000 |
| Tablet | 1500 |
| Celular | 5500 |
| Smartwatch | 1000 |

**Tarefas:**
1. Calcule o **total geral** com `=SOMA(B2:B5)`.  
2. Calcule a **porcentagem** de cada produto em relação ao total (`=B2/$B$6`).  
3. Crie um **gráfico de pizza** com os produtos e suas vendas.  
4. Exiba os **rótulos de dados em porcentagem**.  
5. Dê o título *“Participação nas Vendas”*.

---

## 📈 **Exercício 4 — Gráfico de Barras com MÁXIMO e MÍNIMO**
### 🎯 Objetivo:
Identificar o produto mais e menos vendido.

| Produto | Vendas |
|----------|---------|
| Impressora | 250 |
| Mouse | 400 |
| Teclado | 350 |
| Monitor | 200 |

**Tarefas:**
1. Use `=MÁXIMO(B2:B5)` e `=MÍNIMO(B2:B5)` para encontrar o maior e menor valor.  
2. Crie um **gráfico de barras horizontais** mostrando as vendas.  
3. Destaque o produto com maior venda (cor diferente).  
4. Adicione título *“Comparativo de Vendas por Produto”*.

---

## 💼 **Exercício 5 — Gráfico Combinado (Coluna + Linha)**
### 🎯 Objetivo:
Comparar o faturamento e o lucro de uma empresa.

| Mês | Faturamento | Lucro |
|-----|--------------|--------|
| Janeiro | 10000 | 3000 |
| Fevereiro | 12000 | 4000 |
| Março | 15000 | 5000 |
| Abril | 13000 | 3500 |

**Tarefas:**
1. Calcule a **média do lucro** com `=MÉDIA(C2:C5)`.  
2. Crie um **gráfico combinado**:
   - Faturamento como **coluna**.  
   - Lucro como **linha**.  
3. Adicione **título e legenda**.  
4. Nomeie o gráfico como *“Faturamento x Lucro”*.  

---

