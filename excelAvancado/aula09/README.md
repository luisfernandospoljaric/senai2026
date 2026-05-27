# Importação de Dados no Excel

A importação de dados no Excel permite trazer informações de fontes externas para dentro da planilha, facilitando análises, relatórios e automações.  

Ela é muito utilizada para

- importar arquivos `.txt` e `.csv`;
- conectar planilhas;
- buscar dados da internet;
- atualizar relatórios automaticamente;
- integrar bancos de dados e sistemas.

O Excel moderno utiliza principalmente o Power Query para realizar essas importações.

---

# 8.1. Texto

A importação de texto é usada para carregar arquivos como

- `.txt`
- `.csv`
- logs de sistemas
- arquivos separados por
  - vírgula
  - ponto e vírgula
  - tabulação
  - espaço

---

## Como importar um arquivo texto

### Passo a passo

1. Abra o Excel
2. Vá em

```text
Dados → Obter Dados → De Arquivo → De TextoCSV
```

3. Escolha o arquivo
4. O Excel mostrará uma prévia
5. Clique em

- Carregar → importa diretamente
ou
- Transformar Dados → abre no Power Query

---

# Separadores de dados

Durante a importação, o Excel identifica separadores automaticamente.

## Exemplo de CSV

```csv
Nome;Idade;Cidade
Luis;25;Sumaré
Maria;30;Campinas
```

Nesse caso

- `;` é o delimitador
- cada coluna será separada automaticamente

---

# Importando Logs

Muito comum em T.I.

## Exemplo de log

```txt
2026-05-27ERRORFalha no login
2026-05-27INFOSistema iniciado
```

Você pode

- dividir colunas pelo caractere ``
- criar tabelas automáticas
- filtrar erros
- gerar dashboards

---

# Transformações comuns no Power Query

Após importar, você pode

 Transformação  Função 
------
 Dividir Colunas  Separar informações 
 Remover Linhas  Limpar cabeçalhos 
 Alterar Tipos  Converter texto em datanúmero 
 Filtrar Dados  Mostrar somente informações desejadas 
 Mesclar Tabelas  Unir arquivos 
 Acrescentar Consultas  Juntar vários arquivos 

---

# Exemplo prático

## Arquivo TXT

```txt
Produto;Quantidade;Preço
Mouse;10;50
Teclado;5;120
Monitor;2;900
```

## Resultado no Excel

 Produto  Quantidade  Preço 
---------
 Mouse  10  50 
 Teclado  5  120 
 Monitor  2  900 

---

# 8.2. Internet

O Excel também consegue importar dados diretamente da internet.

Isso é útil para

- cotações
- tabelas online
- rankings
- informações públicas
- dados governamentais
- APIs

---

# Como importar da internet

## Método tradicional

```text
Dados → Obter Dados → De Outras Fontes → Da Web
```

---

## Importando uma tabela de site

Você cola a URL

```text
httpssite.comtabela
```

O Excel

1. acessa a página;
2. identifica tabelas;
3. permite selecionar qual importar.

---

# Exemplo de uso

## Importar tabela de cotação

Você pode importar

- dólar
- euro
- ações
- criptomoedas

E atualizar automaticamente.

---

# APIs e JSON

O Power Query também importa

- JSON
- XML
- APIs REST

Exemplo

```text
httpsapi.exemplo.comclientes
```

O Excel converte os dados automaticamente em tabela.

---

# Vantagens da importação web

 Vantagem  Benefício 
------
 Atualização automática  Dados sempre recentes 
 Menos digitação  Reduz erros 
 Integração  Conecta sistemas 
 Automação  Relatórios automáticos 

---

# 8.3. Propriedades da Consulta

As propriedades da consulta controlam o comportamento da importação.

Você pode configurar

- atualização automática;
- atualização ao abrir o arquivo;
- tempo entre atualizações;
- carregamento de dados;
- conexão.

---

# Onde acessar

Após importar

```text
Dados → Consultas e Conexões
```

Depois

- clique com botão direito na consulta;
- escolha

```text
Propriedades
```

---

# Principais propriedades

 Propriedade  Função 
------
 Atualizar ao abrir  Atualiza automaticamente 
 Atualizar a cada X minutos  Atualização periódica 
 Habilitar atualização em segundo plano  Não trava o Excel 
 Manter formatação  Preserva estilos 
 Remover dados antes da atualização  Recarrega completamente 

---

# Exemplo prático

Imagine uma planilha que importa vendas de um sistema.

Você configura

```text
Atualizar a cada 5 minutos
```

Resultado

- os dados sempre ficam atualizados;
- não precisa importar manualmente.

---

# Fluxo completo de importação

```text
Fonte de Dados
       ↓
Importação
       ↓
Power Query
       ↓
Transformação
       ↓
Tabela Excel
       ↓
DashboardRelatórios
```

---

# Boas práticas

## 1. Padronize os arquivos

Use sempre

- mesmo delimitador;
- mesmas colunas;
- mesmo formato.

---

## 2. Utilize Power Query

Evite copiar e colar manualmente.

---

## 3. Automatize atualizações

Configure propriedades da consulta.

---

## 4. Valide tipos de dados

Verifique

- datas;
- números;
- moedas;
- textos.

---

# Resumo

 Tema  Objetivo 
------
 Texto  Importar arquivos TXTCSV 
 Internet  Buscar dados online 
 Propriedades da consulta  Controlar atualizações 

---

# Exercício Prático

## Objetivo

Importar um arquivo `.csv` no Excel e configurar atualização automática.

---

## Passos

1. Crie um arquivo `.csv` com

```csv
Produto;Quantidade;Preço
Notebook;5;3500
Mouse;10;80
Teclado;7;150
```

2. Importe no Excel
3. Abra no Power Query
4. Transforme os tipos
   - Produto → Texto
   - Quantidade → Número
   - Preço → Moeda
5. Carregue na planilha
6. Configure
   - atualizar ao abrir o arquivo

---

# Desafio

Importe um arquivo de log com

```txt
DataTipoMensagem
2026-05-27ERRORFalha no sistema
2026-05-27INFOSistema iniciado
```

Depois

- divida as colunas;
- filtre somente `ERROR`;
- carregue em uma tabela no Excel.