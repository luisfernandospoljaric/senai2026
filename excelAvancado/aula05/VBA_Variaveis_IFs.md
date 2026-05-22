
# Variáveis no VBA do Excel

As variáveis no VBA (Visual Basic for Applications) servem para **armazenar informações temporariamente na memória** enquanto o código está sendo executado.

Elas podem guardar:

- Números
- Textos
- Datas
- Valores verdadeiros/falsos
- Objetos do Excel
- Entre outros

---

# Estrutura de uma variável

A declaração de uma variável normalmente é feita usando `Dim`.

## Sintaxe

```vba
Dim nomeDaVariavel As Tipo
```

---

# Exemplo simples

```vba
Sub ExemploVariavel()

    Dim nome As String
    Dim idade As Integer

    nome = "Luis"
    idade = 25

    MsgBox nome & " possui " & idade & " anos."

End Sub
```

---

# Explicando linha por linha

```vba
Dim nome As String
```

Cria uma variável chamada `nome` que armazenará texto.

---

```vba
Dim idade As Integer
```

Cria uma variável chamada `idade` que armazenará números inteiros.

---

```vba
nome = "Luis"
```

Atribui o valor `"Luis"` para a variável.

---

```vba
idade = 25
```

Armazena o número 25 na variável.

---

```vba
MsgBox nome & " possui " & idade & " anos."
```

Mostra uma caixa de mensagem concatenando os valores.

Resultado:

```text
Luis possui 25 anos.
```

---

# Principais Tipos de Variáveis no VBA

| Tipo | Utilização | Exemplo |
|---|---|---|
| `Integer` | Números inteiros pequenos | 10 |
| `Long` | Números inteiros grandes | 100000 |
| `Double` | Números decimais | 10.5 |
| `String` | Textos | "Excel" |
| `Boolean` | Verdadeiro ou falso | True / False |
| `Date` | Datas e horários | 22/05/2026 |
| `Variant` | Aceita qualquer tipo | Texto ou número |
| `Object` | Objetos do Excel | Planilhas |
| `Worksheet` | Aba do Excel | Sheets("Plan1") |
| `Workbook` | Arquivo Excel | ThisWorkbook |
| `Range` | Células | Range("A1") |

---

# Exemplos de cada tipo

## Integer

```vba
Dim quantidade As Integer

quantidade = 50
```

---

## Long

```vba
Dim populacao As Long

populacao = 1000000
```

---

## Double

```vba
Dim preco As Double

preco = 99.90
```

---

## String

```vba
Dim produto As String

produto = "Notebook"
```

---

## Boolean

```vba
Dim aprovado As Boolean

aprovado = True
```

---

## Date

```vba
Dim dataAtual As Date

dataAtual = Date
```

---

## Variant

O VBA identifica automaticamente o tipo armazenado.

```vba
Dim valor As Variant

valor = 10
valor = "Texto"
```

---

# Variáveis de Objetos

No VBA do Excel, usamos muito objetos.

---

## Worksheet

```vba
Dim ws As Worksheet

Set ws = Sheets("Plan1")
```

---

## Workbook

```vba
Dim wb As Workbook

Set wb = ThisWorkbook
```

---

## Range

```vba
Dim celula As Range

Set celula = Range("A1")
```

---

# Diferença entre Variáveis Normais e Objetos

## Variáveis comuns

Usam:

```vba
=
```

Exemplo:

```vba
idade = 20
```

---

## Objetos

Usam:

```vba
Set
```

Exemplo:

```vba
Set ws = Sheets("Plan1")
```

---

# Exemplo Prático no Excel

## Ler valor de uma célula

```vba
Sub LerCelula()

    Dim nome As String

    nome = Range("A1").Value

    MsgBox "O nome digitado foi: " & nome

End Sub
```

---

# Exemplo Prático Completo

```vba
Sub CadastroProduto()

    Dim produto As String
    Dim preco As Double
    Dim quantidade As Integer
    Dim total As Double

    produto = Range("A2").Value
    preco = Range("B2").Value
    quantidade = Range("C2").Value

    total = preco * quantidade

    MsgBox "Produto: " & produto & vbCrLf & _
           "Total: R$ " & total

End Sub
```

---

# Boas práticas

## 1. Sempre use `Option Explicit`

Isso obriga declarar variáveis.

No topo do módulo:

```vba
Option Explicit
```

---

## 2. Use nomes claros

Evite:

```vba
Dim x As Integer
```

Prefira:

```vba
Dim quantidadeAlunos As Integer
```

---

## 3. Escolha o tipo correto

- Inteiros → `Integer` ou `Long`
- Decimais → `Double`
- Texto → `String`

---

# Exercício Básico

Crie uma macro que:

1. Leia:
   - Nome do produto em A1
   - Preço em B1
   - Quantidade em C1

2. Calcule o total

