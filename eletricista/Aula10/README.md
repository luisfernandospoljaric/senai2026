# Excel – Funções e Operações

Algumas funções muito usadas no Excel de forma simples e prática:

- SOMASE
- CONT.SE
- SE (encadeado)
- ORDEM

---

## 1. Função SOMASE

###  O que faz?
A função **SOMASE** soma valores **com base em um critério**.

    Ou seja: ela não soma tudo, só o que atende uma condição.

---

### Sintaxe:
```excel
=SOMASE(intervalo; critério; [intervalo_soma])
```

### Parâmetros:
- **intervalo** → onde o Excel vai verificar a condição  
- **critério** → a condição (ex: "Vendas", ">100")  
- **intervalo_soma** → os valores que serão somados  

---

### Exemplo:

| Produto | Valor |
|--------|------|
| A      | 100  |
| B      | 200  |
| A      | 150  |

Quer somar apenas os valores do produto **A**:
```excel
=SOMASE(A2:A4; "A"; B2:B4)
```
Resultado: **250**

---

## 2. Função CONT.SE

### O que faz?
Conta quantas células atendem a um critério.

    Ou seja: ela conta, não soma.

---

### Sintaxe:

```excel
=CONT.SE(intervalo; critério)
```

---

### Exemplo:

| Status  |
|--------|
| Pago   |
| Pendente |
| Pago   |

Contar quantos são "Pago":

 Resultado: **2**

---

## 3. Função SE (Encadeado)

### O que faz?
A função **SE** permite tomar decisões no Excel.

O **SE encadeado** é quando usamos vários SE juntos.

---

### Sintaxe:

```excel
=SE(teste_lógico; valor_se_verdadeiro; valor_se_falso)
``` 
---

### Exemplo simples:
```excel
=SE(A1>=7; "Aprovado"; "Reprovado")
```

---

### SE Encadeado (múltiplas condições)

| Nota |
|-----|
| 9   |
| 6   |
| 4   |

 Classificação:
 ```
 >= 7 → Aprovado  
 >= 5 → Recuperação  
 < 5 → Reprovado  
```

```excel
=SE(A1>=7; "Aprovado"; SE(A1>=5; "Recuperação"; "Reprovado"))
```

---

### Dica importante:
Sempre leia o SE como:

"Se isso acontecer → faça isso, senão → faça aquilo"

---

## 4. Função ORDEM

### O que faz?
A função **ORDEM** mostra a posição de um número em uma lista.

Exemplo: quem é o maior? o segundo maior? etc.

---

### Sintaxe:
```excel
=ORDEM(núm; ref; [ordem])
```

### Parâmetros:
- **núm** → número que você quer classificar  
- **ref** → lista de números  
- **ordem** → 
  - 0 → do maior para o menor  
  - 1 → do menor para o maior  

---

### Exemplo:

| Valores |
|--------|
| 100    |
| 200    |
| 150    |

Descobrir a posição do 150:
```excel
=ORDEM(150; A2:A4; 0)
```

Resultado: **2** (segundo maior)

---

## Resumo Geral

| Função   | O que faz |
|---------|----------|
| SOMASE  | Soma com condição |
| CONT.SE | Conta com condição |
| SE      | Toma decisão |
| ORDEM   | Classifica posição |

--- 

## Exercício:

# Exercício Prático de Excel – Funções (SOMASE, CONT.SE, SE e ORDEM)

## Objetivo
Trabalhar com uma tabela realista utilizando funções importantes do Excel.

---

## Tabela Base

Os alunos devem montar a seguinte tabela no Excel:

| ID | Nome     | Produto   | Categoria | Valor (R$) | Status    | Nota |
|----|----------|----------|-----------|-----------|----------|------|
| 1  | Ana      | Teclado  | Informática | 120       | Pago     | 8    |
| 2  | Bruno    | Mouse    | Informática | 80        | Pendente | 6    |
| 3  | Carlos   | Cadeira  | Móveis      | 450       | Pago     | 4    |
| 4  | Daniela  | Mesa     | Móveis      | 700       | Pago     | 9    |
| 5  | Eduardo  | Monitor  | Informática | 900       | Pendente | 7    |
| 6  | Fernanda | Notebook | Informática | 3500      | Pago     | 10   |
| 7  | Gabriel  | Sofá     | Móveis      | 1200      | Pendente | 5    |
| 8  | Helena   | Impressora | Informática | 600     | Pago     | 6    |

---

## Exercícios

### 1. SOMASE
Calcule o total de vendas apenas da categoria **Informática**

Dica:
Use a coluna **Categoria** como critério.

---

### 2. CONT.SE
Conte quantos pedidos estão com status **Pago**

---

### 3. SE (Encadeado)
Crie uma nova coluna chamada **Classificação**

Regras:
```
- Nota >= 7 → "Aprovado"
- Nota >= 5 → "Recuperação"
- Nota < 5 → "Reprovado"
```
---

### 4. ORDEM
Crie uma coluna chamada **Ranking de Vendas**

- Classifique os valores da coluna **Valor (R$)**  
- O maior valor deve ser **posição 1**

---

### 5. Desafio Extra (Misturando funções)
Calcule o total de vendas **APENAS dos pedidos pagos**

---

## Entrega esperada

Ao final, a planilha deve conter:
- A tabela preenchida
- Coluna de Classificação
- Coluna de Ranking
- Resultados das funções aplicadas

