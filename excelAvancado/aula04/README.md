# Aula dia 21/05

Aula dividida em dois momentos:
- 1º - Continuação do plano de curso: Datas.
- 2º - VBA inicial.

---

# Funções de Data no Excel

As funções de data no Excel são muito utilizadas para:
- Controle de prazos
- Gestão de RH
- Financeiro
- Cronogramas
- Controle de dias úteis
- Cálculo de idade e tempo

---

# 1. DIA.DA.SEMANA

## O que faz?
Retorna o número correspondente ao dia da semana de uma data.

---

## Sintaxe

```excel
=DIA.DA.SEMANA(data;[tipo])
```

### Parâmetros:
- `data` → Data desejada
- `tipo` → Define qual número representa cada dia

---

## Exemplo

| Data | Fórmula | Resultado |
|---|---|---|
| 21/05/2026 | `=DIA.DA.SEMANA(A2;2)` | 4 |

### Explicação do tipo 2:

| Dia | Número |
|---|---|
| Segunda | 1 |
| Terça | 2 |
| Quarta | 3 |
| Quinta | 4 |
| Sexta | 5 |
| Sábado | 6 |
| Domingo | 7 |

---

# 2. DIA.TRABALHO

## O que faz?
Retorna uma data futura ou passada considerando apenas dias úteis.

Ignora:
- Sábados
- Domingos
- Feriados (opcional)

---

## Sintaxe

```excel
=DIA.TRABALHO(data_inicial;dias;[feriados])
```

---

## Exemplo

| Data Inicial | Dias Úteis | Fórmula | Resultado |
|---|---|---|---|
| 21/05/2026 | 10 | `=DIA.TRABALHO(A2;B2)` | 04/06/2026 |

---

## Uso prático
- Prazo de entrega
- Vencimentos
- Cronogramas

---

# 3. DIA.TRABALHO.INTL

## O que faz?
Semelhante ao DIA.TRABALHO, porém permite escolher quais dias serão finais de semana.

---

## Sintaxe

```excel
=DIA.TRABALHO.INTL(data_inicial;dias;fim_de_semana;[feriados])
```

---

## Código dos finais de semana

| Código | Final de Semana |
|---|---|
| 1 | Sábado e Domingo |
| 2 | Domingo e Segunda |
| 7 | Sexta e Sábado |

---

## Exemplo

```excel
=DIA.TRABALHO.INTL(A2;10;7)
```

Nesse caso:
- Final de semana = Sexta e Sábado

---

# 4. DIA.TRABALHOTOTAL

## O que faz?
Conta quantos dias úteis existem entre duas datas.

---

## Sintaxe

```excel
=DIA.TRABALHOTOTAL(data_inicial;data_final;[feriados])
```

---

## Exemplo

| Início | Fim | Fórmula | Resultado |
|---|---|---|---|
| 01/05/2026 | 31/05/2026 | `=DIA.TRABALHOTOTAL(A2;B2)` | 21 |

---

# 5. DIA.TRABALHOTOTAL.INTL

## O que faz?
Conta os dias úteis entre duas datas com finais de semana personalizados.

---

## Sintaxe

```excel
=DIA.TRABALHOTOTAL.INTL(data_inicial;data_final;fim_de_semana;[feriados])
```

---

## Exemplo

```excel
=DIA.TRABALHOTOTAL.INTL(A2;B2;7)
```

---

# 6. DIAS360

## O que faz?
Calcula a diferença entre datas considerando que todos os meses possuem 30 dias.

Muito usado no:
- Financeiro
- Bancos
- Juros

---

## Sintaxe

```excel
=DIAS360(data_inicial;data_final)
```

---

## Exemplo

| Início | Fim | Fórmula | Resultado |
|---|---|---|---|
| 01/01/2026 | 01/07/2026 | `=DIAS360(A2;B2)` | 180 |

---

# 7. DATADIF

## O que faz?
Calcula diferenças entre datas.

Pode retornar:
- Anos
- Meses
- Dias

---

## Sintaxe

```excel
=DATADIF(data_inicial;data_final;"tipo")
```

---

## Tipos

| Tipo | Resultado |
|---|---|
| "Y" | Anos |
| "M" | Meses |
| "D" | Dias |
| "YM" | Meses ignorando anos |
| "MD" | Dias ignorando meses e anos |

---

## Exemplo

| Nascimento | Hoje | Fórmula | Resultado |
|---|---|---|---|
| 10/05/2000 | 21/05/2026 | `=DATADIF(A2;B2;"Y")` | 26 |

---

# Exercícios

# Exercício 1 — DIA.DA.SEMANA

Descubra qual número representa o dia da semana das datas abaixo usando tipo 2.

| Data |
|---|
| 21/05/2026 |
| 25/12/2026 |
| 01/01/2027 |

---

# Exercício 2 — DIA.TRABALHO

Uma empresa recebeu um pedido em:
- 21/05/2026

O prazo é:
- 15 dias úteis

Calcule a data final.

---

# Exercício 3 — DIA.TRABALHO.INTL

