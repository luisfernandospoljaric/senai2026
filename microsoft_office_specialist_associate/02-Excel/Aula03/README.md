# 📊 Exercício de Excel – Funções de Contagem

## Situação
Você é responsável por organizar uma planilha com os **dados de uma turma de alunos**.  
Na tabela abaixo, estão as **notas** e algumas informações preenchidas e outras em branco.

| Aluno   | Nota | Situação   |
|---------|------|------------|
| Ana     | 8    | Aprovado   |
| Bruno   | 7    | Aprovado   |
| Carla   |      |            |
| Diego   | 5    | Reprovado  |
| Elisa   | 9    | Aprovado   |
| Felipe  |      |            |
| Giovana | 6    | Reprovado  |
| Hugo    | 10   | Aprovado   |
| Isabela |      |            |

---

## 📌 Tarefas

### 1. CONT.NÚM  
Conte quantos alunos **têm notas lançadas** (não estão em branco).  

```excel
=CONT.NÚM(B2:B10)
```

### 2. CONT.VALORES

Conte quantos alunos já possuem alguma **situação preenchida** (Aprovado ou Reprovado).
```excel
=CONT.VALORES(C2:C10)
```

### 3. CONT.SE

Conte quantos alunos estão **Aprovados**:
```excel
=CONT.SE(C2:C10;"Aprovado")
```
Conte quantos alunos estão **Reprovados**:
```excel
=CONT.SE(C2:C10;"Reprovado")
```

## Desafio Extra:
Use o CONT.SE para descobrir quantos alunos tiraram nota maior ou igual a 7.

```excel
=CONT.SE(B2:B10;">=7")
```

### Objetivo:
Este exercício ajuda a praticar as funções:

- CONT.NÚM

- CONT.VALORES 

- CONT.SE

Essas funções são fundamentais para **análise de dados em Excel.**

----
# 📊 Exercício 2

## Situação

Você é responsável por organizar uma planilha com os **dados de vendas de uma loja de eletrônicos**.
Na tabela abaixo, estão as informações de cada venda realizada (ou pendente):

| Vendedor | Produto    | Quantidade | Valor | Status    |
| -------- | ---------- | ---------- | ----- | --------- |
| Ana      | Celular    | 5          | 5000  | Pago      |
| Bruno    | Notebook   | 2          | 8000  | Pago      |
| Carla    | Tablet     |            |       | Pendente  |
| Diego    | Monitor    | 3          | 2100  | Pago      |
| Elisa    | Teclado    | 10         | 1500  | Pago      |
| Felipe   | Mouse      |            |       | Cancelado |
| Giovana  | Notebook   | 1          | 4000  | Pago      |
| Hugo     | Celular    | 4          | 4000  | Pendente  |
| Isabela  | Headset    | 6          | 1800  | Pago      |
| João     | Impressora |            |       | Pendente  |
| Karen    | Monitor    | 2          | 1400  | Pago      |
| Lucas    | Celular    | 3          | 3000  | Pago      |

---

## 📌 Tarefas

### 1. CONT.NÚM

* Descubra **quantos valores de Quantidade foram preenchidos** (não estão em branco).
* Descubra **quantos valores de Valor foram preenchidos**.

```excel
=CONT.NÚM(C2:C13)
=CONT.NÚM(D2:D13)
```

---

### 2. CONT.VALORES

* Conte **quantos Status já foram preenchidos**.
* Conte **quantos Produtos foram lançados**.

```excel
=CONT.VALORES(E2:E13)
=CONT.VALORES(B2:B13)
```

---

### 3. CONT.SE

* Quantos **pedidos foram pagos**?

```excel
=CONT.SE(E2:E13;"Pago")
```

* Quantos **pedidos estão pendentes**?

```excel
=CONT.SE(E2:E13;"Pendente")
```

* Quantos **pedidos foram cancelados**?

```excel
=CONT.SE(E2:E13;"Cancelado")
```

* Quantos **produtos vendidos foram "Celular"**?

```excel
=CONT.SE(B2:B13;"Celular")
```

---

## ✅ Desafio Extra

1. Descubra **quantos pedidos têm valor acima de 3000**.

```excel
=CONT.SE(D2:D13;">3000")
```

2. Descubra **quantos pedidos têm quantidade maior ou igual a 5**.

```excel
=CONT.SE(C2:C13;">=5")
```

3. Descubra **quantos pedidos pagos foram de Notebook** (dica: usar CONT.SES se disponível).

```excel
=CONT.SES(B2:B13;"Notebook";E2:E13;"Pago")
```

---

## 🎯 Objetivo

Este exercício permite treinar:

* **CONT.NÚM** → Contar apenas números.
* **CONT.VALORES** → Contar todas as células preenchidas.
* **CONT.SE / CONT.SES** → Contar com critérios (simples e múltiplos).

Essas funções são essenciais para análise de relatórios e gestão de dados em Excel.
