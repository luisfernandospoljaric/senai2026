# LISTA DE EXERCÍCIOS — VBA NO EXCEL 365

---

# EXERCÍCIOS FÁCEIS

## Exercício 1 — Primeira Macro

Crie uma macro que exiba a mensagem:

"Bem-vindo ao VBA!"

Utilize:
- MsgBox

---

## Exercício 2 — Nome do Usuário

Crie uma macro que:

- Pergunte o nome do usuário utilizando InputBox
- Mostre uma mensagem personalizada

Exemplo:

Olá Luis, seja bem-vindo!

---

## Exercício 3 — Soma de Dois Números

Crie uma macro que:

- Leia dois números
- Some os valores
- Mostre o resultado em uma MsgBox

---

## Exercício 4 — Número Maior

Crie uma macro que:

- Leia dois números
- Informe qual deles é o maior

Utilize:
- IF

---

## Exercício 5 — Par ou Ímpar

Crie uma macro que:

- Leia um número
- Verifique se ele é par ou ímpar

Dica:
Utilize MOD

---

# EXERCÍCIOS MÉDIOS

## Exercício 6 — Contador

Crie uma macro que:

- Mostre os números de 1 até 10 utilizando FOR

---

## Exercício 7 — Preencher Planilha

Crie uma macro que:

- Preencha automaticamente as células A1 até A20 com números de 1 a 20

---

## Exercício 8 — Tabuada

Crie uma macro que:

- Leia um número
- Gere a tabuada desse número de 1 até 10
- Mostre os resultados nas células A1 até A10

Exemplo:

5 x 1 = 5
5 x 2 = 10

---

## Exercício 9 — Média de Notas

Crie uma macro que:

- Leia 4 notas
- Calcule a média
- Informe:
  - Aprovado
  - Recuperação
  - Reprovado

Regras:
- Média >= 7 → Aprovado
- Média >= 5 → Recuperação
- Senão → Reprovado

---

## Exercício 10 — Cadastro Simples

Crie uma macro que:

- Solicite:
  - Nome
  - Idade
  - Cidade
- Grave os dados em uma planilha

Sugestão:
- Nome → Coluna A
- Idade → Coluna B
- Cidade → Coluna C

---

# EXERCÍCIOS INTERMEDIÁRIOS

## Exercício 11 — Soma Automática

Crie uma macro que:

- Leia os números das células A1 até A10
- Some todos os valores
- Mostre o total

---

## Exercício 12 — Última Linha

Crie uma macro que:

- Descubra a última linha preenchida da coluna A
- Mostre o número da linha em uma MsgBox

---

## Exercício 13 — Pintar Células

Crie uma macro que:

- Pinte as células A1 até A10 de amarelo

---

## Exercício 14 — Números Pares

Crie uma macro que:

- Preencha as células A1 até A20 apenas com números pares

---

## Exercício 15 — Contador Regressivo

Crie uma macro que:

- Mostre os números de 10 até 1

---

# EXERCÍCIOS AVANÇADOS

## Exercício 16 — Sistema de Login

Crie uma macro que:

- Solicite usuário e senha
- Verifique:

Usuário: admin
Senha: 1234

Se correto:
- Mostrar "Login realizado"

Senão:
- Mostrar "Usuário ou senha inválidos"

---

## Exercício 17 — Cadastro de Produtos

Crie uma macro que:

- Solicite:
  - Produto
  - Quantidade
  - Valor
- Grave na planilha
- Calcule:
  - Valor total

---

## Exercício 18 — Limpar Formulário

Crie uma macro que:

- Limpe os dados das células:
  - B2
  - B3
  - B4
  - B5

---

## Exercício 19 — Calculadora

Crie uma macro que:

- Leia:
  - Número 1
  - Número 2
  - Operação

Operações:
- Soma
- Subtração
- Multiplicação
- Divisão

Utilize:
- Select Case

---

## Exercício 20 — Gerador de Relatório

Crie uma macro que:

- Leia vendas de A1 até A10
- Calcule:
  - Soma
  - Média
  - Maior valor
  - Menor valor

Mostre os resultados em MsgBox.

---

# DESAFIOS

## Desafio 1 — Sistema de Cadastro Completo

Monte um sistema com:

- Botão cadastrar
- Botão limpar
- Cadastro automático
- Data automática
- Mensagem de sucesso

---

## Desafio 2 — Controle de Estoque

Crie uma macro que:

- Cadastre produtos
- Informe quantidade
- Informe estoque baixo caso quantidade < 5

---

## Desafio 3 — Mini ERP em Excel

Crie:

- Cadastro de clientes
- Cadastro de produtos
- Cadastro de vendas
- Relatório automático

---

# DESAFIO EXTRA

## Dashboard Automático

Crie um sistema que:

- Leia vendas
- Gere gráficos automaticamente
- Atualize dashboard sozinho

---

# EXERCÍCIOS DE EVENTOS

## Exercício 21 — Evento de Alteração

Crie um evento que:

- Mostre mensagem ao alterar qualquer célula

Utilize:
Worksheet_Change

---

## Exercício 22 — Evento de Abertura

Crie um evento que:

- Mostre mensagem ao abrir o arquivo

Utilize:
Workbook_Open

---

# EXERCÍCIOS DE FUNÇÕES

## Exercício 23 — Função Dobro

Crie uma função chamada:

Dobro()

Que:
- Receba um número
- Retorne o dobro

---

## Exercício 24 — Função Média

Crie uma função que:

- Receba 3 notas
- Retorne a média

---

# EXERCÍCIOS COM LOOP

## Exercício 25 — Multiplicação Automática

Crie uma macro que:

- Multiplique os números de A1 até A10 por 2
- Mostre o resultado na coluna B

---

## Exercício 26 — Contar Células Vazias

Crie uma macro que:

- Conte quantas células vazias existem entre A1 até A20

---

# EXERCÍCIOS COM FORMATAÇÃO

## Exercício 27 — Destacar Valores Altos

Crie uma macro que:

- Pinte de verde células com valores maiores que 100

---

## Exercício 28 — Negrito Automático

Crie uma macro que:

- Coloque em negrito os títulos da linha 1

---

# EXERCÍCIOS COM PLANILHAS

## Exercício 29 — Criar Nova Planilha

Crie uma macro que:

- Adicione uma nova planilha
- Renomeie para:
Relatório

---

## Exercício 30 — Navegação entre Planilhas

Crie uma macro que:

- Vá automaticamente para a planilha:
Vendas

---

# PROJETO FINAL

## Sistema Comercial em VBA

Monte um projeto contendo:

- Tela de login
- Cadastro de clientes
- Cadastro de produtos
- Controle financeiro
- Dashboard
- Relatórios automáticos
- Botões de navegação
- Pesquisa automática
- Impressão de relatório
