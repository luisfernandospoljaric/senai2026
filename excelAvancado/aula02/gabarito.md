# GABARITO — EXERCÍCIOS VBA EXCEL 365

---

# Exercício 1 — Primeira Macro

```vb
Sub Exercicio1()

    MsgBox "Bem-vindo ao VBA!"

End Sub
```

---

# Exercício 2 — Nome do Usuário

```vb
Sub Exercicio2()

    Dim nome As String

    nome = InputBox("Digite seu nome:")

    MsgBox "Olá " & nome & ", seja bem-vindo!"

End Sub
```

---

# Exercício 3 — Soma de Dois Números

```vb
Sub Exercicio3()

    Dim n1 As Double
    Dim n2 As Double
    Dim soma As Double

    n1 = InputBox("Digite o primeiro número:")
    n2 = InputBox("Digite o segundo número:")

    soma = n1 + n2

    MsgBox "Resultado: " & soma

End Sub
```

---

# Exercício 4 — Número Maior

```vb
Sub Exercicio4()

    Dim n1 As Double
    Dim n2 As Double

    n1 = InputBox("Digite o primeiro número:")
    n2 = InputBox("Digite o segundo número:")

    If n1 > n2 Then
        MsgBox "O maior número é: " & n1
    Else
        MsgBox "O maior número é: " & n2
    End If

End Sub
```

---

# Exercício 5 — Par ou Ímpar

```vb
Sub Exercicio5()

    Dim numero As Integer

    numero = InputBox("Digite um número:")

    If numero Mod 2 = 0 Then
        MsgBox "Número PAR"
    Else
        MsgBox "Número ÍMPAR"
    End If

End Sub
```

---

# Exercício 6 — Contador

```vb
Sub Exercicio6()

    Dim i As Integer

    For i = 1 To 10

        MsgBox i

    Next i

End Sub
```

---

# Exercício 7 — Preencher Planilha

```vb
Sub Exercicio7()

    Dim i As Integer

    For i = 1 To 20

        Cells(i, 1).Value = i

    Next i

End Sub
```

---

# Exercício 8 — Tabuada

```vb
Sub Exercicio8()

    Dim numero As Integer
    Dim i As Integer

    numero = InputBox("Digite um número:")

    For i = 1 To 10

        Cells(i, 1).Value = numero & " x " & i & " = " & numero * i

    Next i

End Sub
```

---

# Exercício 9 — Média de Notas

```vb
Sub Exercicio9()

    Dim n1 As Double
    Dim n2 As Double
    Dim n3 As Double
    Dim n4 As Double
    Dim media As Double

    n1 = InputBox("Nota 1:")
    n2 = InputBox("Nota 2:")
    n3 = InputBox("Nota 3:")
    n4 = InputBox("Nota 4:")

    media = (n1 + n2 + n3 + n4) / 4

    If media >= 7 Then

        MsgBox "Aprovado"

    ElseIf media >= 5 Then

        MsgBox "Recuperação"

    Else

        MsgBox "Reprovado"

    End If

End Sub
```

---

# Exercício 10 — Cadastro Simples

```vb
Sub Exercicio10()

    Dim linha As Long

    linha = Cells(Rows.Count, 1).End(xlUp).Row + 1

    Cells(linha, 1).Value = InputBox("Nome:")
    Cells(linha, 2).Value = InputBox("Idade:")
    Cells(linha, 3).Value = InputBox("Cidade:")

    MsgBox "Cadastro realizado!"

End Sub
```

---

# Exercício 11 — Soma Automática

```vb
Sub Exercicio11()

    Dim total As Double
    Dim i As Integer

    total = 0

    For i = 1 To 10

        total = total + Cells(i, 1).Value

    Next i

    MsgBox "Total: " & total

End Sub
```

---

# Exercício 12 — Última Linha

```vb
Sub Exercicio12()

    Dim ultima As Long

    ultima = Cells(Rows.Count, 1).End(xlUp).Row

    MsgBox "Última linha: " & ultima

End Sub
```

---

# Exercício 13 — Pintar Células

```vb
Sub Exercicio13()

    Range("A1:A10").Interior.Color = vbYellow

End Sub
```

---

# Exercício 14 — Números Pares

```vb
Sub Exercicio14()

    Dim i As Integer
    Dim numero As Integer

    numero = 2

    For i = 1 To 20

        Cells(i, 1).Value = numero

        numero = numero + 2

    Next i

End Sub
```

---

# Exercício 15 — Contador Regressivo

```vb
Sub Exercicio15()

    Dim i As Integer

    For i = 10 To 1 Step -1

        MsgBox i

    Next i

End Sub
```

