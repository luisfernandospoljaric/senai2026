# Relatórios e dashboards
## Lab 6.1.1 - Criando Visualização e Dashboard

- **Create** uma nova **visualization**
- **Create** e edite um **dashboard**

**Tempo:** 30–35 Minutos

### Objetivos do Lab

Você alcançará os seguintes objetivos:

- **Create** uma nova **visualization**
- **Create** e edite um **dashboard**
- Compartilhe **visualizations** e **dashboards** com outros em sua organização

> **Dependência do Lab:** 3.1.1 – **Pilot Field**, 3.2.1, e 3.3.1 – **Service**, **Service Offering**, **Firmware Subcategory**
> 

---

### Cenário

O **Product Owner**, Annette Frietas, quer um único local para obter todas as informações que ela precisa para seu produto Infinity HHD. Ela também quer saber como criar suas próprias **visualizations**.

**Requisito #1:** Criar um **dashboard** para usar no monitoramento do **service offering**.

**Requisito #2:** Criar uma **visualization** a partir de uma **list** para mostrar registros de **HHD incident** por:

- **Pilot** vs. **Non-Pilot**
- **Firmware** vs. **Non-Firmware**

Quando as organizações recebem novos projetos internos ou novas implementações, às vezes esquecem das **visualizations** até tarde no processo de desenvolvimento.

### Seção 1: Create dashboard

### Requisito #1: Criar um dashboard para monitoramento de service offering

**Create dashboard**

1. Certifique-se de estar logado como **System Administrator**.
2. Navegue até **All > Self-Service > Dashboards**.

> **Dica de campo:** Quando a propriedade do sistema `com.glide.par.unified_analytics.enabled` está definida como **true**, os usuários veem tanto **Platform Analytics** quanto **core UI (responsive) dashboards** no **Analytics Center**. Navegar para **Self-Service > Dashboards** abrirá a interface do **Platform Analytics**. Adicionalmente, relatórios de **Pie Chart** e **Bar Chart** criados a partir do menu de contexto **Column options** em **core UI lists** serão criados como **Data Visualizations** em vez de relatórios do **Report Designer**.
> 
1. Selecione **Create a dashboard**.
2. Preencha o formulário da seguinte maneira:
    - **In-line editor** está selecionado
    - **Name:** Infinity HHD Product Monitoring
    - Selecione **Create new dashboard**
3. Você estará na página inicial do seu **dashboard**.

### Seção 2: Create visualization to show HHD incident records

### Requisito #2: Criar uma visualization com agrupamento dinâmico (dynamic grouping)

Os relatórios precisam mostrar **Incidents** vs. **Inquiry**; **Pilot** vs. **Non-Pilot**; **Firmware** vs. **non-Firmware**.

**Create Test Data (Criar Dados de Teste)**

1. Navegue até **All > HHD > Incidents and Inquiries**.
2. Selecione **New**.
3. Crie um novo **Incident** como segue:
    - **Caller:** (Selecione qualquer um)
    - **Category:** Inquiry / Help
    - **Subcategory:** --None--
    - **Service:** Training
    - **Service Offering:** Infinity (HHD)
    - **Pilot:** Selected (true)
    - **Short description:** Test for Pilot Inquiry
    - **Impact:** High
    - **Urgency:** High
4. Selecione **Submit**.
5. Selecione **New** para criar outro **Incident** como segue:
    - **Caller:** (Selecione qualquer um)
    - **Category:** Hardware
    - **Subcategory:** Firmware
    - **Service:** Training
    - **Service Offering:** Infinity (HHD)
    - **Pilot:** Cleared (false)
    - **Short description:** Test for Firmware Incident
    - **Impact:** High
    - **Urgency:** High
6. Selecione **Submit**.
7. Garanta que sua **list** tenha pelo menos **três registros** com os seguintes parâmetros:
    - **Category** é **Hardware** e **Pilot** é **false**
    - **Category** é **Inquiry/Help** e **Pilot** é **true**
    - **Category** é **Hardware** e **Pilot** é **true**

> **Nota:** Os números dos seus registros e dados, como **caller**, podem ser diferentes com base nos dados que você inseriu ao criar os novos **incidents**. Se você completou o Desafio Opcional no Lab 3.3, o **breadcrumb** mostrará **All > Service offering = Infinity (HHD)**.
> 

