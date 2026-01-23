dicionario = {"a": 1, "b": 2, "c": 3}
try:
    chave = input("Digite uma chave (a, b, c): ")
    print(f"O valor para a chave '{chave}' é {dicionario[chave]}.")
except KeyError:
    print("Chave não encontrada no dicionário.")

# Definindo o dicionário do aluno (EXEMPLO)
    
aluno = {
    "nome": "Maria",
    "idade": 17,
    "nota": 8.5
}

# Pedindo ao usuário uma chave para acessar
chave = input("Digite a chave que deseja acessar (nome, idade ou nota): ")

# Usando try / except para capturar o erro caso a chave não exista
try:
    valor = aluno[chave]
    print(f"O valor da chave '{chave}' é: {valor}")
except KeyError:
    print(f"Erro: a chave '{chave}' não existe no dicionário!")