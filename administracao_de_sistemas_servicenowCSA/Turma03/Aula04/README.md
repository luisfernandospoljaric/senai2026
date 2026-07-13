# Gestão de dados e formulários

## Lab 3.1.1 - Criar visualizações de lista clássicas

**Objetivos do Laboratório**
Você alcançará os seguintes objetivos:

- Criar uma nova **view** (visualização) de lista clássica.
- Criar uma nova **application** (aplicação) e **module** (módulo).

**Cenário:**
Visualizar e monitorar incidentes e consultas de HHD (Handheld Devices).

- Crie e use **List Views** para identificar **incidents** e **inquiries** de HHD.
- A lista deve incluir as seguintes colunas nesta ordem: **Number**, **Pilot**, **Category**, **Opened**, **Configuration item**, **Model ID**, **Install status**, **Short description**, **Caller**, **State**.

### **Seção 1: Adicionar coluna Pilot à tabela de incidentes**

Nesta seção, adicionaremos o novo campo **Pilot** que você criou a uma nova visualização de lista.

**1. Verificação de Login**

- Certifique-se de estar logado como **System Administrator**.

**2. Navegação**

- Navegue até **All > System Definition > Tables**.

**3. Pesquisar Tabela**

- Pesquise pela tabela **Incident**.

**4. Abrir Registro**

- Abra o registro da tabela **Incident**.

**5. Criar Nova Coluna**

- Na aba **Columns** (Colunas), selecione **New**.

**6. Preencher Dicionário**
Complete o formulário **Dictionary Entry** da seguinte maneira:

- **Type:** True/False (Este campo aparecerá como uma caixa de seleção em um formulário).
- **Column label:** Pilot
- **Column name:** deixe o padrão (`u_pilot`)
- **Choice List Specification tab:**
    - **Choice:** `- None --`
- **Default Value tab:**
    - **Default value:** false (digite a palavra "false")

**7. Enviar**

- Selecione **Submit**.

### **Seção 2: Visualizar e monitorar incidentes e consultas de HHD usando a visualização clássica**

**8. Navegação**

- Navegue até **All > Incident > All**.

**9. Menu de Coluna**

- Clique com o botão direito em qualquer **column header** (cabeçalho de coluna).

**10. Configurar Layout**

- Selecione **Configure > List Layout**.

**11. List Collector**

- O **List collector** aparece. Os campos na lista **Selected** foram herdados da visualização **Default**.

**12. Nova Visualização**

- Na seção **List view**, em **View name**, selecione **New...**.

**13. Nomear Visualização**

- Nomeie sua nova visualização como **HHD**.

**14. Confirmar**

- Selecione **OK**.

**15. Limpar Lista Selecionada**

- Da lista **Selected**, remova os seguintes campos: **Priority**, **Assignment group**, **Assigned to**, **Updated**, **Updated by**.

**16. Adicionar Campos Básicos**

- Da lista **Available**, adicione o campo **Pilot** e o campo **Configuration Item** à lista **Selected**.
    - **Nota:** Use os ícones de adicionar e remover para manipular a lista.

**17. Dot-Walking (Adicionar campos relacionados)**

- Adicione os campos **Model ID** e **Install Status** usando a técnica **Dot-Walking**.
    - Na lista **Available**, localize e selecione o campo **Configuration item**.
    - Selecione o ícone **Expand selected reference field** (o ícone de árvore/hierarquia) para expandir o campo de referência **Configuration item**.
        - **Nota:** Pode levar alguns segundos para a lista **Available** atualizar.
    - Localize o título **Configuration item --> Configuration Item fields**.
    - Role para baixo para ver todos os campos na tabela **Configuration Item**.

**18. Localizar e Adicionar**

- Localize e adicione:
    - **Install Status**
    - **Model ID**.

**19. Retornar à Lista Principal**

- Na lista **Available**, clique uma vez no rótulo **Incident fields**. Isso retornará você para a lista de campos de incidente.
    - **Nota:** O rótulo **Incident fields** pode ser encontrado no topo da lista **Available**.

**20. Ordenar Colunas**

- Use os ícones **move up** (mover para cima) e **move down** (mover para baixo) para ordenar sua lista conforme mostrado:
    - **Number**
    - **Pilot**
    - **Category**
    - **Opened**
    - **Configuration item**
    - **Configuration item.Model ID**
    - **Configuration item.Install Status**
    - **Short description**.

