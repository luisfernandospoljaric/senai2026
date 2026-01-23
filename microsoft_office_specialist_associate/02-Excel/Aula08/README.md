# Exercícios Práticos de Excel com Fórmulas e Ferramentas Inteligentes

Este arquivo contém o passo a passo para a resolução de dois exercícios práticos no Excel. O objetivo é combinar três funcionalidades essenciais para a criação de planilhas dinâmicas e inteligentes:

* **Cálculos com Fórmulas:** Utilização de funções lógicas como `SE` e `MÉDIA`.
* **Validação de Dados:** Para garantir a integridade e a padronização das informações inseridas.
* **Formatação Condicional:** Para criar alertas visuais que facilitam a análise dos dados.

---

## Exercício 1: Controle de Estoque Simples

### O Cenário
Você gerencia o estoque de uma pequena loja e precisa de uma planilha que mostre rapidamente quais produtos precisam ser comprados. A planilha deve:

1.  Ter uma lista de categorias de produtos para evitar erros de digitação.
2.  Calcular automaticamente o "Status" de um item ("OK" ou "Repor Estoque").
3.  Destacar visualmente (em vermelho) a linha inteira do produto que precisa de reposição.

### Ferramentas Utilizadas
* Função: `=SE()`
* Recurso: Validação de Dados (Lista)
* Recurso: Formatação Condicional (com fórmula)

### Passo a Passo da Solução

#### 1. Montando a Estrutura
Abra uma nova planilha e crie as seguintes tabelas:

**Tabela Principal (a partir da célula A1):**
| Código | Produto           | Categoria | Estoque Atual | Ponto de Pedido | Status |
| :----- | :---------------- | :-------- | :------------- | :--------------- | :------ |
| 001    | Mouse Sem Fio     |           | 15             | 10               |         |
| 002    | Teclado USB       |           | 8              | 10               |         |
| 003    | Resma de Papel A4 |           | 50             | 20               |         |
| 004    | Caneta Azul       |           | 12             | 30               |         |
| 005    | Monitor 24"       |           | 5              | 5                |         |


**Tabela de Apoio (a partir da célula I1):**
| I |
| :--- |
| **Categorias Válidas**|
| Eletrônicos |
| Material de Escritório|

#### 2. Implementando a Validação de Dados
Vamos criar uma lista suspensa para a coluna "Categoria".

1.  Selecione o intervalo `C2:C6`.
2.  Vá para a guia **Dados** > **Validação de Dados**.
3.  Em "Permitir", selecione **Lista**.
4.  No campo "Fonte", insira a referência `=$I$2:$I$3`.
5.  Clique em **OK**.

#### 3. Adicionando o Cálculo de Status
Usaremos a função `SE` para automatizar a coluna "Status".

1.  Na célula **F2**, insira a fórmula:
    ```excel
    =SE(D2<=E2;"Repor Estoque";"OK")
    ```
2.  Arraste a alça de preenchimento da célula **F2** para baixo até a **F6**.

#### 4. Aplicando a Formatação Condicional
Agora, vamos destacar as linhas que precisam de atenção.

1.  Selecione todo o intervalo de dados: `A2:F6`.
2.  Vá para a guia **Página Inicial** > **Formatação Condicional** > **Nova Regra**.
3.  Selecione a opção **"Usar uma fórmula para determinar quais células devem ser formatadas"**.
4.  No campo de fórmula, digite:
    ```excel
    =$F2="Repor Estoque"
    ```
    *(O `$` antes do `F` é essencial para fixar a verificação na coluna F).*
5.  Clique no botão **"Formatar..."**, escolha um preenchimento (ex: vermelho claro) e clique em **OK** duas vezes.

**Resultado:** A planilha agora identifica e destaca automaticamente os produtos que precisam ser comprados.

---

## Exercício 2: Planilha de Notas de Alunos

### O Cenário
Você é um professor e quer uma planilha para gerenciar as notas dos seus alunos. A planilha deve:

1.  Garantir que as notas digitadas estejam sempre entre 0 e 10.
2.  Calcular a média final de cada aluno.
3.  Exibir o status "Aprovado" ou "Reprovado" (média para aprovação: 6,0).
4.  Colorir o status final (verde para Aprovado, vermelho para Reprovado).

### Ferramentas Utilizadas
* Funções: `=MÉDIA()`, `=SE()`
* Recurso: Validação de Dados (Número Decimal)
* Recurso: Formatação Condicional (Texto que Contém)

### Passo a Passo da Solução

#### 1. Montando a Estrutura
Em uma nova planilha, crie a seguinte tabela a partir da célula **A1**:

| A | B | C | D | E | F |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Aluno** | **Prova 1** | **Trabalho** | **Prova 2** | **Média Final** | **Status** |
| Ana Silva | 7 | 8 | 5 | | |
| Bruno Costa | 5 | 6 | 4 | | |
| Carlos Dias | 9 | 10 | 8 | | |
| Daniela Lima| 8 | 7 | 9 | | |
| Eduardo Melo| 6 | 5 | 7 | | |

#### 2. Implementando a Validação de Dados
Vamos restringir a entrada de notas para o intervalo entre 0 e 10.

1.  Selecione o intervalo de notas: `B2:D6`.
2.  Vá para a guia **Dados** > **Validação de Dados**.
3.  Em "Permitir", selecione **Número Decimal**.
4.  Em "Dados", selecione **"está entre"**.
5.  Defina "Mínimo" como `0` e "Máximo" como `10`.
6.  Clique em **OK**.

#### 3. Adicionando os Cálculos
Vamos calcular a média e o status de cada aluno.

1.  **Média Final:** Na célula **E2**, insira a fórmula:
    ```excel
    =MÉDIA(B2:D2)
    ```
2.  **Status:** Na célula **F2**, insira a fórmula:
    ```excel
    =SE(E2>=6;"Aprovado";"Reprovado")
    ```
3.  Selecione as células **E2** e **F2** e arraste a alça de preenchimento para baixo até a linha 6.

#### 4. Aplicando a Formatação Condicional
Vamos colorir o status para fácil visualização.

1.  Selecione o intervalo de status: `F2:F6`.
2.  Vá para a guia **Página Inicial** > **Formatação Condicional** > **Realçar Regras das Células** > **Texto que Contém...**.
3.  **Regra 1 (Aprovado):**
    * Digite `Aprovado`.
    * Escolha o formato **Preenchimento Verde e Texto Verde Escuro**.
    * Clique em **OK**.
4.  **Regra 2 (Reprovado):**
    * Com as células ainda selecionadas, repita o processo (**Texto que Contém...**).
    * Digite `Reprovado`.
    * Escolha o formato **Preenchimento Vermelho Claro e Texto Vermelho Escuro**.
    * Clique em **OK**.

**Resultado:** Sua planilha de notas agora valida as entradas, calcula os resultados e colore o status automaticamente, fornecendo feedback visual imediato.