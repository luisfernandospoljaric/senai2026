# Aula 9 - Funções em Python

Conteúdo nos slides.

## Exercícios Fáceis
1. Função de saudação personalizada
Crie uma função chamada saudacao que receba um nome e imprima uma mensagem de saudação, como "Olá, [nome]!"

```py
def saudacao(nome):
    print(f"Olá, {nome}!")
    
saudacao("luis")
```

2. Função de soma simples
Crie uma função chamada soma que receba dois números como parâmetros e retorne a soma deles.

```py
def soma(a, b):
    return a + b

resultado = soma(5, 7)
print(resultado)
```

3. Função para calcular o quadrado de um número
Crie uma função chamada quadrado que receba um número e retorne o quadrado dele.

```py
def quadrado(numero):
    return numero ** 2

print(quadrado(4))
```

## Exercícios Médios
4. Função para verificar se um número é par ou ímpar
Crie uma função chamada par_ou_impar que receba um número e retorne "Par" se for par ou "Ímpar" se for ímpar.

```py
def par_ou_impar(numero):
    if numero % 2 == 0:
        return "Par"
    else:
        return "Ímpar"

print(par_ou_impar(7))  # Ímpar
print(par_ou_impar(10))  # Par
```

5. Função que retorna o maior de dois números
Crie uma função chamada maior_numero que receba dois números e retorne o maior deles.

```py
def maior_numero(a, b):
    if a > b:
        return a
    else:
        return b

print(maior_numero(3, 9))  # 9
```

6. Função para calcular o fatorial de um número
Crie uma função chamada fatorial que receba um número e retorne o fatorial dele.

```py
def fatorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * fatorial(n - 1)

print(fatorial(5))  # 120
```

## Exercícios Difíceis
7. Função para verificar se um número é primo
Crie uma função chamada verificar_primo que receba um número e retorne True se for primo e False se não for.

```py
def verificar_primo(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

# Exemplo de uso
print(verificar_primo(7))  # True
print(verificar_primo(10))  # False
```

8. Função para inverter uma string
Crie uma função chamada inverter_string que receba uma string e retorne a string invertida.

```py
def inverter_string(texto):
    return texto[::-1]

print(inverter_string("Python"))  # nohtyP
```

9. Função para encontrar o maior número em uma lista
Crie uma função chamada maior_lista que receba uma lista de números e retorne o maior valor da lista.

```py
def maior_lista(lista):
    maior = lista[0]
    for numero in lista:
        if numero > maior:
            maior = numero
    return maior

print(maior_lista([3, 6, 2, 8, 4]))  # 8
```

## Link para entrega

https://forms.gle/BBAJnP2j3vuW3HST8