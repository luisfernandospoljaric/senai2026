# Exercício Prático — Automatizando Relatórios com Macro Gravada

## Objetivo

Aprender a:
- gravar macros;
- automatizar formatação;
- executar macros;
- criar automações simples no Excel sem programação.

---

# Cenário

Você trabalha no setor administrativo de uma empresa e recebe diariamente uma tabela de vendas desorganizada.

Sua tarefa é criar uma **macro gravada** para automatizar a formatação dessa tabela.

---

# Dados para Digitar na Planilha

Digite os dados abaixo no Excel:

| Data | Vendedor | Produto | Quantidade | Valor |
|---|---|---|---|---|
| 01/05/2026 | Carlos | Notebook | 2 | 3500 |
| 01/05/2026 | Ana | Mouse | 10 | 50 |
| 02/05/2026 | João | Teclado | 5 | 120 |
| 02/05/2026 | Mariana | Monitor | 3 | 900 |
| 03/05/2026 | Pedro | Impressora | 1 | 750 |
| 03/05/2026 | Fernanda | Headset | 4 | 200 |

---

# Atividades

## Parte 1 — Criar a Macro

Grave uma macro chamada:

```text
FormatarRelatorio
```

A macro deve executar as seguintes ações:

---

## Parte 2 — Formatações da Macro

A macro deve:

### 1. Colocar os títulos em negrito

Linha dos títulos:
- Data
- Vendedor
- Produto
- Quantidade
- Valor

---

### 2. Aplicar cor de fundo nos títulos

Escolha qualquer cor.

---

### 3. Centralizar os títulos

---

### 4. Ajustar automaticamente a largura das colunas

Utilize:
- AutoAjuste de largura.

---

### 5. Aplicar bordas em toda a tabela

---

### 6. Formatar a coluna "Valor" como moeda

Formato:
```text
R$ 0,00
```

---

## Parte 3 — Executar a Macro

Após gravar:
1. Apague todas as formatações da tabela;
2. Execute a macro;
3. Verifique se todas as formatações voltam automaticamente.

---

# Desafio Extra

Crie um botão na planilha chamado:

```text
Formatar Relatório
```

Ao clicar no botão:
- a macro deve ser executada.

---

# O que você deve aprender

Ao terminar este exercício, você terá aprendido:

- como gravar macros;
- como automatizar tarefas;
- como executar macros;
- como reutilizar automações;
- como criar botões para automação.

---

# Gabarito

## Passo 1 — Ativar guia Desenvolvedor

```text
Arquivo → Opções → Personalizar Faixa de Opções → Desenvolvedor
```

Marque:
```text
✔ Desenvolvedor
```

---

# Passo 2 — Gravar Macro

```text
Desenvolvedor → Gravar Macro
```

Nome:
```text
FormatarRelatorio
```

---

# Passo 3 — Executar as formatações

Durante a gravação faça:

## Títulos

- Negrito;
- Cor de fundo;
- Centralização.

---

## Tabela

- Aplicar bordas;
- Ajustar largura automaticamente.

---

## Coluna Valor

Formatar como:
```text
Moeda (R$)
```

---

# Passo 4 — Parar gravação

```text
Desenvolvedor → Parar Gravação
```

---

# Passo 5 — Testar Macro

1. Remova as formatações;
2. Vá em:

```text
Desenvolvedor → Macros
```

3. Selecione:

```text
FormatarRelatorio
```

4. Clique em:
```text
Executar
```

---

# Resultado Esperado

A tabela deverá ficar:
- organizada;
- formatada;
- com bordas;
- títulos destacados;
- valores em moeda;
- colunas ajustadas automaticamente.

---

# Desafio Extra — Botão

## Inserir botão

```text
Desenvolvedor → Inserir → Botão
```

Depois:
1. Desenhe o botão;
2. Associe à macro;
3. Renomeie para:

```text
Formatar Relatório
```

---

# Resultado Final Esperado

Com apenas um clique:
- toda a tabela será formatada automaticamente.