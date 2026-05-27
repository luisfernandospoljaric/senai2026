# Passo a Passo — Resolução dos Exercícios Power Query

# 1. CSV — Vendas

## Objetivos

- alterar tipos;
- criar coluna Total;
- filtrar Campinas;
- agrupar categorias.

---

## Passo 1 — Importar

```text
Dados → Obter Dados → De Texto/CSV
```

Selecione:

```text
vendas.csv
```

Clique:

```text
Transformar Dados
```

---

## Passo 2 — Alterar Tipos

Clique no ícone ao lado do nome da coluna.

Configure:

| Coluna | Tipo |
|---|---|
| ID_Venda | Número Inteiro |
| Data | Data |
| Quantidade | Número Inteiro |
| Valor | Número Decimal |

---

## Passo 3 — Criar Coluna Total

```text
Adicionar Coluna → Coluna Personalizada
```

Fórmula:

```powerquery
[Quantidade] * [Valor]
```

Nome:

```text
Total
```

---

## Passo 4 — Filtrar Campinas

Na coluna:

```text
Cidade
```

Selecione apenas:

```text
Campinas
```

---

## Passo 5 — Agrupar Categorias

```text
Transformar → Agrupar Por
```

Configuração:

| Campo | Valor |
|---|---|
| Agrupar por | Categoria |
| Nova coluna | Soma_Total |
| Operação | Soma |
| Coluna | Total |

---

# 2. TXT — Logs

## Objetivos

- dividir colunas;
- filtrar ERROR;
- contar erros.

---

## Passo 1 — Importar

```text
Dados → Obter Dados → De Texto/CSV
```

Escolha:

```text
logs.txt
```

---

## Passo 2 — Dividir Coluna

```text
Página Inicial → Dividir Coluna → Por Delimitador
```

Delimitador:

```text
|
```

---

## Passo 3 — Renomear

| Antigo | Novo |
|---|---|
| Column1.1 | Data |
| Column1.2 | Tipo |
| Column1.3 | Mensagem |

---

## Passo 4 — Filtrar ERROR

Na coluna:

```text
Tipo
```

Marque apenas:

```text
ERROR
```

---

## Passo 5 — Contar Erros

```text
Transformar → Contar Linhas
```

---

# 3. JSON — Clientes

## Objetivos

- expandir registros;
- transformar em tabela;
- filtrar idade.

---

## Passo 1 — Importar

```text
Dados → Obter Dados → De Arquivo → JSON
```

---

## Passo 2 — Converter em Tabela

Clique:

```text
Converter em Tabela
```

---

## Passo 3 — Expandir

Clique no ícone:

```text
↔
```

Selecione:

- id
- nome
- cidade
- idade

---

## Passo 4 — Filtrar

Na coluna:

```text
idade
```

Escolha:

```text
Maior que 25
```

---

# 4. XML — Produtos

## Objetivos

- expandir XML;
- filtrar produtos caros.

---

## Passo 1 — Importar XML

```text
Dados → Obter Dados → De Arquivo → XML
```

---

## Passo 2 — Expandir Nós

Clique nos ícones:

```text
↔
```

Até visualizar as colunas.

---

## Passo 3 — Alterar Tipos

Configure:

| Coluna | Tipo |
|---|---|
| Preco | Número Decimal |

---

## Passo 4 — Filtrar

Filtre:

```text
Preco > 1000
```

---

# 5. Dados Sujos

## Objetivos

- limpar dados;
- remover nulos;
- padronizar textos.

---

## Passo 1 — Remover Espaços

Selecione colunas:

```text
Nome
Cidade
```

Depois:

```text
Transformar → Formatar → Remover Espaços
```

---

## Passo 2 — Padronizar Texto

```text
Transformar → Formatar → Primeira Letra Maiúscula
```

---

## Passo 3 — Remover Vazios

Filtro:

```text
Remover Nulos
```

---

# 6. Financeiro

## Objetivos

- separar receitas;
- somar valores.

---

## Passo 1 — Filtrar Receitas

Na coluna:

```text
Tipo
```

Selecione:

```text
Receita
```

---

## Passo 2 — Agrupar

```text
Transformar → Agrupar Por
```

Operação:

```text
Soma
```

Coluna:

```text
Valor
```

---

# 7. Pasta com Arquivos

## Objetivos

- consolidar arquivos;
- combinar dados.

---

## Passo 1 — Importar Pasta

```text
Dados → Obter Dados → De Pasta
```

---

## Passo 2 — Selecionar Pasta

Escolha a pasta contendo:

- janeiro.csv
- fevereiro.csv
- marco.csv

---

## Passo 3 — Combinar

Clique:

```text
Combinar e Transformar
```

O Power Query unirá todos automaticamente.

---

# 8. JOIN — Clientes e Pedidos

## Objetivos

- mesclar tabelas;
- criar relacionamento.

---

## Passo 1 — Importar Ambos Arquivos

Importe:

- clientes.csv
- pedidos.csv

---

## Passo 2 — Mesclar

Na consulta:

```text
Pedidos
```

Clique:

```text
Página Inicial → Mesclar Consultas
```

---

## Passo 3 — Relacionamento

Selecione:

| Tabela | Coluna |
|---|---|
| Pedidos | ID_Cliente |
| Clientes | ID_Cliente |

Tipo:

```text
Left Outer
```

---

## Passo 4 — Expandir

Clique no ícone:

```text
↔
```

Selecione:

```text
Nome
```

---

# Resultado Final

| ID_Pedido | Produto | Nome |
|---|---|---|
| 101 | Mouse | Luis |
| 102 | Notebook | Ana |

---

# Dica Final

Sempre utilize:

```text
Transformar Dados
```

Pois o verdadeiro poder do Power Query está na transformação automática dos dados.