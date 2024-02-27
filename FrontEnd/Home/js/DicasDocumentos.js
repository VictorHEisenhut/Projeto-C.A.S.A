async function showCNH() {
    var modalObj = document.getElementById("CNHModal");
    var bg = document.getElementById("modalBackground");
    var close = document.getElementById("CNHClose");
    var btnClose = document.getElementById("btnCNHClose");
        modalObj.style.display = "block"
        bg.classList.add("modal-backdrop")
        bg.classList.add("fade")
        bg.classList.add("show")
    btnClose.onclick = function(){
      modalObj.style.display = "none"
      bg.classList.remove("modal-backdrop")
      bg.classList.remove("fade")
      bg.classList.remove("show")
    }
    close.onclick = function(){
      modalObj.style.display = "none"
      bg.classList.remove("modal-backdrop")
      bg.classList.remove("fade")
      bg.classList.remove("show")
    }

  }

async function showCRNM() {
  var modalObj = document.getElementById("CRNMModal");
  var bg = document.getElementById("modalBackground");
  var close = document.getElementById("CRNMClose");
  var btnClose = document.getElementById("btnCRNMClose");
      modalObj.style.display = "block"
      bg.classList.add("modal-backdrop")
      bg.classList.add("fade")
      bg.classList.add("show")
  btnClose.onclick = function(){
    modalObj.style.display = "none"
    bg.classList.remove("modal-backdrop")
    bg.classList.remove("fade")
    bg.classList.remove("show")
  }
  close.onclick = function(){
    modalObj.style.display = "none"
    bg.classList.remove("modal-backdrop")
    bg.classList.remove("fade")
    bg.classList.remove("show")
  }
}

async function showCTPS() {
    var modalObj = document.getElementById("CTPSModal");
    var bg = document.getElementById("modalBackground");
    var close = document.getElementById("CTPSClose");
    var btnClose = document.getElementById("btnCTPSClose");
        modalObj.style.display = "block"
        bg.classList.add("modal-backdrop")
        bg.classList.add("fade")
        bg.classList.add("show")
    btnClose.onclick = function(){
      modalObj.style.display = "none"
      bg.classList.remove("modal-backdrop")
      bg.classList.remove("fade")
      bg.classList.remove("show")
    }
    close.onclick = function(){
      modalObj.style.display = "none"
      bg.classList.remove("modal-backdrop")
      bg.classList.remove("fade")
      bg.classList.remove("show")
    }
  }

async function showCPF() {
  var modalObj = document.getElementById("CPFModal");
  var bg = document.getElementById("modalBackground");
  var close = document.getElementById("CPFClose");
  var btnClose = document.getElementById("btnCPFClose");
      modalObj.style.display = "block"
      bg.classList.add("modal-backdrop")
      bg.classList.add("fade")
      bg.classList.add("show")
  btnClose.onclick = function(){
    modalObj.style.display = "none"
    bg.classList.remove("modal-backdrop")
    bg.classList.remove("fade")
    bg.classList.remove("show")
  }
  close.onclick = function(){
    modalObj.style.display = "none"
    bg.classList.remove("modal-backdrop")
    bg.classList.remove("fade")
    bg.classList.remove("show")
  }
}

