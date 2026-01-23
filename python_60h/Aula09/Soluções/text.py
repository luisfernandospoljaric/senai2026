try:
    x =int(input("Digite um número: "))
    # código que pode lançar uma exceção
    resultado = 10 / x
    print("Resultado:", resultado)
except ZeroDivisionError:
    # tratamento específico para divisão por zero
    print("Não é possível dividir por zero.")
