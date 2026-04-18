## **Lab 5.1.1: Gerenciar a Base de Conhecimento e Criação de Artigos**

**Tempo:** 20–25 minutos

**Arquivos necessários:** Infinity_Open_Enrollment.docx

**Objetivos do Lab**

Você alcançará os seguintes objetivos:

- **Create** (Criar) um group e atribuir roles específicas aos users para gerenciar o acesso ao knowledge management.
- **Create** (Criar) um knowledge base article importando um documento Word.
- **Approve** (Aprovar) o article para publicação.
- **Define, apply, and test** (Definir, aplicar e testar) user criteria na knowledge base.

**Recursos Necessários:** Você precisará do arquivo **Infinity_Open_Enrollment.docx** que foi baixado no **Lab 1.1.1**. Se você não conseguir localizar este arquivo, pode usar qualquer arquivo .docx. As imagens de tela mostradas refletem o arquivo de exercício da aula.

---

**Dependência do Lab:** 1.1.1, 2.1.1

### **Cenário**

O coordenador de testes da Infinity HHD precisa publicar um article que explica como se inscrever no programa piloto na **Human Resources General Knowledge Base**.

Membros apropriados do departamento de Human Resources receberão permissões de autoria pelo System Administrator para que possam criar, revisar, publicar e aprovar articles. O System Administrator garantirá que o article permaneça seguro e acessível apenas para funcionários da Cloud Dimensions.

### **Section 1: Preparando a Instancia**

### **Define primary company as Cloud Dimensions**

1. Como **System Administrator**, navegue até **All > User Administration > Companies**.
2. **Configure the List Layout** para adicionar a coluna **Primary** à list view.
3. Filtre onde **Primary** é **true**.
4. Verifique se **Cloud Dimensions** está listada.

### **Assign user to Cloud Dimensions**

1. Use seus **Favorites** para navegar até **Users and Groups - Users**.
2. Adicione a coluna **Company** à list view.
3. Localize o user **Megan Burke**, então use a edição inline para alterar o nome da company dela para **Cloud Dimensions**.
4. Selecione o ícone de **green check** para salvar.

### **Section 2: Criando o Grupo de Gerenciamento de Conhecimento**

1. Use seus **Favorites** para navegar até **Users and Groups - Groups**.
2. Selecione **New** para criar um novo group.
3. Preencha o form da seguinte maneira:
    - **Name:** HR Knowledge Managers
    - **Manager:** Gracie Ehn
    - **Description:** This group contains the individuals with the Knowledge Manager [knowledge_manager] role.
        
        *(Dica: Copie/Cole o texto da "Description")*
        
4. **Save**.
5. Selecione a tab **Group Members**.
6. Selecione **Edit**.
7. Adicione **Gracie Ehn** e **Jasmin Gum** à lista **Group Members**.
8. Selecione **Save** para retornar ao registro do Group **HR Knowledge Managers**.

### **Section 3: Assign a new role to the HR Knowledge Managers group**

*(Seção 3: Atribuir uma nova role ao grupo HR Knowledge Managers)*

1. Selecione a aba **Roles**, depois selecione **Edit...**
2. Adicione a role **knowledge_manager** à **Roles List**.
3. Adicione a role **approver_user** à **Roles List**.
    
    > **Nota:** Você pode precisar atualizar a lista para ver as Roles.
    > 
4. Selecione **Save**.

### **Section 4: Modify the Human Resources General Knowledge Base**

*(Seção 4: Modificar a Human Resources General Knowledge Base)*

1. Navegue até **All > Knowledge > Administration > Knowledge Bases**.
2. Selecione **Human Resources General Knowledge**.
3. Altere o **Owner** para **Gracie Ehn**.
4. Altere o **Publish workflow** para **Knowledge – Approval Publish**.
5. Altere o **Retire Workflow** para **Knowledge – Approval Retire**.
    
    > **Nota:** Embora a ServiceNow sugira usar o Flow Designer, esses workflows já fazem parte da instalação padrão (baseline install).
    > 
6. **Save**.
    
    > **Nota:** Como **Owner** da **Human Resources General Knowledge Base**, Gracie Ehn será responsável por aprovar articles enviados para publicação.
    > 
7. Selecione a aba **Can Contribute** e selecione **New** para criar um novo User Criteria.
8. Preencha o form da seguinte maneira:
    - **Name:** HR Knowledge Managers
    - **Groups:** HR Knowledge Managers
9. Selecione **Submit**.

### **Section 5: Create a new HR General Knowledge Base article**

