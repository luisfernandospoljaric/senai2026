# Aula03 - DAX
# 📊 Funções DAX: Soma, Divisão e Média

Abaixo estão explicações das funções DAX mais usadas em Power BI e Power Pivot: `SUM`, `DIVIDE` e `AVERAGE`.

---

## 📌 1. `SUM()`

**Objetivo:** Soma os valores de uma coluna numérica.

**Sintaxe:**
```dax
SUM(Tabela[Coluna])
``` 

**Exemplo**
```dax
TotalVendas = SUM(Vendas[ValorTotal])
```
Retorna a soma de todos os valores da coluna ValorTotal.

## 📌 2. `Divide()`

**Objetivo:**  Realiza uma divisão segura entre dois valores. Evita erros de divisão por zero.

**Sintaxe:**
```dax
DIVIDE(numerador, denominador, [valor alternativo])
``` 

**Exemplo**
```dax
MargemLucro = DIVIDE(Vendas[Lucro], Vendas[Receita], 0)
```
Se Receita for zero, o resultado será 0 (valor alternativo).

## 📌 3. `AVERAGE()`

**Objetivo:**Calcula a média dos valores de uma coluna.

**Sintaxe:**
```dax
AVERAGE(Tabela[Coluna])
```

**Exemplo:**
```dax
MediaVendas = AVERAGE(Vendas[ValorTotal])
```
Retorna a média dos valores da coluna ValorTotal.

## ✅ Resumo Rápido

| Função      | Para quê serve?                | Cuidados                         |
|-------------|--------------------------------|----------------------------------|
| `SUM()`     | Soma valores de uma coluna     | Apenas colunas numéricas         |
| `DIVIDE()`  | Divide com segurança           | Evita erro de divisão por zero   |
| `AVERAGE()` | Calcula a média de uma coluna  | Ignora valores nulos             |