**21. Salvar**

- Selecione **Save**.

**22. Alterar Visualização**

- No menu **List controls**, selecione **View > HHD**.

**23. Verificar Rótulo**

- Verifique se o rótulo **View: HHD** é exibido na lista.

**24. Verificar Colunas**

- Verifique se as **columns** (colunas) são exibidas na ordem correta.

### **Seção 3: Configurar lista no menu de aplicação**

Neste exercício, você adicionará uma nova **Application** (como Self-Service) e um **Module** (como Dashboards) ao menu **All**, para que seja fácil para os gerentes de produto de HHD localizarem suas listas.

**1. Navegação**

- Navegue até **All > System Definition > Application Menus**.

**2. Criar Novo**

- Selecione **New**.

**3. Preencher Formulário de Aplicação**
Complete o formulário da seguinte maneira:

- **Title:** HHD
- **Roles:** itil
- **Category:** Deixe como **Custom Applications**
- **Hint:** Holographic Handheld Devices

**4. Salvar Registro**

- Clique com o botão direito no **form header** e selecione **Save**.
    - **Nota:** Em passos futuros do laboratório, será dito simplesmente para "Salvar". Você precisará discernir se deve usar o botão *Save* ou o clique com o botão direito *Save*. Não use *Submit* ou *Update* a menos que seja instruído a fazê-lo.

**5. Acessar Módulos**

- Role para baixo até a lista **Modules**.

**6. Criar Módulo**

- Selecione **New**.

**7. Preencher Formulário de Módulo**
Complete o formulário da seguinte maneira:

- **Title:** Incidents and Inquiries
- **Order:** 10
- **Hint:** HHD Incidents and Inquiries
- **Aba Visibility:**
    - **Roles:** itil
- **Aba Link Type:**
    - **Link type:** List of Records
    - **Table:** Incident [incident]
    - **View name:** HHD
    - **Filter:** Service offering | contains | HHD

**8. Submeter**

- Selecione **Submit**.

**9. Verificar Menu**

- Verifique se a **Application** HHD e o **Module** Incidents and Inquiries estão visíveis no menu **All**.

**10. Verificar Lista**

- Selecione **Incidents and Inquiries** para verificar se a lista é exibida e está definida para a **HHD view**.
    - **Nota:** Como não temos nenhum incidente HHD ainda, a lista está vazia.

## Lab 3.2.1 - Adicionar um campo a um formulário

**Objetivos do Laboratório**

- Adicionar um campo a um formulário.

**Cenário:**
Adicionar o campo **Pilot** a uma nova visualização de formulário.

- Use o **Form Builder** para adicionar o campo **Pilot** a um formulário como um campo *true/false* (caixa de seleção).

### **Seção 1: Adicionar caixa de seleção Pilot no formulário clássico**

**1. Navegação**

- Navegue até **All > Incident > Open**.

**2. Verificar Visualização**

- Na lista **Incidents**, confirme que você está na visualização **Default** (*view*).
    - **Nota:** Se não houver nenhum rótulo **View:** ao lado do nome da tabela, você está na visualização **Default**. Se você vir outra visualização selecionada, como HHD, selecione a visualização **Default** no menu **List controls**.

**3. Criar Novo Registro**

- Selecione **New** para abrir o formulário de novo registro de **Incident**.

**4. Configurar Formulário**

- Clique com o botão direito no **form header** (cabeçalho do formulário) e selecione **Configure > Form Builder**.

> Notas Técnicas:
Uma notificação aparece explicando que você está em um escopo de aplicação diferente (Different application scope). Não selecione Edit in original scope.
> 

**5. Confirmar Visualização no Builder**

- Confirme se o **View name** é **Default view**.

**6. Localizar Campo**

- Localize o campo **Pilot** que você criou no laboratório anterior (3.1.1).

**7. Arrastar Campo**

- Selecione e arraste o campo **Pilot** para baixo do campo **Configuration item**.

**8. Salvar**

- Selecione **Save**.

**9. Retornar**

- Navegue de volta para o novo registro de incidente na outra aba do navegador.

**10. Recarregar Formulário**

- Selecione o menu **Additional actions** (ou clique com o botão direito no cabeçalho do formulário) e escolha **Reload form**.

**11. Verificação Final**

- Verifique se o campo **Pilot** é exibido no local correto (com a caixa de seleção).

