# VBA no Excel 365 — Aula Completa para Iniciantes

O **VBA (Visual Basic for Applications)** é a linguagem de programação do Excel.  
Com ele, você pode:

- Automatizar tarefas repetitivas
- Criar botões e formulários
- Manipular planilhas automaticamente
- Criar sistemas dentro do Excel
- Gerar relatórios automáticos
- Trabalhar com banco de dados e arquivos

---

# 1. O QUE É VBA?

VBA é a linguagem integrada ao Excel usada para criar:

- **Macros**
- Automação
- Funções personalizadas
- Sistemas administrativos
- Dashboards automatizados

---

# 2. COMO ABRIR O VBA NO EXCEL 365

## Ativar a guia Desenvolvedor

1. Abra o Excel
2. Clique em **Arquivo**
3. Vá em **Opções**
4. Clique em **Personalizar Faixa de Opções**
5. Marque:
   - ✅ Desenvolvedor
6. Clique em **OK**

---

## Abrir o Editor VBA

Atalho:

```text
ALT + F11
```

---

# 3. ESTRUTURA DO VBA

Quando abrir o VBA você verá:

| Área | Função |
|---|---|
| Project Explorer | Lista as planilhas e arquivos |
| Module | Onde escrevemos códigos |
| Janela Immediate | Testes rápidos |
| Properties | Propriedades dos objetos |

---

# 4. CRIANDO O PRIMEIRO CÓDIGO

## Inserir módulo

No VBA:

```text
Inserir → Módulo
```

---

## Primeiro programa

```vb
Sub PrimeiroPrograma()

    MsgBox "Olá Mundo!"

End Sub
```

---

## Explicação

| Comando | Função |
|---|---|
| Sub | Início da macro |
| MsgBox | Mostra mensagem |
| End Sub | Final da macro |

---

# 5. EXECUTANDO UMA MACRO

Você pode executar:

- F5 no VBA
- Ou no Excel:
  - Desenvolvedor → Macros → Executar

---

# 6. VARIÁVEIS NO VBA

Variáveis armazenam informações.

## Exemplo

```vb
Sub Variaveis()

    Dim nome As String
    Dim idade As Integer

    nome = "Luis"
    idade = 30

    MsgBox nome & " tem " & idade & " anos"

End Sub
```

---

# 7. TIPOS DE DADOS

| Tipo | Uso |
|---|---|
| String | Texto |
| Integer | Número inteiro |
| Double | Número decimal |
| Boolean | Verdadeiro/Falso |
| Date | Datas |

---

# 8. ENTRADA DE DADOS

## InputBox

```vb
Sub Entrada()

    Dim nome As String

    nome = InputBox("Digite seu nome:")

    MsgBox "Bem-vindo " & nome

End Sub
```

---

# 9. ESTRUTURA DE DECISÃO

## IF

```vb
Sub VerificarIdade()

    Dim idade As Integer

    idade = InputBox("Digite a idade")

    If idade >= 18 Then
        MsgBox "Maior de idade"
    Else
        MsgBox "Menor de idade"
    End If

End Sub
```

---

# 10. OPERADORES

| Operador | Função |
|---|---|
| = | Igual |
| <> | Diferente |
| > | Maior |
| < | Menor |
| >= | Maior igual |
| <= | Menor igual |

---

# 11. ESTRUTURAS DE REPETIÇÃO

# FOR

```vb
Sub Contador()

    Dim i As Integer

    For i = 1 To 10
        MsgBox i
    Next i

End Sub
```

---

# WHILE

```vb
Sub Enquanto()

    Dim i As Integer

    i = 1

    While i <= 5

        MsgBox i

        i = i + 1

    Wend

End Sub
```

---

# 12. TRABALHANDO COM CÉLULAS

## Escrever em células

```vb
Sub EscreverCelula()

    Range("A1").Value = "Excel VBA"

End Sub
```

---

## Ler células

```vb
Sub LerCelula()

    MsgBox Range("A1").Value

End Sub
```

---

# 13. TRABALHANDO COM LINHAS E COLUNAS

## Linha inteira

```vb
Rows(1).Delete
```

---

## Coluna inteira

```vb
Columns("A").Delete
```

---

# 14. SELECIONANDO PLANILHAS

```vb
Sheets("Plan1").Select
```

---

# 15. ÚLTIMA LINHA PREENCHIDA

Muito usado em automações.

```vb
Sub UltimaLinha()

    Dim ultima As Long

    ultima = Cells(Rows.Count, 1).End(xlUp).Row

    MsgBox ultima

End Sub
```

---

# 16. CRIANDO UMA TABELA AUTOMATICAMENTE

```vb
Sub CriarTabela()

    Dim i As Integer

    For i = 1 To 10

        Cells(i, 1).Value = i
        Cells(i, 2).Value = i * 10

    Next i

End Sub
```

---

