# 📘 Sistema de Cadastro de Produtos – Exercício com Consulta

## 📝 **Exercício – Aprimorando o Sistema de Estoque**

Neste exercício, você deve **melhorar o sistema** que já criou, adicionando um **menu de opções** e uma nova funcionalidade: **consulta de produtos já cadastrados**.

Seu sistema atual já faz o seguinte:

- Cria arquivo Excel  
- Carrega os produtos cadastrados  
- Gera ID automático  
- Cadastra novos produtos  
- Salva no arquivo Excel

Agora você deverá:

---

## 🎯 **Objetivo do Exercício**

Implemente um menu com as seguintes opções:

```
1 - Cadastrar produto
2 - Consultar produto
3 - Sair
```

### ✔ Se o usuário escolher **1 - Cadastrar**, execute exatamente seu sistema atual.

---

### ✔ Se o usuário escolher **2 - Consultar**, pergunte:

```
Deseja buscar por:
1 - ID
2 - Nome
```

### 🔎 **Busca por ID**
- Solicitar ID.  
- Mostrar o produto correspondente.  
- Se não existir, exibir **"Produto não encontrado!"**.

### 🔎 **Busca por Nome (parcial)**
- Solicitar parte do nome.  
- Exemplo: "mo" deve retornar "Mouse" e "Monitor".
- Ignorar maiúsculas/minúsculas.  
- Se nada for encontrado, mostrar **"Nenhum produto corresponde à busca."**

---

### ✔ **3 - Sair**
Finaliza o programa.

---

## 🧠 **O que você vai praticar**

- Manipulação de DataFrames  
- Filtros no Pandas (`str.contains`, comparação por valor)  
- Laços `while`  
- Menus interativos  
- Input e validação  
- Escrita e leitura de arquivos Excel  

---

# ✅ **RESPOSTA (ESCONDIDA)**

<details>
<summary><strong>Clique aqui para ver o código completo da solução</strong></summary>

```python
import pandas as pd
import os

# Caminho do arquivo
arquivo = 'Entrada_Excel_Input/produtos_cadastrados.xlsx'

# Garante que a pasta existe
os.makedirs(os.path.dirname(arquivo), exist_ok=True)

# Carrega ou cria o DataFrame
if os.path.exists(arquivo):
    produtos = pd.read_excel(arquivo)
else:
    produtos = pd.DataFrame(columns=['ID', 'Nome', 'Preço', 'Estoque'])

# Função para salvar o arquivo
def salvar():
    produtos.to_excel(arquivo, index=False)
    print("\n📁 Arquivo salvo com sucesso!")

# Função para cadastrar produto
def cadastrar_produto():
    global produtos

    # Define ID automático
    if produtos.empty:
        id_atual = 1
    else:
        id_atual = produtos['ID'].max() + 1

    print(f"\n--- Cadastro de Produto ---")
    print(f"ID automático: {id_atual}")

    nome = input("Nome do produto: ").strip()
    preco = float(input("Preço (R$): "))
    estoque = int(input("Quantidade em estoque: "))

    produtos.loc[len(produtos)] = [id_atual, nome, preco, estoque]

    salvar()

# Função para consultar produto
def consultar_produto():
    if produtos.empty:
        print("\n⚠ Nenhum produto cadastrado ainda!")
        return

    print("\n--- Consulta de Produtos ---")
    print("1 - Buscar por ID")
    print("2 - Buscar por Nome")

    opcao = input("Escolha: ").strip()

    # Buscar por ID
    if opcao == "1":
        try:
            id_busca = int(input("ID do produto: "))
            resultado = produtos[produtos['ID'] == id_busca]

            if resultado.empty:
                print("\n❌ Produto não encontrado!")
            else:
                print("\nProduto encontrado:")
                print(resultado)

        except ValueError:
            print("\n⚠ ID inválido!")

    # Buscar por Nome
    elif opcao == "2":
        nome_busca = input("Parte do nome: ").strip()
        resultado = produtos[
            produtos["Nome"].str.contains(nome_busca, case=False, na=False)
        ]

        if resultado.empty:
            print("\n❌ Nenhum produto corresponde à busca.")
        else:
            print("\nProdutos encontrados:")
            print(resultado)

    else:
        print("\n⚠ Opção inválida!")

# ----------------------------
# MENU PRINCIPAL
# ----------------------------

while True:
    print("\n======= SISTEMA DE ESTOQUE =======")
    print("1 - Cadastrar produto")
    print("2 - Consultar produto")
    print("3 - Sair")

    escolha = input("Escolha uma opção: ").strip()

    if escolha == "1":
        cadastrar_produto()

    elif escolha == "2":
        consultar_produto()

    elif escolha == "3":
        print("\nPrograma finalizado!")
        break

    else:
        print("\n⚠ Opção inválida! Tente novamente.")
```

</details>