*(Seção 5: Criar um novo article na HR General Knowledge Base)*

> **Nota:** Os membros do grupo **HR Knowledge Managers** (Jasmin e Gracie) agora podem contribuir com articles para a knowledge base. No entanto, o owner da Knowledge Base (Gracie) deve aprovar os articles antes que fiquem visíveis para as audiências especificadas na aba **Can Read**.
> 
1. Realize o Impersonate como **Jasmin Gum**.
2. Navegue até **All > Knowledge > Articles > Import Articles**.
3. Na lista suspensa **Knowledge Base**, selecione **Human Resources General Knowledge**.
4. Selecione **Browse Files** para localizar o arquivo **Infinity_Open_Enrollment.docx**.
    
    > **Nota:** Lembre-se, se você não tiver mais o arquivo de exercício da aula, pode usar qualquer arquivo .docx. Se usar outro arquivo, as imagens mostradas no lab serão diferentes.
    > 
5. Clique duas vezes no **file name** ou selecione o arquivo e selecione **Open**.
6. Selecione **Import**.
7. Na janela pop-up **Uploading Knowledge Articles**, selecione **Continue**.
    
    > **Nota:** Vários arquivos podem ser importados ao arrastar e soltar múltiplos arquivos na caixa "Import a Word File". A **Short Description** será a mesma que o nome do arquivo do documento Word importado. Se não desejar caracteres especiais na descrição do article, você pode removê-los aqui.
    > 
8. Na caixa de diálogo **Import Completed**, selecione o link do **Record Number** do knowledge article para abrir o article **Infinity_Open_Enrollment**.
    
    > **Nota:** Ao selecionar o article da knowledge base, ele abre em uma nova aba. Se o article correto não abrir, navegue até o article via **All > Knowledge > Articles > All**. O record number pode ser diferente do mostrado. Se você fez upload de um arquivo diferente, sua **Short Description** e o título do knowledge article também serão diferentes.
    > 
9. No cabeçalho do **article**, selecione **Edit**.
10. Selecione Publish

**11.** Verifique se a mensagem de informação é exibida e diz: **This knowledge item is in review**.

**12.** Feche a **aba do navegador** atual.

**13.** Feche a janela pop-up **Import Completed**.

### Seção 6: Aprovar o artigo para publicação

**1.** Faça Impersonate (represente) de **Gracie Ehn**.

> **Nota:** Gracie Ehn é a proprietária da Knowledge Base (Knowledge Base owner) da **Human Resources General Knowledge Base**. Ela também é membro do grupo **HR Knowledge Managers** e atua como aprovadora de novos conteúdos submetidos para publicação.
> 

**2.** Navegue até **All > Service Desk > My Approvals**.

**3.** Localize e abra o registro de aprovação que está como **Requested** (*Requested approval record*).

- Role para baixo para ver um resumo do item sendo aprovado.
- Role para cima e localize o número do artigo de Knowledge.

**4.** Selecione o ícone **Preview this record**, e então selecione **Open Record** para visualizar o registro completo do artigo de conhecimento.

**5.** Selecione **View Article** para ver como o artigo será exibido para os usuários.

**6.** Selecione o ícone de voltar (**back icon**) para retornar à visualização do formulário de **Knowledge**.

**7.** Role até a parte inferior do formulário de **Knowledge**, e então selecione a aba **Approvals**.

**8.** Clique com o botão direito em **Requested** para o artigo que você está aprovando.

> **Nota:** O seu número de aprovações pode ser diferente.
> 

**9.** Selecione **Approve**.

**10.** Navegue até **All > Self-Service > Knowledge**.

**11.** Selecione **Human Resources General Knowledge** para confirmar que o artigo aparece.

> **Nota:** Se você não vir o artigo imediatamente, aguarde um minuto e atualize a página voltando para **All > Self-Service > Knowledge**.
> 

**12.** Encerre o Impersonate (*End impersonation*).

### Seção 7: Criar e aplicar User Criteria

Agora que a **Human Resources General Knowledge Base** foi implementada, com base nos requisitos declarados, você deve agora estabelecer os critérios de usuário (*user criteria*) que permitirão acesso apenas aos funcionários da Cloud Dimensions. Você criará o *user criteria* e o aplicará à Knowledge Base para controlar adequadamente quem pode visualizar o conteúdo.

**1.** Certifique-se de estar logado como **System Administrator**.

**2.** Navegue até **All > Knowledge > Administration > User Criteria**.

**3.** Selecione **New**.

