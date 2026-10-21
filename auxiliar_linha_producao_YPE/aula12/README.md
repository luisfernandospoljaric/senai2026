# Atividade de Excel — Gestão Inteligente de uma Loja

## 1. Contexto do problema

Uma loja de informática precisa melhorar o controle de suas vendas, seu estoque e o desempenho de seus vendedores.

Atualmente, a gerência possui informações espalhadas em diferentes tabelas e precisa realizar cálculos manualmente. Isso dificulta a identificação de prejuízos, descontos excessivos, produtos com estoque baixo e vendedores que atingiram suas metas.

Você foi contratado para desenvolver uma planilha inteligente no Microsoft Excel, capaz de cruzar informações, realizar cálculos automaticamente e gerar indicadores para auxiliar a tomada de decisões.

**Objetivo:** construir um sistema de análise utilizando fórmulas, funções condicionais, operações matemáticas e relacionamentos entre tabelas.

---

## 2. Organização da planilha

Crie um arquivo Excel com três abas:

1. `Produtos`
2. `Vendedores`
3. `Vendas`

Os dados das tabelas abaixo devem ser inseridos a partir da célula A1 de cada aba. Os blocos estão separados por tabulações, facilitando a cópia e a colagem no Excel.

---

## 3. Aba Produtos

Esta tabela contém as informações comerciais e de estoque dos produtos.

```text
Código	Produto	Categoria	Custo Unitário	Preço de Venda	Estoque Inicial	Estoque Mínimo
P01	Notebook	Informática	2450	3200	18	5
P02	Monitor	Informática	590	850	25	8
P03	Teclado	Periféricos	65	120	40	10
P04	Mouse	Periféricos	22	45	60	15
P05	Headset	Periféricos	95	180	30	8
P06	Impressora	Informática	480	720	12	4
P07	Webcam	Periféricos	75	140	20	6
P08	SSD 1TB	Armazenamento	280	430	16	5
```

### Informações importantes

- **Código:** identificador único do produto.
- **Custo Unitário:** valor que a empresa paga por unidade.
- **Preço de Venda:** valor cobrado do cliente por unidade.
- **Estoque Inicial:** quantidade disponível antes das vendas.
- **Estoque Mínimo:** quantidade mínima desejada pela empresa.

Os dados desta aba deverão ser utilizados para buscar informações e realizar cálculos na aba `Vendas`.

---

## 4. Aba Vendedores

Esta tabela contém os dados dos vendedores e suas metas.

```text
ID	Vendedor	Meta Mensal	Comissão Base	Avaliação
V01	Ana	12000	3%	9
V02	Bruno	8000	2%	7
V03	Carla	15000	3%	10
V04	Diego	9000	2%	6
V05	Elisa	11000	2,5%	8
V06	Felipe	7000	2%	9
```

### Informações importantes

- **ID:** identificador do vendedor.
- **Meta Mensal:** valor de faturamento líquido que o vendedor deve alcançar.
- **Comissão Base:** percentual utilizado para calcular sua comissão.
- **Avaliação:** nota de desempenho do funcionário, de 0 a 10.

A comissão final dependerá do atingimento da meta mensal, considerando todas as vendas do vendedor.

---

## 5. Aba Vendas

Esta é a principal tabela da atividade. Cada linha representa um pedido realizado por um cliente.

```text
Pedido	Data	ID Vendedor	Código Produto	Quantidade	Forma Pagamento	Desconto Manual (%)	Devoluções
1001	01/10/2026	V01	P01	2	Pix	0%	0
1002	02/10/2026	V02	P04	15	Cartão	5%	2
1003	02/10/2026	V03	P02	4	Pix	0%	0
1004	03/10/2026	V04	P03	12	Boleto	10%	1
1005	04/10/2026	V05	P05	8	Cartão	0%	0
1006	05/10/2026	V01	P08	6	Pix	5%	1
1007	06/10/2026	V02	P06	3	Boleto	0%	0
1008	07/10/2026	V03	P01	3	Cartão	10%	1
1009	08/10/2026	V04	P07	10	Pix	0%	0
1010	09/10/2026	V05	P02	5	Boleto	5%	2
1011	10/10/2026	V06	P04	20	Pix	0%	0
1012	11/10/2026	V01	P05	4	Cartão	5%	0
1013	12/10/2026	V02	P03	15	Pix	0%	2
1014	13/10/2026	V03	P08	8	Boleto	10%	1
1015	14/10/2026	V04	P06	4	Cartão	0%	0
1016	15/10/2026	V05	P01	2	Pix	0%	0
1017	16/10/2026	V06	P07	12	Cartão	5%	1
1018	17/10/2026	V01	P02	6	Boleto	0%	0
1019	18/10/2026	V02	P05	10	Pix	10%	3
1020	19/10/2026	V03	P04	25	Cartão	0%	2
1021	20/10/2026	V04	P08	5	Pix	5%	0
1022	20/10/2026	V05	P03	18	Boleto	0%	1
1023	21/10/2026	V06	P01	1	Cartão	0%	0
1024	21/10/2026	V03	P06	2	Pix	5%	0
```