const translations = {
  pt: {
    homeLink: 'Home',
    documentsLink: 'Documentos',
    placesLink: 'Locais',
    languageLink: 'Idioma',
    donateLink: 'Doe',
    firstParagraph: 'Para garantir os seus direitos, é essêncial regularizar sua presença em território nacional! Mantenha sua situação documental atualizada! Todas pessoas migrantes, têm direito a um cadastro como pessoa física (CPF), a um documento de identidade, e à carteira de trabalho. Clique nos cards e descubra como podemos ajudar você!',
    cuidaDocumentacao: 'Cuide da sua Documentação!',
    mensagemCNH: 'Carteira Nacional de Habilitação (CNH): O que é?   \n A Carteira Nacional de Habilitação (CNH) é um documento essencial que legitima a capacidade de um indivíduo para conduzir veículos automotores e atesta seu conhecimento das normas de trânsito.   \n   \n   Passo 1 - Processo de Habilitação: O início do processo envolve a inscrição em uma autoescola, onde o futuro condutor terá aulas teóricas e práticas. Após a conclusão do curso, é necessário realizar exames teóricos e práticos para comprovar sua aptidão para dirigir.   \n   Passo 2 - Solicitação da CNH: Uma vez aprovado, o próximo passo é solicitar a CNH. Isso geralmente é feito no Detran local, onde é necessário apresentar documentos, realizar exames médicos e pagar as taxas associadas.   \n    Passo 3 - Permissão Provisória e CNH Definitiva: Ao obter aprovação nos exames, o candidato recebe inicialmente uma Permissão para Dirigir, válida por um período determinado. Após cumprir esse prazo e sem incidentes graves, é possível solicitar a CNH definitiva.     \n    Passo 4 - Renovação e Atualização: A CNH precisa ser renovada periodicamente. Durante esse processo, é uma oportunidade para atualizar informações e garantir que o condutor esteja ciente das mudanças nas leis de trânsito. A CNH é mais do que um simples documento; é a chave para a mobilidade e responsabilidade no trânsito. O cumprimento rigoroso dos passos do processo de obtenção e a manutenção atenta do status da habilitação contribuem para um tráfego mais seguro e eficiente nas vias públicas. ',
    mensagemCRNM:'CRNM O que é - \n  Todas as pessoas migrantes que querem se estabelecer no Brasil e solicitam autorização autorização de residência no país – inclusive as pessoas refugiadas com situação reconhecida pelo CONARE.     \n    \n    Passo 1- Acessar o site da Polícia Federal para preencher o formulário de Autorização de Residência. É preciso preencher a modalidade escolhida, de acordo com seu local de origem ou motivo de sua permanência (como tratamento de saúde, reunião familiar, etc). Para pessoas migrantes venezuelanas, a modalidade que pode ser escolhida é a de Nacional de país fronteiriço onde não esteja em vigor o acordo de residência para nacionais dos estados partes do Mercosul e países associados.      \n     \n    Passo 2 - Ao finalizar o preenchimento do formulário, agendar o comparecimento na unidade da Polícia Federal mais próxima de sua moradia, com atendimento para migrantes, para apresentar os documentos requeridos e taxas pagas.      \n     \n   Passo 3 - Comparecer à unidade da Polícia Federal para receber a Carteira de Registro Nacional Migratório.',
    mensagemCTPS:'Carteira de Trabalho e Previdência Social (CTPS): O que é? \n A Carteira de Trabalho e Previdência Social (CTPS) é um documento crucial que registra informações sobre contratos de trabalho, assegurando os direitos trabalhistas concedidos pelo governo aos trabalhadores. \n \n Passo 1 - Criação da Conta: O primeiro passo é criar uma conta no sistema do Ministério da Economia por meio do site. Para realizar o cadastro, é necessário ter em mãos o número do CPF. \n  \n  Passo 2 - Acesso ao Sistema: Em seguida, acesse o site do Ministério da Economia ou faça o download do aplicativo "Carteira de Trabalho Digital" na loja virtual do celular. \n   \n Passo 3 - Atualização de Dados: Ao acessar o perfil pessoal, é possível completar e/ou ajustar os dados laborais, garantindo a manutenção de um cadastro atualizado. Essa prática é fundamental para assegurar a precisão das informações relacionadas ao histórico de trabalho. Esses passos proporcionam aos trabalhadores um meio eficiente de manterem registros atualizados de suas atividades laborais, contribuindo para a transparência e garantindo o acesso aos benefícios trabalhistas oferecidos pelo governo.',
    mensagemCPF:' O CPF é um documento identificador do contribuinte do Imposto de Rende, e é obrigatório para todos os residentes no Brasil. É utilizado para abertura de contas bancárias, emissão de outros documentos, matricula em universidades e cadastro de número telefônico.   \n   \n Passo 1 - Acessar o site da Receita Federal e preencher o formulário com seus dados pessoais, para gerar um protocolo.      \n      \n       Passo 2 - Ir a uma unidade física da Receita Federal, possuindo o protocolo, documento de identidade e comprovante de residência.     \n     \n     Pontos Importantes - Caso você não possua documentos do governo brasileiro, como o Protocolo de Refúgio e a CRNM, é necessário levar documentos de identificação admitidos no país de origem. É Importante levar a certidão de nascimento para comprovar a naturalidade, a filiação e a data de nascimento.',
    abrigo_trd:'Abrigos',
    consulados_trd:'Consulados',
    posto_trd:'Posto de saúde',
    logout: 'Sair',
    login: 'Entrar',
  },
  en: {
    homeLink: 'Home',
    documentsLink: 'Documents',
    placesLink: 'Places',
    languageLink: 'Language',
    donateLink: 'Donate',
    firstParagraph: "To ensure your rights, it is essential to regularize your presence in the national territory! Keep your documental situation updated! All migrant individuals have the right to register as a natural person (CPF), to an identity document, and to a work permit. Click on the cards and discover how we can help you!",
    cuidaDocumentacao: "Take care of your Documentation!",
    mensagemCNH: "Driver's License (CNH): What is it? \n The Driver's License (CNH) is an essential document that legitimizes an individual's ability to drive motor vehicles and attests to their knowledge of traffic rules.   \n   \n  Step 1 - Licensing Process: The process begins with registration at a driving school, where the future driver will have theoretical and practical lessons. After completing the course, it is necessary to take theoretical and practical exams to prove their ability to drive.  \n  \n  Step 2 - CNH Application: Once approved, the next step is to apply for the CNH. This is usually done at the local DMV, where documents must be presented, medical exams must be performed, and associated fees must be paid.  \n  \n  Step 3 - Provisional Permission and Definitive CNH: Upon passing the exams, the candidate initially receives a Provisional Driving Permit, valid for a specified period. After completing this period without serious incidents, it is possible to apply for the definitive CNH.  \n \n Step 4 - Renewal and Update: The CNH needs to be renewed periodically. During this process, there is an opportunity to update information and ensure that the dr  iver is aware of changes in traffic laws. The CNH is more than just a document; it is the key to mobility and responsibility in traffic. Strict compliance with the steps of the obtaining process and careful maintenance of the status of the license contribute to safer and more efficient traffic on public roads.",
    mensagemCRNM: "CRNM - What is it? All migrants who want to settle in Brazil and apply for authorization to reside in the country – including recognized refugees by CONARE.   \n   \n Step 1 - Access the Federal Police website to fill out the Residence Authorization form. It is necessary to fill in the chosen modality according to your place of origin or reason for staying (such as health treatment, family reunion, etc.). For Venezuelan migrants, the modality that can be chosen is that of a National from a neighboring country where the residence agreement for nationals of Mercosur member states and associated countries is not in force.  \n   \n Step 2 - After completing the form, schedule an appointment at the nearest Federal Police unit to your residence, with service for migrants, to submit the required documents and paid fees.  \n   \n Step 3 - Attend the Federal Police unit to receive the National Migration Registry Card.",
    mensagemCTPS: "Work and Social Security Document (CTPS): What is it? \n The Work and Social Security Document (CTPS) is a crucial document that records information about employment contracts, ensuring the labor rights granted by the government to workers.  \n   \n Step 1 - Account Creation: The first step is to create an account in the Ministry of Economy system through the website. To register, it is necessary to have the CPF number. \n \n Step 2 - System Access: Next, access the Ministry of Economy website or download the 'Digital Work Card' app from the phone's app store. \n \n Step 3 - Data Update: By accessing the personal profile, it is possible to complete and/or adjust work-related data, ensuring the maintenance of an updated registry. This practice is essential to ensure the accuracy of information related to work history. These steps provide workers with an efficient way to keep updated records of their work activities, contributing to transparency and ensuring access to government-provided labor benefits.",
    mensagemCPF: "The CPF is an identifier for the taxpayer of the Income Tax, and it is mandatory for all residents in Brazil. It is used for opening bank accounts, issuing other documents, enrolling in universities, and registering phone numbers. \n \n Step 1 - Access the Federal Revenue website and fill out the form with your personal information to generate a protocol. \n \n Step 2 - Go to a physical unit of the Federal Revenue, with the protocol, identification document, and proof of residence. \n \n Important Points - If you do not have documents from the Brazilian government, such as the Refugee Protocol and the CRNM, it is necessary to bring identification documents accepted in the country of origin. It is important to bring the birth certificate to prove nationality, parentage, and date of birth.",
    abrigo_trd:'Shelters',
    consulados_trd:'Consulates',
    posto_trd:'Health Center',    
    logout: 'Logout',
	  login: 'Login',
  },
  es: {
    homeLink: 'Home',
    documentsLink: 'Documentos',
    placesLink: 'Lugares',
    languageLink: 'Idioma',
    donateLink: 'Donar',
    firstParagraph: "¡Para garantizar sus derechos, es esencial regularizar su presencia en el territorio nacional! ¡Mantenga actualizada su situación documental! Todas las personas migrantes tienen derecho a registrarse como persona física (CPF), a un documento de identidad y a una tarjeta de trabajo. ¡Haga clic en las tarjetas y descubra cómo podemos ayudarlo!",
    cuidaDocumentacao: "¡Cuida tu Documentación!",
    mensagemCNH: "Licencia de Conducir (CNH): ¿Qué es? \n La Licencia de Conducir (CNH) es un documento esencial que legitima la capacidad de un individuo para conducir vehículos automotores y certifica su conocimiento de las normas de tránsito. \n \n Paso 1 - Proceso de Licenciamiento: El proceso comienza con la inscripción en una autoescuela, donde el futuro conductor tendrá clases teóricas y prácticas. Después de completar el curso, es necesario realizar exámenes teóricos y prácticos para demostrar su capacidad para conducir. \n Paso 2 - Solicitud de la CNH: Una vez aprobado, el siguiente paso es solicitar la CNH. Esto se hace generalmente en el Detran local, donde se deben presentar documentos, realizar exámenes médicos y pagar las tarifas asociadas.\n Paso 3 - Permiso Provisional y CNH Definitiva: Al aprobar los exámenes, el candidato recibe inicialmente un Permiso de Conducir Provisional, válido por un período determinado. Después de cumplir con este período sin incidentes graves, es posible solicitar la CNH definitiva. \n Paso 4 - Renovación y Actualización: La CNH debe renovarse periódicamente. Durante este proceso, hay una oportunidad para actualizar la información y asegurarse de que el conductor esté al tanto de los cambios en las leyes de tránsito. La CNH es más que un simple documento; es la clave para la movilidad y la responsabilidad en el tráfico. El estricto cumplimiento de los pasos del proceso de obtención y el mantenimiento cuidadoso del estado de la licencia contribuyen a un tráfico más seguro y eficiente en las vías públicas.",
    mensagemCRNM: "CRNM - ¿Qué es? \n Todas las personas migrantes que desean establecerse en Brasil y solicitan autorización para residir en el país, incluidas las personas refugiadas con situación reconocida por CONARE. \n \n Paso 1 - Acceder al sitio web de la Policía Federal para completar el formulario de Autorización de Residencia. Es necesario completar la modalidad elegida según su lugar de origen o motivo de permanencia (como tratamiento de salud, reunión familiar, etc.). Para migrantes venezolanos, la modalidad que se puede elegir es la de Nacional de país fronterizo donde no esté en vigor el acuerdo de residencia para nacionales de los estados partes del Mercosur y países asociados. \n \n Paso 2 - Al finalizar el llenado del formulario, programar la cita en la unidad de la Policía Federal más cercana a su domicilio, con atención para migrantes, para presentar los documentos requeridos y pagar las tarifas. \n \n Paso 3 - Asistir a la unidad de la Policía Federal para recibir la Cédula de Registro Nacional Migratorio.",
    mensagemCTPS: "Carteira de Trabalho e Previdência Social (CTPS): ¿Qué es? \n  La Carteira de Trabalho e Previdência Social (CTPS) es un documento crucial que registra información sobre contratos laborales, asegurando los derechos laborales otorgados por el gobierno a los trabajadores. \n \n Paso 1 - Creación de la cuenta: El primer paso es crear una cuenta en el sistema del Ministerio de Economía a través del sitio web. Para registrarse, es necesario tener el número de CPF. \n \n Paso 2 - Acceso al sistema: A continuación, acceda al sitio web del Ministerio de Economía o descargue la aplicación 'Carteira de Trabalho Digital' de la tienda de aplicaciones del teléfono. \n \n Paso 3 - Actualización de datos: Al acceder al perfil personal, es posible completar y/o ajustar datos laborales, garantizando el mantenimiento de un registro actualizado. Esta práctica es fundamental para asegurar la precisión de la información relacionada con el historial laboral. Estos pasos proporcionan a los trabajadores una manera eficiente de mantener registros actualizados de sus actividades laborales, contribuyendo a la transparencia y asegurando el acceso a los beneficios laborales proporcionados por el gobierno.",
    mensagemCPF: "El CPF es un documento identificador del contribuyente del Impuesto sobre la Renta, y es obligatorio para todos los residentes en Brasil. Se utiliza para abrir cuentas bancarias, emitir otros documentos, inscribirse en universidades y registrar números de teléfono.\n \n Paso 1 - Acceder al sitio web de la Receita Federal y completar el formulario con sus datos personales para generar un protocolo. \n \n Paso 2 - Ir a una unidad física de la Receita Federal, con el protocolo, documento de identidad y comprobante de domicilio. \n \n Puntos importantes - Si no tiene documentos del gobierno brasileño, como el Protocolo de Refugiado y la CRNM, es necesario llevar documentos de identificación aceptados en el país de origen. Es importante llevar el certificado de nacimiento para demostrar la nacionalidad, filiación y fecha de nacimiento.",
    abrigo_trd:'Refugios',
    consulados_trd:'Consulados',
    posto_trd:'Centro de salud',
    logout: 'Déconnexion',
	  login: 'Connexion',
  },
  fr: {
    homeLink: 'Accueil',
    documentsLink: 'Documents',
    placesLink: 'Lieux',
    languageLink: 'Langue',
    donateLink: 'Don',
    firstParagraph: "Pour garantir vos droits, il est essentiel de régulariser votre présence sur le territoire national ! Gardez à jour votre situation documentaire ! Toutes les personnes migrantes ont le droit de s'inscrire en tant que personne physique (CPF), d'obtenir un document d'identité et une carte de travail. Cliquez sur les cartes et découvrez comment nous pouvons vous aider !",
    cuidaDocumentacao: "Prenez soin de votre documentation !",
    mensagemCNH: "Permis de conduire (CNH) : Qu'est-ce que c'est ? Le permis de conduire (CNH) est un document essentiel qui légitime la capacité d'un individu à conduire des véhicules automobiles et atteste de sa connaissance du code de la route. \n \n Étape 1 - Processus d'obtention du permis : Le processus commence par l'inscription dans une auto-école, où le futur conducteur suivra des cours théoriques et pratiques. Après avoir terminé le cours, il est nécessaire de passer des examens théoriques et pratiques pour prouver sa capacité à conduire. \n Étape 2 - Demande de la CNH : Une fois approuvé, la prochaine étape consiste à demander la CNH. Cela se fait généralement auprès du service local des permis de conduire, où il faut présenter des documents, passer des examens médicaux et payer les frais associés. \n Étape 3 - Permission provisoire et CNH définitive : Après avoir réussi les examens, le candidat reçoit initialement une autorisation provisoire de conduire, valable pendant une période déterminée. Après avoir respecté cette période sans incidents graves, il est possible de demander la CNH définitive.  \n Étape 4 - Renouvellement et mise à jour : La CNH doit être renouvelée périodiquement. Au cours de ce processus, il est possible de mettre à jour les informations et de s'assurer que le conducteur est au courant des changements dans le code de la route. La CNH est plus qu'un simple document ; c'est la clé de la mobilité et de la responsabilité sur la route. Le respect strict des étapes du processus d'obtention et le suivi attentif du statut du permis contribuent à une circulation plus sûre et plus efficace sur les voies publiques.",
    mensagemCRNM: "CRNM - Qu'est-ce que c'est ?   \n Toutes les personnes migrantes qui veulent s'installer au Brésil et demandent l'autorisation de résider dans le pays - y compris les personnes réfugiées dont la situation est reconnue par le CONARE.  \n   \n Étape 1 - Accéder au site web de la Police fédérale pour remplir le formulaire d'autorisation de résidence. Il est nécessaire de remplir la modalité choisie en fonction de votre lieu d'origine ou du motif de votre séjour (comme un traitement médical, une réunion familiale, etc.). Pour les migrants vénézuéliens, la modalité qui peut être choisie est celle d'un ressortissant d'un pays voisin où l'accord de résidence pour les ressortissants des États parties du Mercosur et des pays associés n'est pas en vigueur.  \n   \n Étape 2 - À la fin du remplissage du formulaire, prendre rendez-vous à l'unité de la Police fédérale la plus proche de votre domicile, avec un service pour les migrants, pour présenter les documents requis et payer les frais. <br> <br> Étape 3 - Se rendre à l'unité de la Police fédérale pour recevoir la Carte d'enregistrement national des migrants.",
    mensagemCTPS: "Carte de travail et de sécurité sociale (CTPS) : Qu'est-ce que c'est ? La Carte de travail et de sécurité sociale (CTPS) est un document crucial qui enregistre des informations sur les contrats de travail, garantissant les droits du travail accordés par le gouvernement aux travailleurs.  \n   \n Étape 1 - Création du compte : La première étape consiste à créer un compte dans le système du ministère de l'Économie via le site web. Pour s'inscrire, il est nécessaire d'avoir le numéro de CPF.   \n   \n Étape 2 - Accès au système : Ensuite, accédez au site web du ministère de l'Économie ou téléchargez l'application 'Carte de travail numérique' sur la boutique d'applications de votre téléphone.  \n   \n Étape 3 - Mise à jour des données : En accédant au profil personnel, il est possible de compléter et/ou d'ajuster les données liées au travail, assurant la maintenance d'un registre à jour. Cette pratique est essentielle pour garantir la précision des informations liées à l'historique professionnel. Ces étapes fournissent aux travailleurs un moyen efficace de conserver des enregistrements mis à jour de leurs activités professionnelles, contribuant à la transparence et assurant l'accès aux avantages sociaux fournis par le gouvernement.",
    mensagemCPF: "Le CPF est un identifiant du contribuable de l'impôt sur le revenu et est obligatoire pour tous les résidents au Brésil. Il est utilisé pour ouvrir des comptes bancaires, émettre d'autres documents, s'inscrire à l'université et enregistrer des numéros de téléphone.   \n  \n Étape 1 - Accédez au site de la Receita Federal et remplissez le formulaire avec vos informations personnelles pour générer un protocole.  \n   \n Étape 2 - Rendez-vous dans une unité physique de la Receita Federal, avec le protocole, une pièce d'identité et un justificatif de domicile.  \n   \n Points importants - Si vous n'avez pas de documents du gouvernement brésilien, tels que le Protocole de réfugié et le CRNM, il est nécessaire d'apporter des documents d'identification acceptés dans le pays d'origine. Il est important de présenter l'acte de naissance pour prouver la nationalité, la filiation et la date de naissance.",
    abrigo_trd:'Abris',
    consulados_trd:'Consulats',
    posto_trd:'Centre de santé',
    logout: 'Déconnexion',
  	login: 'Connexion',
  },
  ar: {
    homeLink: 'الصفحة الرئيسية',
    documentsLink: 'وثائق',
    placesLink: 'أماكن',
    languageLink: 'اللغة',
    donateLink: 'تبرع',
    firstParagraph: "سواء كنت لاجئًا تبحث عن الدعم أو شخصًا عازمًا على المساعدة، نحن هنا لإنشاء مجتمع ترحيبي ومتعاون. في ملجأنا، نفهم أن رحلة اللاجئ فريدة، مليئة بالتحديات والآمال. التزامنا هو توفير الموارد، والدعم العاطفي، والمعلومات الأساسية لتسهيل هذه الانتقال.",
    cuidaDocumentacao: "اعتني بمستنداتك!",
    mensagemCNH: "رخصة القيادة الوطنية (CNH): ما هي؟ رخصة القيادة الوطنية (CNH) هي وثيقة أساسية تضفي الشرعية على قدرة الفرد على قيادة المركبات الآلية وتشهد على معرفته بأنظمة المرور.  \n   \n الخطوة 1 - عملية التأهيل: تتضمن بداية العملية التسجيل في مدرسة لتعليم قيادة السيارات، حيث سيحصل السائق المستقبلي على دروس نظرية وعملية. بعد الانتهاء من الدورة يجب عليك إجراء الاختبارات النظرية والعملية لإثبات قدرتك على القيادة.  \n الخطوة الثانية - طلب رخصة قيادة: بمجرد الموافقة، فإن الخطوة التالية هي طلب رخصة قيادة. يتم ذلك عادةً في ديتران المحلية، حيث يكون من الضروري تقديم المستندات والخضوع للفحوصات الطبية ودفع الرسوم المرتبطة بها.  \n الخطوة 3 - التصريح المؤقت وCNH النهائي: عند اجتياز الاختبارات، يحصل المرشح في البداية على تصريح قيادة صالح لمدة محددة. بعد الالتزام بهذا الموعد النهائي ودون وقوع حوادث خطيرة، من الممكن طلب رخصة قيادة نهائية.  \n الخطوة الرابعة - التجديد والتحديث: يجب تجديد رخصة القيادة بشكل دوري. خلال هذه العملية، تكون هذه فرصة لتحديث المعلومات والتأكد من أن السائق على علم بالتغيرات في قوانين المرور. إن CNH أكثر من مجرد وثيقة بسيطة؛ هذا هو مفتاح التنقل والمسؤولية في حركة المرور. يساهم اتباع خطوات عملية الحصول بدقة والحفاظ على حالة الترخيص بعناية في حركة مرور أكثر أمانًا وكفاءة على الطرق العامة.",
    mensagemCRNM: "CRNM ما هو - جميع المهاجرين الذين يرغبون في الاستقرار في البرازيل ويطلبون تصريح الإقامة في البلاد - بما في ذلك اللاجئين الذين لديهم وضع معترف به من قبل CONARE.  \n   \n الخطوة 1- قم بالدخول إلى موقع الشرطة الاتحادية لملء استمارة تصريح الإقامة. يجب عليك ملء الطريقة المختارة، وفقًا لمكانك الأصلي أو سبب إقامتك (مثل العلاج الصحي، ولم شمل الأسرة، وما إلى ذلك). بالنسبة للمهاجرين الفنزويليين، الطريقة التي يمكن اختيارها هي طريقة مواطن دولة حدودية حيث لا تكون اتفاقية الإقامة لمواطني الدول الأعضاء في ميركوسور والدول المرتبطة بها سارية.  \n   \n الخطوة الثانية - عند الانتهاء من ملء النموذج، حدد موعدًا للحضور إلى وحدة الشرطة الفيدرالية الأقرب إلى منزلك، والتي تقدم خدمات للمهاجرين، لتقديم المستندات المطلوبة والرسوم المدفوعة.  \n   \n الخطوة 3 - اذهب إلى وحدة الشرطة الفيدرالية لاستلام بطاقة تسجيل الهجرة الوطنية.",
    mensagemCTPS:"بطاقة العمل والضمان الاجتماعي (CTPS): ما هي؟ تعد بطاقة العمل والضمان الاجتماعي (CTPS) وثيقة مهمة تسجل معلومات حول عقود العمل، مما يضمن حقوق العمل التي تمنحها الحكومة للعمال.  \n   \n الخطوة الأولى – إنشاء حساب: الخطوة الأولى هي إنشاء حساب في نظام وزارة الاقتصاد من خلال الموقع الإلكتروني. للتسجيل، يجب أن يكون لديك رقم CPF الخاص بك في متناول اليد.  \n   \n الخطوة الثانية - الدخول إلى النظام: بعد ذلك قم بالذهاب إلى موقع وزارة الاقتصاد أو قم بتحميل تطبيقبطاقة العمل الرقمية من المتجر الافتراضي لهاتفك الخلوي.  \n   \n الخطوة 3 - تحديث البيانات: عند الوصول إلى الملف التعريفي، من الممكن إكمال و/أو تغيير بيانات التوظيف، مما يضمن الاحتفاظ بسجل محدث. هذه الممارسة ضرورية لضمان صحة المعلومات المتعلقة بتاريخ العمل. توفر هذه التدابير للعمال وسيلة فعالة للاحتفاظ بسجلات محدثة لأنشطة عملهم، والمساهمة في الشفافية وضمان الوصول إلى مزايا التوظيف التي تقدمها الحكومة.",
    mensagemCPF:"إن CPF هو وثيقة هوية لدافعي ضريبة الدخل، وهو إلزامي لجميع المقيمين في البرازيل. يتم استخدامه لفتح الحسابات المصرفية وإصدار المستندات الأخرى والتسجيل في الجامعات وتسجيل رقم الهاتف.  \n   \n الخطوة 1 - قم بالدخول إلى موقع الإيرادات الفيدرالية وملء النموذج ببياناتك الشخصية، إنشاء بروتوكول.  \n   \n الخطوة 2 - انتقل إلى وحدة الإيرادات الفيدرالية الفعلية، مع البروتوكول ووثيقة الهوية وإثبات الإقامة.  \n   \n نقاط مهمة - إذا لم يكن لديك وثائق حكومية برازيلية، مثل بروتوكول اللاجئين وCRNM، فيجب عليك إحضار وثائق الهوية المقبولة في البلد الأصلي. من المهم إحضار شهادة ميلادك لإثبات مكان ميلادك ونسبك وتاريخ ميلادك.",
    abrigo_trd:'الملاجئ',
    consulados_trd:'القنصليات',
    posto_trd:'مركز الصحة',
    logout: 'تسجيل الخروج',
  	login: 'تسجيل الدخول',
  }
};

function changeLanguage(lang) {
  const elements = Object.keys(translations[lang]);
  elements.forEach(element => {
    document.getElementById(element).innerText = translations[lang][element];
  });
}