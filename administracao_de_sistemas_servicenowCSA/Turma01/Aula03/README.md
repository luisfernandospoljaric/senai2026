# Módulo 01 - ServiceNow - A experiência de trabalho modernizada

## Objetivos do módulo

- Localize e baixe os recursos do curso, incluindo conteudo adicional para pratica individual.

- Analise o cenário geral do curso.

- Explique a plataforma ServiceNow.

- Adquira conhecimento funcional de aplicativos como Gerenciamento de Serviços de TI,
Espaço de Trabalho de Operações de Serviço e Central do Funcionário.

--- 

## Laboratórios

- 1.1.1: Baixar recursos da turma

- 1.2.1: Conceder e verificar o acesso a aplicativos

- 1.3.1: Criar incidentes usando listas e formulários clássicos

- 1.3.2: Incidentes de trabalho usando o Espaço de Trabalho de Operações de Serviço

- 1.3.3: Verifique o status do incidente usando o Portal do Funcionário

---

### História do Usuário

Como **estudante** , preciso **localizar e baixar** os recursos da minha aula para estar preparado(a) para ter sucesso nesta disciplina. Também tenho
materiais de prática adicionais além do que é abordado em sala de aula, e posso **planejar meu tempo de estudo individual** de acordo.

Como você deve se lembrar do curso "Bem-vindo ao ServiceNow", onde aprendeu sobre a navegação geral na plataforma. Portanto, a maioria dos
recursos de navegação não será abordada novamente. No entanto, faremos uma breve revisão e mencionaremos alguns recursos específicos para
administradores. Você terá a oportunidade de aprimorar sua proficiência na navegação pela plataforma por meio das atividades práticas do curso.

### Cenário do Curso:
Voce trabalha na Cloud Dimensions, uma
empresa fictícia que está implementando a
plataforma ServiceNow para dar suporte aos
seus departamentos de Tl e RH.

O departamento de TI esta testando um novo
dispositivo com os líderes da equipe de
Tecnologia de Treinamento. O Dispositivo
Holográfico Portátil Infinity (Infinity HHD) poderá
ser usado para fornecer vídeos de instruções de
reparo em 3D no local. A equipe de Tecnologia
de Treinamento fornecerá suporte técnico
durante e após o período de teste.

O Product Owner de Tl e a equipe de
Tecnologia de Treinamento precisam de uma
maneira de rastrear incidentes e duvidas que
surgirem durante o período piloto e após o
lançamento do produto. Eles usarão essas
informações para:

- Identificar areas de melhoria para o programa de treinamento em HHD

- Crie perguntas frequentes para técnicos na base de conhecimento.

- Criar um item no catálogo de serviços do Infinity

- Forneça feedback ao fabricante.

- Monitorar a qualidade do suporte prestado aos usuários de HHD (dispositivos de disco rígido
portáteis).

Além disso, o departamento de RH está interessado no aplicativo de Gestão de Casos de RH.

Quando falamos da plataforma ServiceNow, o que isso realmente significa? O que é? Os
aplicativos ficam hospedados em servidores na nuvem (em data centers) e os usuários acessam o
aplicativo e os dados baixando-os do servidor para seus dispositivos (clientes). O dispositivo pode
ser um computador, um tablet, um celular, etc.

Os dados e os aplicativos são armazenados em um banco de dados. O banco de dados consiste
em tabelas que contêm dados como registros de usuários ou registros de tarefas. Em resumo, tudo
no ServiceNow e um registro em uma tabela .

Algumas dessas tabelas são compartilhadas por vários aplicativos, como a tabela de usuários e as
tabelas de grupos. Outras tabelas são específicas de um determinado aplicativo. Por exemplo,
Incidentes são um tipo de trabalho (ou tarefa) específico do aplicativo ITSM. Cargos são posições
específicas do aplicativo de Gestão de Serviços de RH.

A plataforma é identificada como uma Plataforma de Aplicação como Serviço (aPaaS). Em outras
palavras, trata-se de uma plataforma que permite o desenvolvimento, a instalação e a
modificação de aplicações, além do compartilhamento de dados entre as aplicações conforme
necessário.

Os usuários solicitarão informações dos aplicativos no servidor e o servidor responderá com os
dados encontrados. Isso pode incluir solicitações para inserir um novo registro, obter uma lista de
registros, um único registro, executar um relatório, visualizar um painel, etc.

