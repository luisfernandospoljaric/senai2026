# Aula de ÍNDICE e CORRESP no Excel

As funções **ÍNDICE** e **CORRESP** são muito usadas juntas para fazer buscas mais avançadas no Excel.  
Elas são consideradas uma alternativa mais poderosa ao PROCV.

---

# 1. Função CORRESP

A função **CORRESP** procura um valor dentro de uma linha ou coluna e retorna a posição desse valor.

## Sintaxe

```excel
=CORRESP(valor_procurado; matriz_procurada; [tipo_correspondência])
```

## Parâmetros

| Parâmetro | Explicação |
|---|---|
| valor_procurado | Valor que você deseja localizar |
| matriz_procurada | Intervalo onde será feita a busca |
| tipo_correspondência | Tipo de busca |

---

## Tipos de Correspondência

| Valor | Significado |
|---|---|
| 0 | Correspondência exata |
| 1 | Menor valor maior próximo (ordem crescente) |
| -1 | Maior valor menor próximo (ordem decrescente) |

Na maioria dos casos usamos:

```excel
0
```

---

# Exemplo Simples do CORRESP

## Tabela

| A | B |
|---|---|
| Produto | Preço |
| Mouse | 50 |
| Teclado | 120 |
| Monitor | 900 |
| Impressora | 450 |

---

## Fórmula

```excel
=CORRESP("Monitor";A2:A5;0)
```

## Resultado

```excel
3
```

### Por quê?

Dentro do intervalo:

```excel
A2:A5
```

o item **Monitor** é o **3º elemento**.

---

# 2. Função ÍNDICE

A função **ÍNDICE** retorna o valor de uma célula com base na linha e coluna informadas.

---

## Sintaxe

```excel
=ÍNDICE(matriz; núm_linha; [núm_coluna])
```

---

## Parâmetros

| Parâmetro | Explicação |
|---|---|
| matriz | Intervalo da tabela |
| núm_linha | Número da linha |
| núm_coluna | Número da coluna |

---

# Exemplo Simples do ÍNDICE

## Tabela

| A | B |
|---|---|
| Produto | Preço |
| Mouse | 50 |
| Teclado | 120 |
| Monitor | 900 |
| Impressora | 450 |

---

## Fórmula

```excel
=ÍNDICE(B2:B5;3)
```

## Resultado

```excel
900
```

### Por quê?

No intervalo:

```excel
B2:B5
```

o terceiro valor é:

```excel
900
```

---

# 3. Usando ÍNDICE + CORRESP Juntos

Aqui está o verdadeiro poder.

O CORRESP localiza a posição.  
O ÍNDICE retorna o valor dessa posição.

---

# Exemplo Completo

## Tabela

| A | B |
|---|---|
| Produto | Preço |
| Mouse | 50 |
| Teclado | 120 |
| Monitor | 900 |
| Impressora | 450 |

---

## Objetivo

Encontrar o preço do produto:

```text
Monitor
```

---

## Fórmula

```excel
=ÍNDICE(B2:B5;CORRESP("Monitor";A2:A5;0))
```

---

# Como o Excel Resolve

## Etapa 1 — CORRESP

```excel
CORRESP("Monitor";A2:A5;0)
```

Resultado:

```excel
3
```

---

## Etapa 2 — ÍNDICE

O Excel substitui:

```excel
=ÍNDICE(B2:B5;3)
```

Resultado:

```excel
900
```

---

# Vantagens sobre PROCV

| PROCV | ÍNDICE + CORRESP |
|---|---|
| Só busca da esquerda para direita | Busca em qualquer direção |
| Quebra ao inserir colunas | Mais seguro |
| Menos flexível | Muito mais flexível |
| Mais limitado | Mais profissional |

---

# Exemplo Dinâmico

## Tabela

| A | B |
|---|---|
| Produto | Preço |
| Mouse | 50 |
| Teclado | 120 |
| Monitor | 900 |
| Impressora | 450 |

---

## Campo de Pesquisa

| D | E |
|---|---|
| Produto Procurado | Monitor |

---

## Fórmula

```excel
=ÍNDICE(B2:B5;CORRESP(E2;A2:A5;0))
```

---

# Resultado

Se em E2 estiver:

```text
Monitor
```

Resultado:

```text
900
```

Se mudar para:

```text
Mouse
```

Resultado:

```text
50
```

---

# Exemplo Avançado — Buscar Nome e Coluna

## Tabela

| A | B | C |
|---|---|---|
| Produto | Preço | Estoque |
| Mouse | 50 | 15 |
| Teclado | 120 | 8 |
| Monitor | 900 | 5 |

---

## Objetivo

Buscar o estoque do Monitor.

---

## Fórmula

```excel
=ÍNDICE(C2:C4;CORRESP("Monitor";A2:A4;0))
```

Resultado:

```text
5
```

---

# Exemplo SUPER Avançado (Busca em Linha e Coluna)

## Tabela

| A | B | C | D |
|---|---|---|---|
| Produto | Janeiro | Fevereiro | Março |
| Mouse | 10 | 15 | 20 |
| Teclado | 5 | 8 | 12 |
| Monitor | 2 | 4 | 6 |

---

## Objetivo

Buscar vendas do Monitor em Fevereiro.

---

## Fórmula

```excel
=ÍNDICE(B2:D4;CORRESP("Monitor";A2:A4;0);CORRESP("Fevereiro";B1:D1;0))
```

---

# Como Funciona

## Primeiro CORRESP

```excel
CORRESP("Monitor";A2:A4;0)
```

Resultado:

```text
3
```

---

## Segundo CORRESP

```excel
CORRESP("Fevereiro";B1:D1;0)
```

Resultado:

```text
2
```

---

## ÍNDICE

```excel
=ÍNDICE(B2:D4;3;2)
```

Resultado:

```text
4
```

---

# Dicas Importantes

## 1. Sempre use 0 no CORRESP

```excel
CORRESP(valor;intervalo;0)
```

Evita erros de busca aproximada.

---

## 2. Use referências absolutas

Exemplo:

```excel
=ÍNDICE($B$2:$B$5;CORRESP(E2;$A$2:$A$5;0))
```

Isso evita problemas ao arrastar fórmulas.

---

## 3. Combine com SEERRO

```excel
=SEERRO(ÍNDICE(B2:B5;CORRESP(E2;A2:A5;0));"Não encontrado")
```

---

# Atividade 01 

- 1 Utilizando a função **PROCV()** preencha a coluna **G "Valor unitário"** buscando os dados na **tabela** ao lado
- 2 Também utilizando a função **PROCV()** preencha a coluna **H "Frete"** buscando os dados na **tabela** ao lado.
- 3 Calcule o total na coluna **I "Total", o frete é por produto, verifique a quantidade de cada produto e some ao frete.
- 4 Calcule o "Total" geral na célula **I32**

**Faça o download da tabela Exercício01**

---
# Atividade 02

- Faça o download do **Exercicio.pdf** e do excel **Base Exercicio**

# Formulário para entrega
https://forms.gle/C3ByYCwktiSX7e3C8