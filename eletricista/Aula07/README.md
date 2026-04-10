#  Exercícios de Excel (SOMA, SE, MÉDIA e outras funções)

---

##  Exercício 1 — Controle de Notas

###  Tabela:
| Aluno | Nota 1 | Nota 2 | Nota 3 |
|------|--------|--------|--------|
| Ana  | 7      | 8      | 6      |
| João | 5      | 4      | 6      |
| Maria| 9      | 8      | 10     |
| Pedro| 6      | 5      | 5      |

###  Tarefas:
- Calcular a **média** de cada aluno  
- Criar uma coluna **Situação**:
  - Média ≥ 7 → "Aprovado"
  - Caso contrário → "Reprovado"

---

##  Exercício 2 — Controle de Vendas

###  Tabela:
| Vendedor | Janeiro | Fevereiro | Março |
|----------|--------|-----------|--------|
| Carlos   | 1000   | 1500      | 2000   |
| Ana      | 2000   | 2500      | 3000   |
| João     | 800    | 900       | 1000   |

###  Tarefas:
- Calcular o **total vendido** por vendedor  
- Criar uma coluna **Bônus**:
  - Total ≥ 5000 → "Ganhou bônus"
  - Caso contrário → "Sem bônus"


---

##  Exercício 3 — Estatística de Turma

###  Tabela:
| Aluno | Nota |
|------|------|
| Ana  | 7    |
| João | 5    |
| Maria| 9    |
| Pedro| 6    |
| Lucas| 10   |

###  Tarefas:
- Calcular a **média da turma**  
- Encontrar a **maior nota**  
- Encontrar a **menor nota**


---

## DESAFIO — Controle de Estoque

###  Tabela 1 (Estoque):
| Produto  | Quantidade |
|----------|------------|
| Arroz    | 10         |
| Feijão   | 3          |
| Macarrão | 15         |
| Açúcar   | 2          |

###  Tabela 2 (Consulta):
| Produto | Situação |
|--------|----------|

## Tarefas:
- Buscar a **quantidade do produto automaticamente**  
- Criar a situação:
  - Quantidade ≥ 5 → "Estoque OK"
  - Quantidade < 5 → "Estoque Baixo"
- Contar quantos produtos estão com estoque baixo

### Funções utilizadas:
- `PROCV` ou `XLOOKUP`
- `SE`
- `CONT.SE`

---