# 17. FORMATANDO CÉLULAS

```vb
Sub Formatar()

    Range("A1").Font.Bold = True
    Range("A1").Interior.Color = vbYellow

End Sub
```

---

# 18. LOOP EM PLANILHAS

```vb
Sub Percorrer()

    Dim ws As Worksheet

    For Each ws In Worksheets

        MsgBox ws.Name

    Next ws

End Sub
```

---

# 19. CRIANDO BOTÕES

## Passos

1. Desenvolvedor
2. Inserir
3. Botão
4. Associar Macro

---

# 20. FUNÇÕES PERSONALIZADAS

Você pode criar funções iguais às do Excel.

## Exemplo

```vb
Function Dobro(valor As Double)

    Dobro = valor * 2

End Function
```

No Excel:

```excel
=Dobro(A1)
```

---

# 21. EVENTOS AUTOMÁTICOS

## Executar ao alterar célula

Dentro da planilha:

```vb
Private Sub Worksheet_Change(ByVal Target As Range)

    MsgBox "A célula foi alterada!"

End Sub
```

---

# 22. MANIPULANDO ARQUIVOS

## Abrir arquivo

```vb
Workbooks.Open "C:\Teste\arquivo.xlsx"
```

---

## Salvar

```vb
ActiveWorkbook.Save
```

---

# 23. DESABILITAR ATUALIZAÇÃO DE TELA

Aumenta velocidade da macro.

```vb
Application.ScreenUpdating = False
```

Reativar:

```vb
Application.ScreenUpdating = True
```

---

# 24. TRATAMENTO DE ERROS

```vb
Sub Tratamento()

    On Error GoTo erro

    Dim x As Integer

    x = 10 / 0

    Exit Sub

erro:

    MsgBox "Ocorreu um erro!"

End Sub
```

---

# 25. EXEMPLO REAL — CADASTRO SIMPLES

## Objetivo

Cadastrar nome e idade.

```vb
Sub Cadastro()

    Dim linha As Long

    linha = Cells(Rows.Count, 1).End(xlUp).Row + 1

    Cells(linha, 1).Value = InputBox("Nome")
    Cells(linha, 2).Value = InputBox("Idade")

    MsgBox "Cadastro realizado!"

End Sub
```

---

# 26. BOAS PRÁTICAS

## Sempre use:

```vb
Option Explicit
```

Isso obriga declarar variáveis.

---

## Nomeie variáveis corretamente

Errado:

```vb
Dim x
```

Certo:

```vb
Dim nomeCliente As String
```

---

# 27. EXERCÍCIOS

# Exercício 1 — Fácil

Crie uma macro que mostre:

```text
Bem-vindo ao VBA
```

---

# Exercício 2 — Fácil

Peça o nome do usuário e mostre mensagem personalizada.

---

# Exercício 3 — Médio

Leia dois números e mostre a soma.

---

# Exercício 4 — Médio

Preencha automaticamente as células A1 até A20 com números de 1 a 20.

---

# Exercício 5 — Difícil

Crie uma macro que:

- Peça nome
- Peça idade
- Grave na planilha
- Mostre mensagem de sucesso

---

# 28. PROJETO FINAL SUGERIDO

## Sistema de Cadastro

Crie:

- Botão cadastrar
- Cadastro automático
- Pesquisa
- Exclusão
- Relatório
- Dashboard

---

# 29. PRINCIPAIS OBJETOS DO VBA

| Objeto | Função |
|---|---|
| Workbook | Arquivo Excel |
| Worksheet | Planilha |
| Range | Intervalo |
| Cells | Células |
| Rows | Linhas |
| Columns | Colunas |

---

# 30. DICAS IMPORTANTES

## Atalhos úteis

| Atalho | Função |
|---|---|
| ALT + F11 | Abrir VBA |
| F5 | Executar |
| F8 | Executar linha a linha |
| CTRL + G | Janela Immediate |

---

# 31. COMO APRENDER VBA MAIS RÁPIDO

## Recomendo praticar:

1. Automação de relatórios
2. Cadastro de clientes
3. Controle financeiro
4. Dashboard automático
5. Importação de dados

---

# 32. PRÓXIMOS ASSUNTOS PARA ESTUDAR

Após dominar isso:

- UserForms
- Arrays
- Collections
- Classes
- Integração com Access
- SQL no VBA
- APIs
- Automação com Outlook
- Power Query + VBA

---

# DESAFIO FINAL

Crie uma macro que:

- Leia produtos
- Leia preços
- Grave em tabela
- Calcule total automaticamente
- Gere mensagem:
  - "Venda cadastrada com sucesso"

---

# CONCLUSÃO

O VBA transforma o Excel em:

- Sistema administrativo
- ERP simples
- Automação empresarial
- Ferramenta de produtividade

Com VBA você consegue automatizar praticamente tudo dentro do Excel 365.