**4.** Preencha o formulário da seguinte maneira:

- **Name:** Cloud Dimensions Employees
- **Companies:** Cloud Dimensions

> **Nota:** Para selecionar Cloud Dimensions, clique no ícone **Unlock Companies** (cadeado), digite "cloud", selecione **Cloud Dimensions**, e então clique no ícone **Lock Companies** (cadeado aberto).
> 

**5.** Selecione **Submit**.

Você criou o registro de User Criteria **Cloud Dimensions Employees**.

**6.** Navegue até **All > Knowledge > Administration > Knowledge Bases**.

**7.** Localize e abra o registro **Human Resources General Knowledge**.

**8.** Role para baixo e selecione a aba **Can Read**.

**9.** Selecione **Edit** para adicionar um registro de **User Criteria** existente à lista **Can Read**.

**10.** Adicione **Cloud Dimensions Employees** à lista **Can Read**.

**11.** Selecione **Save**.

### Verificação do Laboratório (Lab verification)

**1.** Faça Impersonate de **Aileen Mottern**.

> **Nota:** Aileen Mottern não trabalha para a Cloud Dimensions. Usaremos a conta de usuário dela para verificar se a **Human Resources General Knowledge Base** está indisponível. Aileen não deve conseguir ver a Knowledge Base devido aos *user criteria* que você estabeleceu.
> 

**2.** Navegue até **All > Self-Service > Knowledge**.

> **Nota:** Se os menus não estiverem visíveis, expanda a janela do seu navegador.
> 

**3.** Verifique se **Human Resources General Knowledge** não está visível.

**4.** Encerre o Impersonate (*End the impersonation*).

**Parabéns! Você completou este laboratório.**

## Lab 5.2.1 - Criar um Item de Catálogo

**Objetivos do Laboratório:**

- Criar um item de catálogo de serviço Infinity usando a experiência do **Catalog Builder**.
- Adicionar variáveis ao item (*item variables*).
- Modificar a variável do item para aumentar o preço com base na escolha selecionada.
- Validar seu trabalho com "Try It" e fazendo o pedido no **Service Catalog**.

**Cenário:**
Até agora, o processo de pedido e atendimento para um dispositivo Infinity HHD tem sido, no mínimo, não oficial. Com a disponibilidade do **Service Catalog**, a Cloud Dimensions gostaria de melhorar o processo e garantir que todos os técnicos tenham a chance de receber um dispositivo Infinity. Além disso, o rastreamento de pedidos e dispositivos em um local conveniente é atraente. O Infinity HHD é oferecido em "Crimson" (Carmesim) ou "Silver" (Prata). Os técnicos também podem escolher especificações adicionais.

### **Section** 1: Atribuir gerentes e editores ao Service Catalog

Crie um grupo para gerenciar usuários que precisam de acesso ao módulo **Maintain Items** para concluir tarefas de administração do **Service Catalog**.

**1.** Certifique-se de estar logado como **System Administrator**.

**2.** Navegue até **Favorites > Users and Groups – Groups**.

**3.** Selecione **New**.

**4.** No campo **Name** no registro de novo Grupo (*Group New record*), digite **Catalog Administrators**.

**5.** Selecione **Save**.

**6.** Navegue até a aba **Roles**.

**7.** Selecione **Edit**.

**8.** Adicione a role **catalog_admin** à lista **Roles List**.

**9.** Selecione **Save**.

> **Nota:** Atualize a lista para ver a role.
> 

**10.** Selecione a aba **Group Members**.

**11.** Selecione **Edit**.

**12.** Adicione **Bud Richman** à lista **Group Members List**, e então selecione **Save**.

Bud agora pode realizar tarefas de administração de catálogo porque foi adicionado ao grupo que recebeu a role **catalog_admin**.

> **Nota:** Atualize a lista para ver o membro do grupo.
> 

**13.** Navegue até **All > Service Catalog > Catalog Definitions > Maintain Catalogs**.

**14.** Selecione **Service Catalog**.

**15.** Preencha o formulário **Catalog** da seguinte maneira:

- **Manager:** System Administrator
- No campo **Editors**, selecione o ícone de **Lock** (cadeado).
- Digite **Bud Richman**, e então selecione o ícone de **Lock** novamente para indicar que você terminou de selecionar os nomes.

**16.** Selecione **Update**.

> **Nota:** Você pode precisar selecionar **Proceed with the file customization** (Prosseguir com a personalização do arquivo), se a notificação aparecer após selecionar **Update**.
>

