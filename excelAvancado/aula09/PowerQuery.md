# Power Query no Excel — Tratando Logs, Separando Colunas e Criando Tabelas

O **Power Query** é uma ferramenta do Excel usada para:

- importar dados;
- limpar informações;
- transformar arquivos;
- automatizar tratamentos;
- unir arquivos;
- separar textos;
- criar relatórios prontos para análise.

Ele é MUITO utilizado para trabalhar com:

- logs de sistemas;
- arquivos `.txt`;
- `.csv`;
- relatórios exportados;
- dados bagunçados.

---

# O que é Power Query?

O Power Query funciona como um **ETL** dentro do Excel:

| Etapa | Significado |
|---|---|
| Extract | Extrair dados |
| Transform | Transformar |
| Load | Carregar no Excel |

Ou seja:

1. Você pega o arquivo
2. Limpa e organiza
3. Carrega pronto para análise

---

# Onde fica o Power Query?

No Excel:

## Guia:

```text
Dados → Obter Dados
```

ou

```text
Dados → De Texto/CSV
```

---

# Exemplo REAL — Trabalhando com Logs

Imagine um arquivo de log assim:

```txt
2026-05-26 08:10:15;LOGIN;usuario01;SUCESSO
2026-05-26 08:12:22;LOGIN;usuario02;ERRO
2026-05-26 08:14:01;DOWNLOAD;usuario01;PDF
2026-05-26 08:20:45;UPLOAD;usuario03;IMAGEM
```

Você quer transformar isso em tabela:

| Data/Hora | Evento | Usuário | Resultado |
|---|---|---|---|
| 2026-05-26 08:10:15 | LOGIN | usuario01 | SUCESSO |

---

# PASSO A PASSO — Importando Arquivo de Log

---

# 1. Criar arquivo TXT

Abra o Bloco de Notas e cole:

```txt
2026-05-26 08:10:15;LOGIN;usuario01;SUCESSO
2026-05-26 08:12:22;LOGIN;usuario02;ERRO
2026-05-26 08:14:01;DOWNLOAD;usuario01;PDF
2026-05-26 08:20:45;UPLOAD;usuario03;IMAGEM
```

Salve como:

```txt
log.txt
```

---

# 2. Importar no Excel

No Excel:

## Vá em:

```text
Dados → Obter Dados → De Arquivo → De Texto/CSV
```

Selecione:

```text
log.txt
```

---

# 3. Abrir no Power Query

Clique em:

```text
Transformar Dados
```

Agora abrirá o Editor do Power Query.

---

# Conhecendo o Editor do Power Query

Você verá:

| Área | Função |
|---|---|
| Colunas | Dados |
| Barra de fórmulas | Fórmulas M |
| Etapas aplicadas | Histórico das transformações |
| Guia Transformar | Limpeza |
| Guia Adicionar Coluna | Novas colunas |

---

# Separando Logs em Colunas

Seu log veio assim:

| Column1 |
|---|
| 2026-05-26 08:10:15;LOGIN;usuario01;SUCESSO |

Tudo em uma única coluna.

---

# Como separar

## Selecione a coluna

Depois:

```text
Transformar → Dividir Coluna → Por Delimitador
```

---

# Escolha o delimitador

Neste caso:

```text
;
```

Resultado:

| Column1.1 | Column1.2 | Column1.3 | Column1.4 |
|---|---|---|---|
| 2026-05-26 08:10:15 | LOGIN | usuario01 | SUCESSO |

---

# Renomeando Colunas

Clique duas vezes no nome:

| Antes | Depois |
|---|---|
| Column1.1 | DataHora |
| Column1.2 | Evento |
| Column1.3 | Usuario |
| Column1.4 | Resultado |

---

# Alterando Tipos de Dados

O Power Query tenta identificar tipos automaticamente.

Você pode alterar:

| Tipo | Uso |
|---|---|
| Texto | Strings |
| Número | Valores |
| Data/Hora | Datas |
| Decimal | Valores financeiros |

---

# Exemplo

Selecione:

```text
DataHora
```

Depois:

```text
Transformar → Tipo de Dados → Data/Hora
```

---

# Filtrando Dados

Você pode filtrar igual tabela do Excel.

Exemplo:

Mostrar apenas:

```text
LOGIN
```

ou

```text
ERRO
```

---

# Removendo Linhas Vazias

## Vá em:

```text
Página Inicial → Remover Linhas → Remover Linhas em Branco
```

