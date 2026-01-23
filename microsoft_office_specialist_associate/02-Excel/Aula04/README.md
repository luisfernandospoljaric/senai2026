# 📊 Exercício Financeiro em Excel — Análise Mensal

Este repositório contém um exercício prático de **finanças em Excel**, voltado para iniciantes que desejam aprender cálculos financeiros usando fórmulas básicas e funções como `MÉDIA`, `PGTO`, `SOMA` e `SE`.

---

## 📝 Descrição
Uma micro-cafeteria quer avaliar sua situação financeira mensal e o impacto de um empréstimo que financiará parte do investimento inicial.  

Com base nos dados fornecidos, você deve calcular:  
- Receitas  
- Custos  
- Lucro  
- Margem de lucro (%)  
- Ponto de equilíbrio  
- Valor e parcela do empréstimo  
- Payback  
- Lucro líquido após pagar a parcela  

---

## 📋 Dados iniciais
Insira os seguintes valores em uma planilha do Excel:

| Célula | Item                                 | Valor       |
|--------|--------------------------------------|------------:|
| B2     | Preço por café (R$)                  | 8,00        |
| B3     | Custo variável por café (R$)         | 2,50        |
| B4     | Vendas mensais (unidades)            | 900         |
| B5     | Custo fixo mensal (R$)               | 4.500,00    |
| B6     | Investimento inicial (R$)            | 20.000,00   |
| B7     | % financiado do investimento         | 60%         |
| B8     | Taxa de juros anual do empréstimo (%)| 12%         |
| B9     | Prazo do empréstimo (meses)          | 24          |

---

## ✅ Tarefas
1. Calcule a **Receita Mensal**.  
2. Calcule o **Custo Variável Total**.  
3. Calcule o **Custo Total** (fixos + variáveis).  
4. Calcule o **Lucro Mensal** (Receita − Custo Total).  
5. Calcule a **Margem de Lucro (%)**.  
6. Encontre o **Ponto de Equilíbrio (unidades)**.  
7. Calcule **quanto será financiado** (valor do empréstimo).  
8. Calcule a **parcela mensal** do empréstimo usando a função `PGTO`.  
9. Calcule o **Payback** em meses (Investimento inicial ÷ Lucro Mensal).  
10. Calcule o **Lucro líquido após pagar a parcela**.  

---

## 🛠️ Passo a passo — Solução com fórmulas

### 1) Receita Mensal  
```excel
=B2*B4
```
👉 Resultado: R$ 7.200,00

### 2) Custo Variável Total
```excel
=B3*B4
```
👉 Resultado: R$ 2.250,00

### 3) Custo Total
```excel
=B5 + B12
```
👉 Resultado: R$ 6.750,00

### 4) Lucro Mensal
```excel
=B11 - B13
```
👉 Resultado: R$ 450,00

### 5) Margem de Lucro (%)
```excel
=B14 / B11
```
👉 Resultado: 6,25%

### 6) Ponto de Equilibrio
```excel
=B5 / (B2 - B3)
```
👉 Resultado bruto: 818,18 unidades

👉 Usando arredondamento para cima:
```
=ARREDONDAR.PARA.CIMA(B16;0)
```
👉 Resultado arredondado: 819 unidades

### 7) Valor do Empréstimo
```excel
=B6 * B7
```
👉 Resultado: R$ 12.000,00

### 8) Parcela Mensal (função PGTO)
```excel
=PGTO(B8/12; B9; -B17)
```
👉 Resultado: R$ 564,88

### 9) Payback (meses)

```excel
=B6 / B14
```
👉 Resultado bruto: 44,44 meses

👉 Arredondado:
```excel
=ARREDONDAR.PARA.CIMA(B19;0)
```
👉 Resultado: 45 meses

### 10) Lucro líquido após pagar a parcela
```excel
=B14 - B18
```
👉 Resultado: R$ −114,88 (negativo)

### 🎨 Formatação sugerida

- Formatar valores em Moeda (R$).

- Formatar percentuais em %.

- Usar bordas e título em negrito.

- Exibir o ponto de equilíbrio arredondado para cima.

## 🚀 Desafios Extras

- Aumente as vendas em +10% e calcule o novo payback.

- Crie uma projeção de 12 meses e calcule o VPL usando VPL(taxa_mensal; fluxo_de_caixa).

- Teste diferentes juros e prazos no financiamento.

