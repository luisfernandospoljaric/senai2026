# RESULTADOS ESPERADOS — GABARITO DAS ATIVIDADES

> OBS:
> Os resultados podem variar dependendo da data atual do computador por causa da função `HOJE()`.

---

# Exercício 1 — DIA.DA.SEMANA

## Fórmula

```excel
=DIA.DA.SEMANA(C2;2)
```

| Projeto | Data_Inicio | Resultado |
|---|---|---|
| Sistema ERP | 21/05/2026 | 4 |
| Website Loja | 25/05/2026 | 1 |
| Aplicativo Mobile | 01/06/2026 | 1 |
| Dashboard BI | 03/06/2026 | 3 |
| Sistema RH | 08/06/2026 | 1 |
| E-commerce | 15/06/2026 | 1 |
| Portal Cliente | 18/06/2026 | 4 |
| Controle Estoque | 22/06/2026 | 1 |

---

# Exercício 2 — DIA.TRABALHO

## Fórmula

```excel
=DIA.TRABALHO(C2;D2;Feriados!A2:A5)
```

| Projeto | Resultado Esperado |
|---|---|
| Sistema ERP | 12/06/2026 |
| Website Loja | 09/06/2026 |
| Aplicativo Mobile | 30/06/2026 |
| Dashboard BI | 22/06/2026 |
| Sistema RH | 03/07/2026 |
| E-commerce | 21/07/2026 |
| Portal Cliente | 01/07/2026 |
| Controle Estoque | 04/08/2026 |

---

# Exercício 3 — DIA.TRABALHO.INTL

## Fórmula

```excel
=DIA.TRABALHO.INTL(C2;D2;7;Feriados!A2:A5)
```

### Considerando:
- Sexta e sábado como finais de semana

| Projeto | Resultado Esperado |
|---|---|
| Sistema ERP | 11/06/2026 |
| Website Loja | 08/06/2026 |
| Aplicativo Mobile | 29/06/2026 |
| Dashboard BI | 21/06/2026 |
| Sistema RH | 02/07/2026 |
| E-commerce | 20/07/2026 |
| Portal Cliente | 30/06/2026 |
| Controle Estoque | 03/08/2026 |

---

# Exercício 4 — DIA.TRABALHOTOTAL

## Fórmula

```excel
=DIA.TRABALHOTOTAL(C2;F2;Feriados!A2:A5)
```

| Projeto | Resultado Esperado |
|---|---|
| Sistema ERP | 20 |
| Website Loja | 19 |
| Aplicativo Mobile | 24 |
| Dashboard BI | 16 |
| Sistema RH | 22 |
| E-commerce | 31 |
| Portal Cliente | 10 |
| Controle Estoque | 32 |

---

# Exercício 5 — DIA.TRABALHOTOTAL.INTL

## Fórmula

```excel
=DIA.TRABALHOTOTAL.INTL(C2;F2;7;Feriados!A2:A5)
```

| Projeto | Resultado Esperado |
|---|---|
| Sistema ERP | 19 |
| Website Loja | 18 |
| Aplicativo Mobile | 23 |
| Dashboard BI | 15 |
| Sistema RH | 21 |
| E-commerce | 30 |
| Portal Cliente | 9 |
| Controle Estoque | 31 |

---

# Exercício 6 — DIAS360

## Fórmula

```excel
=DIAS360(C2;F2)
```

| Projeto | Resultado Esperado |
|---|---|
| Sistema ERP | 27 |
| Website Loja | 25 |
| Aplicativo Mobile | 34 |
| Dashboard BI | 22 |
| Sistema RH | 32 |
| E-commerce | 43 |
| Portal Cliente | 14 |
| Controle Estoque | 43 |

---

# Exercício 7 — DATADIF (ANOS)

## Fórmula

```excel
=DATADIF(G2;HOJE();"Y")
```

| Responsável | Resultado Esperado |
|---|---|
| 15/08/1998 | 27 anos |
| 22/03/1995 | 31 anos |
| 10/01/2000 | 26 anos |
| 05/11/1992 | 33 anos |
| 30/07/1997 | 28 anos |
| 14/02/1994 | 32 anos |
| 19/09/1999 | 26 anos |
| 08/12/1991 | 34 anos |

---

# Exercício 8 — DATADIF (MESES)

## Fórmula

```excel
=DATADIF(G2;HOJE();"M")
```

| Responsável | Resultado Esperado |
|---|---|
| 15/08/1998 | 333 meses |
| 22/03/1995 | 374 meses |
| 10/01/2000 | 316 meses |
| 05/11/1992 | 402 meses |
| 30/07/1997 | 345 meses |
| 14/02/1994 | 387 meses |
| 19/09/1999 | 320 meses |
| 08/12/1991 | 413 meses |