**Observação:** para esta atividade, considere que a coluna `Devoluções` representa a quantidade de unidades devolvidas, e não o número de ocorrências de devolução.

---

## 6. Desafio principal — Criar um sistema de análise

Na aba `Vendas`, crie novas colunas a partir da coluna I. Você poderá organizá-las na ordem que considerar mais adequada, desde que todos os resultados solicitados sejam apresentados.

| Campo | Descrição |
|---|---|
| Preço Unitário | Buscar o preço de venda na aba Produtos. |
| Custo Unitário | Buscar o custo do produto na aba Produtos. |
| Faturamento Bruto | Calcular o valor total dos produtos vendidos antes dos descontos. |
| Desconto Máximo Permitido | Identificar o limite de desconto conforme a forma de pagamento. |
| Desconto Aplicado | Aplicar o desconto permitido, respeitando o limite estabelecido. |
| Valor das Devoluções | Calcular o valor correspondente às unidades devolvidas. |
| Faturamento Líquido | Calcular a receita após descontos e devoluções. |
| Custo Total | Calcular o custo das unidades efetivamente vendidas. |
| Lucro Estimado | Calcular o resultado financeiro antes da comissão. |
| Comissão Final | Determinar a comissão de acordo com a meta mensal do vendedor. |
| Situação da Venda | Identificar vendas normais, descontos excessivos e vendas com devoluções. |
| Alerta de Estoque | Identificar produtos cujo estoque final esteja abaixo do mínimo. |

### Atenção à lógica

Não basta calcular cada coluna de forma isolada. Alguns resultados dependem de informações calculadas anteriormente.

Por exemplo:

- O faturamento líquido depende do faturamento bruto, dos descontos e das devoluções.
- O lucro depende do faturamento líquido e do custo total.
- A comissão depende do faturamento líquido acumulado pelo vendedor.
- O alerta de estoque depende das vendas e devoluções acumuladas de cada produto.

Planeje a ordem das fórmulas antes de começar.

---

## 7. Regras de negócio

### Regra A — Limite de desconto

O desconto máximo permitido depende da forma de pagamento.

| Forma de pagamento | Desconto máximo |
|---|---:|
| Pix | 8% |
| Cartão | 5% |
| Boleto | 3% |

O desconto aplicado deve ser o menor valor entre o desconto informado e o limite permitido.

**Exemplo:** se uma venda via boleto tiver desconto manual de 10%, o sistema deverá aplicar 3% e sinalizar a venda para revisão.

O desconto deve ser calculado sobre o faturamento bruto.

### Regra B — Devoluções

As unidades devolvidas não podem ser consideradas receita definitiva.

O aluno deverá:

1. Calcular o faturamento bruto.
2. Calcular o desconto aplicado.
3. Calcular o valor das unidades devolvidas.
4. Determinar o faturamento líquido.
5. Calcular o custo das unidades efetivamente vendidas.

Para simplificar o exercício, considere que as unidades devolvidas são aceitas pela loja, retornam ao estoque e são integralmente reembolsadas pelo preço de venda unitário.

O valor das devoluções será calculado pelo preço de venda unitário multiplicado pela quantidade devolvida.

### Regra C — Comissão dos vendedores

A comissão base está cadastrada na aba `Vendedores`.

O percentual final da comissão dependerá do faturamento líquido acumulado pelo vendedor em relação à sua meta mensal.

| Atingimento da meta | Comissão |
|---|---|
| Igual ou superior a 100% | Comissão base integral |
| Igual ou superior a 80% e inferior a 100% | Metade da comissão base |
| Inferior a 80% | Sem comissão |

A comissão deve ser calculada sobre o faturamento líquido.

**Importante:** o atingimento da meta deve considerar todas as vendas do vendedor, e não apenas o resultado de um pedido isolado.

### Regra D — Rentabilidade

