# Exercício — Sistema de Pedido de Lanchonete


Criar uma página web utilizando **HTML e JavaScript** que permita ao usuário realizar um pedido em uma lanchonete.

O sistema deverá receber os dados através de um formulário, realizar cálculos utilizando JavaScript e apresentar o resultado do pedido na própria página.

---

## 1. Formulário

Crie um formulário contendo os seguintes campos:

### Nome do cliente

Um campo de texto para que o cliente informe seu nome.

### Lanche

Crie uma lista de opções contendo:

| Lanche | Preço |
|---|---:|
| Hambúrguer | R$ 15,00 |
| X-Salada | R$ 18,00 |
| X-Bacon | R$ 22,00 |

### Quantidade

Crie um campo numérico para que o cliente informe quantos lanches deseja comprar.

A quantidade mínima deverá ser `1`.

### Bebida

Crie uma lista de opções contendo:

| Bebida | Preço |
|---|---:|
| Nenhuma | R$ 0,00 |
| Refrigerante | R$ 6,00 |
| Suco | R$ 7,00 |

### Botão

Adicione um botão com o texto:

```text
Finalizar Pedido
```

---

# 2. Processamento com JavaScript

Ao clicar no botão **Finalizar Pedido**, o JavaScript deverá:

1. Capturar o nome do cliente.
2. Capturar o lanche escolhido.
3. Capturar a quantidade de lanches.
4. Capturar a bebida escolhida.
5. Calcular o valor total dos lanches.
6. Calcular o subtotal do pedido.
7. Verificar se o cliente possui direito a desconto.
8. Calcular o valor final.
9. Exibir o resultado na página.

---

## 3. Cálculo dos lanches

O valor dos lanches deverá ser calculado utilizando:

```text
Preço do lanche × Quantidade
```

Por exemplo:

```text
X-Bacon = R$ 22,00

Quantidade = 3

22 × 3 = R$ 66,00
```

---

# 4. Cálculo do subtotal

Depois de calcular o valor dos lanches, deverá ser acrescentado o valor da bebida.

```text
Subtotal = Valor dos lanches + Valor da bebida
```

Exemplo:

```text
Lanches = R$ 66,00
Bebida = R$ 6,00

Subtotal = R$ 72,00
```

---

# 5. Desconto

Utilize uma estrutura condicional `if/else` para verificar se o cliente receberá desconto.

### Regra

Se o subtotal for **maior ou igual a R$ 50,00**, o cliente deverá receber **10% de desconto**.

Caso contrário, não haverá desconto.

Exemplo:

```text
Subtotal: R$ 72,00

Desconto:
72 × 10% = R$ 7,20
```

Caso o subtotal seja menor que R$ 50,00:

```text
Subtotal: R$ 40,00

Desconto: R$ 0,00
```

---

# 6. Valor final

O valor final deverá ser calculado utilizando:

```text
Total = Subtotal - Desconto
```

Exemplo:

```text
Subtotal: R$ 72,00
Desconto: R$ 7,20

Total: R$ 64,80
```

---

# 7. Exibição do resultado

Depois de realizar os cálculos, exiba as informações na própria página.

O resultado deverá apresentar, no mínimo:

```text
PEDIDO REALIZADO

Cliente: João

Lanche: X-Bacon
Quantidade: 3

Bebida: Refrigerante

Subtotal: R$ 72,00
Desconto: R$ 7,20

TOTAL: R$ 64,80
```

---

# 8. Estrutura dos arquivos

Organize o projeto da seguinte maneira:

```text
lanchonete/
│
├── index.html
│
└── script.js
```

O JavaScript deverá ficar em um arquivo separado do HTML.

---

# 9. Requisitos técnicos

No HTML, utilize:

- `<form>`
- `<label>`
- `<input>`
- `<select>`
- `<option>`
- `<button>`

No JavaScript, utilize:

- `document.getElementById()`
- `.value`
- `addEventListener()`
- `event.preventDefault()`
- `Number()` ou `parseInt()`
- Variáveis
- Operações matemáticas
- `if / else`
- `innerHTML` ou `textContent`
- `toFixed(2)`

---


# Conceitos praticados

Ao finalizar este exercício, você terá praticado:

| Conceito | Aplicação |
|---|---|
| HTML | Criação do formulário |
| Formulários | Entrada dos dados |
| `input` | Nome e quantidade |
| `select` | Escolha dos produtos |
| JavaScript | Processamento dos dados |
| `.value` | Captura dos valores |
| `Number()` | Conversão para número |
| `addEventListener()` | Captura do envio do formulário |
| `if/else` | Verificação do desconto |
| Operadores matemáticos | Cálculo dos valores |
| `innerHTML` | Exibição do resultado |
| `toFixed()` | Formatação dos valores |