---

## Lab 1 - Baixar Conteúdos da Aula

### **Seção 1: Baixar recursos do curso**

**1. Entendendo a dinâmica do curso**
Durante este curso, você praticará conceitos através de exercícios de laboratório práticos (*hands-on*). Alguns laboratórios exigem arquivos de exercício específicos que você usará para completar as tarefas.

**2. Prática Adicional e Ambiente**
O curso também oferece conteúdo prático extra, caso você queira aprender sobre recursos adicionais não abordados em aula.

- Essa prática adicional pode ser encontrada no **Now Learning**, na página inicial do curso.
- Você deve completá-la no seu próprio ritmo, utilizando uma **Personal Developer Instance (PDI)**.

**3. Acessando os Materiais**
Os links fornecidos na tela irão direcioná-lo para a pasta **ServiceNow Administration Fundamentals Course Materials**. Lá você encontrará todos os recursos necessários para a aula (disponíveis em inglês e japonês).

**4. Conteúdo das pastas "Course Resources"**
As pastas contêm os seguintes arquivos:

- **Lab Exercise Materials:** Arquivos de logotipo e planilhas para uso durante os exercícios de laboratório.
- **Capstone:** O **Capstone Project** foi projetado para testar o conhecimento adquirido em aula e dar a você a chance de explorar a **ServiceNow Platform**.

** 5. Ação Final**

- Selecione os links na parte inferior (ex: **ServiceNow Administration Fundamentals Course Materials (English)**) para acessar e baixar os recursos.

### **Seção 2: Explorar os recursos**

**1. Baixar o arquivo**

- Faça o **Download** da pasta para um local de sua escolha.
- Lembre-se de onde você salvou os arquivos, pois precisará encontrá-los mais tarde.

**2. Localizar o arquivo**

- Navegue até o arquivo **.zip** que agora está salvo em sua unidade local (*local drive*).

**3. Extrair o conteúdo**

- Descompacte (**Unzip**) o arquivo, conforme suportado pelo seu sistema operacional.

**Resultado:**
Assim que o arquivo for descompactado, você verá pastas que contêm seus materiais. Cada pasta contém arquivos específicos que você usará durante e após o curso.

## Lab 1.2 - Fornecer e Verificar Acessos a Aplicações

### **Objetivos do Laboratório (Lab Objectives)**

**Você alcançará os seguintes objetivos:**

- Conceder acesso à **application** (aplicação).
- Conceder acesso para **impersonate** (realizar a representação de outro usuário).

**Dependência do Laboratório (Lab Dependency):**

- Este laboratório depende do plugin **Agent Workspace for HR**, que foi pré-instalado em sua **student instance** (instância de estudante).

## Lab 1.3.1 - **Criar incidente usando listas e formulários clássicos**

**Objetivos do Laboratório**
Você se familiarizará com as aplicações, colocando-se no lugar de um funcionário de TI ao completar as seguintes atividades:

- Criar **incident** usando listas e formulários clássicos.
- Localizar atribuições de trabalho usando **My Groups Work** no **Classic Environment**.

### **Seção 1: Criar um novo Incident no ambiente clássico**

**1. Personificar Usuário**

- Selecione o **User menu** (menu de usuário) e selecione **Impersonate user**.

**2. Pesquisar Usuário**

- No campo **Select a user**, digite **Beth**.

**3. Selecionar Usuário**

- Selecione **Beth Anglin**.

**4. Confirmar Personificação**

- Selecione o botão **Impersonate user**.
    - **Explicação:** Você assumirá temporariamente a identidade de Beth. A instância abre automaticamente a página inicial do **Service Operations Workspace** e uma janela pop-up de boas-vindas.
    - **Nota:** Observe a imagem no menu do usuário. Agora ela mostra a Beth com um círculo vermelho ao redor da imagem e um pequeno símbolo de olho. Há também uma linha vermelha no topo da instância.

**5. Fechar Pop-up**

- Feche a janela pop-up **Welcome to Service Operations Workspace**.

**6. Navegação**

- Navegue até o menu **All**. No **Filter navigator**, digite **incident**.

**7. Criar Novo**