## Lab 3.3.1 - Adicionar categoria e valores de referência

**Objetivos do Laboratório**
Você alcançará os seguintes objetivos:

- **Criar** uma nova Subcategoria como um valor dependente (*dependent value*).
- **Criar** novos registros em uma tabela de Referência.
- **Habilitar** a atribuição automática (*auto-assignment*) de incidentes.

**Cenário:**

- **Identificar Incidentes e Consultas de firmware:** Adicionar a Subcategoria "Firmware" como um valor dependente para a Categoria "Hardware".
- **Rastrear incidentes usando Service e Service Offerings:** Criar novos registros em tabelas de Referência para rastrear incidentes a partir dos níveis de *Service* e *Service Offerings*.
- **Habilitar auto-atribuição de incidentes:** Adicionar *Support Group* aos registros de *Service* e *Service Offering* para aproveitar as regras básicas de auto-atribuição.

### **Seção 1: Identificar Incidentes e Consultas de firmware**

**Adicionar a Subcategoria, Firmware, como um valor dependente para a Categoria, Hardware**

Categorias e Subcategorias são uma maneira de segmentar informações para relatórios ou filtragem.

**1. Verificação de Login**

- Certifique-se de estar logado como **System Administrator**.

**2. Navegação**

- Navegue até **All > Incident > Open**.

**3. Verificar Visualização**

- Garanta que a visualização de lista é a **Default view**.
    - Se não for, selecione o menu **List controls**, selecione **View > Default view**.

**4. Criar Novo**

- Selecione **New**.

**5. Selecionar Categoria**

- No campo **Category**, selecione **Hardware**.
    - **Nota:** *Category* tem um valor *Hardware*, que pode ser usado para os HHDs.

**6. Verificar Subcategorias**

- Selecione **Subcategory** para revisar as opções disponíveis.
    - **Nota:** Nenhuma das opções existentes é apropriada para o que você precisa realizar. Portanto, você adicionará uma Subcategoria para *Firmware*.

**7. Configurar Opções**

- Clique com o botão direito no rótulo do campo (*field label*) **Subcategory**, então selecione **Configure Choices**.

**8. Confirmar Navegação**

- Selecione **Leave** (Sair).
    - **Nota:** Isso levará você para a tela de Configuração de Opções de Subcategoria (*Configuring Subcategory Choices screen*).

**9. Revisar Elementos**

- Revise as informações para entender os elementos que você está personalizando (*tailoring*).
    - Observe que está configurando `incident.subcategory` dependente da `category: hardware`.

**10. Adicionar Nova Subcategoria**

- No campo **Enter new item**, digite **Firmware**.
- Selecione **Add**.
- Use o ícone **Move up** para mover a opção **Firmware** para antes de *Keyboard*.

**11. Salvar**

- Selecione **Save**.

**12. Testar Categoria**

- Selecione **Category**, então selecione **Hardware**.

**13. Testar Subcategoria**

- Selecione **Subcategory**, então selecione **Firmware**.

### **Seção 2: Rastrear incidentes usando Service e Service Offerings**

**Adicionar um Serviço para Treinamento como Tipo Business Service**

Precisamos adicionar valores às listas de referência de Incidente para *Service* e *Service offerings* para o novo *Infinity HHD*. Primeiro, precisamos identificar a tabela de referência para o campo *Service*.

**1. Identificar Tabela**

- No registro de **incident** aberto, clique com o botão direito no rótulo do campo **Service** e selecione **Show - 'business_service'**.

**2. Localizar Nome**

- Localize o **Reference table name** (nome da tabela de referência) na janela pop-up **Dictionary Info**.

**3. Copiar e Navegar**

- Copie o **table name** para sua área de transferência, depois feche a janela pop-up.
- No menu **All**, digite (ou cole) o **table name** e adicione **.list** ao final (ex: `cmdb_ci_service.list`). Então, pressione **Enter**.
    - **Nota:** Você não precisa salvar o registro de incidente aberto.

**4. Criar Novo Serviço**

- A lista **Services** é exibida. Selecione **New**.

**5. Preencher Formulário de Serviço**
Complete o formulário da seguinte maneira:

- **Name:** Training
- **Owned by:** Annette Frietas
- **Used for:** Production
- **Operational status:** Operational
- **Service classification:** Business Service
- **Approval group:** CAB Approval

