# Aula 05 - Introdução a python.

Todo conteudo esta nos slides.

# EXERCICIOS
## Todos os exercicios precisam ser feitos em Python!

1. Faça um Programa que peça as 4 notas bimestrais e mostre a média.
```py
# Solicita as quatro notas bimestrais
nota1 = float(input("Digite a primeira nota: "))
nota2 = float(input("Digite a segunda nota: "))
nota3 = float(input("Digite a terceira nota: "))
nota4 = float(input("Digite a quarta nota: "))

# Calcula a média das notas
media = (nota1 + nota2 + nota3 + nota4) / 4

# Exibe a média
print("\nA média das notas bimestrais é: {:.2f}".format(media))
```
2. Faça um Programa que peça a temperatura em graus Farenheit, transforme e mostre a temperatura em graus Celsius. C = (5 * (F-32) / 9).
```python
# Solicita a temperatura em Fahrenheit
fahrenheit = float(input("Digite a temperatura em graus Fahrenheit: "))

# Converte para Celsius
celsius = (5 * (fahrenheit - 32) / 9)

# Exibe a temperatura em Celsius
print("\nA temperatura em graus Celsius é: {:.2f}°C".format(celsius))
```

3. Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre: o produto do dobro do primeiro com metade do segundo. a soma do triplo do primeiro com o terceiro. o terceiro elevado ao cubo.

```python
# Solicita os dois números inteiros e o número real
numero1 = int(input("Digite o primeiro número inteiro: "))
numero2 = int(input("Digite o segundo número inteiro: "))
numero3 = float(input("Digite um número real: "))

# Calcula o produto do dobro do primeiro com metade do segundo
resultado1 = (2 * numero1) * (numero2 / 2)

# Calcula a soma do triplo do primeiro com o terceiro
resultado2 = (3 * numero1) + numero3

# Calcula o terceiro número elevado ao cubo
resultado3 = numero3 ** 3

# Exibe os resultados
print("\nO produto do dobro do primeiro com metade do segundo é: {:.2f}".format(resultado1))
print("A soma do triplo do primeiro com o terceiro é: {:.2f}".format(resultado2))
print("O terceiro número elevado ao cubo é: {:.2f}".format(resultado3))
```

4. Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
```py
# Solicita o valor ganho por hora e o número de horas trabalhadas no mês
valor_hora = float(input("Quanto você ganha por hora? R$ "))
horas_trabalhadas = float(input("Número de horas trabalhadas no mês: "))

# Calcula o salário total do mês
salario_total = valor_hora * horas_trabalhadas

# Exibe o salário total
print("\nO total do seu salário no mês é: R$ {:.2f}".format(salario_total))
```

5. Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês.

Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11% para o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê: salário bruto. quanto pagou ao INSS. quanto pagou ao sindicato. o salário líquido. calcule os descontos e o salário líquido, conforme a tabela abaixo:

+ Salário Bruto : R$
- IR (11%) : R$
- INSS (8%) : R$
- Sindicato ( 5%) : R$
= Salário Liquido : R$
Obs.: Salário Bruto - Descontos = Salário Líquido. 

```py
# Solicita os dados de entrada ao usuário
valor_hora = float(input("Quanto você ganha por hora? R$ "))
horas_trabalhadas = float(input("Número de horas trabalhadas no mês: "))

# Calcula o salário bruto
salario_bruto = valor_hora * horas_trabalhadas

# Calcula os descontos
ir = salario_bruto * 0.11  # 11% de Imposto de Renda
inss = salario_bruto * 0.08  # 8% para o INSS
sindicato = salario_bruto * 0.05  # 5% para o Sindicato

# Calcula o salário líquido
total_descontos = ir + inss + sindicato
salario_liquido = salario_bruto - total_descontos

# Exibe os resultados
print("\nSalário Bruto : R$ {:.2f}".format(salario_bruto))
print("IR (11%) : R$ {:.2f}".format(ir))
print("INSS (8%) : R$ {:.2f}".format(inss))
print("Sindicato (5%) : R$ {:.2f}".format(sindicato))
print("Total de descontos : R$ {:.2f}".format(total_descontos))
print("Salário Líquido : R$ {:.2f}".format(salario_liquido))

```

# Formulário de entrega

https://forms.gle/jXVBjBpTE2BBP3po6