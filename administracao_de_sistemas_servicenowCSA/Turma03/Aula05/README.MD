# Importação e gerenciamento de dados

# Contexto dos Labs

## 1. Visão Geral da Jornada

Nesta série de laboratórios, não estamos apenas criando tabelas; estamos simulando o ciclo de vida real de uma implementação no ServiceNow. Vamos transformar um requisito de negócio ("precisamos rastrear nossos novos dispositivos HHD") em uma solução funcional, segura e integrada à arquitetura de serviços da empresa.

### **Lab 4.1.1: A Fundação (Estrutura de Dados)**

- **O Cenário:** A empresa Cloud Dimensions lançou um novo hardware (Holographic Handheld - HHD). O Excel não é escalável para gerenciar esses ativos.
- **O Objetivo:** Criar a estrutura de banco de dados para armazenar esses dispositivos.
- **Conceito Chave:** **Extensão de Tabela**. Em vez de criar uma tabela do zero (`CREATE TABLE`), nós estendemos a tabela `Hardware` existente.
    - *Por que?* Para herdar automaticamente atributos comuns (Serial Number, Model, Asset Tag) e comportamentos nativos do sistema.
- **Na prática:** Você criará a tabela `u_cmdb_ci_hardware_hhd`, adicionará campos personalizados (como *Firmware Version*) e configurará o layout do formulário para facilitar a vida do usuário.

### **Lab 4.2.1: O Porteiro (Segurança e Acesso)**

- **O Cenário:** O HHD é um projeto piloto confidencial. Não queremos que toda a TI veja esses registros, apenas a equipe dedicada. Além disso, a etiqueta de patrimônio (Asset Tag) só pode ser alterada pelo Product Owner.
- **O Objetivo:** Implementar um modelo de segurança "Zero Trust".
- **Conceito Chave:** **ACL (Access Control List)** e **RBAC (Role-Based Access Control)**.
    - *Segurança de Linha (Row-level):* Quem pode ver o registro?
    - *Segurança de Coluna (Field-level):* Quem pode editar o campo `Asset Tag`?
- **Na prática:** Você criará uma *Role* específica, aplicará ACLs para restringir leitura/escrita e testará a segurança assumindo a identidade de outros usuários (*Impersonation*).

### **Lab 4.3.1: A Migração (Ingestão de Dados)**

- **O Cenário:** Os dados dos dispositivos existem em planilhas legadas. Digitar manualmente centenas de registros é inviável e gera erros.
- **O Objetivo:** Automatizar a carga de dados e garantir a integridade em atualizações futuras.
- **Conceito Chave:** **ETL (Extract, Transform, Load)** e **Coalesce**.
- **Na prática:**
    1. Carregar dados para uma tabela temporária (*Import Set*).
    2. Mapear os dados para a tabela de destino (*Transform Map*).
    3. Definir uma chave única (*Coalesce*) para que o sistema saiba diferenciar um "novo registro" de uma "atualização de registro existente".

### **Lab 4.4.1: A Conexão (CMDB e Relacionamentos)**

- **O Cenário:** Ter uma lista de dispositivos é bom, mas saber qual serviço de negócio para de funcionar se esse dispositivo quebrar é essencial.
- **O Objetivo:** Conectar o hardware (CI) ao serviço de negócio que ele suporta.
- **Conceito Chave:** **Dependência e Impacto**.
- **Na prática:** Usar o *CI Class Manager* para visualizar a hierarquia e criar um relacionamento onde o "Serviço Infinity" depende do "Hardware HHD". Isso permite análise de causa raiz em incidentes.

# Glossário de Termos Técnicos

### **Conceitos de Banco de Dados e Estrutura**

