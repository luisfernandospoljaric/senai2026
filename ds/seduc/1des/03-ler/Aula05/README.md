# Aula Completa — Levantamento de Requisitos
## Curso: Desenvolvimento de Sistemas

---

# O que é Levantamento de Requisitos?

O levantamento de requisitos é o processo de descobrir, entender e documentar as necessidades de um cliente ou usuário para desenvolver um sistema.

Antes de programar qualquer software, é necessário responder perguntas como:
- O que o sistema deve fazer?
- Quem vai utilizar?
- Qual problema será resolvido?
- Quais funcionalidades são necessárias?
- Quais regras o sistema deve seguir?

---

# Objetivo do Levantamento de Requisitos

O principal objetivo é evitar problemas futuros no desenvolvimento do sistema.

Um levantamento mal feito pode causar:
- Sistemas incompletos
- Retrabalho
- Perda de dinheiro
- Atrasos
- Insatisfação do cliente

---

# Exemplo Real

Imagine que uma escola deseja um sistema acadêmico.

Se os requisitos não forem bem levantados:
- O sistema pode não emitir boletins
- Pode faltar cadastro de alunos
- Pode não possuir controle de notas
- Pode não permitir acesso dos professores

Resultado:
- O sistema não atende às necessidades da escola.

---

# Tipos de Requisitos

## Requisitos Funcionais
Descrevem o que o sistema deve fazer.

### Exemplos:
- Cadastrar usuários
- Emitir relatórios
- Fazer login
- Gerar boletos

---

## Requisitos Não Funcionais
Descrevem características e restrições do sistema.

### Exemplos:
- Segurança
- Velocidade
- Desempenho
- Compatibilidade
- Tempo de resposta

---

# 2.2 Técnicas de Levantamento de Requisitos

As técnicas ajudam os analistas a descobrir informações importantes sobre o sistema.

---

# 2.2.1 Briefing

## O que é?

Briefing é um conjunto inicial de informações fornecidas pelo cliente sobre o projeto.

É como uma apresentação geral da ideia do sistema.

---

# Objetivo do Briefing

Entender:
- O problema
- O objetivo do sistema
- O público-alvo
- As necessidades iniciais

---

# Informações Comuns em um Briefing

| Informação | Exemplo |
|---|---|
| Nome do projeto | Sistema de Biblioteca |
| Objetivo | Controlar empréstimos |
| Público-alvo | Bibliotecários e alunos |
| Problemas atuais | Controle em papel |
| Funcionalidades desejadas | Cadastro e relatórios |

---

# Exemplo Prático

Uma academia deseja um sistema.

No briefing ela informa:
- Deseja controlar alunos
- Emitir mensalidades
- Registrar presença
- Controlar planos

Essas informações servem como ponto de partida.

---

# Vantagens do Briefing

- Rapidez
- Organização inicial
- Direcionamento do projeto
- Facilita o entendimento do problema

---

# Limitações

O briefing geralmente:
- Não possui detalhes técnicos
- Pode conter informações incompletas
- Precisa de aprofundamento posterior

---

# 2.2.2 Levantamento Orientado a Pontos de Vista

## O que é?

É uma técnica que analisa o sistema sob diferentes perspectivas dos usuários.

Cada usuário possui necessidades diferentes.

---

# Exemplo

Em um sistema escolar:

| Usuário | Necessidade |
|---|---|
| Professor | Lançar notas |
| Aluno | Consultar boletim |
| Secretaria | Fazer matrículas |
| Diretor | Relatórios gerenciais |

---

# Objetivo

Entender:
- O que cada usuário precisa
- Como cada setor utiliza o sistema
- Quais regras existem em cada área

---

# Vantagens

- Reduz conflitos
- Melhora a análise
- Evita esquecer funcionalidades
- Ajuda na organização do sistema

---

# Problema Comum

Às vezes diferentes usuários possuem interesses diferentes.

Exemplo:
- O gerente quer mais controle
- O funcionário quer mais rapidez

O analista deve equilibrar as necessidades.

---

# 2.2.3 Etnografia (Observação)

## O que é?

É a técnica de observar usuários trabalhando no ambiente real.

O analista acompanha:
- Rotinas
- Processos
- Dificuldades
- Comportamentos

---

# Exemplo

Em um supermercado:
- O analista observa o caixa
- Como os produtos são registrados
- Como o sistema atual funciona
- Quais dificuldades existem

---

# Objetivo

Descobrir problemas que os usuários nem sempre conseguem explicar.

---

# Vantagens

- Identifica problemas reais
- Mostra o funcionamento verdadeiro do ambiente
- Ajuda a entender processos complexos

---

# Desvantagens

- Demanda tempo
- Pode gerar desconforto nos usuários
- Nem tudo observado é relevante

---

# Exemplo Real

Muitos funcionários dizem:

```txt
"O sistema funciona bem."
```

Mas observando:
- Demoram para localizar informações
- Fazem processos manuais
- Utilizam planilhas paralelas

A observação revela problemas ocultos.

---

# 2.2.4 Entrevistas

## O que é?

Consiste em conversar diretamente com usuários, clientes ou gestores.

---

# Objetivos da Entrevista

- Obter informações detalhadas
- Entender necessidades
- Descobrir regras do negócio
- Tirar dúvidas

---

# Tipos de Perguntas

## Perguntas Abertas

Permitem respostas livres.

### Exemplo:

```txt
Como funciona o processo de vendas atualmente?
```

---

## Perguntas Fechadas

Possuem respostas objetivas.

### Exemplo:

```txt
O sistema possui controle de estoque?
( ) Sim
( ) Não
```

---

# Boas Práticas

