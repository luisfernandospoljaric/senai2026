# Laços de Repetição em VBA — Aula Completa para Excel

# O que são Laços de Repetição?

Laços de repetição (Loops) permitem executar um bloco de código várias vezes automaticamente.

Eles são extremamente utilizados no VBA para:

- percorrer linhas;
- automatizar planilhas;
- preencher células;
- validar dados;
- criar relatórios;
- realizar cálculos em massa.

---

# Principais Laços no VBA

| Estrutura | Utilização |
|---|---|
| For Next | Repetição com quantidade definida |
| For Each | Percorrer objetos/células |
| Do While | Repetir enquanto condição for verdadeira |
| Do Until | Repetir até condição ser verdadeira |

---

# 1. FOR NEXT

## O laço mais utilizado no VBA

---

# Estrutura

```vba
For contador = inicio To fim

    ' Código

Next contador
```

---

# Exemplo Simples

## Contar de 1 até 5

```vba
Sub ExemploFor()

    Dim i As Integer

    For i = 1 To 5

        MsgBox i

    Next i

End Sub
```

---

# Explicando

| Linha | Explicação |
|---|---|
| Dim i As Integer | Cria variável |
| For i = 1 To 5 | Começa repetição |
| MsgBox i | Mostra valor |
| Next i | Volta para o início |

---

# Resultado

```text
1
2
3
4
5
```

---

# Exemplo no Excel

## Preencher células automaticamente

```vba
Sub PreencherLinhas()

    Dim i As Integer

    For i = 1 To 10

        Cells(i, 1).Value = "Aluno " & i

    Next i

End Sub
```

---

# Resultado

| A |
|---|
| Aluno 1 |
| Aluno 2 |
| Aluno 3 |

...

---

# Explicando

```vba
Cells(linha, coluna)
```

| Valor | Significado |
|---|---|
| i | Linha |
| 1 | Coluna A |

---

# FOR com STEP

## Pular números

---

# Exemplo

```vba
Sub ContarDeDois()

    Dim i As Integer

    For i = 0 To 10 Step 2

        MsgBox i

    Next i

End Sub
```

---

# Resultado

```text
0
2
4
6
8
10
```

---

# FOR DECRESCENTE

```vba
Sub ContagemRegressiva()

    Dim i As Integer

    For i = 10 To 1 Step -1

        MsgBox i

    Next i

End Sub
```

---

# 2. FOR EACH

## Muito usado no Excel

Percorre objetos automaticamente.

Exemplo:

- células;
- abas;
- planilhas;
- arquivos.

---

# Estrutura

```vba
For Each item In coleção

    ' Código

Next item
```

---

# Exemplo com células

```vba
Sub PercorrerCelulas()

    Dim celula As Range

    For Each celula In Range("A1:A5")

        celula.Value = "OK"

    Next celula

End Sub
```

---

# Resultado

| A |
|---|
| OK |
| OK |
| OK |
| OK |
| OK |

---

# Explicando

| Parte | Explicação |
|---|---|
| celula | variável temporária |
| Range("A1:A5") | intervalo percorrido |

---

# Exemplo Profissional

## Pintar células vazias

```vba
Sub PintarVazias()

    Dim celula As Range

    For Each celula In Range("A1:A20")

        If celula.Value = "" Then

            celula.Interior.Color = vbYellow

        End If

    Next celula

End Sub
```

---

# 3. DO WHILE

## Repete ENQUANTO condição for verdadeira

---

# Estrutura

```vba
Do While condição

    ' Código

Loop
```

---

# Exemplo

```vba
Sub ExemploWhile()

    Dim i As Integer

    i = 1

    Do While i <= 5

        MsgBox i

        i = i + 1

    Loop

End Sub
```

---

# Funcionamento

| Passo | Resultado |
|---|---|
| i = 1 | Executa |
| i = 2 | Executa |
| i = 5 | Executa |
| i = 6 | Para |

---

# Cuidado

Se esquecer:

```vba
i = i + 1
```

Você cria um:

```text
LOOP INFINITO
```

---

# 4. DO UNTIL

## Repete ATÉ condição ser verdadeira

---

# Estrutura

```vba
Do Until condição

    ' Código

Loop
```

---

# Exemplo

```vba
Sub ExemploUntil()

    Dim i As Integer

    i = 1

    Do Until i > 5

        MsgBox i

        i = i + 1

    Loop

End Sub
```

---

# Diferença

| Estrutura | Tradução |
|---|---|
| Do While | Faça enquanto |
| Do Until | Faça até |

---

# Exemplo Real no Excel

## Percorrer linhas até encontrar vazio

```vba
Sub LerTabela()

    Dim linha As Integer

    linha = 2

    Do While Cells(linha,1).Value <> ""

        MsgBox Cells(linha,1).Value

        linha = linha + 1

    Loop

End Sub
```

---

# O que isso faz?

Percorre:

| A |
|---|
| Produto |
| Mouse |
| Teclado |
| Notebook |

Até encontrar linha vazia.

---

# Comandos Importantes

---

# EXIT FOR

Interrompe o FOR.

```vba
Exit For
```

---

# EXIT DO

Interrompe o DO.

```vba
Exit Do
```

---

# Exemplo

```vba
Sub PararLoop()

    Dim i As Integer

    For i = 1 To 10

        If i = 5 Then

            Exit For

        End If

        MsgBox i

    Next i

End Sub
```

---

# Resultado

```text
1
2
3
4
```

---

# Aplicações Reais no Excel

---

# Automatizar cadastros

```vba
For i = 2 To 100
```

---

# Ler tabelas

```vba
Do While Cells(i,1) <> ""
```

---

# Formatar células

```vba
For Each celula In Range(...)
```

---

# Criar relatórios

```vba
For Each aba In Worksheets
```

---

# Erros Mais Comuns

| Erro | Problema |
|---|---|
| Esquecer Next | Loop quebra |
| Esquecer incremento | Loop infinito |
| Intervalo errado | Código não executa |
| Variável sem DIM | Erros inesperados |

---

# Dica Profissional

Sempre utilize:

```vba
Option Explicit
```

No topo do módulo.

Isso obriga declarar variáveis.

---

# Exercício 1 — Básico

Crie um FOR que escreva:

```text
Produto 1
Produto 2
Produto 3
```

Até:

```text
Produto 20
```

---

# Exercício 2 — Intermediário

Percorra:

```vba
Range("A1:A20")
```

E:

- se a célula estiver vazia;
- pinte de vermelho.

---

# Exercício 3 — Avançado

Crie uma automação que:

- percorra produtos;
- some valores;
- mostre total em MsgBox.

---

# Resumo Final

| Estrutura | Melhor Uso |
|---|---|
| For Next | Quantidade definida |
| For Each | Objetos e células |
| Do While | Condição verdadeira |
| Do Until | Até condição ocorrer |

---

# Quando usar?

Use loops em VBA para:

- Automatizar Excel  
- Criar relatórios  
- Manipular células  
- Processar grandes tabelas  
- Criar sistemas no Excel  
- Economizar tempo  
- Desenvolver automações profissionais