### **Section 2: Create new Service Catalog item**

**1.** Faça o Impersonate de **Bud Richman**.

**2.** Navegue até **All > Service Catalog > Catalog Builder**.

> **Note:** Quando você ver uma seta ao lado do nome de uma aplicação ou módulo, o item abrirá em uma nova janela. O **Catalog Builder** é um exemplo disso. Se o sistema estiver lento para responder, atualize seu navegador.
> 

**3.** Selecione **Create a new catalog item**.

**4.** Na tela **Getting Started**, selecione **Continue**.

> **Note:** Se o sistema estiver lento para responder, atualize seu navegador.
> 

---

**5.** Em **Catalog item templates**, selecione **Standard items in Service Catalog** para pré-visualizar a seção **Template Details**.

**6.** Selecione **Use this item template**.

> **Note:** Talvez seja necessário diminuir o zoom do seu navegador para ver os botões de navegação na parte inferior do **Catalog Builder**.
> 

---

**7.** Preencha o formulário da seguinte maneira:

- **Basic Info**:
    - **Item Name**: Infinity HHD
    - **Short description**: VR, but without the glasses
- **Item Details**:
    - **Image** (sob **Item details**): Selecione **Attach File** e faça o upload do arquivo **CloudDimensions-Infinity-Logo.png**
    - **Description**: The Infinity Holographic Handheld Device (HHD) is capable of projecting immersive environments around you. What are you waiting for? Get the Infinity HHD!

*(Link na imagem: Copy/Paste - "Short description" and "Description" text)*

---

**8.** Selecione **Continue to Location**.

**9.** Revise as configurações de **Catalogs** e **Categories**.

> **Note:** **Category** é usado para determinar onde um item de catálogo aparece dentro do **Service Catalog**. Existem várias **Categories** já selecionadas, mas você precisará apenas da categoria **Hardware** selecionada para esta atividade.
> 

**10.** Selecione **Edit selected categories**.

---

**11.** Remova **todas as categorias**, exceto a categoria **Hardware** da lista **Selected categories**.

**12.** Selecione **Save selections**.

**13.** Selecione **Continue to Questions**.

> **Note:** Se você quiser adicionar novas **Categories** e **Category Hierarchies**, use **All > Service Catalog > Maintain Categories**. Isso não é necessário para este exercício.
> 

---

**14.** Na seção **Questions**, selecione **Expand all** para visualizar os detalhes da pergunta.

> **Note:** A ordem das suas **Standard Employee Questions** pode parecer diferente da mostrada.
> 

> **Note:** Estas duas perguntas fazem parte de um **Variable Set**. A Cloud Dimensions quer estas duas perguntas (também conhecidas como variáveis), em cada um de seus **Catalog Items**. Elas são incluídas por padrão no template que você selecionou.
> 

**15.** Selecione **Collapse all** para recolher a seção **Standard Employee Questions**.

**16.** Selecione **Insert new question**.

**17.** Na guia **Question**, preencha o formulário da seguinte maneira:

- **Question Type**: Choice
- **Question subtype**: Dropdown (fixed values)
- **Question label**: How much memory do you want in your Infinity HHD?

*(Link na imagem: Copy/Paste - texto de "Question label")*

> **Note:** O **Name** é preenchido automaticamente com `how_much_memory_do_you_want_in_your_infinity_hhd`. Você substituirá isso. Pode ser necessário rolar para baixo para fazer isso.
> 
- **Name**: memory
- Caixa de seleção **Mandatory**: Selecionada

---

**18.** Selecione **Continue to Choices** ou selecione a guia **Choices** no topo do formulário.

> **Note:** Você acabou de criar uma nova **Variable**.
> 

A versão aprovada pela empresa do Infinity HHD está disponível nos modelos de 256GB e 512GB.

**19.** Em **Available Choices**, selecione o ícone de mais (**+ Insert**).

---

**20.** Digite **256 GB** para o **Display name**. Remova o `_gb` do **Value** preenchido automaticamente.

**21.** Selecione o ícone de mais (**+ Insert**) para adicionar outra escolha.

**22.** Digite **512 GB** para o **Display name**. Remova o `_gb` do **Value** preenchido automaticamente.

**23.** Selecione a lista suspensa no **Question Preview** para verificar se sua pergunta e opções são exibidas corretamente.

---

**24.** Selecione **Insert Question**.

A seguir, você criará uma pergunta para que o solicitante possa selecionar qual das cores gostaria para o Infinity HHD – Crimson ou Silver.

