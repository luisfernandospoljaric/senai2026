# Funções financeiras no Excel

Organizei abaixo as funções financeiras mais utilizadas no Excel, com exemplos em tabela.

---

## 1. PGTO — valor da parcela

Calcula o valor de parcelas fixas.

- **Sintaxe:** `=PGTO(taxa; nper; vp)`
- **Uso:** Cálculo de prestações de financiamento de veículos ou imóveis.

**Situação:** financiamento de R$ 10.000 em 24 meses com juros de 2% ao mês.

| Valor financiado | Taxa mensal | Parcelas | Fórmula | Resultado |
|---|---:|---:|---|---:|
| 10.000 | 2% | 24 | `=-PGTO(2%;24;10000)` | R$ 528,71 |

---

## 2. VP — valor presente

Traz valores futuros para a data de hoje.
- **Sintaxe:** `=VP(taxa; nper; pgto)`
- **Uso:** Descobrir o valor atual de um título que paga rendimentos mensais.

**Situação:** pagamento de R$ 500 por mês durante 12 meses com taxa de 1,5% ao mês.

| Pagamento mensal | Taxa mensal | Períodos | Fórmula | Resultado |
|---|---:|---:|---|---:|
| 500 | 1,5% | 12 | `=VP(1,5%;12;-500)` | R$ 5.453,75 |

---

## 3. VF — valor futuro

Calcula o montante final de uma poupança recorrente.
- **Sintaxe:** `=VF(taxa; nper; pgto)`
- **Uso:** Planejamento de aposentadoria ou metas de médio prazo.

**Situação:** guardar R$ 300 por mês durante 24 meses rendendo 1% ao mês.

| Depósito mensal | Taxa mensal | Períodos | Fórmula | Resultado |
|---|---:|---:|---|---:|
| 300 | 1% | 24 | `=VF(1%;24;-300;0)` | R$ 8.092,04 |

---

## 4. TAXA — taxa de juros

Encontra a taxa de juros embutida em um negócio.
- **Sintaxe:** `=TAXA(nper; pgto; vp)`

**Situação:** financiamento de R$ 8.000 em 18 parcelas de R$ 520.

| Valor financiado | Parcela | Períodos | Fórmula | Resultado aproximado |
|---|---:|---:|---|---:|
| 8.000 | 520 | 18 | `=TAXA(18;-520;8000)` | 2% ao mês |

---

## 5. NPER — número de períodos

Calcula o tempo necessário para atingir um objetivo ou quitar uma dívida.
- **Sintaxe:** `=NPER(taxa; pgto; vp)`

**Situação:** dívida de R$ 5.000, pagamento de R$ 300 por mês, juros de 2%.

| Dívida | Pagamento mensal | Taxa mensal | Fórmula | Resultado aproximado |
|---|---:|---:|---|---:|
| 5.000 | 300 | 2% | `=NPER(2%;-300;5000)` | 20,5 meses |

---

## Observações Importantes
- **Entradas e Saídas:** Dinheiro que sai do seu bolso deve ser inserido como **negativo**.
- **Unidades:** Garanta que a taxa e o tempo (nper) estejam na mesma base (Ex: Taxa Mensal e Prazo em Meses).

# Exercício — Planejamento financeiro de uma cafeteria

A cafeteria **Sabor do Grão** pretende expandir suas operações e está analisando diferentes cenários financeiros.

O proprietário pediu que você monte uma planilha no Excel para calcular parcelas de financiamento, valor presente, valor futuro, taxa de juros e número de períodos.

Utilize as funções **PGTO**, **VP**, **VF**, **TAXA** e **NPER** para resolver.

---

## Situação 1 — PGTO (valor da parcela)

A cafeteria deseja financiar **R$ 18.000** para compra de equipamentos.

- Taxa de juros: **1,8% ao mês**
- Prazo: **24 meses**

**Pergunta:** qual será o valor da parcela mensal?

### Planilha base

| Campo | Valor |
|---|---:|
| Valor financiado | 18000 |
| Taxa mensal | 1,8% |
| Número de parcelas | 24 |
| **Parcela mensal (resposta)** | |

**Fórmula esperada:**

```excel
=
```

## Situação 2 — VP (valor presente)
A cafeteria pode pagar R$ 850 por mês durante 18 meses.

- Taxa de juros: 1,4% ao mês

**Pergunta:** quanto esse fluxo representa hoje?

### Planilha base
|Campo	|Valor|
|---|---:|
|Pagamento mensal|	850|
|Taxa mensal	|1,4%|
|Quantidade de períodos	|18|
|Valor presente |(resposta)|

**Fórmula esperada:**

```excel
=
```

## Situação 3 — VF (valor futuro)

O proprietário pretende investir R$ 500 por mês durante 30 meses.

- Rentabilidade: 1,2% ao mês

**Pergunta:** qual será o montante acumulado no final?

|Planilha |base|
|---|---:|
|Campo	|Valor|
|Depósito mensal	|500|
|Taxa mensal	|1,2%|
|Número de períodos	|30|
|Valor futuro |(resposta)|	

**Fórmula esperada:**
```
=
```

## Situação 4 — TAXA (taxa de juros)

A cafeteria financiou R$ 12.000.

- Pagará 20 parcelas de R$ 760

**Pergunta:** qual é a taxa mensal desse financiamento?

|Planilha |base|
|--|--:|
|Campo	|Valor|
|Valor financiado|	12000|
|Valor da parcela|	760|
|Quantidade de parcelas|	20|
|Taxa mensal |(resposta)|	

**Fórmula esperada:**
```
=
```

## Situação 5 — NPER (número de períodos)

A cafeteria possui uma dívida de R$ 7.500.

- Pagamento mensal: R$ 420
- Taxa de juros: 1,7% ao mês

**Pergunta:** em quantos meses a dívida será quitada?

|Planilha |base|
|--|--:|
|Campo	|Valor|
|Valor da dívida	|7500|
|Pagamento mensal	|420|
|Taxa mensal	|1,7%|
|Número de períodos |(resposta)|	

**Fórmula esperada:**
```
=
```
