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

### Seção 2: Explorar listas de incidentes no ambiente clássico

**1. Copiar Número**

- Escreva ou copie o seu **incident number** (número do incidente).

**2. Navegação**

- Navegue até **All > Incident > Open**.

**3. Localizar o Incidente**

- Localize o **incident** usando qualquer um destes métodos:
    - **Ordenar:** Classifique a coluna **Opened** (do mais recente para o mais antigo / *Z to A*).
    - **Pesquisar por Número:** Pesquise usando a coluna **Number** digitando o número completo do Incidente.
        - **Nota:** Se você não vir a caixa de pesquisa, selecione a lupa (*magnifier*) no cabeçalho da coluna.
    - **Pesquisar com Curinga:** Pesquise usando a coluna **Number** com um **wildcard (*)** (caractere curinga) para realizar uma pesquisa do tipo "contém" (*Number contains search*).

    ### Seção 3: Receber atribuições de trabalho no ambiente clássico

**1. Navegação**

- Navegue até **All > Service Desk**.

**2. Criar Favorito**

- Localize e passe o mouse sobre o módulo **My Groups Work** (Trabalho dos Meus Grupos), então selecione a **Star** (Estrela).
    - A caixa de diálogo **Favorite added** aparecerá. Verifique se tudo parece correto e selecione **Done**.

**3. Acessar Favorito**

- Selecione o menu **Favorites** para selecionar **Service Desk – My Groups Work**.

**4. Revisar Lista**

- Revise o **list header** (cabeçalho da lista) e os **breadcrumbs** (trilhas de navegação) para determinar os tipos de **records** (registros) visíveis e o **filter** (filtro) que foi aplicado a esta lista.
    - **Nota:** **My Groups Work** inclui qualquer trabalho atribuído ao(s) grupo(s) do qual você é membro, mas que ainda não foi atribuído a uma pessoa específica.

## Lab 1.3.2 - **Trabalhar em incidente usando Service Operations Workspace**

**Objetivos do Laboratório**
Você se familiarizará com aplicações e *workspaces* (espaços de trabalho), colocando-se no lugar de um funcionário de TI ao completar as seguintes atividades:

- Trabalhar em um **incident** usando o **Service Operations Workspace**.

**Dependência do Laboratório:** Lab 1.3.1 – Create Incident.

### **Seção 1: Explorar o Service Operations Workspace**

**1. Verificar Personificação**

- Certifique-se de que você está **personificando** (*impersonating*) **Beth Anglin**.

**2. Acessar o Workspace**

- Selecione o menu **Workspaces**, então selecione **Service Operations Workspace**.
    - **Nota:** Se você não vir o menu **Workspaces**, expanda o tamanho da sua tela ou selecione o ícone de 3 pontos.

**Contexto do Sistema:**

> O Service Operations Workspace é um espaço de trabalho desenvolvido especificamente para atender às necessidades dos agentes do Service Desk. As seções da visualização de formulário clássica foram reorganizadas para que o agente precise rolar menos a tela (less scrolling).
> 

**3. Localizar Widget**

- Na seção **Overview**, localize o *widget* **Unassigned Incidents** (Incidentes não atribuídos).
    - **Nota:** As contagens de incidentes do seu painel (*dashboard*) e os registros de exemplo podem parecer diferentes da imagem.

**4. Selecionar Gráfico**

- Selecione o segmento do gráfico referente a **1-Critical Unassigned incidents**.
    - **Nota:** Talvez você precise rolar para a direita ou aumentar o tamanho da tela.
    - **Dica:** Se o gráfico não aparecer, você pode precisar selecionar o ícone **More options** (três pontos) no *widget* **Unassigned incidents** e clicar em **Refresh**.

**5. Localizar o Incidente**

- A segunda seção agora exibe os **P1-unassigned incidents** que foram resumidos na lista.
- Navegue pelos blocos (*tiles*) sob **P1 unassigned incidents** para localizar o **incident** que você criou no **Lab 1.2** (o incidente do Fred Luddy sobre o app de conferência).

**6. Abrir o Incidente**

- Selecione o **number** (número) para visualizar o **incident** na visualização de formulário do **Workspace**.

**7. Explorar**

- Na aba **Overview**, leia o **Summary** (Resumo) do incidente.
- Navegue e explore as semelhanças e diferenças entre este **incident** em um **Workspace** versus um **incident** no **Classic Environment**.

### Seção 2: Aceitar a atribuição do incidente e trabalhar na resolução

**1. Aceitar Atribuição**

- Selecione **Assign to me** (Atribuir a mim) para aceitar a atribuição.

**2. Usar Agent Assist**

- Selecione o ícone **Agent Assist** para exibir o painel do Agent Assist, depois selecione e leia o artigo **Mobile Event App for Staff – Error 555**.

**3. Anexar Artigo**

- Selecione **Attach** para compartilhar essa informação com o solicitante (*caller*), Fred.
    - **Nota:** Observe que há também uma opção **Flag**. Isso pode ser usado para sinalizar um artigo para alterações sugeridas.