**25.** Selecione o ícone de mais (**+ Insert**) e, em seguida, selecione **New question**.

---

**26.** Preencha o formulário da seguinte maneira:

- **Question Type**: Choice
- **Question subtype**: Dropdown (fixed values)
- **Question label**: What color Infinity HHD would you like?

*(Link na imagem: Copy/Paste - texto de "Question label")*

- **Name**: color
- Caixa de seleção **Mandatory**: Selecionada.

**27.** Selecione a guia **Choices** ou selecione **Continue to Choices**.

**28.** Em **Available Choices**, selecione o sinal (**+ Insert**).

---

**29.** Digite **Crimson** para o **Display name**. O campo value é preenchido automaticamente com crimson.

**30.** Selecione o ícone de mais (**+ Insert**).

**31.** Digite **Silver** para o **Display name**. O campo value é preenchido automaticamente com silver.

**32.** No painel **Question Preview**, certifique-se de que sua pergunta e opções sejam exibidas corretamente. Se sim, selecione **Continue to Default value**.

**33.** Selecione o menu suspenso e defina o **Default value** como **Crimson**.

---

**34.** Selecione **Insert Question**.

**35.** Selecione **Continue to Settings**.

> **Note:** As seleções mostradas foram determinadas pelo modelo que você selecionou.
> 

**36.** Selecione **Continue to Access**.

> **Note:** As seleções mostradas foram determinadas pelo modelo que você selecionou.
> 

**37.** Selecione **Continue to Fulfillment**.

**38.** Em **Fulfillment method**, selecione o campo **Selected flow*** e escolha **Service Catalog item request**. Selecione **Continue to Review and submit**.

> *Nota: Este é um fluxo de exemplo para completar este laboratório. Você modificará o fluxo selecionado no **Lab 5.3.1***.
> 

**39.** Selecione **Preview** para garantir que tudo esteja correto.

> *A **Portal view** é selecionada automaticamente*.
> 

**40.** Feche a janela de **Preview**.

**41.** Se precisar fazer alguma correção, selecione a seção **Questions**, passe o mouse sobre a pergunta desejada e selecione o ícone de **edit** para o elemento que precisa corrigir.

**42.** Faça uma pequena alteração na sua pergunta e selecione **Save**.

> *Nota: Sua tela refletirá quaisquer alterações feitas a partir deste ponto. Portanto, você terá pequenas variações em relação às telas mostradas*.
> 

**43.** Quando todas as edições estiverem concluídas, navegue até **Review and Submit** e selecione **Submit**.

> *Você verá uma confirmação de que seu item foi enviado*.
> 

**44.** Feche a aba do navegador do **Catalog Builder** para retornar à sua instância.

> **Dica do campo:** Se você descobrir que seu item de catálogo está preso em um estado de **review**, aplique o update set sugerido para resolver o problema. Consulte o **Module 7.3: Applying an Update Set** para obter ajuda sobre como carregar um update set.
>

### Section 3: Add pricing to the Infinity catalog item

*(Seção 3: Adicionar preços ao item de catálogo Infinity)*

No **Service Catalog**, o **Infinity Catalog Item** está quase pronto para ser ativado. Em seguida, os preços precisam ser adicionados para o dispositivo e suas opções.

**1.** Verifique se você ainda está impersonando **Bud Richman**.

**2.** Navegue até **All > Service Catalog > Catalog Definitions > Maintain Items**.

**3.** Localize e abra o registro **Infinity HHD**.

**4.** Selecione a aba **Pricing** e digite **359.99** no campo **Price** como o preço **Default** para o Infinity.

> *Nota: O símbolo da moeda pode ser diferente na sua instância*.
> 

**5.** Clique em **Save**.

**6.** Abaixo da seção **Related Links**, selecione a aba **Variables**.

**7.** Selecione o link **Select Box** para a pergunta: **How much memory do you want in your Infinity HHD?**.

**8.** Na seção **Question Choices**, selecione **512 GB**.

**9.** Digite **100** no campo **Price** porque há um custo adicional para o Infinity HHD com mais memória.

**10.** Selecione **Update**.

**11.** Use o menu **History** para navegar rapidamente para o registro **Catalog Item**.

**12.** Garanta que a caixa de seleção **Active** esteja marcada.

**13.** No **form header** (cabeçalho do formulário), selecione **Try It** para visualizar a tela de pedido do item.

> *Nota: **Try It** só está disponível se o item estiver ativo*.
> 

**14.** Selecione **512 GB** e observe como o **Price** muda (devido ao aumento de memória).

