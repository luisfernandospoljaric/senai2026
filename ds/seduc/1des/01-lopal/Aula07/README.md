# Laços de Repetição em Portugol (Visualg)

Os **laços de repetição** são estruturas utilizadas para **executar um bloco de código várias vezes**, evitando a repetição manual de comandos.

Eles são muito importantes na programação porque permitem:

- Automatizar tarefas repetitivas
- Processar grandes quantidades de dados
- Criar menus e interações com o usuário
- Realizar contagens e cálculos sequenciais

No **Portugol (Visualg)** existem três principais estruturas de repetição:

- `para`
- `enquanto`
- `repita ... ate`

---

# 1. Estrutura **PARA (for)**

## Importância

A estrutura **para** é utilizada quando **sabemos exatamente quantas vezes o laço será executado**.

É muito usada para:

- contadores
- percorrer listas
- gerar sequências de números
- repetir tarefas um número fixo de vezes

---

## Quando utilizar

Use **para** quando:

- sabemos o número de repetições
- precisamos de um contador automático
- queremos percorrer um intervalo de números

---

## Sintaxe

```portugol
para variavel de inicio ate fim passo incremento faca
   comandos
fimpara
```

## Exemplo

Mostrar números de 1 até 10.

```portugol
algoritmo "exemplo_para"

var
i: inteiro

inicio

para i de 1 ate 10 faca
   escreva(i)
fimpara

fimalgoritmo
```

# 2. Estrutura **ENQUANTO (while)**

## Importância

A estrutura **enquanto** é utilizada quando **não sabemos exatamente quantas vezes o laço será executado**.

Ela funciona verificando uma **condição lógica no início do laço**.  
Enquanto a condição for **verdadeira**, o bloco de comandos será executado.

Se a condição for **falsa**, o laço não será executado.

---

## Quando utilizar

Use **enquanto** quando:

- A repetição depende de uma condição
- Não sabemos quantas repetições irão acontecer
- Precisamos validar dados digitados pelo usuário
- Queremos controlar um processo com base em uma variável

---

## Sintaxe

```portugol
enquanto (condicao) faca
   comandos
fimenquanto
```

## Exemplo

Mostrar números de 1 até 5.

```portugol
algoritmo "exemplo_enquanto"

var
contador: inteiro

inicio

contador <- 1

enquanto (contador <= 5) faca
   escreva(contador)
   contador <- contador + 1
fimenquanto

fimalgoritmo
```

# 3. Estrutura **REPITA ATÉ (do-while)**

## Importância

A estrutura **repita ... ate** é utilizada quando queremos que um bloco de código **seja executado pelo menos uma vez** antes da verificação da condição.

Diferente da estrutura **enquanto**, a condição é verificada **somente no final da execução do bloco**.

Isso garante que o código dentro do laço **sempre será executado ao menos uma vez**.

---

## Quando utilizar

Use **repita ... ate** quando:

- O código precisa executar **pelo menos uma vez**
- Precisamos validar entradas de dados
- Queremos criar **menus interativos**
- O usuário precisa tentar novamente até acertar uma informação

---

## Sintaxe

```portugol
repita
   comandos
ate (condicao)
```

## Exemplo

Solicitar uma senha ao usuário até que ele digite a senha correta.

```portugol
algoritmo "verificar_senha"

var
senha: inteiro

inicio

repita
   escreva("Digite a senha: ")
   leia(senha)
ate (senha = 1234)

escreva("Acesso permitido")

fimalgoritmo
```

# Comparação entre os Laços de Repetição

| Estrutura | Quando usar | Como funciona | Teste da condição |
|-----------|-------------|--------------|------------------|
| **para** | Quando sabemos exatamente quantas repetições acontecerão | Usa um contador que controla o início, o fim e o incremento | No início |
| **enquanto** | Quando a repetição depende de uma condição | Executa o bloco enquanto a condição for verdadeira | No início |
| **repita até** | Quando o código precisa executar pelo menos uma vez | Executa primeiro e depois verifica a condição | No final |

---

# Resumo

- **PARA**
  - Usado quando sabemos quantas vezes o laço deve repetir.
  - Possui contador automático.
  - Muito utilizado para contagens e sequências.

- **ENQUANTO**
  - Usado quando a repetição depende de uma condição lógica.
  - A condição é verificada antes da execução do bloco.

- **REPITA ATÉ**
  - Usado quando queremos que o código execute pelo menos uma vez.
  - A condição é verificada somente no final da execução.

---

## Forma fácil de lembrar

- **PARA** → sei quantas vezes vai repetir.  
- **ENQUANTO** → repete enquanto a condição for verdadeira.  
- **REPITA** → executa primeiro e depois verifica.

--- 

## 

# Exercícios de Laços de Repetição em Portugol

A seguir estão **6 exercícios simples para iniciantes**, sendo:

- **2 exercícios com `para`**
- **2 exercícios com `enquanto`**
- **2 exercícios com `repita até`**

---

# Exercícios com **PARA**

## Exercício 1

Crie um algoritmo que mostre na tela os números **de 1 até 10** utilizando a estrutura **para**.

Exemplo de saída:

```portugol
1
2
3
4
5
6
7
8
9
10
``` 


---

## Exercício 2

Crie um algoritmo que mostre os números **de 10 até 1** (ordem decrescente) utilizando **para**.

Exemplo:

```
10
9
8
7
6
5
4
3
2
1
```
---

# Exercícios com **ENQUANTO**

## Exercício 3

Crie um algoritmo que mostre os números **de 1 até 5** utilizando a estrutura **enquanto**.

---

## Exercício 4

Crie um algoritmo que peça números ao usuário **até que ele digite 0**.

Quando o usuário digitar **0**, o programa deve encerrar.

---

# Exercícios com **REPITA ATÉ**

## Exercício 5

Crie um algoritmo que peça ao usuário uma **nota entre 0 e 10**.

Caso o usuário digite um valor inválido, o programa deve pedir novamente.

Use **repita até**.

---

## Exercício 6

Crie um algoritmo que peça uma **senha ao usuário**.

O programa deve continuar pedindo a senha **até que o usuário digite 1234**.

Quando a senha estiver correta, mostre a mensagem:
---