---

# Exercício 16 — Sistema de Login

```vb
Sub Exercicio16()

    Dim usuario As String
    Dim senha As String

    usuario = InputBox("Usuário:")
    senha = InputBox("Senha:")

    If usuario = "admin" And senha = "1234" Then

        MsgBox "Login realizado"

    Else

        MsgBox "Usuário ou senha inválidos"

    End If

End Sub
```

---

# Exercício 17 — Cadastro de Produtos

```vb
Sub Exercicio17()

    Dim linha As Long
    Dim produto As String
    Dim quantidade As Integer
    Dim valor As Double
    Dim total As Double

    linha = Cells(Rows.Count, 1).End(xlUp).Row + 1

    produto = InputBox("Produto:")
    quantidade = InputBox("Quantidade:")
    valor = InputBox("Valor:")

    total = quantidade * valor

    Cells(linha, 1).Value = produto
    Cells(linha, 2).Value = quantidade
    Cells(linha, 3).Value = valor
    Cells(linha, 4).Value = total

    MsgBox "Produto cadastrado!"

End Sub
```

---

# Exercício 18 — Limpar Formulário

```vb
Sub Exercicio18()

    Range("B2:B5").ClearContents

End Sub
```

---

# Exercício 19 — Calculadora

```vb
Sub Exercicio19()

    Dim n1 As Double
    Dim n2 As Double
    Dim operacao As String
    Dim resultado As Double

    n1 = InputBox("Número 1:")
    n2 = InputBox("Número 2:")
    operacao = InputBox("Operação (+ - * /):")

    Select Case operacao

        Case "+"
            resultado = n1 + n2

        Case "-"
            resultado = n1 - n2

        Case "*"
            resultado = n1 * n2

        Case "/"
            resultado = n1 / n2

        Case Else
            MsgBox "Operação inválida"
            Exit Sub

    End Select

    MsgBox "Resultado: " & resultado

End Sub
```

---

# Exercício 20 — Gerador de Relatório

```vb
Sub Exercicio20()

    Dim soma As Double
    Dim media As Double
    Dim maior As Double
    Dim menor As Double

    soma = WorksheetFunction.Sum(Range("A1:A10"))
    media = WorksheetFunction.Average(Range("A1:A10"))
    maior = WorksheetFunction.Max(Range("A1:A10"))
    menor = WorksheetFunction.Min(Range("A1:A10"))

    MsgBox "Soma: " & soma & vbCrLf & _
           "Média: " & media & vbCrLf & _
           "Maior: " & maior & vbCrLf & _
           "Menor: " & menor

End Sub
```

---

# Exercício 21 — Evento de Alteração

```vb
Private Sub Worksheet_Change(ByVal Target As Range)

    MsgBox "A célula foi alterada!"

End Sub
```

---

# Exercício 22 — Evento de Abertura

```vb
Private Sub Workbook_Open()

    MsgBox "Bem-vindo ao sistema!"

End Sub
```

---

# Exercício 23 — Função Dobro

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

# Exercício 24 — Função Média

```vb
Function MediaNotas(n1 As Double, n2 As Double, n3 As Double)

    MediaNotas = (n1 + n2 + n3) / 3

End Function
```

No Excel:

```excel
=MediaNotas(7;8;9)
```

---

# Exercício 25 — Multiplicação Automática

```vb
Sub Exercicio25()

    Dim i As Integer

    For i = 1 To 10

        Cells(i, 2).Value = Cells(i, 1).Value * 2

    Next i

End Sub
```

---

# Exercício 26 — Contar Células Vazias

```vb
Sub Exercicio26()

    Dim vazias As Integer

    vazias = WorksheetFunction.CountBlank(Range("A1:A20"))

    MsgBox "Quantidade de células vazias: " & vazias

End Sub
```

---

# Exercício 27 — Destacar Valores Altos

```vb
Sub Exercicio27()

    Dim i As Integer

    For i = 1 To 20

        If Cells(i, 1).Value > 100 Then

            Cells(i, 1).Interior.Color = vbGreen

        End If

    Next i

End Sub
```

---

# Exercício 28 — Negrito Automático

```vb
Sub Exercicio28()

    Rows(1).Font.Bold = True

End Sub
```

---

# Exercício 29 — Criar Nova Planilha

```vb
Sub Exercicio29()

    Worksheets.Add.Name = "Relatório"

End Sub
```

---

# Exercício 30 — Navegação entre Planilhas

```vb
Sub Exercicio30()

    Sheets("Vendas").Select

End Sub
```