3. Mostre uma `MsgBox` com:
   - Produto
   - Quantidade
   - Valor Total

---

# Gabarito

```vba
Sub Exercicio()

    Dim produto As String
    Dim preco As Double
    Dim quantidade As Integer
    Dim total As Double

    produto = Range("A1").Value
    preco = Range("B1").Value
    quantidade = Range("C1").Value

    total = preco * quantidade

    MsgBox "Produto: " & produto & vbCrLf & _
           "Quantidade: " & quantidade & vbCrLf & _
           "Total: R$ " & total

End Sub
```

---

# Estruturas de Decisão em VBA para Excel

As estruturas de decisão permitem que o VBA tome decisões automaticamente com base em condições.

Elas funcionam como perguntas:

```text
SE isso acontecer → faça algo
SENÃO → faça outra coisa
```

---

# Principais Estruturas de Decisão no VBA

| Estrutura | Utilização |
|---|---|
| `If` | Verificar condições |
| `Else` | Executar alternativa |
| `ElseIf` | Verificar múltiplas condições |
| `Select Case` | Melhor opção para vários casos |

---

# 1. IF

A estrutura mais utilizada.

---

# Sintaxe

```vba
If condição Then

    ' Código

End If
```

---

# Exemplo Simples

```vba
Sub ExemploIf()

    Dim idade As Integer

    idade = 18

    If idade >= 18 Then

        MsgBox "Maior de idade"

    End If

End Sub
```

---

# Explicação

| Linha | Função |
|---|---|
| `idade = 18` | Define valor |
| `If idade >= 18` | Verifica condição |
| `MsgBox` | Mostra mensagem |

---

# Operadores de Comparação

| Operador | Significado |
|---|---|
| `=` | Igual |
| `<>` | Diferente |
| `>` | Maior |
| `<` | Menor |
| `>=` | Maior ou igual |
| `<=` | Menor ou igual |

---

# Exemplo Prático no Excel

## Objetivo

Verificar se a nota do aluno é suficiente para aprovação.

---

# Código

```vba
Sub VerificarNota()

    Dim nota As Double

    nota = Range("A1").Value

    If nota >= 7 Then

        Range("B1").Value = "Aprovado"

    End If

End Sub
```

---

# Resultado

| A | B |
|---|---|
| 8 | Aprovado |

---

# 2. IF ELSE

Permite executar um segundo bloco caso a condição seja falsa.

---

# Sintaxe

```vba
If condição Then

    ' Verdadeiro

Else

    ' Falso

End If
```

---

# Exemplo

```vba
Sub VerificarIdade()

    Dim idade As Integer

    idade = 15

    If idade >= 18 Then

        MsgBox "Pode entrar"

    Else

        MsgBox "Entrada proibida"

    End If

End Sub
```

---

# Fluxo

```text
Se idade >= 18
    Pode entrar
Senão
    Entrada proibida
```

---

# Exemplo no Excel

```vba
Sub SituacaoAluno()

    Dim nota As Double

    nota = Range("A1").Value

    If nota >= 7 Then

        Range("B1").Value = "Aprovado"

    Else

        Range("B1").Value = "Reprovado"

    End If

End Sub
```

---

# 3. ELSEIF

Usado quando existem várias condições.

---

# Sintaxe

```vba
If condição Then

ElseIf condição Then

Else

End If
```

---

# Exemplo

```vba
Sub Classificacao()

    Dim nota As Double

    nota = Range("A1").Value

    If nota >= 7 Then

        Range("B1").Value = "Aprovado"

    ElseIf nota >= 5 Then

        Range("B1").Value = "Recuperação"

    Else

        Range("B1").Value = "Reprovado"

    End If

End Sub
```

---

# Resultado

| Nota | Situação |
|---|---|
| 8 | Aprovado |
| 6 | Recuperação |
| 3 | Reprovado |

---

# Operadores Lógicos

| Operador | Função |
|---|---|
| `And` | E |
| `Or` | OU |
| `Not` | NÃO |

---

# Exemplo com AND

```vba
Sub AcessoSistema()

    Dim usuario As String
    Dim senha As String

    usuario = "admin"
    senha = "123"

    If usuario = "admin" And senha = "123" Then

        MsgBox "Login correto"

    Else

        MsgBox "Usuário ou senha inválidos"

    End If

End Sub
```

---

# Exemplo com OR

```vba
Sub Desconto()

    Dim clienteVIP As Boolean
    Dim valor As Double

    clienteVIP = True
    valor = 1200

    If clienteVIP = True Or valor > 1000 Then

        MsgBox "Possui desconto"

    End If

End Sub
```

---

# 4. SELECT CASE

Melhor opção quando existem muitos casos.

---

# Sintaxe

```vba
Select Case variável

    Case valor

    Case valor

    Case Else

End Select
```

---

# Exemplo