**15.** Selecione o **Cloud Dimensions logo** para retornar à landing page.

> *Nota: Não há problema em sair do site*.
>

### Section 4: Verify the Service Catalog item creation

*(Seção 4: Verificar a criação do item do Service Catalog)*

**1.** Navegue até **All > Self-Service > Service Catalog**.

**2.** A partir da categoria **Hardware**, selecione o item **Infinity HHD** na lista para abrir a tela de pedido.

> *Nota: A visualização deve corresponder ao Preview que você viu no Catalog Builder*.
> 

**3.** Finalize a impersonation (**End impersonation**).

> **Parabéns!** Agora que você criou o Infinity HHD no Service Catalog, você está pronto para criar o fluxo para atender a uma nova solicitação de item Infinity!!
>

## **Lab 5.3.1: Criar um Flow usando Workflow Studio**

**Atividades do Lab**

- **Create** (Criar) um novo flow do zero
- **Associate** (Associar) o flow a um item do Service Catalog
- **Test** (Testar) o flow

**Tempo estimado:** 35–40 minutos

**Arquivos necessários:** Nenhum

### **Objetivos do Lab**

Você alcançará os seguintes objetivos:

- Criar um novo flow do zero
- Associar o flow a um item do Service Catalog
- Testar o flow

**Dependência do Lab:** 5.2.1

---

### **Cenário**

A Cloud Dimensions abriu as inscrições para o Infinity HHD para técnicos de toda a organização. O **Catalog Item** do Infinity HHD foi criado no **Service Catalog**, então é hora de implementar um flow para facilitar a entrega dos dispositivos aos solicitantes. Este flow também precisa fornecer comunicação automática ao solicitante.

### **Seção 1: Criar um flow no Workflow Studio do zero**

1. Navegue até **All > Process Automation > Workflow Studio**.
    
    *(Imagem mostra a lista de flows no Workflow Studio)*
    
2. Selecione **New**.
3. Selecione **Flow**.
4. Preencha o formulário da seguinte maneira:
    - **Flow name:** Infinity Item Request
    - **Description:** (insira qualquer descrição de sua escolha)
    - **Application:** (preenchido automaticamente) **Global**
    - Selecione **Show Additional Properties**
    - **Run As:** **System User**
    
    > **Nota:** A opção **Run as** especifica se o flow é executado como **system user** ou como o usuário que inicia a sessão. Certifique-se de entender as diferenças entre as duas opções. Selecione a opção do usuário que inicia a sessão quando as atualizações devem vir do usuário que acionou o flow. **System user** é uma conta de serviço que não é restrita por controles de acesso (access controls).
    > 
5. Selecione **Build Flow**. O novo flow deve aparecer na interface do **Flow Designer**.

### **Seção 2: Definir um trigger**

> **Nota:** O **Trigger** é o que faz o **Flow** iniciar. No nosso caso, é a criação de um **Service Catalog Request**.
> 
1. Sob a seção **TRIGGER**, selecione o ícone **(+)** para **Add a Trigger**.
2. Da seção **Application**, selecione **Service Catalog**.
    
    *(Imagem mostra o menu de seleção de Triggers)*
    
3. Selecione **Done**.

### **Seção 3: Adicionar uma action para atualizar um registro de requested item**

A seguir, você adicionará uma **action** ao seu flow para atualizar um registro de **requested item**.

1. Sob a seção **ACTIONS**, selecione o ícone **(+)** para adicionar uma **Action**, **Flow Logic**, ou **Subflow**.
2. Selecione **Action**.
3. Selecione **ServiceNow Core**, então selecione o tipo de action **Update Record**.

A seguir, você usará o **Data panel** para arrastar o **Requested Item Record** para as suas flow actions.

1. No **Data panel**, expanda a seção **Trigger - Service Catalog**, se necessário.
2. Arraste e solte a pílula (pill) **Requested Item Record** do **Data panel** para o campo **Record**.
    
    *(Imagem mostra o processo de arrastar a data pill para o campo Record)*
    
    > Note que o campo **Table** foi preenchido automaticamente com base na sua seleção de registro.
    > 
3. Selecione **+ Add field value**.
4. Selecione **State** e defina o valor para **Pending**.
5. Selecione **Done**.

### **Seção 4: Add a create catalog task action (Adicionar uma action de create catalog task)**

Agora, você adicionará outra **action** ao seu flow que criará uma **catalog task**.