- Selecione **Incident > Create New**.
    - **Nota:** Daqui para frente, os passos de navegação serão mostrados simplificados, como: **All > Incident > Create New**.

    **Cenário:**
Vamos usar o que você aprendeu até agora para criar um **Incident**. Você acabou de receber uma ligação de Fred Luddy sobre um problema com seu aplicativo móvel para funcionários (*Conference Mobile App for Staff*).

**8. Preencher detalhes do chamado**
Complete o formulário da seguinte maneira:

- **Caller:** Fred Luddy
- **Category:** Software
- **Subcategory:** deixe como `- None --`
- **Short description:** Cannot get the Conference Event Mobile app for staff to launch. It is flashing error 555.
- **Description:** It was working yesterday, but not this morning. This is urgent! The event starts in 3 hours.
    - *(Dica: Você pode copiar e colar os textos em inglês para os campos de descrição)*.

**9. Selecionar Serviço**

- Para **Service**, digite **Conference**, e então selecione **Conference Event Services**.
    - **Nota:** O **Service** é o serviço geral que precisa dar suporte a partes do negócio. Por exemplo, o *Conference Event Service* apoia o departamento de marketing ao planejar e hospedar eventos.

**10. Selecionar Oferta de Serviço**

- Para **Service offering**, digite **Event Mobile**, e então selecione **Event Mobile for Staff Service Offering**.
    - **Nota:** **Service offerings** são serviços que os usuários podem solicitar para ajudar a realizar seu trabalho, como trabalhar no Planejamento e Execução de Eventos de Conferência.

**11. Selecionar Item de Configuração**

- Para **Configuration item**, digite **Event Mobile**, e então selecione **Event Mobile for Staff Application**.

**12. Completar restante do formulário**
Continue preenchendo o formulário da seguinte forma:

- **Channel:** Phone
- **State:** Deixe como **New**
- **Impact:** 1-High
- **Urgency:** 1-High
- **Priority:** Automaticamente calculado como **1 - Critical**
- **Assignment Group:** deixe em branco (*leave blank*)
- **Assigned to:** deixe em branco (*leave blank*)

**13. Salvar (Sem submeter)**

- Clique com o botão direito no **form header** (cabeçalho do formulário) ou selecione o menu **Additional actions** para escolher **Save**.
    - **Importante:** **NÃO** submeta (*Submit*) o incidente. O botão *Submit* sai do formulário e leva você de volta à lista.

**14. Verificar Atribuição Automática**

- Verifique se o **Assignment group** foi preenchido automaticamente (*auto-populated*) com **Conference Event App Support**.

**15. Localizar campos de anotações**

- Na aba **Notes**, localize os campos **Work notes** e **Additional comments**.
- Se apenas um dos campos estiver visível, selecione o ícone **Show all journal fields** para ver ambos os campos ao mesmo tempo.

**16. Inserir Notas**
Complete o formulário com as seguintes informações:

- **Work notes:** No outages have been reported, am routing to the Conference Event App support team.
- **Additional comments:** Fred, we are working on getting the app up and running.

**17. Atualizar**

- Selecione **Update**.
    - **Nota:** Observe os dois tipos de notas. **Work notes** são usadas para documentar notas internas relacionadas ao trabalho no incidente. **Additional comments** são visíveis para o cliente (*customer*).
    - **Nota:** Os botões **Submit** e **Update** salvam as alterações feitas no formulário e levam você de volta à página anterior. Selecionar **Post** é outra opção que manterá você no formulário.

**18. Acessar Histórico**

- Selecione o menu **History** para localizar e abrir o registro do **Incident** que você acabou de criar.

**19. Revisar Atividade**

- Na aba **Notes**, revise o **Activity stream** para confirmar que as **work notes** e **additional comments** foram gravados lá.

**20. Listas Relacionadas**

- Revise as **Related Lists** (Listas Relacionadas) que agora estão disponíveis.

### **Nota sobre Listas Relacionadas**

> As Related lists (Listas relacionadas) contêm informações relacionadas ao registro, como Acordos de Nível de Serviço (Task SLAs), Serviços Impactados (Impacted Services) e Ofertas de Serviço (Service Offerings). Elas não são a mesma coisa que os itens encontrados na lista de Related Links, que são UI Actions (Ações de Interface). Ambos serão discutidos mais tarde no curso.
>

