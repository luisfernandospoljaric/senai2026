# ✅ GABARITO

## Exercício 1
```python
try:
    n1 = float(input("Nota 1: "))
    n2 = float(input("Nota 2: "))
    n3 = float(input("Nota 3: "))

    media = (n1 + n2 + n3) / 3

    if media >= 7:
        print("Aprovado")
    else:
        print("Reprovado")
except ValueError:
    print("Digite apenas números")
```

## Exercício 2
```python
num = int(input("Digite um número: "))

for i in range(0, num + 1):
    if i % 2 == 0:
        print(i)
```

## Exercício 3
```python
nomes = []

while True:
    nome = input("Digite um nome (ou sair): ")
    if nome.lower() == "sair":
        break
    nomes.append(nome)

print(nomes)
```

## Exercício 4
```python
numeros = []

while True:
    try:
        n = int(input("Digite um número (0 para sair): "))
        if n == 0:
            break
        numeros.append(n)
    except ValueError:
        print("Valor inválido")

soma = 0
for n in numeros:
    soma += n

print("Soma:", soma)
```

## Exercício 5
```python
import pandas as pd

dados = {
    "Nome": ["Ana", "João", "Carlos"],
    "Idade": [17, 22, 15]
}

df = pd.DataFrame(dados)
print(df[df["Idade"] >= 18])
```

## Exercício 6
```python
usuario_correto = "admin"
senha_correta = "123"
tentativas = 0

while tentativas < 3:
    usuario = input("Usuário: ")
    senha = input("Senha: ")

    if usuario == usuario_correto and senha == senha_correta:
        print("Acesso liberado")
        break
    else:
        tentativas += 1
        print("Dados incorretos")
else:
    print("Acesso bloqueado")
```

## Exercício 7
```python
try:
    num = int(input("Digite um número: "))
    for i in range(1, 11):
        print(num, "x", i, "=", num * i)
except ValueError:
    print("Digite um número válido")
```

## Exercício 8
```python
import pandas as pd

dados = {
    "Produto": ["Caneta", "Caderno", "Borracha"],
    "Preço": [2.5, 15, 1.5],
    "Estoque": [10, 3, 2]
}

df = pd.DataFrame(dados)
print(df[df["Estoque"] < 5])
```

## Exercício 9
```python
import pandas as pd

dados = {
    "Aluno": ["Ana", "João", "Pedro"],
    "Nota": [7, 5, 9]
}

df = pd.DataFrame(dados)
media = df["Nota"].mean()

print(df[df["Nota"] < media])
```

## Exercício 10
```python
import pandas as pd

vendas = []

while True:
    try:
        valor = float(input("Digite o valor da venda (0 para sair): "))
        if valor == 0:
            break
        vendas.append(valor)
    except ValueError:
        print("Valor inválido")

df = pd.DataFrame(vendas, columns=["Vendas"])
print("Total:", df["Vendas"].sum())
print("Média:", df["Vendas"].mean())
```