Após calcular o lucro estimado de cada venda:

- Se o lucro for negativo, classifique a venda como `Prejuízo`.
- Se o lucro for igual a zero, classifique a venda como `Sem lucro`.
- Se o lucro for positivo, classifique a venda como `Lucrativa`.

O lucro estimado deve ser calculado antes da comissão, conforme solicitado no campo correspondente.

### Regra E — Estoque

O estoque final deve considerar:

- O estoque inicial do produto.
- A quantidade total vendida.
- A quantidade total de unidades devolvidas.

Utilize a seguinte lógica:

`Estoque Final = Estoque Inicial - Quantidade Vendida + Quantidade Devolvida`

Depois, compare o estoque final com o estoque mínimo cadastrado na aba `Produtos`.

Se o estoque final for menor que o estoque mínimo, o sistema deverá apresentar `Repor estoque`. Caso contrário, deverá apresentar `Estoque adequado`.

O cálculo deve considerar todas as vendas do mesmo produto, não apenas uma linha da tabela.

### Regra F — Revisão de vendas

Uma venda deverá receber um alerta de revisão quando o desconto manual informado ultrapassar o limite permitido para sua forma de pagamento.

A venda deverá continuar registrada com o desconto corrigido, mas o alerta deverá permanecer visível para a gerência.

---

## 8. Desafios de análise de dados

Depois de construir as fórmulas, responda às questões abaixo utilizando os dados da planilha.

1. Qual vendedor gerou o maior faturamento líquido?
2. Quais vendedores atingiram suas metas mensais?
3. Qual produto gerou o maior lucro total?
4. Qual foi o impacto financeiro total das devoluções?
5. Quantas vendas tiveram desconto manual acima do limite permitido?
6. Quais produtos terminaram com estoque abaixo do mínimo?
7. Qual vendedor apresentou o maior volume de unidades devolvidas?
8. Qual seria o resultado financeiro se todas as vendas classificadas como prejuízo fossem canceladas?
9. Qual forma de pagamento apresentou o maior faturamento líquido?
10. Qual departamento de produtos apresentou o maior resultado financeiro?
11. Qual foi o total pago em comissões?
12. Qual vendedor teve a maior diferença entre sua meta e seu faturamento líquido?
13. Quais produtos precisam de reposição e quantas unidades seriam necessárias para atingir o estoque mínimo?
14. Se a empresa reduzisse em 2 pontos percentuais o limite de desconto do Pix, qual seria o impacto no faturamento líquido?
15. Qual decisão você recomendaria à gerência para melhorar o resultado da loja? Justifique com pelo menos três indicadores calculados na planilha.

**Importante:** para a questão 8, considere que, se uma venda for cancelada, tanto sua receita quanto seu custo deixam de compor o resultado. A análise deve ser feita sobre o lucro antes das comissões.

---

## 9. Critérios de avaliação

| Critério | Pontuação |
|---|---:|
| Busca e relacionamento entre as tabelas | 2,0 |
| Cálculos financeiros e tratamento de devoluções | 2,0 |
| Aplicação das regras condicionais | 2,0 |
| Análise de vendedores, produtos e estoque | 2,0 |
| Interpretação dos resultados e justificativa das decisões | 2,0 |
| **Total** | **10,0** |

---

## 10. Orientações finais

- Utilize fórmulas para automatizar os cálculos.
- Não preencha manualmente os resultados que podem ser calculados.
- Utilize referências entre as abas.
- Garanta que as fórmulas funcionem para todas as linhas da tabela.
- Formate os valores financeiros como moeda e os percentuais como porcentagem.
- Utilize filtros para facilitar a análise.
- Crie uma aba adicional chamada `Dashboard` para apresentar os principais indicadores, se desejar um desafio extra.
- Justifique suas conclusões com base nos resultados obtidos.

### Desafio extra — Dashboard gerencial

Crie um painel com:

- Faturamento líquido total.
- Lucro total estimado.
- Total de comissões.
- Percentual de vendedores que atingiram a meta.
- Produtos com necessidade de reposição.
- Quantidade de vendas que precisam de revisão.
- Gráfico de faturamento líquido por vendedor.
- Gráfico de lucro por produto.

O objetivo final é transformar os dados em informações úteis para a tomada de decisões.

**Entrega:** arquivo Excel com as três abas principais, fórmulas funcionais, respostas às questões de análise e, opcionalmente, um dashboard gerencial.

---

## Autoavaliação

https://forms.cloud.microsoft/r/hSF1dn9gpQ