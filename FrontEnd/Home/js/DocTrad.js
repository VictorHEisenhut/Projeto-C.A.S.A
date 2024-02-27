const translations = {
    pt: {
        homeLink: 'Home',
        documentsLink: 'Documentos',
        placesLink: 'Locais',
        languageLink: 'Idioma',
        donateLink: 'Doe',
        abrigo_trd: 'Abrigos',
        consulados_trd: 'Consulados',
        posto_trd: 'Posto de saúde',
        Hdocumentos_trad: 'Documentos',
        Pdocumentos_trad: 'Neste espaço, você tem a oportunidade de criar novos documentos ou editar aqueles já existentes.',
      },
      en: {
        homeLink: 'Home',
        documentsLink: 'Documents',
        placesLink: 'Places',
        languageLink: 'Language',
        donateLink: 'Donate',
        abrigo_trd: 'Shelters',
        consulados_trd: 'Consulates',
        posto_trd: 'Health Center',
        Hdocumentos_trad: 'Documents',
        Pdocumentos_trad: 'In this space, you have the opportunity to create new documents or edit existing ones.',
      },
      es: {
        homeLink: 'Inicio',
        documentsLink: 'Documentos',
        placesLink: 'Lugares',
        languageLink: 'Idioma',
        donateLink: 'Donar',
        abrigo_trd: 'Refugios',
        consulados_trd: 'Consulados',
        posto_trd: 'Centro de Salud',
        Hdocumentos_trad: 'Documentos',
        Pdocumentos_trad: 'En este espacio, tienes la oportunidad de crear nuevos documentos o editar los existentes.',
      },
      fr: {
        homeLink: 'Accueil',
        documentsLink: 'Documents',
        placesLink: 'Lieux',
        languageLink: 'Langue',
        donateLink: 'Don',
        abrigo_trd: 'Refuges',
        consulados_trd: 'Consulats',
        posto_trd: 'Centre de santé',
        Hdocumentos_trad: 'Documents',
        Pdocumentos_trad: 'Dans cet espace, vous avez la possibilité de créer de nouveaux documents ou de modifier ceux qui existent déjà.',
      },
      ar: {
        homeLink: 'الصفحة الرئيسية',
        documentsLink: 'وثائق',
        placesLink: 'أماكن',
        languageLink: 'اللغة',
        donateLink: 'تبرع',
        abrigo_trd: 'الملاجئ',
        consulados_trd: 'القنصليات',
        posto_trd: 'مركز الصحة',
        Hdocumentos_trad: 'وثائق',
        Pdocumentos_trad: 'في هذا المكان، لديك الفرصة لإنشاء وثائق جديدة أو تحرير تلك الموجودة بالفعل.',
      }
  };
  
  function changeLanguage(lang) {
    const elements = Object.keys(translations[lang]);
    elements.forEach(element => {
      document.getElementById(element).innerText = translations[lang][element];
    });
  }