- **Table Extension (Extensão de Tabela):**
    
    Semelhante à *Herança* na Programação Orientada a Objetos (Java/C#). Uma tabela filha herda todas as colunas e lógicas de negócio da tabela pai. Ex: `HHD` estende `Hardware`, que estende `Configuration Item`.
    
- **Dot-Walking (Caminhar pelos Pontos):**
    
    Capacidade de acessar campos de tabelas relacionadas sem escrever queries complexas (JOINs).
    
    - *Exemplo:* No formulário do HHD, você quer mostrar o e-mail do dono. O campo no banco é `Assigned_to` (que é um ID de usuário). O Dot-walking permite exibir `Assigned_to.Email`.
- **View:**
    
    Uma "máscara" aplicada sobre uma lista ou formulário. Permite exibir campos diferentes para contextos diferentes (ex: uma View para Importação vs. uma View para Suporte) sem alterar os dados reais.
    

### **Conceitos de Importação (ETL)**

- **Import Set (Staging Table):**
    
    Uma tabela de "rascunho". Os dados brutos do Excel ficam aqui antes de serem validados e movidos para a tabela real.
    
- **Transform Map:**
    
    O "De/Para". É a regra que diz: "A coluna A do Excel vai para o campo B do ServiceNow".
    
- **Coalesce (Aglutinar/Unificar):**
    
    **CRÍTICO.** É a configuração que define a "Chave Primária" da importação.
    
    - *Sem Coalesce:* O sistema sempre cria novos registros (Cria duplicatas).
    - *Com Coalesce:* O sistema verifica se o registro já existe. Se existir, atualiza (UPDATE); se não, cria (INSERT).

---

## O Ecossistema: CMDB e CSDM

Esta é a parte "estratégica" da plataforma. Entender isso é entender o valor do ServiceNow.

### **O que é o CMDB (Configuration Management Database)?**

Não é apenas um inventário de ativos. O CMDB armazena **CIs (Itens de Configuração)**.

- **Diferença entre Asset e CI:**
    - **Asset (Ativo):** Foco financeiro. Quanto custou? Onde está a nota fiscal? Qual a depreciação?
    - **CI (Item de Configuração):** Foco operacional. Como está configurado? Qual versão do OS? **Com o que ele se conecta?**
- **O Poder do CMDB:** Ele cria um mapa lógico da sua infraestrutura. Se um Servidor cai, o CMDB diz exatamente quais Aplicações e Serviços de Negócio foram afetados.

### **O que é CSDM (Common Service Data Model)?**

O CMDB pode virar uma bagunça se cada desenvolvedor criar tabelas e relacionamentos como quiser. O **CSDM** é o "Manual de Boas Práticas" ou o "Framework Padrão" do ServiceNow.

Ele define **onde** colocar os dados e **como** conectá-los para que a TI converse com o Negócio.

- *Exemplo simplificado do CSDM usado no Lab 4.4:*
    1. **Business Service:** "Infinity" (O que o cliente consome).
    2. **Service Offering:** "Infinity HHD" (Uma variação do serviço).
    3. **Configuration Item (Hardware):** "Dispositivo HHD físico" (O que sustenta o serviço).

No Lab 4.4, quando criamos o relacionamento *"Runs on"* (Roda em), estamos seguindo princípios do CSDM para garantir que, ao abrir um Incidente no dispositivo, sabemos que a Oferta de Serviço Infinity foi impactada.

---
## Lab 4.1.1 - **Criar tabela para registros de configuração de HHD**

**Laboratório 4.1.1**

🕒 **Tempo:** 20 - 25 Minutos

**Objetivos do Laboratório**
Você alcançará os seguintes objetivos:

- Criar uma nova tabela.
- Configurar as visualizações de lista e de formulário da tabela.
- Atualizar o menu da aplicação e criar novos módulos de aplicação.
    - **Dependência do Laboratório:** 3.1.1 – Verifique se você tem a aplicação **All > HHD**.

---

### **Cenário**

A Cloud Dimensions precisa de uma maneira de rastrear cada um dos HHDs Infinity que serão distribuídos no piloto e após o lançamento do produto. Eles precisam rastrear o usuário de cada dispositivo e a configuração do dispositivo.

O principal ponto de dados a ser rastreado serão os dispositivos Infinity, mas informações sobre os usuários dos dispositivos, como nome e e-mail, também estarão disponíveis.

O Product Owner (Dono do Produto) gostaria que a lista de dispositivos fosse adicionada ao menu da aplicação HHD (HHDs e Atribuídos) e uma opção para criar novos registros de HHD (Create New).

> Nota: Antes de criar qualquer tabela no ServiceNow, a pergunta para começar sempre é: Você deve usar uma tabela existente, estender uma tabela existente ou criar uma nova tabela? É importante investigar o banco de dados para identificar e usar quais tabelas e campos já existem. O dicionário do sistema contém detalhes para cada tabela e a definição para cada coluna em cada tabela. Isso pode ajudá-lo a determinar o que, se houver algo, você precisa criar.
>

### **Seção 1: Criar uma nova tabela, coluna e layout de lista**

1. Use o **Application Scope Picker** (Seletor de Escopo de Aplicação) para confirmar que o **Application scope** é: **Global**.
2. Navegue para **All > System Definition > Tables**.
3. No **cabeçalho da lista**, selecione **New** (Novo).
    
    > Nota: Você também pode criar uma nova tabela em All > System Definition > Tables & Columns. Você pode fechar a mensagem sobre a criação de tabelas personalizadas em aplicações de escopo e selecionar o botão "More" para ativar/desativar as anotações.
    > 
4. Complete a parte superior do formulário de **Table** (Tabela) da seguinte forma:
    - **Label:** Holographic Handheld HHD
    - **Name:** u_cmdb_ci_hardware_hhd
    - **Extends table:** Hardware [cmdb_ci_hardware]
    - **Add module to menu:** HHD
    
    > Nota: Não aceite o valor padrão no campo Name. Você quer ver no nome do arquivo que o HHD é estendido da tabela cmdb_ci_hardware. Esta é uma convenção para a estrutura do CMDB, que exploraremos mais adiante no laboratório 4.4: Explorar CMDB e Estruturas de Dados.
    > 
5. Sua tela deve aparecer da seguinte forma (conforme imagem):
    - Os campos Label e Name preenchidos.
    - "Create module" marcado.
    - "Add module to menu" definido como HHD.
    
    > Nota: Tabelas personalizadas no escopo Global começam com um prefixo u_. É considerado uma boa prática renomear novas tabelas personalizadas com nomes significativos. No exemplo acima, o nome foi alterado para u_cmdb_ci_hardware_hhd porque é mais fácil digitar e pesquisar por HHD do que por "Holographic Handheld".
    > 
    > 
    > Tabelas personalizadas em um **Application Scope** (Escopo de Aplicação), como "Service Operations Workspace: Core", começarão com o prefixo `x_`.
    > 
6. Selecione **Save** (Salvar).
7. Role para baixo e selecione a aba **Columns** (Colunas). Observe os **fields** (campos) que foram herdados da tabela `cmdb_ci_hardware`.

### **Criar o campo de versão de firmware**

1. Na aba **Columns**, selecione **New**.
2. Crie uma nova coluna (campo) da seguinte forma:
    - **Type:** String
    - **Column label:** Firmware version
    - **Column name:** (aceite o padrão `u_firmware_version`)
    - **Max Length:** 40
3. Selecione **Submit**.

### **Configurar o layout da lista**

1. Navegue até o menu **HHD** e selecione o Módulo **Holographic Handheld HHDs**.
    
    > Nota: Durante a criação da tabela Holographic Handheld HHD, a caixa de seleção Create module foi marcada. No campo Add Module to menu, você selecionou HHD.
    > 
    
    Uma lista com *No records to display* (Nenhum registro para exibir) é mostrada com as colunas padrão.

    2. **Configure** (não personalize) o **List Layout** para incluir as **columns** (colunas) nesta ordem exata:
    - Name
    - Serial Number
    - Asset tag
    - Firmware version
    - Support group
    - Installed
    - Install Status
    - Assigned to
    - Comments

3. Selecione **Save**.
4. Confirme se o novo **list layout** possui as colunas corretas na ordem correta.

### **Seção 2: Configurar o formulário do Infinity HHD**

Agora, você configurará a visualização do formulário.

1. Selecione **New**.
2. Abra o menu **Additional actions** (menu de hambúrguer), depois selecione **Configure > Form Builder**.
3. Configure o formulário (arrastando do painel **Add form elements** para o layout do formulário) para incluir as **columns** (colunas) nesta ordem:
*(Dica: Use a busca em "Add form elements" para encontrar os campos rapidamente).*
    - Name
    - Serial Number
    - Asset tag
    - Firmware version
    - Support group
    - Installed
    - Install Status
    - Assigned to
    - Comments
    - Fault count
    
    > **Nota:** Se o campo não estiver presente na lista, ele pode já estar no formulário.
    > 
4. **Save** (Salvar).
5. Retorne ao registro HHD, depois selecione **Additional actions > Reload form**. Confirme se o novo layout do formulário tem os campos corretos na ordem correta.
6. Clique com o botão direito no cabeçalho do formulário (**form header**) e selecione **Configure > Form Builder**.
7. Faça o "Dot-walk" para adicionar o campo **Assigned_to.Email** ao formulário:
    - No painel "Add form elements", selecione o campo **Assigned to > Add a related field (Dot-walk from User)**.
    - Arraste o campo para logo abaixo do campo **Assigned to**. A janela "Dot-walk from User table" abrirá.
    - Selecione **Email > Add to view**.
8. **Save** (Salvar).
    
    > **Nota:** O campo **Assigned to.Email** exibirá o endereço de e-mail do registro de Usuário do responsável (Assignee). Ele será preenchido automaticamente quando um nome for inserido no campo "Assigned to", se o registro do usuário incluir um endereço de e-mail.
    > 
9. Navegue até o registro HHD, depois faça **reload the form** (recarregar o formulário) novamente. Verifique se o formulário HHD exibe o campo **Email**.
10. No campo **Assigned to**, digite **Fred Luddy**. Verifique se o endereço de E-mail é preenchido automaticamente.
    
    > **Nota:** Não é necessário salvar este registro.
    > 

**Desafio:** Adicione o campo **Assigned to.Email** à lista **Holographic Handheld HHDs**.

### **Seção 3: Atualizar o menu da aplicação**

Agora, um novo módulo precisará ser configurado para que os usuários possam criar novos registros de HHD (usando o formulário que você acabou de projetar).

1. No menu **All**, localize **HHD**, depois selecione o ícone **Edit Application** (lápis).
2. Na seção **Modules**, selecione **New**.
3. Preencha o formulário da seguinte maneira:
    - **Title:** Create New
    - **Application menu:** HHD
    - **Order:** 100
4. Selecione a aba **Link Type** e complete conforme mostrado:
    - **Link type:** New Record
    - **Table:** Holographic Handheld HHD [u_cmdb_ci_hardware_hhd]
5. Verifique os valores dos campos e selecione **Submit**.

Em seguida, o Product Owner quer que o módulo "Holographic Handheld HHDs" seja intitulado "HHDs and Assignees".

1. Role para baixo até a seção **Modules**, depois selecione **Holographic Handhelds HHDs**.
2. No campo **Title**, digite **HHDs and Assignees**.
3. Selecione **Update**.
4. Verifique se o menu **All** exibe conforme mostrado na imagem (com os módulos "HHDs and Assignees", "Incidents and Inquiries" e "Create New").

## Lab 4.2.1 - **Criar Controles de Acesso**

🕒 **Tempo:** 40–45 minutos

**Objetivos do Laboratório**

Você alcançará os seguintes objetivos:

- Fornecer acesso ao menu e módulo da aplicação para uma função (role) especificada.
- Criar uma nova função (role).
- Criar regras de Controle de Acesso (Access Control rules) para proteger dados nos níveis de tabela e campo para conceder permissões de dados.
    - **Dependência do Laboratório:** 3.2.1, 3.3.1 e 4.1.1.
    ---

### **Cenário**

A Infinity, fabricante do HHD, solicitou que a Cloud Dimensions torne os registros de incidentes do HHD visíveis apenas para os membros da equipe de suporte do HHD e para os donos do produto (Product Owners). Isso faz parte do acordo de confidencialidade (NDA) para participar do piloto de HHD do fabricante.

O resultado é um requisito para restringir o acesso ao menu e aos módulos da aplicação Infinity HHD e controlar quais campos os usuários podem atualizar.

**Requisitos:**

1. Apenas os grupos **Service Desk** e **Training Technology Support** devem ser capazes de visualizar e atualizar registros de Incidentes Infinity HHD.
2. Os solicitantes (callers) devem ser capazes de visualizar seus próprios registros de incidentes no portal Employee Center.
3. Após o carregamento dos registros de item de configuração HHD, o campo **Asset Tag** deve ser somente leitura (read-only) para todos os usuários, exceto a Product Owner, Annette Frietas.

### **Seção 1: Fornecer acesso ao menu da aplicação e módulo**

Você usará a função (role) que foi criada com a nova tabela para registros do Infinity HHD.

1. Certifique-se de estar logado como **System Administrator**.
2. Navegue para **All > System Security > Users and Groups > Roles** (ou selecione este módulo na sua lista de Favoritos).
3. Verifique se você vê o registro da role **u_holographic_handheld_hhd_user**.
    
    > **Nota:** Esta role foi criada automaticamente quando a tabela Holographic Handheld HHD [u_cmdb_ci_hardware_hhd] foi adicionada ao banco de dados, juntamente com a criação de quatro regras de Controle de Acesso (Access Control rules) de tabela. Tudo isso é opcional durante o processo de criação da tabela e pode ser evitado através das configurações.
    > 
4. No **Filter navigator** (navegador de filtro), digite **hhd**. Passe o mouse sobre **HHD** e selecione o ícone **Edit Application** (lápis).
5. Em **Roles**, adicione a role **u_holographic_handheld_hhd_user**.
    
    > **Nota:** A maneira rápida de localizar a role HHD na lista Disponível (Available) é digitar "u" para pular para as roles que começam com "u".
    > 
6. Em **Roles**, remova **itil**.
    
    > **Nota:** Você precisa remover a role `itil`, pois essa role é dada a toda a TI. Queremos que apenas as pessoas com a role **u_holographic_handheld_hhd_user** sejam capazes de ver a aplicação HHD.
    > 
7. Selecione **Done**.
8. **Save** (Salvar).
9. Na seção **Modules**, modifique cada um dos módulos para mostrar **apenas** a role **u_holographic_handheld_hhd_user**:
    - Na aba **Visibility**, remova a role **itil** (se estiver presente) e adicione a role **u_holographic_handheld_hhd_user**.
    - Selecione **Done**.
10. Selecione **Update**.
    
    *(Verifique se o Menu de Aplicação HHD mostra a role correta associada a cada módulo, conforme a imagem do laboratório)*.

### **Desafio Opcional**

Retorne para **All > System Security > Users and Groups > Roles**. Localize e abra o registro da role **u_holographic_handheld_hhd_user**.

- Na aba **Applications with Role**, verifique se esta role está associada à **HHD Application**.
- Na aba **Modules with Role**, verifique se esta role está associada a cada um dos **Modules**.

### **Seção 2:** Conceder roles aos grupos de suporte

As **Roles** foram criadas e aplicadas ao **Application Menu** e **Modules** do HHD, mas elas ainda não estão associadas aos grupos de suporte. Vamos corrigir isso!

1. Navegue até **All > System Security > Users and Groups > Groups** (ou vá para sua lista de **Favorites** e selecione **Users and Groups - Groups**).
2. Localize e abra o registro do grupo **Service Desk**.
3. Selecione a aba **Roles**, depois selecione **Edit**.
4. No **List Collector**, pesquise e selecione a role `u_holographic_handheld_hhd_user`.
5. Adicione a **role** à Lista do **Service Desk**.
6. **Save**.
> **Nota:** Observe a mensagem de que um job foi acionado automaticamente para atualizar os grupos, roles e registros de usuário. Isso significa que os usuários podem não receber as roles imediatamente.
> 
7. A lista **Service Desk Roles** deve ficar parecida com o exemplo (listando pelo menos três roles):
    
    > **Nota:** Se necessário, recarregue o formulário (**reload the form**).
    > 
8. Repita estes passos para adicionar a role `u_holographic_handheld_hhd_user` ao grupo **Training Technology Support**.

### **Seção 3:** Testar as configurações de visibilidade

Agora que a role `u_holographic_handheld_hhd_user` foi adicionada aos grupos de suporte, todos os membros dos grupos devem ter acesso à aplicação **HHD**. Usuários que não são membros dos grupos não devem ter acesso.

Nós testaremos a visibilidade da aplicação **HHD** fazendo **Impersonate** em usuários que estão, e que não estão, atribuídos aos grupos de suporte.

1. Faça o **Impersonate** em **Bernard Laboy**.
2. Feche a janela pop-up **Welcome to Service Operations Workspace**.
    
    > **Nota:** A conta de usuário do Bernard tem a role `itil`, mas ele não pertence a nenhum dos grupos de suporte do **HHD**; portanto, ele não deve ser capaz de ver as **Applications** e **Modules**.
    > 
3. Navegue até **All > HHD**.
4. Confirme que **Bernard** não consegue ver/acessar a aplicação **HHD** e seus modules.
5. Faça o **Impersonate** em **Annette Frietas**.
6. Localize a aplicação **HHD**. Expanda-a para confirmar que **Annette** consegue ver todos os três modules.
7. Selecione o module **Create New**.
8. Verifique se **Annette Frietas** consegue criar (**create**) um registro inserindo dados mínimos.
9. Selecione **Submit**.
10. **End impersonation**.

### **Seção 4:** Estabelecer Access Control Rules para incidente

Os passos anteriores ocultaram as opções do menu **HHD** de todos os usuários, exceto para usuários com a role `u_holographic_handheld_hhd_user`. No entanto, membros da organização de TI com a role `itil` podem ver todos os Incidentes nas listas de incidentes. Nesta seção, ocultaremos os registros Infinity (HHD) no nível da tabela. Além disso, adicionaremos *access controls* de **read**, **write** e **create** para a role `u_holographic_handheld_hhd_user`.

1. No menu do usuário (**user menu**), selecione **Elevate role**.
    
    > **Nota:** O *base system admin* pode elevar para uma *privileged role* para ter acesso aos recursos de **High Security Settings**. Se você conceder a role de **admin** a usuários adicionais, eles não poderão elevar para uma *privileged role*.
    > 
2. Selecione a caixa de seleção **security_admin**.
3. Selecione **Update**.
    
    Observe que a página recarrega e agora há uma pequena seta para cima no canto superior direito da imagem do usuário **System Administrator**. Você também pode ver que a role está elevada abrindo o menu do usuário.
    
    > **Nota:** Com a role **security_admin** elevada, você agora pode criar **access controls**.
    > 

### Adicionar novos Access Controls para ler, escrever e criar

Você criará três *access controls* para garantir acesso de **read**, **write** e **create** para os usuários com a role `u_holographic_handheld_hhd_user` (membros dos grupos **Service Desk** e **Training Technology Support**).

1. Navegue até **All > System Security > Access Control (ACL)**.
2. Selecione **New**.
3. Complete o formulário da seguinte maneira:
    - **Type:** Record (mantenha o padrão)
    - **Operation:** **read**
    - **Admin overrides:** **selected**
    - **Active:** **selected**
    - **Name:** **Incident [incident]**
    - **Description:** `u_holographic_handheld_hhd_user role required to read HHD incident records`
    - (+) Copy/Paste – texto "Description"
    - **Role:** `u_holographic_handheld_hhd_user`
        - Role a tela até a seção **Definition** e localize **Requires role**.
        - Clique duas vezes em **Insert a new row...**
        - Digite `u_` e selecione a role `u_holographic_handheld_hhd_user`.
        - Selecione o ícone **Save** (check verde) para adicionar a role.
    - Abaixo da role, na área **Data Condition**, adicione **Filter Condition**: **Service offering | is | Infinity (HHD)**
4. **Save**.
5. Selecione **Continue** na janela pop-up **Verify Security Rules**.
6. Atualize o formulário da seguinte maneira:
    - **Operation:** **write**
    - **Description:** `u_holographic_handheld_hhd_user role required to write HHD incident records`
    - (+) Copy/Paste – texto "Description"
    - **Role:** `u_holographic_handheld_hhd_user` (preenchimento automático)
    - **Data Condition:** **Service offering | is | Infinity (HHD)** (preenchimento automático)
7. Clique com o botão direito no **form header**, depois selecione **Insert and Stay**.
8. Selecione **Continue** na janela pop-up **Verify Security Rules**.
    
    > **Nota:** Quando você selecionou **Insert and Stay**, a role não foi preenchida automaticamente, então certifique-se de selecioná-la.
    > 
9. Atualize o formulário da seguinte maneira:
    - **Operation:** **create**
    - **Description:** `u_holographic_handheld_hhd_user role required to create HHD incident records`
    - (+) Copy/Paste – texto "Description"
    - **Role:** `u_holographic_handheld_hhd_user`
        
        > **Nota:** Quando você selecionou **Insert and Stay**, a role não foi preenchida automaticamente, então certifique-se de selecioná-la.
        > 
    - **Data Condition:** **Service offering | is | Infinity (HHD)** (preenchimento automático)
10. Clique com o botão direito no **form header**, depois selecione **Insert and Stay**.
11. Selecione **Continue** na janela pop-up **Verify Security Rules**.
12. Selecione **Update**.

### **Seção 5:** Criar uma Access Control Rule para asset tag

> **Nota:** Em um laboratório futuro, carregaremos uma lista de registros HHD. Esses registros conterão informações básicas sobre os dispositivos, incluindo o número da *asset tag*. Para garantir que os números de *asset tag* não sejam atualizados a partir do *form* ou *list*, você adicionará uma nova *role* para os usuários que poderão editar *asset tags*. Esta *role* é `u_hhd_asset_tagger`.
> 

Agora você criará a nova *role* e uma regra de **Access Control** que permite apenas usuários com a role `u_hhd_asset_tagger` atualizar (**update/write**) o campo **Asset tag**.

1. Navegue até **All > User Administration > Roles** (ou use o seu menu de **Favorites**).
2. Selecione **New**.
3. Complete o formulário da seguinte maneira:
    - **Name:** `u_hhd_asset_tagger`
    - **Application:** **Global**
4. Selecione **Submit**.
5. Navegue até **All > System Security > Access Control (ACL)**.
6. Filtre a lista de **rules** para encontrar as quatro regras `u_cmdb_ci_hardware_hhd`.
7. Localize e abra a **rule** com a operação **write**.
8. Localize o campo **Name** e selecione o menu suspenso **fields** à direita da tabela selecionada **Holographic Handheld HHD [u_cmdb_ci_hardware_hhd]**.
9. Selecione **Asset tag**.
10. Clique com o botão direito no **form header**, depois selecione **Insert and Stay**.
11. Selecione **Continue** na janela pop-up **Verify Security Rules**.
12. Localize **Requires role** e clique duas vezes em **Insert a new row...**
13. Digite `u_`, depois selecione a role `u_hhd_asset_tagger`.
14. Selecione o ícone **Save** para adicionar a role.
15. Selecione **Update** para salvar e sair do registro de **Access Control**.
16. Na lista **Access Control**, confirme que a nova **ACL** foi adicionada.

### **Seção 6:** Conceder a role para atualizar asset tags

O requisito é que Annette Frietas seja a única pessoa capaz de atualizar o campo **Asset Tag** nos registros HHD.

1. Crie um novo grupo **HHD Asset Taggers Group** da seguinte forma:
    - **Group Name:** **HHD Asset Taggers**
    - **Save**
    - **Add Role:** `u_hhd_asset_tagger`
    - **Add Group member:** **Annette Frietas**
    
    > **Nota:** Annette Frietas já está presente na tabela **User**, então você não precisará criar um novo registro de usuário. Selecione o botão "**Edit**", em vez de "**New**".
    > 

### **Seção 7:** Testar as configurações de asset tag

### **Test User without the ability to update asset tag** (Testar Usuário sem a habilidade de atualizar asset tag)

1. Faça o **Impersonate** em **Beth Anglin**.
2. Navegue até **All > HHD > Create New**.
3. Verifique se o campo **Asset tag** está **read only** (cinza).
    
    > **Nota:** Os únicos usuários que podem editar o campo **Asset tag** são membros do grupo **HHD Asset Taggers**, que possuem a role `u_hhd_asset_tagger`.
    > 

### **Test user with the ability to update asset tag** (Testar usuário com a habilidade de atualizar asset tag)

1. Faça o **Impersonate** em **Annette Frietas**.
2. Navegue até **All > HHD**.
3. Verifique se **Annette** tem acesso a todos os **modules**.
4. Navegue até **All > HHD > Create New**.
5. Verifique se o campo **Asset tag** é editável (**writable**).
6. **End impersonation**.

*Com este laboratório, o acesso à **application** e **module** foi ajustado, e uma regra de **Access Control** foi criada para limitar permissões aos dados da tabela.*

*Este não é um tópico ou laboratório fácil – parabéns por concluí-lo!*

## Lab 4.3.1 - Importar dados de hardware HHD

**Lab objectives** (Objetivos do laboratório)

Você alcançará os seguintes objetivos:

- Criar um novo **list layout** para preparar a importação de dados.
- Criar uma **Import Set Table** e um **Transform Map**.
- Transformar múltiplas importações (**multiple imports**).
- Limpar dados de importação (**clean up import data**).

**Scenario** (Cenário)

Neste laboratório, você usará **Import Sets** para carregar dados que foram coletados em uma planilha para a tabela **Holographic Handheld HHD**.

Os dados contêm informações de registro de dispositivos coletadas pelos funcionários da Cloud Dimensions, incluindo informações sobre o proprietário do dispositivo e seu Infinity HHD.

**This lab has three parts:** (Este laboratório tem três partes:)

- Uma carga inicial (**initial load**), incluindo o trabalho de configuração necessário.
- Uma carga de dados incremental (**incremental data load**).
- Uma limpeza de dados (**data cleanup**).

### **Seção 1:** Carga inicial de dados

Na carga inicial, você irá:

- Reunir arquivos de dados Excel.
- Organizar um **list layout** da tabela.
- Criar um novo **Import Set** importando dados de uma planilha Excel para uma **staging table**, e então validar os dados.
- Criar um **Transform Map** baseado na **staging table**.
- Usar **automapping** e **mapping assist** para estabelecer o mapeamento entre as tabelas de origem e destino.
- Completar a transformação (**transform**) e verificar os dados resultantes.

### Criar visualização de lista para verificar dados de importação

Você criará um novo layout de **list view** para garantir que possa examinar claramente os novos registros após serem importados para o ServiceNow.

1. Certifique-se de estar logado como **System Administrator**.
2. Navegue até **All > HHD > HHDs and Assignees**.
3. Clique com o botão direito no **column header** da lista e selecione **Configure > List Layout**.
4. Na seção **List view**, selecione **View name** e depois selecione **New...**.
5. Para **View name**, digite `Import Validation`.
6. Selecione **OK**.
7. Adicione, remova e ordene **fields** até que a lista **Selected** apareça da seguinte forma: **Serial number**, **Assigned to.Location**, **Name**, **Asset tag**, **Firmware Version**, **Assigned to**.
    
    > **Dica:** **Assigned to.Location** exigirá que você faça *dot-walk*.
    > 
8. **Save**.
9. No menu **List controls**, navegue até **View > Import Validation**.
10. Verifique a ordem dos **fields** na view **Import Validation**.
11. Se você criou quaisquer registros de teste (**test records**), delete-os (**delete**) neste momento.

### **Criar um novo Import Set**

> **Nota:** Um **Import Set** é uma ferramenta usada para importar dados de várias fontes de dados (**data sources**) e mapear esses dados para tabelas do ServiceNow. Agora que você preparou sua visualização de lista (**list view**), você pode começar o processo de criação de uma **Import Set Table** (staging area) e um **Transform Map**.
> 
1. Navegue até **All > System Import Sets > Load Data**.

> **Nota:** Os passos a seguir (processo) podem ser completados por qualquer usuário com a role **import_admin** ou **import_set_loader** e **import_transformer**.
> 
1. Preencha o formulário **Import Set Load Data** conforme abaixo:
    - **Import set table:** Create table (selecionado automaticamente)
    - **Label:** HHD Imports
    - **Name:** u_hhd_imports (preenchido automaticamente)
    - **Source of the import:** File (selecionado automaticamente)
    - **File:** Selecione **Choose file**, depois selecione **infinity_HHD-data.xlsx**
2. Selecione **Submit**.
3. Revise a tela **Progress**. Você deve ver **7 inserts**.


### **Validar dados no Import Set**

1. Na seção **Next Steps** da tela **Progress**, selecione o link **Loaded data** para verificar os dados no novo **Import Set**.
2. Confirme se os sete registros de **HHD Imports** são exibidos com um state de **Pending**.

> **Nota:** Seus registros podem estar em uma ordem diferente da mostrada.
>

### **Criar Transform Map**

> **Nota:** A seguir, você especificará os relacionamentos de dados entre um **import set** (tabela de staging temporária) e a tabela de destino (**target table**). O **Transform Map** ajuda você a fazer isso.
> 
1. Navegue até **All > System Import Sets > Create Transform Map**.
2. Preencha o formulário conforme abaixo:
    - **Name:** HHD CIs
    
    > **Nota:** Esses registros HHD farão parte do **Configuration Management Database (CMDB)**. Cada registro no CMDB é chamado de **Configuration Item (CI)**. No próximo módulo, exploraremos o CMDB.
    > 
    - **Source table:** HHD Imports [u_hhd_imports]
    - **Target table:** Holographic Handheld HHD [u_cmdb_ci_hardware_hhd]
3. **Save**.

> **Nota:** Não selecione **Submit**, caso contrário você sairá do formulário.
> 
1. Role até **Related Links**, então selecione **Auto Map Matching Fields**.
2. Na aba **Field Maps**, verifique se dois campos estão mapeados automaticamente: **Name**, **Asset Tag**.

> **Nota:** A ordem dos seus campos pode ser diferente.
> 
1. Na lista **Related Links**, selecione **Mapping Assist**.

> **Nota:** O método de mapeamento mais simples é onde todos os nomes de campos (**field names**) do **Import Set** correspondem aos nomes dos campos na tabela de destino (**Target table**) para onde os dados serão transformados. No entanto, quando este não é o caso, o utilitário **Mapping Assist Utility** fornece um processo visualmente intuitivo que permite definir os dados que você está importando e para onde esses dados irão. A seguir, você mapeará movimentações diretas de campo para campo (**field-to-field**). Onde os nomes dos campos em cada tabela forem diferentes, é importante que você defina a movimentação com precisão.
> 
1. A partir da tabela de staging **Source: HHD Imports**, mova **Device Number**, **Device Owner**, **Device Version**, e **Owner Location** para o **Field Map**.
2. A partir da tabela **Target: Holographic Handheld HHD**, mova **Serial number**, **Assigned to**, **Firmware version**, e **Location** para o **Field Map**.
3. Abaixo do **Field Map**, verifique se os campos de **Source** e **Target** estão mapeados corretamente.
    - *(Nota visual do mapeamento correto:)*
        - Device Number -> Serial number
        - Device Owner -> Assigned to
        - Device Version -> Firmware Version
        - Owner Location -> Location
4. **Save**.
5. Na aba **Field Maps**, verifique se agora existem seis campos mapeados:
**Asset Tag, Name, Device Version, Device Number, Owner Location,** e **Device Owner**.

> **Nota:** A ordem dos seus campos pode ser diferente.
>

### **Executar o transform (Run the transform)**

1. A partir de **Related Links** no **HHD CIs Table Transform Map**, selecione **Transform**.
2. Verifique se o mapa **HHD CIs – u_cmdb_ci_hardware_hhd** está selecionado.
3. Selecione **Transform**.
4. A tela **Progress** exibe as mensagens de confirmação da transformação.

### **Verificar importação de HHD CI (Verify HHD CI import)**

1. Navegue até **All > HHD > HHD and Assignees**.
2. Garanta que sua **View** esteja definida como **Import Validation**.
3. A **lista (list)** deve exibir **sete** registros no total.

> **Nota:** A sua ordem pode ser ligeiramente diferente.
>

### **Seção 2: Carga de dados incremental**

Na **carga incremental (incremental load)**, você irá:

- Fazer o upload de uma segunda planilha Excel, reutilizando a tabela de staging e o **Transform Map**.
- Identificar um campo **coalesce** (chave) para garantir que registros existentes sejam atualizados com os novos dados importados e não duplicados.
- Usar a tabela de **import set** existente (**HHD Imports**) e o **transform map** existente para carregar dados adicionais do arquivo **infinity_HHD-updates.xlsx**.

### **Carregar os dados (Upload the data)**

1. Navegue até **All > System Import Sets > Load Data**.
2. Para **Import set table**, selecione o botão de rádio **Existing table**.
3. Preencha o formulário conforme abaixo:
    - **Import set table:** HHD Imports [u_hhd_imports]
    - **Source of the import:** File (selecionado automaticamente)
    - **File:** Escolha **Choose file** e selecione **infinity_HHD-updates.xlsx**
4. Selecione **Submit**.
5. Revise a tela **Progress**. Você deve ver **19 inserts**.

> **Nota:** A importação dos dados Infinity para a **staging table** está completa, mas você ainda não está pronto para rodar o transform porque precisa adicionar um campo **coalesce**. Ou seja, o campo chave que deve ser definido para garantir que registros existentes sejam atualizados em vez de adicionados como novos registros. Para adicionar um campo coalesce, precisaremos modificar o **Transform Map** existente.
>

### **Definir o campo coalesce (Define the coalesce field)**

1. Navegue até **All > System Import Sets > Administration > Transform Maps**.
2. Abra o **Transform Map** **HHD CIs**.
3. Role para baixo até a aba **Field Maps**.

> **Nota:** O campo **device number** (u_device_number) é provavelmente o melhor candidato para o campo **coalesce** porque contém um valor único. Se uma correspondência for encontrada para o valor deste campo, então o registro será atualizado em vez de um novo registro ser criado.
> 
1. Na linha **u_device_number**, na coluna **Coalesce**, clique duas vezes na palavra **false**, depois selecione **true** na lista suspensa (**drop-down list**).
2. Selecione o ícone **Save** (marca de verificação verde) para atualizar o valor para **true**.

> **Nota:** Uma mensagem do sistema é exibida no topo do formulário. Quando você define um campo **Coalesce** pela primeira vez, um índice será criado automaticamente. A mensagem do sistema só se aplica se você alterou os campos **Coalesce**.
>

### **Preparar e executar o transform (Prepare and run the transform)**

1. Sob a seção **Related Links**, selecione o link **Transform**.
2. Verifique se o **Import set** foi definido automaticamente para o segundo import set que você carregou.
3. Na caixa **Selected maps**, verifique se você está usando o **Import Set** e **Transform Map** corretos: **HHD CIs – u_cmdb_ci_hardware_hhd**.
4. Selecione **Transform**.
5. Confirme se a mensagem de transformação completa (**transformation complete**) é exibida.

### **Verificar atualizações da importação de HHD (Verify HHD import updates)**

1. Navegue até **All > HHD > HHDs and Assignees**.
2. Confirme se há **19 registros no total** na lista **HHDs and Assignees**.
3. Selecione o ícone **Personalize List** (engrenagem) para adicionar o campo **Updated**.
4. Ordene a lista (**Sort the list**) pela coluna **Updated**.
5. Verifique:
    - Alguns dos registros têm um horário atualizado (**updated time**) do **initial upload** (Infinity_HHD-data.xlsx).
    - Alguns têm um horário atualizado (**updated time**) do **incremental upload** (infinity_HHD-updates.xlsx).
6. Abra as duas **planilhas (spreadsheets)**.
7. Localize o dispositivo **CDE0100102** em ambas as planilhas e **compare** os registros.

> **Nota:** Note que na planilha **infinity-HHD-data.xlsx**, no registro **CDE0100102**, HÁ uma **Owner Location**. Compare isso com o mesmo registro na planilha **infinity-HHD-updates.xlsx**, que NÃO tinha informação de **Owner Location**.
> 
1. Navegue até **System Import Sets > Administration > Transform Maps**.
2. Localize e abra o **Table Transform Map** para **HHD CIs**.
3. No formulário do **Transform Map**, localize a opção para **Copy empty fields**.

> **Nota:** Se você tivesse a caixa de seleção **Copy empty fields** selecionada no **Transform Map**, ela teria **sobrescrito** (overwritten) os dados de localização para este registro com o valor de endereço em branco do arquivo **infinity_HHD_updates.xlsx**. Como a caixa de seleção **Copy empty fields** **não** estava marcada (not checked), os dados de localização da importação original foram **mantidos** (retained) no registro. Nenhuma ação adicional é necessária.
>

### **Seção 3: Limpar tabelas de import set (Clean up import set tables)**

Agora você limpará os dados da **Import Set Table**.

1. Navegue até **All > System Import Sets > Import Set Tables > Cleanup**.
2. Adicione a tabela **HHD Imports [u_hhd_imports]** à caixa **Delete these tables**.
3. A caixa de seleção para **Delete related transform maps** deve estar **desmarcada** (cleared).
4. A caixa de seleção para **Delete data only (preserve table structure)** deve estar **selecionada**.

> **Nota:** Isso removerá os dados coletados na tabela de staging **HHD Imports**.
> 
1. Selecione **Cleanup**.

Você deve ver uma mensagem de verificação **Cleanup completed** e as ações tomadas exibidas em um **Import Log**.

> **Nota:** Se você quisesse excluir a tabela **Import Set** e qualquer referência a ela, incluindo o **HHD CIs Transform Map**, você teria marcado a caixa de seleção **Delete related transform maps**.
> 

---

**Parabéns por completar o laboratório de Import Sets!**

Graças a você, a **Cloud Dimensions** tem visibilidade dos **HHDs and Assignees** atuais anteriormente armazenados em planilhas legadas—muito bem!

## Lab 4.4.1 - **Explorar estruturas de dados, CMDB e relacionamentos de CI**

**Objetivos do laboratório**
Você alcançará os seguintes objetivos:

- Explorar **Schema Maps**
- Explorar o **CMDB** via **CI Class Manager**
- Explorar o **HHD CI** no **Class Manager**
- Definir relacionamentos de CI (**CI relationships**) entre os **HHD CIs** e o **Infinity HHD Service Offering**
- Visualizar o **Dependency Map**

> **Dependência do laboratório:** 3.3.1 – Training Service, Infinity (HHD) Service offering, 4.1.1 - Holographic Handheld HHD table, e 4.3.1 – HHD Data.
> 

---

### **Cenário**

O Product Owner da Cloud Dimensions quer ter visibilidade dos incidentes que estão ocorrendo para o serviço deles. A capacidade de ver os incidentes via **dependency view** é útil no formulário de **Incident**.

Como **System Administrator**, explore o **schema map** da tabela **HR task** para ver como os diferentes tipos de tarefas de RH (**HR tasks**) se estendem da tabela **task**.

### **Seção 1: Explorar estruturas de dados (Explore data structures)**

1. Vá para **All > System Definition > Tables**.
2. Pesquise pela tabela com o rótulo **HR Case [sn_hr_core_case]**.
3. Abra o registro, role para baixo até **Related Links**, então selecione **Show Schema Map**.

> **Nota:** Você pode ignorar a mensagem de escopo da aplicação (**application scope message**).
> 

Note como a tabela **HR Case** é estendida da tabela **Task**. Note que cada tipo especial de **HR Case** é estendido de **HR Case**.

1. Selecione em **+ Task Columns** para visualizar as colunas herdadas da tabela **Task**.
2. Selecione **+ Columns** para expandir as visualizações de campo de **HR Case**.

> **Nota:** Por que você olharia aqui? É útil para pesquisar onde as colunas existem se você está tentando construir um relatório (**report**), adicionar um campo ou configurar uma lista.
> 
1. Volte para **Tables**. Pesquise por, e selecione, a tabela **Holographic Handheld HHD**.

> **Dica:** Você também pode usar o menu **History** para retornar ao módulo **Tables**.
> 
1. Em **Related Links**, selecione **Show Schema Map**.

Na extrema direita deste gráfico, você pode ver a tabela base para todos os itens de configuração (**configuration items**), a tabela **Base Configuration Item (cmdb)**. A partir da tabela **cmdb**, a tabela **cmdb_ci** foi estendida. A partir da tabela **cmdb_ci**, a tabela **cmdb_ci_hardware** foi estendida.

A tabela **Holographic Handheld HHD** foi estendida da tabela **Hardware**, e ao fazer isso herdou todos os campos das tabelas pai (**cmdb**, **cmdb_ci** e **cmdb_ci_hardware**).

1. Selecione cada um dos **+ Columns** para visualizar o campo único para **Holographic Handheld HHD**, e os campos herdados (**inherited**) das outras tabelas.

### **Seção 2: Explorar CI Class Manager – CMDB, CIs e relacionamentos**

O **CI Class Manager** exibe toda a hierarquia de **CI Class** em um formato de visualização em árvore. Ele consolida definições de classe em um local central. Ele permite um método mais fácil para visualizar, modificar ou estender **CI Classes**. Uma **CI Class** representa um tipo de **Configuration Item**, essencialmente uma tabela que coleta dados específicos (ex: aplicações, computadores, impressoras, servidores, etc.).

No **Lab 4.1**, uma nova **CI Class** chamada **Holographic Handheld HHD**, foi criada automaticamente para o Holographic Handheld HHD. Isso foi categorizado como um **Hardware CI** por causa da extensão da tabela **[cmdb_ci_hardware]**.

1. Navegue até **All > Configuration > CI Class Manager**.

> **Nota:** O **CI Class Manager** pode levar um momento para carregar na sua instância.
> 
1. Selecione **Open Hierarchy**.
2. Pesquise por e selecione a classe **Service**.
3. Na **class hierarchy** (hierarquia de classes), passe o mouse sobre **Service** e selecione o ícone **Pin the class**.
4. Pesquise por e selecione a classe **Holographic Handheld HHD** e faça o **pin** (fixar) dela.
    
    > **Nota:** Isso confirma que a tabela **Holographic Handheld HHD** e seus registros de dados consequentes são rastreados no **CMDB**, embora sejam acessados a partir de seu próprio menu de aplicativo e respectivos módulos.
    > 
5. Em **Pinned Classes**, selecione a classe **Service**.
6. Em **Class Info**, selecione **CI List**.
7. Na **CI List**, pesquise por e selecione **Training**.
8. Na seção **Related Items**, selecione o ícone **Dependency Views** para visualizar o **dependency map**.
9. Feche a aba do navegador do **dependency view**.
    
    > **Nota:** A **dependency view** abre em uma nova aba do navegador.
    >

### Seção 3: Criar novo tipo de Relaciomento Sugerido (Suggested Relationship)

> **Nota:** Nos próximos passos, você associará um tipo de **Relationship** entre a Classe **Offerings** e a Classe **HHD**. Usando essa relação, você conectará o **HHD** ao **Service Offering** **Infinity (HHD)**. A relação indicará que o **Service Offering** Infinity (HHD) **Runs on** (roda em) HHD.
> 
1. No **CI Class Manager**, selecione **Hierarchy**.
2. Na lista de **pinned class**, selecione **Holographic Handheld HHD**.
3. Selecione **Suggested Relationships**.
4. À direita da tela, Selecione **New**.
*A caixa de diálogo Add Suggested Relationship é exibida.*
5. Verifique se a **Class** é **Holographic Handheld HHD**.
6. Para **Relationship**, selecione **Runs (Runs on::Runs)**.
    
    > **Nota:** Não selecione "Runs on (Runs on::Runs)".
    > 
7. Para **Target Class**, selecione **Offering**.
8. Selecione **Save**.

### Seção 4: Associar o HHD a Oferta de Serviço (Service Offering)

1. Navegue até **All > Configuration > Service Offerings**.
2. Pesquise por e selecione **Infinity (HHD)**.
3. Em **Related Items**, selecione **+** para acessar o **Relationship Editor**.
4. Em **Available Relationships**, escolha **[Infinity (HHD)] Runs on...**.
5. Remova a **filter condition** para **Class | is a | UNIX Server**.
6. Selecione **Run filter**.
7. Na lista **Available CIs**, selecione e adicione os dispositivos e protótipos para a lista **Infinity (HHD) Runs on these CIs**.
8. Selecione **Save**.
9. Confirme que você consegue visualizar os **HHD CIs** na **Related Items Flat View** para o **Service Offering**.
    
    > **Nota:** Lendo do topo do formulário, você pode ver que o **Service offering**, Infinity (HHD) **runs on** (roda em) Holographic Handheld HHDs, com cada um dos dispositivos listados na parte inferior. Seguindo as práticas de negócios padrão, essas relações são tipicamente gerenciadas com os processos de **Service Mapping** e **Discovery**. Este exercício serviu para mostrar a você, como **System Administrator**, como essas funções funcionam.
    >

### Seção 5: Verificar a habilidade de usar os CIs no formulário de Incidentes

Rita Center está tendo problemas com seu HHD. Você precisará abrir um **Incident** para o dispositivo dela.

1. Vá para **All > Incident > Create New**.
2. Complete o formulário **Incident** conforme abaixo:
    - **Caller**: **Rita Center**
    - **Service**: **Training**
    - **Service offering**: **Infinity (HHD)**
    - **Configuration Item**: Digite **Infinity** e então selecione a **Look up using list** (lupa) para ver a lista. A partir daqui, você pode escolher aquele que pertence à Rita.
        
        > **Dica:** Você pode rolar para baixo até ver o nome da Rita ou pesquisar pelo nome dela na coluna **Assigned to**.
        > 
    - **Pilot**: **Selected**
    - **Short description**: **Device fails to cast images**
3. No campo **Service**, selecione o ícone **Dependency view** para visualizar a hierarquia.
4. Retorne para a aba do seu **browser** (navegador), então clique em **Submit** no registro.
    
    > **Nota:** Ao ter o **Service**, **Service offering** e **HHD** conectados, o product owner pode ter uma **roll-up view** (visão consolidada) da performance do serviço.
    > 

**Excelente trabalho!** Você aprendeu como criar uma nova **CI class**, adicionar um **CI** ao **CMDB**, e usar **Suggested Relationships** para criar relacionamentos entre itens de configuração!