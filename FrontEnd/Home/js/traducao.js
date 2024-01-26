const translations = {
    pt: {
      headerTitle: 'Lorem',
      homeLink: 'Home',
      documentsLink: 'Documentos',
      placesLink: 'Locais',
      languageLink: 'Idioma',
      donateLink: 'Doe',
      firstpharagraph: "Seja você um refugiado em busca de suporte ou alguém disposto a ajudar, estamos aqui para criar uma comunidade acolhedora e solidária. No Nosso Refúgio, entendemos que a jornada de um refugiado é única, repleta de desafios e esperanças. Nosso compromisso é fornecer recursos, apoio emocional e informações essenciais para facilitar essa transição."

    },
    en: {
      headerTitle: 'Lorem',
      homeLink: 'Home',
      documentsLink: 'Documents',
      placesLink: 'Places',
      languageLink: 'Language',
      donateLink: 'Donate',
      firstpharagraph: "Whether you are a refugee seeking support or someone willing to help, we are here to create a welcoming and supportive community. At Our Refuge, we understand that the journey of a refugee is unique, full of challenges and hopes. Our commitment is to provide resources, emotional support, and essential information to ease this transition."
    },
    es: {
      headerTitle: 'Lorem',
      homeLink: 'Home',
      documentsLink: 'Documentos',
      placesLink: 'Lugares',
      languageLink: 'Idioma',
      donateLink: 'Donar',
      firstpharagraph: "Ya sea que seas un refugiado en busca de apoyo o alguien dispuesto a ayudar, estamos aquí para crear una comunidad acogedora y solidaria. En Nuestro Refugio, entendemos que el viaje de un refugiado es único, lleno de desafíos y esperanzas. Nuestro compromiso es proporcionar recursos, apoyo emocional e información esencial para facilitar esta transición."
    },
  fr: {
    headerTitle: 'Lorem',
    homeLink: 'Accueil',
    documentsLink: 'Documents',
    placesLink: 'Lieux',
    languageLink: 'Langue',
    donateLink: 'Don',
    firstpharagraph: "Que vous soyez un réfugié en quête de soutien ou quelqu'un prêt à aider, nous sommes là pour créer une communauté accueillante et solidaire. À Notre Refuge, nous comprenons que le parcours d'un réfugié est unique, plein de défis et d'espoirs. Notre engagement est de fournir des ressources, un soutien émotionnel et des informations essentielles pour faciliter cette transition."
  },
  ar: {
    headerTitle: 'Lorem',
    homeLink: 'الصفحة الرئيسية',
    documentsLink: 'وثائق',
    placesLink: 'أماكن',
    languageLink: 'اللغة',
    donateLink: 'تبرع',
    firstpharagraph: "سواء كنت لاجئًا تبحث عن الدعم أو شخصًا عازمًا على المساعدة، نحن هنا لإنشاء مجتمع ترحيبي ومتعاون. في ملجأنا، نفهم أن رحلة اللاجئ فريدة، مليئة بالتحديات والآمال. التزامنا هو توفير الموارد، والدعم العاطفي، والمعلومات الأساسية لتسهيل هذه الانتقال."
  }
  };

  function changeLanguage(lang) {
    const elements = Object.keys(translations[lang]);
    elements.forEach(element => {
      document.getElementById(element).innerText = translations[lang][element];
    });
  }