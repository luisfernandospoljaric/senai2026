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

### 🔍 Parâmetros:
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


## Objetivo do Exercício
Aplicar funções e operações do Excel em uma base de dados realista, desenvolvendo lógica e análise de dados.

---

# Base de Dados para o exercício

Monte a seguinte tabela no Excel:

| ID | Nome       | Setor   | Salário | Vendas | Faltas | Nota Avaliação |
|----|-----------|--------|--------|--------|--------|----------------|
| 1  | Ana       | Vendas | 2500   | 12000  | 2      | 8,5            |
| 2  | Bruno     | TI     | 4000   | 3000   | 0      | 9,0            |
| 3  | Carlos    | Vendas | 2700   | 15000  | 1      | 7,0            |
| 4  | Daniela   | RH     | 3200   | 0      | 3      | 6,5            |
| 5  | Eduardo   | TI     | 4500   | 2000   | 0      | 8,0            |
| 6  | Fernanda  | Vendas | 2600   | 18000  | 4      | 9,5            |
| 7  | Gabriel   | RH     | 3000   | 0      | 2      | 7,5            |
| 8  | Helena    | TI     | 4200   | 3500   | 1      | 8,8            |
| 9  | Igor      | Vendas | 2800   | 22000  | 0      | 9,2            |
| 10 | Juliana   | RH     | 3100   | 0      | 5      | 6,0            |
| 11 | Kleber    | TI     | 3900   | 2500   | 2      | 7,8            |
| 12 | Larissa   | Vendas | 2600   | 14000  | 1      | 8,3            |

---

# Exercícios

## 1. Total de Vendas
Calcule o total de vendas da empresa.

---

## 2. Média Salarial
Calcule a média dos salários.

---

## 3. Total de Vendas (Setor Vendas)
Some apenas as vendas do setor "Vendas".

---

## 4. Funcionários de TI
Conte quantos funcionários pertencem ao setor de TI.

---

## 5. Maior e Menor Salário
Identifique:
- Maior salário
- Menor salário

---

## 6. Situação do Funcionário
Crie uma coluna chamada **Situação**:

Regras:
- Nota ≥ 8 → "Alto Desempenho"
- Nota ≥ 7 → "Bom"
- Caso contrário → "Melhorar"

---

## 7. Bônus por Vendas
Crie uma coluna chamada **Bônus**:

Regras:
- Vendas > 15000 → 10% do salário
- Vendas > 10000 → 5% do salário
- Caso contrário → 0

---

## 8. Controle de Faltas
Crie uma coluna:

- Faltas ≤ 1 → "Assíduo"
- Caso contrário → "Faltoso"

---

## 9. Média de Notas (TI)
Calcule a média das notas apenas do setor TI.

---

## 10. Ranking de Vendas
Crie um ranking baseado nas vendas (maior valor = 1º lugar).

---

# Desafio Final

Crie uma coluna chamada **Resultado Final**:

Regras:
- Nota ≥ 8 e Faltas ≤ 2 → "Excelente"
- Nota ≥ 7 → "Bom"
- Caso contrário → "Ruim"

---

# Atividades Extras

## Filtros
- Filtrar por setor
- Mostrar apenas funcionários com vendas acima de 10.000

## Gráfico
- Criar gráfico de vendas por funcionário

## Formatação Condicional
Destacar:
- Salários acima da média
- Notas abaixo de 7

---

# Desafio Extra

Peça aos alunos:
- Criar uma nova coluna com o salário + bônus
- Ordenar do maior para o menor salário
- Criar um dashboard simples

---