1. Sob a seção **ACTIONS**, selecione o ícone **(+)**.
2. Selecione **Action**.
3. Selecione **ServiceNow Core**, então selecione **Create Catalog Task**.
    
    > **Nota:** Certifique-se de selecionar **Create Catalog Task**, NÃO **Create Task**.
    > 
4. No **Data panel**, vá para a seção, **1 – Update Record**.
5. Arraste e solte a pílula **Requested Item Record** para o campo **Requested Item [Requested Item]**.
6. Para **Short Description**, digite **Deliver Infinity**.
7. Selecione **+ Add field value** e adicione as seguintes duas condições de campo:
    - **Assignment Group** | **Service Desk**
    - **State** | **Open**
    
    > **Nota:** Observe que o campo **Wait** está selecionado por padrão. Isso pausa o flow até que a tarefa seja concluída e marcada como **Closed Complete** e, portanto, não esteja mais ativa.
    > 
8. Selecione **Done**.
    
    > **Nota:** Seu flow está sendo salvo automaticamente. Se você perder a conexão com a internet, não perderá o trabalho que foi concluído.
    >

### **Seção 5: Send an email to the requester (Enviar um e-mail para o solicitante)**

Os stakeholders querem enviar uma confirmação automática por e-mail na conclusão da entrega do Infinity.

Uma vez que a tarefa **Deliver Infinity** esteja completa, o flow será retomado, e a próxima **action** começará para enviar o e-mail.

1. Sob a seção **ACTIONS**, selecione o ícone **(+)**.
2. Selecione **Action**.
3. Selecione **ServiceNow Core**, então selecione **Send Email**.
    
    > **Nota:** Para identificar a pessoa que deve receber o e-mail, precisamos localizar o nome do **Requester** a partir do registro da **Request**. Então, precisamos do endereço de e-mail do usuário, que está no **user record**. Para obter essa informação, usaremos **dot-walking**.
    > 
4. Localize o campo **To**, então selecione o ícone **Data Pill Picker**.
5. Selecione **Trigger - Service Catalog**.
6. Localize o **Requested Item Record**. Selecione o ícone de **seta direita** para navegar para a lista de campos no **Requested Item**.
7. Localize o campo **Requested for**. Selecione o ícone de **seta direita** para navegar para a lista de campos no **User Record** (você pode rolar para baixo para encontrar 'Requested for' ou digitar 'Requested for', seguindo 'Requested Item Record').
8. Selecione **Email**.
    
    > **Nota:** Isso será usado para identificar o endereço de e-mail a ser usado na notificação.
    > 
9. Passe o mouse sobre a **Trigger Pill** para ver o rótulo completo (**Trigger – Service Catalog > Requested Item Record > Requested for > Email**).

A seguir, você adicionará o Manager do solicitante ao campo **CC**. Desta vez, usaremos um método alternativo para **dot-walking**.

1. Selecione o campo **CC**, então selecione o ícone **Data Pill Picker**.
2. Digite **trigger** na caixa **Search**.
3. No teclado do seu computador, pressione a tecla **seta direita**.
    
    > Observe como você construirá o trigger na caixa de pesquisa digitando vs. rolando e selecionando.
    > 
4. Digite **Requested Item Record**, então pressione a tecla **seta direita**.
5. Digite **Requested for**, então pressione a tecla **seta direita**.
6. Digite **Manager**, então pressione a tecla **seta direita**.
7. Digite **Email**, então pressione **Enter** no teclado.
8. Passe o mouse sobre a **CC Data Pill** para confirmar sua seleção (**Trigger – Service Catalog > Requested Item Record > Requested for > Manager > Email**).
9. Complete o restante da **action** da seguinte forma:
    - **Subject:** Your Infinity HHD is on its way!
    - **Body:** Greetings, your requested item has been shipped and is expected to arrive soon.
    
    > **Dica:** Copie e cole os textos de "Subject" e "Body".
    > 
    
    **Desafio (Challenge):**
    
    Após revisar a notificação por e-mail, os stakeholders querem tornar a saudação mais amigável, adicionando o primeiro nome (First name) do Solicitante.
    
    - No campo **Body**, use o **Data Pill Picker** para adicionar o primeiro nome ao corpo do e-mail.
    - Posicione o cursor onde deseja **inserir** o nome. Faça o **Dot-walk** e localize o campo **First name**.
    - Quando concluído, a **data pill** deve ser definida como **Trigger – Service Catalog > Requested Item Record > Requested for > First name**.
10. Selecione **Done**.

### **Seção 6: Add an action to update the requested item record (Adicionar uma action para atualizar o registro do item solicitado)**