**6. Salvar**

- Selecione **Save** (Clique com botão direito no cabeçalho ou use o botão Save para permanecer no formulário).

**Criar Oferta de Serviço Filha (Create Child Service Offering)**

**7. Acessar Ofertas**

- Selecione a aba **Offerings**.
- Selecione **New**.

**8. Preencher Formulário de Oferta**
Complete o formulário **Offering** da seguinte maneira:

- **Name:** Infinity (HHD)
- **Owned by:** Annette Frietas
- **Used for:** Production
- **Operational Status:** Operational
- **Approval group:** CAB Approval
- **Business criticality:** 2 – somewhat critical
- **Short Description:** Infinity (HHD) 3D handheld projectors
- **Description:** Infinity (HHD) 3D handheld projectors which show 3D images and videos
    - *(Dica: Você pode copiar e colar os textos de descrição)*.

**9. Submeter**

- Selecione **Submit**.

### **Seção 3: Habilitar atribuição automática de incidentes**

Crie o Grupo de Suporte Tecnológico de Treinamento (*Training Technology Support Group*) e adicione-o como o *Support Group* para *Service* e *Service Offering*.

**1. Navegar para Grupos**

- Navegue até **All > System Security > Users and Groups > Groups** (ou selecione este módulo da sua lista de **Favorites**).

**2. Criar Novo Grupo**

- Selecione **New**.

**3. Configurar Grupo**
Complete o formulário da seguinte maneira:

- **Name:** Training Technology Support.

**4. Salvar**

- Selecione **Save**.

**5. Adicionar Membros**

- Selecione a aba **Group Members**, então selecione **Edit**.
- Adicione os seguintes **team members** ao grupo:
    - **Beth Anglin**
    - **Bow Ruggeri**
    - **David Loo**
    - **Annette Frietas**
- Selecione **Save**.

**6. Adicionar Role**

- Selecione a aba **Roles**.
- Selecione **Edit**.
- Localize a role **itil** e mova-a para a **Roles List**.
- Selecione **Save**.

**7. Atualizar**

- Selecione **Update** para sair do registro do grupo.
    - **Nota:** Agora que o grupo *Training Technology Support* foi adicionado à tabela de grupos, ele estará disponível nos campos de referência de grupo em vários formulários.

**8. Associar Grupo ao Serviço**

- Navegue até **All > Service Portfolio Management > Services**.
- Certifique-se de estar na visualização **Default**.
- Localize e abra o **Training Service**.
- Complete o formulário da seguinte maneira:
    - **Support group:** Training Technology Support
    - **Change group:** Training Technology Support
- Selecione **Save**.

**9. Associar Grupo à Oferta**

- Sob a aba **Offerings**, abra a Oferta **Infinity (HHD)**.
- Complete o formulário da seguinte maneira:
    - **Support group:** Training Technology Support
    - **Change group:** Training Technology Support
- Selecione **Save**.

## Atividade

**Cenário:**
A Cloud Dimensions está formalizando o suporte à infraestrutura de rede e você precisa cadastrar o serviço de Internet Sem Fio no sistema, diferenciando o acesso dos funcionários do acesso de visitantes.

**Objetivo:**
Criar um *Business Service* pai e uma *Service Offering* filha.

---

### **Passo 1: Criar o Serviço Principal (Parent Service)**

1. Navegue até a lista de Serviços de Negócio (digite `cmdb_ci_service.list` no navegador ou vá em **Service Portfolio Management > Services**).
2. Crie um **New** registro com os dados:
    - **Name:** Wi-Fi Corporativo
    - **Service classification:** Business Service
    - **Owned by:** [Seu Nome]
    - **Used for:** Production
    - **Operational status:** Operational
3. **Salve** o registro (mas permaneça no formulário).

### **Passo 2: Criar a Oferta de Serviço (Child Offering)**

1. No formulário do "Wi-Fi Corporativo", localize a aba (Related List) chamada **Offerings**.
2. Clique em **New** para adicionar uma oferta específica.
3. Preencha com os dados:
    - **Name:** Wi-Fi Visitantes (Guest)
    - **Short Description:** Acesso limitado para clientes e parceiros.
    - **Parent:** (Já deve vir preenchido com *Wi-Fi Corporativo*)
    - **Owned by:** [Seu Nome]
    - **Business criticality:** 2 - Somewhat critical