# Gabarito — Exercício Prático Excel Avançado

# Parte 1 — Funções Financeiras

## Estrutura das Colunas

| Coluna | Conteúdo |
|---|---|
| A | ID |
| B | Cliente |
| C | Categoria |
| D | Cidade |
| E | Valor Financiado |
| F | Entrada |
| G | Taxa Mensal |
| H | Parcelas |
| I | Pagamento Mensal |
| J | Valor Futuro |
| K | Status |
| L | Valor Presente |
| M | Taxa Calculada |
| N | Prazo Necessário |
| O | Situação Financeira |

---

# 1) Pagamento Mensal

Na célula:

```excel
I2
```

Utilize:

```excel
=PGTO(G2;H2;-(E2-F2))
```

Depois arraste para baixo.

---

# 2) Valor Futuro

Na célula:

```excel
J2
```

Utilize:

```excel
=VF(G2;H2;I2)
```

Depois arraste para baixo.

---

# 3) Valor Presente

Na célula:

```excel
L2
```

Utilize:

```excel
=VP(G2;H2;I2)
```

Depois arraste para baixo.

---

# 4) Taxa Calculada

Na célula:

```excel
M2
```

Utilize:

```excel
=TAXA(H2;I2;-(E2-F2))
```

Depois arraste para baixo.

---

# 5) Prazo Necessário

Na célula:

```excel
N2
```

Utilize:

```excel
=NPER(G2;-500;(E2-F2))
```

Depois arraste para baixo.

---

# Parte 2 — Funções Estatísticas

# 6) SOMASES

## a) Total financiado em Campinas

```excel
=SOMASES(E2:E16;D2:D16;"Campinas")
```

### Resultado Esperado

```text
34800
```

---

## b) Total financiado para Notebook

```excel
=SOMASES(E2:E16;C2:C16;"Notebook")
```

### Resultado Esperado

```text
35400
```

---

## c) Total financiado com status "Em Aberto"

```excel
=SOMASES(E2:E16;K2:K16;"Em Aberto")
```

### Resultado Esperado

```text
34600
```

---

# 7) CONT.SES

## a) Quantidade de clientes de Campinas

```excel
=CONT.SES(D2:D16;"Campinas")
```

### Resultado Esperado

```text
7
```

---

## b) Quantidade de financiamentos pagos

```excel
=CONT.SES(K2:K16;"Pago")
```

### Resultado Esperado

```text
6
```

---

## c) Quantidade de clientes que compraram celulares

```excel
=CONT.SES(C2:C16;"Celular")
```

### Resultado Esperado

```text
5
```

---

# 8) MÉDIASES

## a) Média dos financiamentos em Campinas

```excel
=MÉDIASES(E2:E16;D2:D16;"Campinas")
```

### Resultado Esperado

```text
4971,43
```

---

## b) Média dos financiamentos da categoria Notebook

```excel
=MÉDIASES(E2:E16;C2:C16;"Notebook")
```

### Resultado Esperado

```text
7080
```

---

## c) Média dos financiamentos com status "Atrasado"

```excel
=MÉDIASES(E2:E16;K2:K16;"Atrasado")
```

### Resultado Esperado

```text
2600
```

---

# Parte 3 — Desafios

# 9) Situação Financeira

Na célula:

```excel
O2
```

Utilize:

```excel
=SE(I2<200;"Baixa";SE(I2<=400;"Média";"Alta"))
```

Depois arraste para baixo.

---

# 10) Gráfico

## Tipo de gráfico recomendado

```text
Gráfico de Colunas
```

## Dados utilizados

- Cliente
- Valor Financiado

---

# 11) Formatação Condicional

## Regra 1 — Valores acima de R$7000

```text
Maior que 7000 → Cor Verde
```

---

## Regra 2 — Status atrasado

```text
Texto contendo "Atrasado" → Cor Vermelha
```

---

## Regra 3 — Parcelas acima de 48

```text
Maior que 48 → Cor Amarela
```

---

# Desafio Extra — Dashboard

## Total Financiado

```excel
=SOMA(E2:E16)
```

### Resultado Esperado

```text
63500
```

---

## Quantidade de Clientes

```excel
=CONT.VALORES(B2:B16)
```

### Resultado Esperado

```text
15
```

---

## Média Geral dos Financiamentos

```excel
=MÉDIA(E2:E16)
```

### Resultado Esperado

```text
4233,33
```

---

## Quantidade de Atrasados

```excel
=CONT.SES(K2:K16;"Atrasado")
```

### Resultado Esperado

```text
2
```

---

## Maior Financiamento

```excel
=MÁXIMO(E2:E16)
```

### Resultado Esperado

```text
9100
```

---

## Menor Financiamento

```excel
=MÍNIMO(E2:E16)
```

### Resultado Esperado

```text
1800
```