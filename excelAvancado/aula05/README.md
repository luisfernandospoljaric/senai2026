# Funções Financeiras | VBA - Estrutura de Decisão

- 1º Momento da aula: Funções financeiras.
- 2º Momento da aula: Estrutura de decisão VBA

---

# Tabela Resumo das Funções (PT-BR/EN)

| Função (PT-BR) | Função (EN) | Explicação                                                                                           |
| -------------- | ----------- | ---------------------------------------------------------------------------------------------------- |
| PGTO           | PMT         | Calcula o valor do pagamento periódico de um empréstimo ou investimento com taxa de juros constante. |
| NPER           | NPER        | Retorna o número de períodos necessários para quitar um empréstimo ou atingir um investimento.       |
| VF             | FV          | Calcula o valor futuro de um investimento com pagamentos constantes e taxa fixa.                     |
| VP             | PV          | Retorna o valor presente de um investimento ou empréstimo com pagamentos futuros constantes.         |
| TAXA           | RATE        | Calcula a taxa de juros por período de um empréstimo ou investimento.                                |

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

---

# Exercício Prático — Funções Financeiras e Estatísticas

## Contexto

A empresa **TechSolution Cursos** deseja analisar financiamentos realizados por clientes durante o primeiro semestre de 2026.

Você foi contratado para desenvolver uma planilha financeira capaz de:

- Calcular parcelas de financiamentos;
- Descobrir taxas de juros;
- Calcular valores futuros;
- Realizar análises estatísticas utilizando:
  - SOMASES
  - CONT.SES
  - MÉDIASES

---

# Base de Dados

Crie uma planilha chamada **Financiamentos** com os seguintes dados:

| ID | Cliente | Categoria | Cidade | Valor Financiado | Entrada | Taxa Mensal | Parcelas | Pagamento Mensal | Valor Futuro | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Carlos | Notebook | Campinas | 4500 | 500 | 1,8% | 24 |  |  | Pago |
| 2 | Mariana | Celular | São Paulo | 3200 | 300 | 2,1% | 18 |  |  | Em Aberto |
| 3 | Lucas | Tablet | Campinas | 2800 | 200 | 1,5% | 12 |  |  | Pago |
| 4 | Fernanda | Notebook | Valinhos | 6200 | 1200 | 1,9% | 36 |  |  | Em Aberto |
| 5 | João | Celular | Campinas | 2100 | 100 | 2,5% | 10 |  |  | Atrasado |
| 6 | Ana | Tablet | Hortolândia | 3900 | 500 | 1,7% | 20 |  |  | Pago |
| 7 | Ricardo | Notebook | Campinas | 7200 | 2000 | 1,4% | 48 |  |  | Em Aberto |
| 8 | Patricia | Celular | Sumaré | 1800 | 100 | 2,8% | 8 |  |  | Pago |
| 9 | Felipe | Tablet | Campinas | 2500 | 200 | 1,6% | 15 |  |  | Em Aberto |
| 10 | Juliana | Notebook | Americana | 8400 | 2500 | 1,3% | 60 |  |  | Pago |
| 11 | Rafael | Celular | Campinas | 3100 | 300 | 2,2% | 24 |  |  | Atrasado |
| 12 | Bianca | Tablet | Paulínia | 4300 | 700 | 1,8% | 30 |  |  | Pago |
| 13 | Gustavo | Notebook | Campinas | 9100 | 3000 | 1,5% | 72 |  |  | Em Aberto |
| 14 | Camila | Celular | Vinhedo | 2700 | 400 | 2,0% | 14 |  |  | Pago |
| 15 | Eduardo | Tablet | Campinas | 3600 | 600 | 1,9% | 18 |  |  | Em Aberto |

---



# Atividades

## Parte 1 — Funções Financeiras

### 1)
Calcule o **Pagamento Mensal** utilizando a função:

```excel
=PGTO(taxa; nper; vp)
```

Considere:

- Valor financiado menos entrada = valor do empréstimo
- Taxa mensal
- Quantidade de parcelas

---

### 2)
Calcule o **Valor Futuro** de cada financiamento utilizando:

```excel
=VF(taxa; nper; pgto)
```

Considere:

- Taxa mensal
- Número de parcelas
- Pagamento mensal

---

### 3)
Crie uma nova coluna chamada:

```text
Valor Presente
```

Utilize a função:

```excel
=VP(taxa; nper; pgto)
```

---

### 4)
Crie uma nova coluna chamada:

```text
Taxa Calculada
```

Utilize:

```excel
=TAXA(nper; pgto; vp)
```

Considere:

- Parcelas
- Pagamento mensal
- Valor financiado

---

### 5)
Crie uma nova coluna chamada:

```text
Prazo Necessário
```

Utilize:

```excel
=NPER(taxa; pgto; vp)
```

Considere:

- Taxa mensal
- Pagamento mensal fixo em R$500
- Valor financiado

---

# Parte 2 — Funções Estatísticas

## 6)
Utilize:

```excel
=SOMASES()
```

Para descobrir:

### a)
Qual o total financiado apenas na cidade de Campinas.

### b)
Qual o total financiado apenas para categoria Notebook.

### c)
Qual o total financiado de clientes com status "Em Aberto".

---

## 7)
Utilize:

```excel
=CONT.SES()
```

Para descobrir:

### a)
Quantos clientes são da cidade de Campinas.

### b)
Quantos financiamentos possuem status "Pago".

### c)
Quantos clientes compraram celulares.

---

## 8)
Utilize:

```excel
=MÉDIASES()
```

Para descobrir:

### a)
A média dos financiamentos em Campinas.

### b)
A média dos financiamentos da categoria Notebook.

### c)
A média dos financiamentos com status "Atrasado".

---

# Parte 3 — Desafios

## 9)
Crie uma coluna chamada:

```text
Situação Financeira
```

Regras:

- Parcela menor que R$200 → "Baixa"
- Parcela entre R$200 e R$400 → "Média"
- Parcela acima de R$400 → "Alta"

Utilize:

```excel
=SE()
```

---

## 10)
Crie um gráfico mostrando:

- Cliente
- Valor Financiado

Escolha o gráfico mais adequado.

---

## 11)
Formate automaticamente:

- Valores acima de R$7000 em verde;
- Status "Atrasado" em vermelho;
- Parcelas acima de 48 em amarelo.

Utilize:

```text
Formatação Condicional
```

---

# Desafio Extra

Monte uma área de dashboard contendo:

- Total financiado;
- Quantidade de clientes;
- Média geral dos financiamentos;
- Quantidade de atrasados;
- Maior financiamento;
- Menor financiamento.

Utilize funções adicionais caso necessário.