**Create a visualization from list**

1. Clique com o botão direito no cabeçalho da coluna **Pilot** ou selecione o menu **column options** (ícone de 3 pontos) e selecione **Pie Chart**.
2. Clique com o botão direito no cabeçalho da coluna **Pilot** ou selecione o menu **column options** (ícone de 3 pontos) e selecione **Pie Chart**.
    - Um novo relatório é iniciado no **Visualization Designer**.
3. Selecione o painel **Configuration**, depois defina o **Visualization type** para **Donut**.
4. Selecione **Details**, depois substitua o **Report name** por **HHD Incidents – by Pilot, Inquiry, Firmware**.
5. Selecione **Configuration** para voltar ao painel de Configuração, depois selecione **Add alternative group by**.
6. Selecione a alternância (toggle) para **Selector visible by default**.
    - **Nota:** Quando ativado, o seletor **Group by** fica disponível na **data visualization**.
7. Adicione **Category** e **Subcategory** à lista **Selected**. Depois, selecione **Apply**.
8. Selecione **Save**. Verifique se seu relatório está similar à imagem.
9. Selecione o **Group by drop-down menu** no topo esquerdo da **visualization** e alterne entre os diferentes grupos.
10. Selecione os diferentes **groups** para obter diferentes **perspectives** sobre os dados:
    - **Pilot** – mostra se o registro é relacionado a Pilot ou não
    - **Category** – mostra se o registro é um **Hardware Incident** ou **Inquiry**
    - **Subcategory** – mostra se o registro é **Firmware** ou vazio
11. Selecione **Pilot** na lista suspensa **Group by**.
12. **Save** a seleção.
13. Selecione na parte azul (*true* = 75%) do **donut** para visualizar os **Pilot incidents**. Os **incidents** que atendem a este critério de **filter** são exibidos.

> **Nota:** Se você fez o exercício de desafio no Lab 3.3.1, seu critério de **filter** será parecido com este: **All > Service offering = Infinity (HHD) > Pilot = true**
> 

---

### **Locate the new visualization (Localizar a nova visualization)**

1. Navegue até **All > Platform Analytics > Library > Data Visualizations**.
2. Selecione **Owned by me** para visualizar a **visualization** "HHD Incidents".
3. Selecione a **visualization** "HHD Incidents" para abri-la.
4. Use o menu **More actions** para **Add the visualization to your bookmarks**.

---

### **Add visualization to dashboard**

1. Navegue até **All > Self-Service > Dashboards** OU **All > Platform Analytics > Library > Dashboards**.
2. Pesquise por **Infinity** para encontrar e abrir o **dashboard** **Infinity HHD Product Monitoring**.
3. Selecione **Edit**, depois selecione **Add new element > Data visualization**.
4. Selecione **Saved Visualization**.
5. Pesquise e selecione a **HHD visualization**. Depois, selecione **Add to dashboard**.

> **Dica:** Selecionar **Save** no seu **dashboard** ou **visualization** regularmente é uma melhor prática.
>

### **Seção 3: Share dashboard with groups and users**

1. Selecione o menu **More actions**, depois selecione **Share**.
2. Complete as informações como segue:
    - **Grant access to:** Training Technology Support
    - Selecione **Add as editor**
    - Selecione **Confirm**

## Lab 6.2.1 - Configurando Notificações

- **Tempo:** 20–25 minutos
- **Arquivos necessários:** Nenhum

**Objetivos do Lab:**

Você alcançará os seguintes objetivos:

- **Create** (Criar) uma nova notificação de e-mail.
- **Test** (Testar) a notificação.

> **Lab Dependency:** Lab 3.3.1 – Service, Service Offering, Training Technology Support group, Service owner and group members.
> 

---

### **Cenário**

Annette Frietas é a Product Owner do Infinity HHD. Ela também é a Service Owner para Training e para a Service Offering Infinity (HHD). Ela solicitou que uma notificação fosse criada para alertá-la sempre que um incidente Infinity crítico (P1) estiver ativo para a Service offering Infinity (HHD).

Ela também gostaria que os membros do grupo Training Technology Support recebessem e-mail para incidentes críticos.

