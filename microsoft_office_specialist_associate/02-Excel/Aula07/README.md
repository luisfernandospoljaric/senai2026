# Formatação de condicional
**O que é?** A Formatação Condicional é uma ferramenta que aplica automaticamente uma formatação específica (como cor da célula, cor da fonte, bordas, etc.) a uma ou mais células com base em uma condição ou critério que nós definimos.

Em vez de você procurar manualmente por um valor, o Excel faz isso e destaca a célula para você.

### Por que usar?

1. **Análise Rápida:** Permite identificar visualmente tendências, padrões e outliers (valores muito altos ou muito baixos) em grandes conjuntos de dados.

2. **Tomada de Decisão:** Facilita a identificação de áreas que precisam de atenção. Por exemplo, destacar produtos com baixo estoque, metas não atingidas ou despesas acima do orçamento.

3. **Relatórios Dinâmicos:** A formatação se atualiza automaticamente se os dados nas células mudarem.
---- 
### Principais Tipos de Regras:

- **Realçar Regras das Células:** Formata células que são maiores que, menores que, iguais a um valor, ou que contenham um texto específico.

- **Regras de Primeiros/Últimos:** Destaca os 10 itens superiores/inferiores, os 10% superiores/inferiores, ou valores acima/abaixo da média.

- **Barras de Dados:** Cria barras coloridas dentro das células, cujo comprimento representa o valor da célula (ótimo para comparar valores).

- **Escalas de Cor:** Aplica um gradiente de cores a um intervalo de células, onde a cor indica o valor da célula (por exemplo, do verde para o vermelho).

- **Conjuntos de Ícones:** Adiciona ícones (como setas, semáforos, estrelas) às células para indicar como o valor se compara a outros.

- **Usar uma fórmula:** O tipo mais avançado, onde você cria sua própria regra lógica para formatar uma célula.
----

## Demonstração

### 1. Crie a tabela:

| Vendedor      | Venda (R$) | Meta (R$) | % Atingido |
|---------------|------------|-----------|------------|
| Ana Silva     | R$ 12.500  | R$ 10.000 | 125%       |
| Bruno Costa   | R$ 8.900   | R$ 9.500  | 93,68%     |
| Carla Dias    | R$ 15.200  | R$ 12.000 | 126,67%    |
| Daniel Lima   | R$ 9.450   | R$ 9.500  | 99,47%     |
| Elisa Rocha   | R$ 11.800  | R$ 10.000 | 118%       |
| Fábio Melo    | R$ 7.100   | R$ 8.000  | 88,75%     |

### 2. Calcule a coluna % Atingido:

- Na célula D2, insira a fórmula: =B2/C2

- Arraste a alça de preenchimento para baixo para calcular para os outros vendedores.

- Selecione a coluna D e formate como Porcentagem.

### 3. Aplique as Formatações Condicionais (passo a passo):

**Regra 1:** Destacar quem não bateu a meta.

- Selecione os valores na coluna % Atingido (D2 a D7).

- Vá em **Página Inicial > Formatação Condicional > Realçar Regras das Células > É Menor do que...**

- No campo, digite 100% (ou 1).

- Na caixa de formatação, escolha **Preenchimento Vermelho Claro com Texto Vermelho Escuro.**

- Clique em OK. Vejam como o Excel destacou imediatamente quem ficou abaixo da meta!

**Regra 2:** Usar ícones para mostrar o status da meta.

- Mantenha a seleção na coluna % Atingido (D2 a D7).

- Vá em Página Inicial > Formatação Condicional > Conjuntos de Ícones e escolha o conjunto de 3 setas coloridas.

**Observação:** O Excel aplica uma regra padrão. Vamos personalizá-la!

- Com a seleção ainda ativa, vá em Formatação Condicional > Gerenciar Regras....

- Selecione a regra dos ícones e clique em Editar Regra....

- Mude o Tipo de "Porcentagem" para "Número" em ambos os campos.

**Defina as regras assim:**

- Seta verde quando o valor for >= 1.2 (Bateu a meta com folga - 120%)

- Seta amarela quando o valor for >= 1 (Bateu a meta - 100%)

- Seta vermelha para o restante.

- Clique em OK duas vezes. Agora os ícones refletem nossa regra de negócio!

**Regra 3:** Usar Barras de Dados para comparar o volume de vendas.

- Selecione os valores na coluna Venda (R$) (B2 a B7).

- Vá em Página Inicial > Formatação Condicional > Barras de Dados e escolha um Preenchimento Gradiente (ex: azul).

- Observe como é fácil ver quem vendeu mais (barra mais longa) e quem vendeu menos.

# Exercícios para os Alunos

## Exercício 1: Análise de Contas a Pagar

Você recebeu uma planilha com o status das contas a pagar de uma empresa. Use a **Formatação Condicional** para criar um alerta visual sobre as contas.

### Crie a tabela abaixo:

| Fornecedor           | Valor (R$)  | Vencimento | Dias para Vencer |
| :------------------- | :---------- | :--------- | :--------------- |
| Papelaria Central    | R$ 850,00   | 10/10/2025 |                  |
| Provedor de Internet | R$ 350,00   | 20/10/2025 |                  |
| Aluguel Escritório   | R$ 4.500,00 | 05/10/2025 |                  |
| Serviços de Limpeza  | R$ 1.200,00 | 25/10/2025 |                  |
| Material de Escritório | R$ 620,00  | 17/10/2025 |                  |

### Instruções:

- Na coluna **"Dias para Vencer"**, calcule a diferença entre a data de Vencimento e a data de hoje. Use a fórmula:
  
  - `=[@Vencimento]-HOJE()` (se estiver usando uma tabela formatada)
  - ou `=C2-HOJE()` (e arraste para baixo).