---

# Removendo Duplicatas

## Selecione coluna

Depois:

```text
Remover Duplicatas
```

---

# Extraindo Partes do Texto

Imagine este log:

```txt
ERRO_404_SERVIDOR
```

Você pode:

## Extrair antes do "_"

```text
Transformar → Extrair → Texto Antes do Delimitador
```

Resultado:

```text
ERRO
```

---

# Separando Data e Hora

Se a coluna tiver:

```text
2026-05-26 08:10:15
```

Você pode dividir por espaço:

```text
Dividir Coluna → Por Delimitador → Espaço
```

Resultado:

| Data | Hora |
|---|---|
| 2026-05-26 | 08:10:15 |

---

# Trabalhando com CSV

Power Query é MUITO usado para CSV.

Exemplo:

```csv
Nome,Idade,Cidade
Luis,25,Sumaré
Ana,30,Campinas
```

Importação:

```text
Dados → De Texto/CSV
```

O Power Query reconhece automaticamente.

---

# Unindo Vários Arquivos de Log

Isso é MUITO importante.

Imagine uma pasta com:

```text
log_jan.txt
log_fev.txt
log_mar.txt
```

---

# Como importar TODOS de uma vez

## Vá em:

```text
Dados → Obter Dados → De Pasta
```

Escolha a pasta.

Depois:

```text
Combinar Arquivos
```

O Power Query:

- junta tudo;
- padroniza;
- atualiza automaticamente.

---

# Atualização Automática

Esse é um dos maiores poderes do Power Query.

Depois de configurar:

## Basta clicar:

```text
Dados → Atualizar Tudo
```

Se o arquivo mudar:

- a tabela atualiza;
- novas linhas entram;
- novos arquivos são importados.

---

# Exemplo Profissional — Logs de Acesso

Imagine:

```txt
IP;USUARIO;ACAO;STATUS
192.168.0.1;admin;LOGIN;OK
192.168.0.2;maria;DELETE;NEGADO
```

Você pode:

- separar colunas;
- filtrar erros;
- contar acessos;
- criar dashboard;
- gerar indicadores.

---

# Transformações MUITO usadas

| Ação | Onde |
|---|---|
| Dividir colunas | Transformar |
| Mesclar colunas | Transformar |
| Remover linhas | Página Inicial |
| Substituir valores | Transformar |
| Pivotar | Transformar |
| Despivotar | Transformar |
| Agrupar | Transformar |
| Mesclar tabelas | Página Inicial |

---

# Agrupar Dados

Exemplo:

Contar quantos LOGIN existem.

## Vá em:

```text
Transformar → Agrupar Por
```

Resultado:

| Evento | Quantidade |
|---|---|
| LOGIN | 50 |

---

# Mesclar Tabelas (JOIN)

Semelhante ao SQL.

Você pode unir:

- clientes;
- pedidos;
- logs;
- usuários.

## Vá em:

```text
Página Inicial → Mesclar Consultas
```

---

# Linguagem M (Power Query)

O Power Query grava tudo em linguagem M.

Exemplo:

```m
= Table.SplitColumn(
    Fonte,
    "Column1",
    Splitter.SplitTextByDelimiter(";")
)
```

Você NÃO precisa programar no começo.

O Power Query gera isso automaticamente.

---

# Fluxo Profissional de Trabalho

## Processo real:

```text
Arquivo TXT/CSV
        ↓
Power Query
        ↓
Limpeza
        ↓
Separação
        ↓
Tratamento
        ↓
Tabela Excel
        ↓
Dashboard
```

---

# Dicas 

## Use Power Query quando:

-  Arquivos chegam todo dia  
-  Dados vêm bagunçados  
-  Precisa automatizar  
-  Trabalha com logs  
-  Trabalha com CSV/TXT  
- Precisa limpar dados repetidamente

---

# Quando NÃO usar

-  Pequenas tabelas simples  
- Edição manual rápida  
- Cálculos complexos (melhor Excel/DAX)

---

# O que aprender depois

Após dominar isso, estude:

1. Mesclar consultas
2. Acrescentar consultas
3. Colunas condicionais
4. Colunas personalizadas
5. Linguagem M
6. Power Pivot
7. DAX
8. Dashboards

---

# Atalho Mental

Pense no Power Query assim:

```text
Excel = análise
Power Query = limpeza e automação
```

Ou:

```text
Power Query prepara os dados.
Excel analisa os dados.
```