#  Como Fazer Mala Direta no Word

##  O que é Mala Direta?
A **Mala Direta** é um recurso do Microsoft Word que permite criar documentos personalizados em massa (cartas, etiquetas, e-mails, etc.) usando dados vindos de uma base como **Excel**, **Access** ou outro formato.

---

##  Passo a Passo

### **1️ Criar a base de dados no Excel**
1. Abra o **Excel**.
2. Crie uma tabela com **cabeçalhos claros**.
3. Exemplo de tabela:

| Nome  | Sobrenome | Endereço            | Cidade          | Estado |
|-------|-----------|---------------------|----------------|--------|
| Maria | Silva     | Rua das Flores, 12  | São Paulo       | SP     |
| João  | Santos    | Av. Brasil, 45      | Rio de Janeiro  | RJ     |
| Carla | Oliveira  | Rua A, 123          | Belo Horizonte  | MG     |

4. Salve o arquivo como `Contatos.xlsx`.

---

### **2️ Abrir o Word e iniciar a Mala Direta**
1. Abra o **Word**.
2. Vá até **Correspondências** → **Iniciar Mala Direta**.
3. Escolha o tipo de documento:
   - Carta
   - Etiquetas
   - Envelopes
   - E-mail

---

### **3️ Conectar ao arquivo Excel**
1. Em **Correspondências**, clique em **Selecionar Destinatários** → **Usar uma lista existente**.
2. Escolha o arquivo `Contatos.xlsx`.
3. Selecione a planilha correta (ex.: `Plan1$`).

---

### **4️ Inserir campos personalizados**
1. Escreva o texto normalmente.
2. No ponto que quiser inserir informações da base, clique em **Inserir Campo de Mesclagem** e escolha o campo desejado.
   
**Exemplo de carta:**
```
Prezado(a) «Nome» «Sobrenome»,

Gostaríamos de convidá-lo(a) para nosso evento especial em «Cidade».

Atenciosamente,  
Equipe de Marketing
```

---

### **5️ Visualizar e finalizar**
1. Clique em **Visualizar Resultados** para conferir como ficará cada documento.
2. Se estiver tudo certo:
   - **Concluir e Mesclar** → **Editar documentos individuais**
   - Ou **Imprimir documentos**

---

##  Material de Treino
Este repositório contém:
- `Contatos.xlsx` → Base de dados com contatos fictícios
- `Modelo_Mala_Direta.docx` → Documento Word para teste
- `README.md` → Guia completo
