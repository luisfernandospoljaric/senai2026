# Atividade Prática --- Funções do Excel

## Arquivo para utilizar

Baixe a planilha pronta, com **40 alunos, notas preenchidas e fórmulas
já aplicadas**:

**[Baixar a planilha pronta
(.xlsx)](planilha_pronta_funcoes_excel.xlsx)**

A planilha contém três abas: - **Planilha de notas:** dados dos alunos,
avaliações e resultados calculados. - **Instruções:** explicações das
funções e desafios para praticar. - **Gabarito:** fórmulas de referência
para o professor.

> Para usar no GitHub, envie o arquivo
> `planilha_pronta_funcoes_excel.xlsx` para o mesmo repositório em que
> está o `README.md`. O link acima funcionará quando os dois arquivos
> estiverem na mesma pasta.

## Objetivo

Praticar as funções `SOMA`, `MÉDIA`, `MULT`, `SE`, `SES`, `MÁXIMO` e
`MÍNIMO` por meio de uma tabela de notas de alunos.

## Estrutura da planilha

  -----------------------------------------------------------------------
  Coluna                  Campo                   Descrição
  ----------------------- ----------------------- -----------------------
  A                       ID                      Identificação do aluno

  B                       Aluno                   Nome do aluno

  C                       Turma                   Turma do aluno

  D                       Nota 1                  Primeira avaliação

  E                       Nota 2                  Segunda avaliação

  F                       Nota 3                  Terceira avaliação

  G                       Trabalho                Nota do trabalho

  H                       Prova                   Nota da prova

  I                       Soma                    Soma das cinco
                                                  avaliações

  J                       Média                   Média das cinco
                                                  avaliações

  K                       MULT (N1×N2)            Multiplicação da Nota 1
                                                  pela Nota 2

  L                       Máximo                  Maior nota entre as
                                                  avaliações

  M                       Mínimo                  Menor nota entre as
                                                  avaliações

  N                       Situação (SE)           Aprovado, Recuperação
                                                  ou Reprovado

  O                       Classificação (SES)     Excelente, Aprovado,
                                                  Recuperação ou
                                                  Reprovado
  -----------------------------------------------------------------------

## Funções e exemplos

As fórmulas abaixo são exemplos para o Excel em português. Na planilha
pronta, os resultados já estão preenchidos por fórmulas; os alunos podem
alterar os dados ou refazer os cálculos para praticar.

### 1. SOMA

Some as cinco avaliações do aluno:

``` excel
=SOMA(D2:H2)
```

### 2. MÉDIA

Calcule a média das cinco avaliações:

``` excel
=MÉDIA(D2:H2)
```

### 3. MULT

Multiplique a Nota 1 pela Nota 2:

``` excel
=MULT(D2;E2)
```

Também é possível usar o operador `*`:

``` excel
=D2*E2
```

### 4. MÁXIMO

Encontre a maior nota entre as avaliações:

``` excel
=MÁXIMO(D2:H2)
```

### 5. MÍNIMO

Encontre a menor nota entre as avaliações:

``` excel
=MÍNIMO(D2:H2)
```

### 6. SE encadeado

Critérios: - Média maior ou igual a 7: **Aprovado** - Média maior ou
igual a 5: **Recuperação** - Média abaixo de 5: **Reprovado**

``` excel
=SE(J2>=7;"Aprovado";SE(J2>=5;"Recuperação";"Reprovado"))
```

### 7. SES

Critérios: - Média maior ou igual a 9: **Excelente** - Média maior ou
igual a 7: **Aprovado** - Média maior ou igual a 5: **Recuperação** -
Média abaixo de 5: **Reprovado**

``` excel
=SES(J2>=9;"Excelente";J2>=7;"Aprovado";J2>=5;"Recuperação";J2<5;"Reprovado")
```

## Atividades práticas

1.  Confira os resultados calculados na planilha.
2.  Altere a nota de um aluno e observe como os resultados mudam.
3.  Refaça as fórmulas de soma, média, multiplicação, máximo e mínimo.
4.  Compare a classificação produzida por `SE` com a classificação
    produzida por `SES`.
5.  Descubra qual aluno possui a maior média.
6.  Descubra qual aluno possui a menor média.
7.  Calcule a média geral da turma.
8.  Conte quantos alunos foram aprovados, estão em recuperação e foram
    reprovados.
9.  Compare as médias das turmas DS-1A, DS-1B, DS-2A e DS-2B.
10. Monte um pequeno relatório com os resultados da turma.

## Desafios extras

### Média geral

``` excel
=MÉDIA(J2:J41)
```

### Maior média

``` excel
=MÁXIMO(J2:J41)
```

### Menor média

``` excel
=MÍNIMO(J2:J41)
```

### Quantidade de aprovados

``` excel
=CONT.SE(N2:N41;"Aprovado")
```

### Média de uma turma específica

``` excel
=MÉDIASE(C2:C41;"DS-1A";J2:J41)
```

## Critérios de avaliação sugeridos

  Critério                    Pontuação
  ------------------------- -----------
  SOMA                              1,0
  MÉDIA                             1,0
  MULT                              1,0
  MÁXIMO e MÍNIMO                   1,0
  SE encadeado                      2,0
  SES                               1,0
  Desafios extras                   2,0
  Organização da planilha           1,0
  **Total**                    **10,0**

## Entrega

1.  Salve uma cópia com o nome `atividade_funcoes_excel.xlsx`.
2.  Confira se as fórmulas estão funcionando.
3.  Entregue o arquivo conforme a orientação do professor.

**Bom trabalho!**