**4. Comentários Adicionais**

- Na caixa **Attach Article Additional comments**, digite uma mensagem amigável ao cliente:
    - **Texto:** "Fred, please follow the instructions in this article. If this doesn't work, reach out to me and we can try the second step."
    - *(Dica: Você pode copiar e colar o texto acima)*.

**5. Confirmar Anexo**

- Selecione **Attach Article**.

**6. Verificar Atividade**

- Selecione a aba **Details** para verificar se o **Additional comment** está presente no **Activity stream**.

**7. Preencher Resolução**

- Na aba **Overview**, role para baixo para localizar a seção **Resolution** e complete da seguinte forma:
    - Selecione o botão **Add resolution**.
    - **Resolution code:** Workaround provided.
    - **Resolution notes:** Used vendor instructions to restart client.

**8. Resolver**

- Selecione **Resolve**.

**9. Confirmar Resolução**

- Na caixa de diálogo **Resolve**, confirme as notas de resolução e selecione **Resolve**.

**10. Encerrar Personificação**

- Selecione **End impersonation**.
    - **Nota:** Fred receberá uma notificação por e-mail automatizada com os detalhes da resolução. Se o problema persistir, ele pode responder à mensagem para ter o incidente definido de volta para **Work in Progress**. Isso notificará automaticamente Beth Anglin que ajuda adicional é necessária.


## Lab 1.3.3 - **Verificar status do incidente usando o Employee Center Portal**

**Objetivos do Laboratório**
Você se familiarizará com aplicações e portais, colocando-se no lugar de um cliente ao completar as seguintes atividades:

- Verificar o status do **incident** usando o **Employee Center Portal**.

**Dependência do Laboratório:** Lab 1.3.1 (Criar incidente) e Lab 1.3.2 (Resolver incidente com Artigo de Conhecimento).

### **Seção 1: Explorar o Employee Center Portal**

**1. Personificar Fred**

- **Personifique** (*Impersonate*) **Fred Luddy**.

**2. Navegação**

- Navegue até **All > Self-Service > Employee Center**.
    - **Nota:** O **Employee Center Portal** é iniciado em uma nova aba do navegador. Dependendo da sua implementação, usuários que não são de TI podem ser direcionados automaticamente para um portal em vez da página inicial anterior.

**3. Explorar Serviços**

- Selecione o menu **Technology services** para explorar as **default options** (opções padrão) para TI.

**4. Minhas Solicitações**

- No cabeçalho do **Employee Center Portal**, selecione **My Requests** para visualizar várias solicitações e incidentes enviados por Fred.

**5. Abrir o Incidente**

- Abra o **incident** que Fred relatou referente ao **Conference Event Mobile app**.
    - **Nota:** O incidente está marcado como **Resolved** e possui o **link** para a informação de resolução fornecida pelo agente.

**6. Revisar Artigo**

- Selecione o **KB article title** (título do artigo KB) para abrir e revisar as instruções. Fred reinicia seu dispositivo e ele agora está funcionando.

**7. Confirmar Ajuda**

- Selecione **Yes**. O artigo funcionou e foi útil.

**8. Fechar Aba**

- Feche a **browser tab** (aba do navegador) que contém o artigo.

**9. Retornar à Instância**

- Retorne para a **instance tab** (aba da instância). A página inicial do Fred Luddy deve ser exibida.

**10. Encerrar Personificação**

- Selecione **End impersonation**.

## Lab 2.1.1 - **Configurar uma instância**

**Objetivos do Laboratório**

Você alcançará o seguinte objetivo: Marcar a instância como a instância de Desenvolvimento (*Development instance*) adicionando um logotipo da empresa e modificando a aba do navegador com um rótulo DEV.

**Cenário:**

A Cloud Dimensions recebeu três cópias do ambiente ServiceNow. Uma será usada para desenvolvimento, uma para testes e uma para produção. A instância usada nesta aula é a de Desenvolvimento, onde as mudanças de configuração são feitas.

### **Seção 1: Configurar instância de desenvolvimento (Configure development instance)**

**Atualizar imagem no registro My Company**

O Marketing forneceu um logotipo da Cloud Dimensions e a TI adicionou "DEV" à imagem do logotipo.

**1. Verificação de Login**

- Certifique-se de estar logado como **System Administrator**.
    - Observe o **default logo** (logotipo padrão) do ServiceNow.

**2. Navegação**

- Navegue até **All > System Properties > My Company**.

**3. Atualizar Banner**

- No campo **UI 16 Banner Image**, selecione **Update**.

**4. Escolher Arquivo**

- Selecione **Choose File**.

**5. Selecionar Logo**

- Localize e selecione o arquivo `CloudDimensionsLogo_for_DEV.png` (que foi baixado nos materiais do curso).

**6. Confirmar**

- Selecione **OK**.

**7. Salvar**