### **Seção 1: Create a notification**

### **Crie a notificação e especifique quando enviar**

1. Certifique-se de estar logado como **System Administrator**.
2. Navegue até **All > System Notification > Email > Notifications**.
3. Selecione **New**.
4. Selecione o menu **More options**, depois selecione **Toggle annotations on / off**.
    
    > **Note:** As anotações aparecem em vários formulários e contêm informações úteis. É sempre recomendado lê-las antes de desativá-las (toggling them off).
    > 
    
    Você definirá esta notificação para informar o dono do Training Service e o dono da Service Offering Infinity (HHD) sempre que um incidente Infinity (HHD) crítico (Priority 1) estiver ativo. A notificação deve ser enviada no evento em que o incidente for criado ou atualizado.
    
5. No campo **Name**, digite **P1 Infinity (HHD) Incident**.
6. No campo **Table**, selecione **Incident [incident]**.
    
    A seguir, você configurará as abas **When to send**, **Who will receive** e **What it will contain**.
    

### **Specify when to send (Especifique quando enviar)**

1. Preencha os campos na aba **When to send** da seguinte forma:
    - **Send when:** Record inserted or updated
    - **Inserted:** selected (marcado)
    - **Updated:** selected (marcado)
    - **Conditions:**
        - **Active** | is | **true** AND
        - **Priority** | is | **1 – Critical** AND
        - **Service offering** | is | **Infinity (HHD)**
2. Verifique suas entradas na aba **When to send**.
3. **Save**.

---

### **Specify who will receive (Especifique quem receberá)**

1. Selecione a aba **Who will receive**.
2. Para **Users/Groups in fields**, selecione o ícone **Lock** (cadeado fechado).
    
    > **Note:** Em vez de selecionar um nome de usuário específico, é uma melhor prática selecionar um campo que contenha o nome de usuário, como *Owned by*. Você fará esse processo a seguir.
    > 
3. Na lista **Available**, selecione **Service (+)**.
    
    > **Note:** Ao selecionar o campo, o ícone (+) aparecerá entre as listas **Available** e **Selected**.
    > 
4. Selecione o ícone **Expand Item(+)** para expandir e exibir os campos da tabela **Service**.
5. Role até o topo da lista **Available**. Você verá os campos para Service, sob o cabeçalho **Service -> Service fields**.
6. Localize e selecione **Owned by [+]**.
7. Selecione o ícone **Add Item (>)** para mover o campo para a coluna **Selected**.
    
    > **Note:** Observe como o campo na coluna selecionada é **Service.Owned by**. Lembre-se, o processo de percorrer as tabelas e campos na lista Available é chamado de **dot-walking**. Ao adicionar *Service.Owned by*, a notificação será enviada para o Owner do Service (Training).
    > 
8. Role até o topo da lista **Available**, selecione o rótulo **Incident fields** uma vez para retornar à lista de campos de **Incident**.
9. Use o processo de **dot-walking** para adicionar o campo **Owned by** para **Service offering** à coluna **Selected**, depois selecione o ícone **Lock**.
10. **Save**.
11. Certifique-se de que o ícone **Lock** próximo a **Users/Groups in fields** esteja trancado quando terminar e verifique se os campos corretos foram adicionados.
12. No campo **Groups**, selecione o ícone **Unlock Groups** (cadeado fechado).
13. Na caixa de busca **Groups**, digite **Training Technology Support**.
14. Selecione **Training Technology Support**.
15. Selecione o ícone **Lock Groups** (cadeado aberto) para trancar a seleção.
16. Sua aba **Who will receive** deve refletir essas escolhas (conforme a imagem).
    
    > **Note:** Isso acionará e-mails para os membros do grupo Training Technology Support.
    > 
17. **Save**.

### **Specify what it will contain (Especifique o que conterá)**

Agora que você configurou quem receberá a notificação por e-mail, é hora de configurar o que a notificação conterá.

1. Selecione a aba **What it will contain**.
2. No campo **Subject**, digite: **IMPORTANT! P1 Infinity (HHD) Incident**.
    
    > **Note:** Para tornar a mensagem mais acionável para os destinatários, você adicionará o **Incident Number** à linha de assunto (**Subject Line**). Para fazer isso, você selecionará uma variável para o **Incident Number**.
    > 