- **Dica:** A função `HOJE()` retorna a data atual. Hoje é **16/10/2025**.

- Formate a coluna **"Dias para Vencer"** como Número Geral.

- Aplique as seguintes formatações condicionais na coluna **"Dias para Vencer"**:

  - Se uma conta estiver vencida (**dias para vencer < 0**), preencha a célula de **vermelho**.
  - Se uma conta vence hoje (**dias para vencer = 0**), preencha a célula de **amarelo**.
  - Se uma conta vence em 5 dias ou menos (**entre 1 e 5**), preencha a célula de **laranja claro**.

- Use **Escalas de Cor (Verde-Branco)** na coluna **Valor (R$)** para destacar visualmente as contas mais caras.

---

## Exercício 2: Controle de Orçamento Pessoal

Você está analisando seus gastos mensais em relação ao que foi orçado. Sua meta é nunca gastar mais do que o planejado.

### Crie a tabela abaixo:

| Categoria de Gasto | Orçado (R$) | Gasto Real (R$) | Variação (R$) |
| :----------------- | :---------- | :-------------- | :------------ |
| Moradia            | R$ 2.000,00 | R$ 2.000,00     |               |
| Alimentação        | R$ 1.500,00 | R$ 1.750,00     |               |
| Transporte         | R$ 400,00   | R$ 350,00       |               |
| Lazer              | R$ 500,00   | R$ 680,00       |               |
| Saúde              | R$ 300,00   | R$ 250,00       |               |
| Educação           | R$ 800,00   | R$ 800,00       |               |

### Instruções:

- Na coluna **"Variação (R$)"**, calcule a diferença entre o Orçado e o Gasto Real. A fórmula é:

  ```excel
  =B2-C2
    ```
- Aplique as seguintes formatações condicionais:

    -   Na coluna Variação (R$), use Conjuntos de Ícones (ex: Símbolos com 3 cores) para mostrar:

    -   Um ícone verde (✅ ou similar) se a variação for positiva (gastou menos que o orçado).

    -   Um ícone vermelho (❌ ou similar) se a variação for negativa (gastou mais que o orçado).

    -   Um ícone amarelo (➖ ou similar) se a variação for zero (gastou exatamente o orçado).

**Desafio (Usando Fórmula):**  Na coluna **Gasto Real (R$)**, crie uma regra que deixe a fonte em negrito e itálico APENAS se o valor do gasto for maior que o valor orçado na mesma linha.

    -   **Dica:** Selecione o intervalo C2:C7, vá em Nova Regra > Usar uma fórmula... e a fórmula será =$C2>$B2.

<details>
<summary>Clique para ver a dica</summary>

### Exercício 1
**1. Cálculo da coluna "Dias para Vencer" (considerando hoje = 16/10/2025):**
```excel
=C2-HOJE() -> -6

=C3-HOJE() -> 4

=C4-HOJE() -> -11

=C5-HOJE() -> 9

=C6-HOJE() -> 1
```

**2. Regras de Formatação Condicional (na coluna D):**

- **Regra 1 (Vencida):** Realçar Regras das Células > É menor do que... > 0 -> Preenchimento Vermelho. (Aplicado às células com -6 e -11).

- **Regra 2 (Vence Hoje):** Realçar Regras das Células > É igual a... > 0 -> Preenchimento Amarelo. (Nenhuma célula neste exemplo).

- **Regra 3 (Vence em breve):** Realçar Regras das Células > Está entre... > 1 e 5 -> Preenchimento Personalizado Laranja. (Aplicado às células com 4 e 1).

- **Regra 4 (Valores):**  Escalas de Cor > Escala de Cor Verde - Branco na coluna B. A célula com R$ 4.500,00 ficará com o verde mais forte.


### Exercício 2
**1. Cálculo da coluna "Variação (R$)":** 

```excel
=B2-C2 -> R$ 0,00

=B3-C3 -> -R$ 250,00

=B4-C4 -> R$ 50,00

=B5-C5 -> -R$ 180,00

=B6-C6 -> R$ 50,00

=B7-C7 -> R$ 0,00
```

2. Regras de Formatação Condicional:

- **Regra 1 (Ícones na coluna D):**

    - Vá em Formatação Condicional > Gerenciar Regras > Editar Regra.

    - Configure da seguinte forma:

        - Tipo: Número. Ícone Verde quando o valor for > 0.

        - Tipo: Número. Ícone Amarelo quando o valor for >= 0.

        - Ícone Vermelho para o restante (< 0).

    **- Resultado:**

        - Moradia e Educação: Ícone Amarelo.

        - Alimentação e Lazer: Ícone Vermelho.

        - Transporte e Saúde: Ícone Verde.

- **Regra 2 (Desafio - Fórmula na coluna C):**

- Selecione o intervalo C2:C7.

- Vá em Página Inicial > Formatação Condicional > Nova Regra.

- Selecione "Usar uma fórmula para determinar quais células devem ser formatadas".

- No campo da fórmula, insira: =$C2>$B2

        - Explicação: O $ antes da coluna C e B trava a análise nessas colunas, enquanto o 2 sem $ permite que o Excel ajuste a linha para cada célula da seleção (C3>B3, C4>B4, etc.).

    - Clique no botão Formatar..., vá na guia Fonte e selecione Negrito Itálico.

    - Clique em OK duas vezes.

**Resultado:**  Os valores R$ 1.750,00 (Alimentação) e R$ 680,00 (Lazer) ficarão em negrito e itálico.
</details>