- Confirme se o **logo** está correto, então selecione **Update** para salvar e retornar à lista **Companies**.
    - **Nota:** Se você não vir a lista **Companies**, navegue até **All > User Administration > Companies**.

**8. Recarregar e Verificar**

- Clique com o botão direito no **Next Experience header** (a barra superior escura da interface) e selecione **Reload**.
- Confirme que o **new logo** (novo logotipo) está **visible**.
    - **Nota:** Pode levar alguns minutos para a atualização ser aplicada. Tente novamente mais tarde se não responder ao *Reload*.

**9. Localizar Registro da Empresa**

- Selecione a coluna **Updated** para ordenar a lista de modo que o nome da empresa **Your name here** (ou o registro recém-atualizado) apareça no topo da lista.

**10. Abrir Registro**

- Abra o registro da empresa **Your name here** (ou o registro que você acabou de editar).

**11. Verificar Visualização**

- Garanta que você está na visualização **Default** (*view*).
    - **Nota:** Para mudar para a *Default view*, navegue até o menu **Additional actions > View > Default**.

**12. Atualizar Formulário**

Complete o formulário da seguinte maneira:

- **Name:** Cloud Dimensions
- **Manufacturer:** desmarque a caixa de seleção (*clear the check box*).

**13. Salvar Alterações**

- Selecione **Update**.

**14. Verificação Final**

- Verifique se **Cloud Dimensions** aparece na lista **Companies**.

### **Seção 2: Atualizar o rótulo da aba do navegador (Update browser tab label)**

**1. Navegação**

- Navegue até **All > System Properties > System**.
    - **Nota:** A plataforma ServiceNow possui muitas propriedades de sistema. O módulo **System** é um subconjunto de propriedades que podem ser usadas para controlar o comportamento do sistema.

**2. Confirmar Estado Atual**

- Confirme o estado atual do seu **browser tab title** (título da aba do navegador).

**3. Localizar Propriedade**

- Role para baixo para localizar a propriedade **Browser tab title**.

**4. Editar Propriedade**

- Digite **DEV** na propriedade **Browser tab title**.

**5. Salvar**

- Selecione **Save**.
    - **Nota:** Este é um formulário longo; você precisará rolar a tela para localizar o botão **Save**.

**6. Verificar Alteração**

- Confirme que o rótulo **DEV** agora está visível na **browser tab** (aba do navegador) e no **Contextual app pill** (a pílula contextual do aplicativo).
    - **Nota:** O **Contextual app pill** é a "bolha" no centro do banner. Seu objetivo é lembrar onde você está dentro da plataforma. Neste caso, você está no ambiente **DEV**, na página de **System properties**. Nem todos os rótulos de *pills* herdam o rótulo DEV.

**7. Criar Favorito no Banner**

- No **Contextual app pill**, selecione a **star** (estrela) para adicioná-lo como um favorito.

**8. Configurar Favorito**

- Selecione **More** para configurar seu **Favorite**, então selecione **Save edits**.
    - **Nota:** Certifique-se de que o **Favorite** correto esteja selecionado no campo **Name**.


### **Seção 3: Localizar todas as propriedades do sistema (Locate all system properties)**

Como você deve ter notado, Administradores do Sistema precisam estar familiarizados com muitas propriedades do sistema. Até agora, navegamos para uma página de resumo das principais propriedades usando o menu. Agora é hora de navegar para a lista de **TODAS** as propriedades do sistema na plataforma.

**1. Navegação Direta**

- No **Filter navigator**, digite `sys_properties.list` e pressione **Enter**.

**2. Criar Favorito da Lista**

- Use o menu **List controls** (ícone de três linhas) para selecionar **Create Favorite**.
    - A caixa de diálogo **Favorite added** aparecerá.

**3. Configurar Favorito**

- Selecione **More**.

**4. Personalizar**

- No campo **Favorite Name**, certifique-se de que o favorito **System Properties** esteja selecionado, e então adicione **ALL** ao final do nome (ficando *System Properties - ALL*).
- Selecione uma nova **color** (cor) e **icon** (ícone).
- Quando terminar, selecione **Save edits**.

**5. Confirmar Visibilidade**

- No menu **Favorites**, confirme que seu favorito está **visible**.

**6. Pesquisar Propriedade Específica**

- Na lista **System Properties**, pesquise por qualquer propriedade que contenha **Polaris** (usando `Polaris`).
    - **Nota:** Observe a propriedade `glide.ui.polaris.experience`. Esta é a propriedade que você modificaria para habilitar ou desabilitar a **Next Experience Unified Navigation** na plataforma.

### **Verificação do Laboratório (Lab verification)**

**1. Personificar**

- **Personifique** (*Impersonate*) **Terrance Nimmer**.

**2. Verificar**
Verifique o seguinte:

- A **instance image** (imagem da instância) está definida como o logotipo da Cloud Dimensions com o rótulo **DEV**?
- A **browser tab** (aba do navegador) exibe o rótulo **DEV**?

**3. Encerrar**

- Selecione **End impersonation**.