Calcule uma entrega considerando:
- Início: 21/05/2026
- 20 dias úteis
- Final de semana: sexta e sábado

---

# Exercício 4 — DIA.TRABALHOTOTAL

Calcule quantos dias úteis existem entre:
- 01/05/2026
- 31/05/2026

---

# Exercício 5 — DIA.TRABALHOTOTAL.INTL

Calcule os dias úteis entre:
- 01/06/2026
- 30/06/2026

Considerando:
- Final de semana = sexta e sábado

---

# Exercício 6 — DIAS360

Calcule os dias comerciais entre:
- 01/01/2026
- 01/10/2026

---

# Exercício 7 — DATADIF

Calcule:
1. Idade em anos
2. Quantidade de meses
3. Quantidade total de dias

| Data de Nascimento |
|---|
| 15/08/1998 |

---

# Gabarito Resumido

| Exercício | Fórmula |
|---|---|
| 1 | `=DIA.DA.SEMANA(A2;2)` |
| 2 | `=DIA.TRABALHO(A2;15)` |
| 3 | `=DIA.TRABALHO.INTL(A2;20;7)` |
| 4 | `=DIA.TRABALHOTOTAL(A2;B2)` |
| 5 | `=DIA.TRABALHOTOTAL.INTL(A2;B2;7)` |
| 6 | `=DIAS360(A2;B2)` |
| 7 | `=DATADIF(A2;HOJE();"Y")` |

---

# Exemplo de macro:

```vba
Sub RelatorioVendas()

    ' Escreve o título na célula A1
    Range("A1").Value = "Produto"

    ' Escreve o título na célula B1
    Range("B1").Value = "Valor"

    ' Preenche os produtos
    Range("A2").Value = "Mouse"
    Range("A3").Value = "Teclado"
    Range("A4").Value = "Monitor"

    ' Preenche os valores
    Range("B2").Value = 150
    Range("B3").Value = 200
    Range("B4").Value = 1200

    ' Cria o texto TOTAL
    Range("A5").Value = "Total"

    ' Faz a soma automática
    Range("B5").Formula = "=SOMA(B2:B4)"

    ' Deixa o título em negrito
    Range("A1:B1").Font.Bold = True

    ' Deixa o total em negrito
    Range("A5:B5").Font.Bold = True

    ' Ajusta automaticamente a largura das colunas
    Columns("A:B").AutoFit

    ' Mostra uma mensagem
    MsgBox "Relatório criado com sucesso!"

End Sub
```

# Exercício de VBA — Controle de Estoque

Você foi contratado para automatizar uma planilha de estoque no Excel utilizando VBA.

Sua tarefa é criar uma macro que monte automaticamente uma tabela de produtos, calcule o total do estoque e formate a planilha.

---

# Objetivo da Macro

A macro deverá:

- Criar os títulos da tabela  
- Inserir produtos  
- Inserir quantidades  
- Inserir preços  
- Calcular o valor total de cada produto  
- Calcular o valor total geral do estoque  
- Aplicar negrito nos títulos  
- Ajustar automaticamente as colunas  
- Exibir uma mensagem ao final

---

# Resultado Esperado da Planilha

| Produto | Quantidade | Preço | Total |
|---|---|---|---|
| Mouse | 10 | 150 | 1500 |
| Teclado | 5 | 200 | 1000 |
| Monitor | 3 | 1200 | 3600 |
| Notebook | 2 | 3500 | 7000 |
| TOTAL GERAL |  |  | 13100 |

---

# Regras do Exercício

## 1. Criar os títulos

Nas células:
- A1 → Produto
- B1 → Quantidade
- C1 → Preço
- D1 → Total

---

## 2. Inserir os produtos

| Produto | Quantidade | Preço |
|---|---|---|
| Mouse | 10 | 150 |
| Teclado | 5 | 200 |
| Monitor | 3 | 1200 |
| Notebook | 2 | 3500 |

---

## 3. Calcular o total por produto

Exemplo:

```excel
=B2*C2
```

---

## 4. Calcular o total geral

Somar:
- D2 até D5

---

## 5. Formatar

Aplicar:
- Negrito nos títulos
- Negrito no TOTAL GERAL

---

## 6. Ajustar colunas automaticamente

Usar:
- `AutoFit`

---

## 7. Exibir mensagem

Mostrar:

```text
"Relatório de estoque criado com sucesso!"
```

---

# Desafio Extra

Após finalizar:

✅ Coloque fundo amarelo nos títulos  
✅ Formate os preços como moeda  
✅ Centralize os valores das colunas B, C e D

---

# Dicas

## Inserir valor

```vba
Range("A1").Value = "Produto"
```

---

## Inserir fórmula

```vba
Range("D2").Formula = "=B2*C2"
```

---

## Negrito

```vba
Range("A1:D1").Font.Bold = True
```

---

## Ajustar colunas

```vba
Columns("A:D").AutoFit
```

---

## Mensagem

```vba
MsgBox "Relatório criado com sucesso!"
```

---

# Desafio Final

Tente fazer:
- Sem copiar código pronto
- Utilizando somente lógica
- Organizando o código com comentários

---