```vba
Sub DiaSemana()

    Dim dia As Integer

    dia = 3

    Select Case dia

        Case 1
            MsgBox "Domingo"

        Case 2
            MsgBox "Segunda"

        Case 3
            MsgBox "Terça"

        Case Else
            MsgBox "Dia inválido"

    End Select

End Sub
```

---

# Vantagem do Select Case

Evita muitos `ElseIf`.

---

# Exemplo Completo no Excel

## Objetivo

Classificar vendas.

---

# Regras

| Valor | Categoria |
|---|---|
| >= 5000 | Excelente |
| >= 3000 | Boa |
| >= 1000 | Média |
| < 1000 | Baixa |

---

# Código

```vba
Sub ClassificarVendas()

    Dim venda As Double

    venda = Range("A1").Value

    If venda >= 5000 Then

        Range("B1").Value = "Excelente"

    ElseIf venda >= 3000 Then

        Range("B1").Value = "Boa"

    ElseIf venda >= 1000 Then

        Range("B1").Value = "Média"

    Else

        Range("B1").Value = "Baixa"

    End If

End Sub
```

---

# Exercícios

# Exercício 1 — Fácil

Crie uma macro que:

- Leia um número da célula A1
- Verifique se ele é positivo ou negativo
- Mostre o resultado na célula B1

---

# Exercício 2 — Fácil

Crie uma macro que:

- Leia a idade em A1
- Se for maior ou igual a 18:
  - Mostrar "Maior de idade"
- Senão:
  - Mostrar "Menor de idade"

---

# Exercício 3 — Médio

Crie uma macro que:

- Leia uma nota em A1
- Classifique:
  - >= 7 → Aprovado
  - >= 5 → Recuperação
  - < 5 → Reprovado

---

# Exercício 4 — Médio

Crie uma macro que:

- Leia um valor em A1
- Se valor > 1000:
  - Aplicar desconto de 10%
- Senão:
  - Desconto de 5%
- Mostrar valor final em B1

---

# Exercício 5 — Difícil

Crie uma macro usando `Select Case` que:

- Leia um número de 1 a 7
- Mostre o dia da semana correspondente

---

# Exercício 6 — Difícil

Crie uma macro que:

- Leia login e senha:
  - Usuário em A1
  - Senha em B1
- Verifique:
  - admin / 123
- Mostrar:
  - "Acesso permitido"
  - ou "Acesso negado"

---

# DESAFIO

Crie uma macro de cálculo de IMC.

## Fórmula

```text
IMC = peso / altura²
```

---

# Regras

| IMC | Situação |
|---|---|
| < 18.5 | Magreza |
| 18.5 até 24.9 | Normal |
| 25 até 29.9 | Sobrepeso |
| >= 30 | Obesidade |

---

# Gabarito

# Exercício 1

```vba
Sub Ex1()

    Dim numero As Double

    numero = Range("A1").Value

    If numero >= 0 Then

        Range("B1").Value = "Positivo"

    Else

        Range("B1").Value = "Negativo"

    End If

End Sub
```

---

# Exercício 2

```vba
Sub Ex2()

    Dim idade As Integer

    idade = Range("A1").Value

    If idade >= 18 Then

        Range("B1").Value = "Maior de idade"

    Else

        Range("B1").Value = "Menor de idade"

    End If

End Sub
```

---

# Exercício 3

```vba
Sub Ex3()

    Dim nota As Double

    nota = Range("A1").Value

    If nota >= 7 Then

        Range("B1").Value = "Aprovado"

    ElseIf nota >= 5 Then

        Range("B1").Value = "Recuperação"

    Else

        Range("B1").Value = "Reprovado"

    End If

End Sub
```

---

# Exercício 4

```vba
Sub Ex4()

    Dim valor As Double
    Dim total As Double

    valor = Range("A1").Value

    If valor > 1000 Then

        total = valor * 0.9

    Else

        total = valor * 0.95

    End If

    Range("B1").Value = total

End Sub
```

---

# Exercício 5

```vba
Sub Ex5()

    Dim dia As Integer

    dia = Range("A1").Value

    Select Case dia

        Case 1
            MsgBox "Domingo"

        Case 2
            MsgBox "Segunda"

        Case 3
            MsgBox "Terça"

        Case 4
            MsgBox "Quarta"

        Case 5
            MsgBox "Quinta"

        Case 6
            MsgBox "Sexta"

        Case 7
            MsgBox "Sábado"

        Case Else
            MsgBox "Valor inválido"

    End Select

End Sub
```

---

# Exercício 6

```vba
Sub Ex6()

    Dim usuario As String
    Dim senha As String

    usuario = Range("A1").Value
    senha = Range("B1").Value

    If usuario = "admin" And senha = "123" Then

        MsgBox "Acesso permitido"

    Else

        MsgBox "Acesso negado"

    End If

End Sub
```