> **Nota:** Agora que a **catalog task** está completa e a notificação por e-mail foi enviada, o **State** do **Requested Item** precisa ser atualizado para **Closed Complete**.
> 

Lembre-se da hierarquia de **Request Management**:

**Request -> Request Item -> Catalog Task**

1. Sob a seção **ACTIONS**, selecione o ícone **(+)**.
2. Selecione **Action**.
3. Selecione **ServiceNow Core**, então selecione **Update Record**.

A seguir, você escolherá o registro do **Requested Item** para atualizar.

1. No **Data panel**, expanda a seção **1 – Update Record**, se necessário.
2. Arraste e solte a pílula **Requested Item Record (sc_req_item)** do **Data panel** para o campo **Record**.
    
    > **Nota:** Isso preencherá automaticamente o campo **Table** com **Requested Item [sc_req_item]**.
    > 
3. Selecione **+ Add field value**.
4. Selecione **State** e defina o valor para **Closed Complete**.
5. Selecione **Done**.

### **Seção 7: Add an action to update the request record (Adicionar uma action para atualizar o registro da request)**

O próximo passo é atualizar o **Request Record** e definir o **Request State** para **Closed Complete**.

1. Sob a seção **ACTIONS**, selecione o ícone **(+)**.
2. Selecione **Action**.
3. Selecione **Most Recent** (ou ServiceNow Core), então selecione **Update Record**.

A seguir, você atualizará o **Request Record**. O número do **Request Record** está no **Requested Item Record**.

1. No **Data Panel**, expanda a seção **1 – Update Record**, se necessário.
2. Expanda a pílula **1 - Updated Record > Requested Item Record (sc_req_item Record)**.
3. Localize a pílula **Request**.
4. Arraste e solte a pílula **Request** do **Data Panel** para o campo **Record**.
    
    > **Nota:** Isso preencherá automaticamente o campo **Table** com **Request [sc_request]**.
    > 
    
    > **Boa Prática:** Certifique-se de ter selecionado os itens corretos na sua data pill de **Record** antes de continuar com suas condições.
    > 
5. Selecione **+ Add field value**.
6. Selecione **Request state** e defina o valor para **Closed Complete**.
    
    > **Nota Importante:** Selecione **Request State**, NÃO **State**.
    > 
7. Selecione **Done**.
8. Seu flow deve ficar parecido com a imagem de referência (Action 1 até Action 4 concluídas).

### **Seção 8: Save and activate the flow (Salvar e ativar o flow)**

Agora que o flow está construído, você precisa salvá-lo e ativá-lo.

1. No cabeçalho do **Flow Designer**, selecione **Save**.
2. Selecione **Activate**.
3. Na caixa de diálogo de confirmação, selecione **Activate** novamente (ou **Ok**).
    
    > **Nota:** O flow agora está ativo e será executado sempre que o trigger (gatilho) for atendido (neste caso, quando um item específico do catálogo for solicitado).
    >

### **Seção 9: Test the flow (Testar o flow)**

O **Workflow Studio** permite que você teste o flow diretamente na interface de design, simulando a execução com um registro real.

1. No cabeçalho do **Flow Designer**, selecione **Test**.
2. O modal **Test Flow** será exibido.
3. No campo **Requested Item Record**, selecione o ícone de lupa e escolha um registro de **Requested Item** (RITM) existente para usar como teste (você pode usar o RITM criado no Lab 5.2.1 ou qualquer outro disponível na lista).
4. Selecione **Run Test**.
5. Após o teste ser processado, selecione o link **Your test has finished running. View the flow execution details**.

### **Seção 10: Review Flow Execution Details (Revisar os detalhes de execução do flow)**

A visualização **Execution Details** mostra o status de cada ação dentro do flow.

1. Verifique o **Flow State** no topo da tela; ele deve indicar **Completed** (ou **Waiting**, dependendo se a tarefa foi criada mas não fechada).
2. Examine as ações listadas:
    - **Update Record:** Deve mostrar **Completed**.
    - **Create Catalog Task:** Se o estado estiver **Waiting**, significa que o flow parou nesta etapa aguardando o fechamento da tarefa (como configuramos a opção "Wait").
    - **Send Email:** (Será executado após a tarefa ser fechada).
3. Para concluir o teste completo, você precisaria navegar até a **Catalog Task** criada, marcá-la como **Closed Complete**, e então atualizar a página de **Execution Details** para ver o restante do flow (envio de e-mail e atualização final) ser executado.