---

# Exercício 9 — DATADIF (DIAS)

## Fórmula

```excel
=DATADIF(G2;HOJE();"D")
```

| Responsável | Resultado Esperado |
|---|---|
| 15/08/1998 | Aproximadamente 10.140 dias |
| 22/03/1995 | Aproximadamente 11.390 dias |
| 10/01/2000 | Aproximadamente 9.620 dias |
| 05/11/1992 | Aproximadamente 12.240 dias |
| 30/07/1997 | Aproximadamente 10.510 dias |
| 14/02/1994 | Aproximadamente 11.770 dias |
| 19/09/1999 | Aproximadamente 9.740 dias |
| 08/12/1991 | Aproximadamente 12.570 dias |

---


# GABARITO — EXERCÍCIO VBA CONTROLE DE ESTOQUE

```vba
Sub ControleEstoque()

    ' ============================
    ' TÍTULOS DA TABELA
    ' ============================

    Range("A1").Value = "Produto"
    Range("B1").Value = "Quantidade"
    Range("C1").Value = "Preço"
    Range("D1").Value = "Total"



    ' ============================
    ' PRODUTOS
    ' ============================

    Range("A2").Value = "Mouse"
    Range("A3").Value = "Teclado"
    Range("A4").Value = "Monitor"
    Range("A5").Value = "Notebook"



    ' ============================
    ' QUANTIDADES
    ' ============================

    Range("B2").Value = 10
    Range("B3").Value = 5
    Range("B4").Value = 3
    Range("B5").Value = 2



    ' ============================
    ' PREÇOS
    ' ============================

    Range("C2").Value = 150
    Range("C3").Value = 200
    Range("C4").Value = 1200
    Range("C5").Value = 3500



    ' ============================
    ' TOTAIS POR PRODUTO
    ' ============================

    Range("D2").Formula = "=B2*C2"
    Range("D3").Formula = "=B3*C3"
    Range("D4").Formula = "=B4*C4"
    Range("D5").Formula = "=B5*C5"



    ' ============================
    ' TOTAL GERAL
    ' ============================

    Range("A6").Value = "TOTAL GERAL"

    Range("D6").Formula = "=SOMA(D2:D5)"



    ' ============================
    ' FORMATAÇÃO
    ' ============================

    ' Negrito nos títulos
    Range("A1:D1").Font.Bold = True

    ' Negrito no total geral
    Range("A6:D6").Font.Bold = True



    ' ============================
    ' FUNDO AMARELO NOS TÍTULOS
    ' ============================

    Range("A1:D1").Interior.Color = vbYellow



    ' ============================
    ' FORMATAÇÃO MOEDA
    ' ============================

    Range("C2:D6").NumberFormat = "R$ #,##0.00"



    ' ============================
    ' CENTRALIZAR VALORES
    ' ============================

    Range("B2:D6").HorizontalAlignment = xlCenter



    ' ============================
    ' AJUSTAR COLUNAS
    ' ============================

    Columns("A:D").AutoFit



    ' ============================
    ' MENSAGEM FINAL
    ' ============================

    MsgBox "Relatório de estoque criado com sucesso!"

End Sub
```

---

# Explicação Resumida

| Comando | Função |
|---|---|
| `Range("A1").Value` | Escreve valor na célula |
| `.Formula` | Insere fórmula |
| `.Font.Bold = True` | Coloca em negrito |
| `.Interior.Color` | Muda a cor de fundo |
| `.NumberFormat` | Formata como moeda |
| `.HorizontalAlignment` | Centraliza |
| `AutoFit` | Ajusta largura automática |
| `MsgBox` | Mostra mensagem |

---

# Resultado Esperado

| Produto | Quantidade | Preço | Total |
|---|---|---|---|
| Mouse | 10 | R$150,00 | R$1500,00 |
| Teclado | 5 | R$200,00 | R$1000,00 |
| Monitor | 3 | R$1200,00 | R$3600,00 |
| Notebook | 2 | R$3500,00 | R$7000,00 |
| TOTAL GERAL |  |  | R$13100,00 |

---

# Como Executar

## 1. Abrir VBA

```text
ALT + F11
```

---

## 2. Inserir módulo

- Inserir
- Módulo

---

## 3. Colar o código

Cole toda a macro.

---

## 4. Executar

```text
F5
```

Ou:
- Desenvolvedor
- Macros
- Executar