## O entrevistador deve:
- Escutar atentamente
- Fazer anotações
- Evitar interrupções
- Fazer perguntas claras
- Confirmar entendimento

---

# Problemas Comuns

- Usuários esquecem informações
- Respostas vagas
- Falta de conhecimento técnico
- Contradições

---

# 2.2.5 Brainstorming

## O que é?

Brainstorming é uma reunião para geração de ideias.

Os participantes sugerem:
- Funcionalidades
- Melhorias
- Soluções
- Problemas

---

# Objetivo

Estimular criatividade e participação coletiva.

---

# Regras do Brainstorming

## Durante a reunião:
- Nenhuma ideia deve ser criticada
- Todas as ideias são anotadas
- Quantidade de ideias é importante
- Depois ocorre a seleção

---

# Exemplo

Sistema para restaurante.

Ideias levantadas:
- Cardápio digital
- Pedido via tablet
- Controle de mesas
- Pagamento online
- Programa de fidelidade

---

# Vantagens

- Estimula criatividade
- Gera soluções inovadoras
- Envolve a equipe
- Descobre novas funcionalidades

---

# Desvantagens

- Pode gerar ideias irreais
- Algumas pessoas falam mais que outras
- Necessita organização

---

# 2.3 Fases do Levantamento de Requisitos

O levantamento de requisitos normalmente ocorre em etapas.

---

# 2.3.1 Coleta

## O que é?

É a fase de obtenção de informações.

Aqui o analista:
- Faz entrevistas
- Observações
- Reuniões
- Brainstormings
- Questionários

---

# Objetivo

Reunir o máximo de informações possíveis.

---

# Exemplo

Durante a coleta:
- O cliente informa necessidades
- Usuários mostram dificuldades
- Processos são observados

---

# Cuidados Importantes

- Registrar tudo
- Fazer perguntas corretas
- Confirmar informações
- Evitar interpretações precipitadas

---

# 2.3.2 Análise

## O que é?

Após coletar informações, o analista precisa interpretar e organizar os requisitos.

---

# Objetivos da Análise

- Identificar inconsistências
- Remover ambiguidades
- Organizar prioridades
- Verificar viabilidade

---

# Exemplo

Dois usuários dizem:
- “O sistema precisa ser rápido”
- “O sistema precisa validar muitas informações”

O analista precisa equilibrar desempenho e segurança.

---

# Atividades da Análise

| Atividade | Objetivo |
|---|---|
| Organizar requisitos | Melhor entendimento |
| Eliminar conflitos | Evitar problemas |
| Priorizar funcionalidades | Definir importância |
| Validar informações | Garantir precisão |

---

# 2.3.3 Registros

## O que é?

É a documentação dos requisitos levantados.

Tudo precisa ser registrado oficialmente.

---

# Importância dos Registros

Sem documentação:
- Informações podem ser esquecidas
- Equipe pode interpretar errado
- Cliente pode contestar funcionalidades

---

# Formas de Registro

| Documento | Função |
|---|---|
| Documento de requisitos | Descrição completa |
| Casos de uso | Fluxos do sistema |
| Diagramas | Representação visual |
| Protótipos | Simulação das telas |

---

# Exemplo de Registro

```txt
Requisito RF001:
O sistema deve permitir cadastro de alunos.
```

---

# Boas Práticas no Registro

- Linguagem clara
- Objetividade
- Padronização
- Organização
- Versionamento

---

# Fluxo Completo do Levantamento de Requisitos

```txt
Coleta
   ↓
Análise
   ↓
Documentação
   ↓
Validação com cliente
```

---

# Exemplo Completo

## Sistema para Clínica

### Coleta
- Entrevistas com recepcionistas
- Observação do atendimento

### Análise
- Identificação de problemas
- Organização das funcionalidades

### Registro
- Documento com requisitos
- Protótipos das telas

---

# Erros Comuns

## 1. Não ouvir os usuários

O sistema pode não atender as necessidades reais.

---

## 2. Não documentar corretamente

Informações importantes podem ser perdidas.

---

## 3. Fazer suposições

O analista nunca deve “achar”.

Ele deve confirmar informações.

---

# Conclusão

O levantamento de requisitos é uma das etapas mais importantes do desenvolvimento de software.

Um bom levantamento:
- Reduz erros
- Economiza tempo
- Evita retrabalho
- Melhora a qualidade do sistema

---

# Exercício para os Alunos

# Atividade — Levantamento de Requisitos

## Contexto

Uma escola deseja desenvolver um sistema acadêmico.

O sistema deverá auxiliar:
- Secretaria
- Professores
- Alunos

---

# Parte 1 — Técnicas

## Explique com suas palavras:

1. O que é Briefing?
2. O que é Brainstorming?
3. Qual a função da Etnografia?
4. Qual a importância das entrevistas?
5. O que significa levantamento orientado a pontos de vista?

---

# Parte 2 — Situação Problema

Imagine que você é o analista responsável pelo sistema da escola.

Responda:

## 1.
Quais perguntas você faria durante as entrevistas?

---

## 2.
Quais usuários diferentes utilizariam o sistema?

---

## 3.
Quais funcionalidades poderiam ser levantadas em um brainstorming?

---

## 4.
O que você observaria utilizando a técnica de etnografia?

---

## 5.
Crie:
- 3 requisitos funcionais
- 2 requisitos não funcionais

---

# Parte 3 — Fases

Explique:
- Como ocorreria a coleta
- Como seria feita a análise
- Como os requisitos seriam registrados

---

# Parte 4 - Documento

Monte um pequeno documento de requisitos contendo:
- Nome do sistema
- Objetivo
- Público-alvo
- Funcionalidades principais
- Requisitos funcionais
- Requisitos não funcionais