3. No painel **Select variables**, selecione o ícone **+** para expandir a lista **Fields**.
4. Selecione dentro do campo **Message HTML**.
5. No painel **Select variables**, role para baixo e selecione a variável do campo **Number**.
6. No campo **Message HTML**, destaque o texto **${number}** e **copy** (copie) o texto para sua área de transferência.
7. Posicione o cursor no final do texto no campo **Subject**.
8. Pressione a **barra de espaço** no seu teclado uma vez.
9. **Paste** (Cole) o texto **${number}** da sua área de transferência.
    - O campo Subject deve ficar assim: `IMPORTANT! P1 Infinity (HHD) Incident ${number}`
    
    > **Note:** A variável `${number}` é adicionada ao final do texto do assunto e é dinâmica. Isso significa que ela será preenchida automaticamente com o número do incidente do registro que acionar a notificação. Variáveis adicionais podem ser encontradas e adicionadas da seção **Select variables** para os campos de assunto e **Message HTML**.
    > 
10. Limpe o campo **Message HTML**.
11. Complete o campo **Message HTML** para incluir o seguinte texto:
    - **Critical Incident ${URI_REF} has been created for Infinity (HHD) service offering.**
    
    > **Note:** O marcador de posição `${URI_REF}` inclui um "i" maiúsculo após o texto "UR". Na próxima seção, você verá como essa variável se comporta após a notificação ser gerada.
    > 
12. **Save**.

### **Preview and verify recipients and format (Pré-visualize e verifique destinatários e formato)**

1. Selecione **Preview Notification** para ver como o texto da notificação é exibido e o comportamento resultante da variável **${URI_REF}**.
2. Feche a janela pop-up **Notification Preview**.
3. Selecione **Update**.

### **Section 2: Test and verify the notification trigger**

Crie um incidente para acionar a notificação, depois verifique se ela foi enviada.

> **Note:** O e-mail não está habilitado para a Instância de Lab do ServiceNow. No entanto, como **System Administrator**, você pode verificar os logs de e-mail da instância para ver como a notificação seria.
> 

### **Create P1 incident (Crie um incidente P1)**

1. **Impersonate** (Personifique) **Beth Anglin**.
2. Navegue até **All > Incident > Create New**.
3. Complete o formulário da seguinte maneira:
    - **Caller:** Buster Wubbel
    - **Service offering:** Infinity (HHD)
    - **Impact:** 1 - High
    - **Urgency:** 1 - High
    - **Priority:** 1 – Critical (preenchimento automático)
    - **Short description:** Test of P1 Incident for Infinity HHD
4. **Save**.
    
    > **Note:** O **Assignment group** é preenchido automaticamente.
    > 
5. **End impersonation** (Encerre a personificação).

### **Verify the notification was triggered (Verifique se a notificação foi acionada)**

1. Certifique-se de estar logado como **System Administrator**.
2. Navegue até **All > System Mailboxes > Outbound > Outbox**.
3. Localize o registro com o **Subject**: **IMPORTANT! P1 Infinity (HHD) Incident INC#######**.
4. Clique com o botão direito no **Created timestamp** (carimbo de data/hora de criação), depois selecione **Preview Email** para ver a mensagem formatada.
    
    > **Note:** O marcador de posição `${URI_REF}` é renderizado como um link direto para o registro do incidente. Se necessário, você poderia selecionar o link para revisar o incidente em uma aba separada.
    > 
5. Feche a janela pop-up **Preview Email**.
6. Para ver **additional details** (detalhes adicionais) da mensagem, como os usuários que receberão a mensagem, selecione o link do **Created timestamp**.
    - Verifique se os destinatários (Recipients) incluem **annette.frietas@example.com** (e outros membros, se aplicável).
    
    > **Note:** Para forçar o envio de uma notificação para usuários especificados, você habilitaria a **forced delivery**. Forçar uma notificação significa que os usuários relevantes recebem a notificação, mesmo se eles não tiverem se inscrito na notificação ou tiverem desativado a inscrição.
    > 
7. Selecione o logo **Cloud Dimensions** para retornar à sua página inicial (landing page).