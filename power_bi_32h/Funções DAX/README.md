# Funções DAX
# 📊 Funções DAX mais utilizadas

Abaixo estão explicações das funções DAX mais usadas em Power BI e Power Pivot.

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

## 📌 4. ` MAX() e MIN()`
**Objetivo:**Retornam o maior (MAX) e o menor (MIN) valor da coluna.

**Sintaxe:**
```dax
MAX(Tabela[Coluna])
MIN(Tabela[Coluna])
```

**Exemplo:**
```dax
MaiorVenda = MAX(Vendas[ValorTotal])
MenorVenda = MIN(Vendas[ValorTotal])
```

## 📌 5. `COUNT(), COUNTA(), COUNTROWS()`

**Objetivo:** Conta valores numéricos não nulos (COUNT), Conta todos os valores não nulos (texto, número)(COUNTA) e Conta linhas de uma tabela (COUNTROWS).

**Sintaxe:**
```dax
COUNT(Tabela[Coluna])
COUNTA(Tabela[Coluna])
COUNTROWS(Tabela)
```

**Exemplo:**
```dax
QtdPedidos = COUNT(Vendas[ID_Pedido])
QtdClientes = COUNTA(Clientes[Nome])
TotalLinhas = COUNTROWS(Vendas)
```

## 📌 6. `CALCULATE()`

**Objetivo:** Avalia uma expressão em um novo contexto (filtros modificados).

**Sintaxe:**
```dax
CALCULATE(expressão, filtro1, filtro2, ...)
```

**Exemplo:**
```dax
VendasSP = CALCULATE(SUM(Vendas[ValorTotal]), Clientes[Estado] = "SP")
```

## 📌 7. `SUMX()`

**Objetivo:**  Soma baseada em expressão linha a linha.

**Sintaxe:**
```dax
SUMX(Tabela, Expressão)
```

**Exemplo:**
```dax
TotalComDesconto = SUMX(Vendas, Vendas[Quantidade] * Vendas[PrecoComDesconto])
```

## 📌 8. `AVERAGEX()`

**Objetivo:** Calcula a média baseada em uma expressão linha a linha.

**Sintaxe:**
```dax
AVERAGEX(Tabela, Expressão)
```

**Exemplo:**
```dax
MediaUnitario = AVERAGEX(Vendas, Vendas[ValorTotal] / Vendas[Quantidade])
```

# 🧠 Funções de Lógica e Filtros

## 📌 1. `AVERAGEX()`

**Objetivo:** Expressão condicional ("SE").

**Sintaxe:**
```dax
IF(condição, valor_se_verdadeiro, valor_se_falso)
```

**Exemplo:**
```dax
StatusVenda = IF(Vendas[ValorTotal] > 1000, "Alta", "Baixa")
```

## 📌 2. `SWITCH()`

**Objetivo:** Substitui múltiplos IF(), como um "SE...SENÃO" de várias condições.

**Sintaxe:**
```dax
SWITCH(expressão, valor1, resultado1, valor2, resultado2, ..., valor_padrão)
```

**Exemplo:**
```dax
Categoria = SWITCH(Vendas[ValorTotal],
  0, "Zerada",
  500, "Média",
  1000, "Alta",
  "Outro"
)
```

## 📌 3. `FILTER()`

**Objetivo:** Retorna uma tabela filtrada.

**Sintaxe:**
```dax
FILTER(Tabela, Condição)
```

**Exemplo:**
```dax
VendasAltas = CALCULATE(SUM(Vendas[ValorTotal]), FILTER(Vendas, Vendas[ValorTotal] > 1000))
```

## 📌 4. `RELATED()`

**Objetivo:** Retorna valor de uma coluna de uma tabela relacionada (relacionamento 1:1 ou muitos:1).

**Sintaxe:**
```dax
RELATED(Tabela[Coluna])
```

**Exemplo:**
```dax
NomeCliente = RELATED(Clientes[Nome])
```

## 📌 5. `ISBLANK()`

**Objetivo:** Verifica se o valor é nulo.

**Sintaxe:**
```dax
ISBLANK(valor)
```

**Exemplo:**
```dax
SemValor = IF(ISBLANK(Vendas[ValorTotal]), "Sem valor", "OK")
```

# 📆 Funções de Tempo

## 📌 1. `DATESYTD()`

**Objetivo:** Retorna as datas desde o início do ano até a data atual.

**Sintaxe:**
```dax
DATESYTD(Calendario[Data])
```

**Exemplo:**
```dax
VendasYTD = CALCULATE(SUM(Vendas[ValorTotal]), DATESYTD(Calendario[Data]))
```

## 📌 2. `DATEADD()`

**Objetivo:** Adiciona ou subtrai tempo de uma data (dias, meses, anos). o início do ano até a data atual.

**Sintaxe:**
```dax
DATEADD(Calendario[Data], número, unidade)
```

**Exemplo:**
```dax
VendasMesAnterior = CALCULATE(SUM(Vendas[ValorTotal]), DATEADD(Calendario[Data], -1, "month"))
```

## 📌 3. `DATEDIFF()`

**Objetivo:** retorna a diferença entre duas datas com base em uma unidade de tempo específica, como dias, meses, trimestres, anos, etc.

**Sintaxe:**
```dax
DATEDIFF(DataInicial, DataFinal, Unidade)
```

**Exemplo:**
```dax
DiasEntrega = DATEDIFF(Pedidos[DataPedido], Pedidos[DataEntrega], DAY)
```