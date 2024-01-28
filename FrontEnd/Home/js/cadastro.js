select = document.getElementById("paises")
fetch('http://localhost:5145/api/Paises',{
                headers: { 
                           'Content-Type': 'application/json'
                          }
              })
        .then(data => {return data.json();})
        .then(post => {
            post.forEach(element => {
                
                pais = `<option value="${element.pais}">${element.pais}</option>`
                select.innerHTML += pais
            });
        });   
async function cadastrar()
    {
        let nome = document.getElementById("nome").value
        let sobrenome = document.getElementById("sobrenome").value
        let email = document.getElementById("email").value
        let senha = document.getElementById("senha").value
        let dataN = document.getElementById("dataN").value
        let fone = document.getElementById("fone").value
        let estadoCivil = document.getElementById("estadoCivil").value
        let genero = document.getElementById("genero").value
        let escolaridade = document.getElementById("escolaridade").value
        let paisId = document.getElementById("paisId").value
        let documento = document.getElementById("documento").value
        let role = "usuario"
        let obj = 
        {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            senha: senha,
            dataNascimento: dataN,
            telefone: fone,
            estadoCivil: estadoCivil,
            genero: genero,
            escolaridade: escolaridade,
            paisId: paisId,
            documento: documento,
            role: role
        }
        
        await fetch('http://localhost:5210/api/Users',
        {
            method: "POST",
            headers: {'Authorization': 'Bearer ' + token,'Content-Type' : 'application/json'},
            body: JSON.stringify(obj)
        })
        
    }

    const translations = {
        pt: {
          headerTitle: 'Lorem',
          homeLink: 'Home',
          documentsLink: 'Documentos',
          placesLink: 'Locais',
          languageLink: 'Idioma',
          donateLink: 'Doe',
          nameLabel: 'Digite seu nome',
          sobreLabel:'Digite seu sobrenome',
          emailLabel: 'Digite seu email',
          senhaLabel: 'Digite sua senha',
          nascLabel:'Selecione sua data de nascimento',
          numeroLabel: 'Digite seu número de telefone',
          estadoCivilLabel: 'Selecione seu estado civíl',
          generoLabel:'Selecione seu gênero',
          escolaridadeLabel:'Selecione sua escolaridade',
          paisLabel:'Selecione seu país de origem',
          solteiroLabel:'Solteiro/a',
          casadoLabel:'Casado/a',
          viuviLabel:'Viúvo/a',
          separadoLabel:'Separado/a',
          divorciadoLabel:'Divorciado/a',
          masculinoLabel:'Masculino',
          femininoLabel:'Feminino',
          ensinoFILabel:'Ensino fundamental incompleto',
          ensinoFCLabel:'Ensino fundamental completo',
          ensinoMILabel:'Ensino médio incompleto',
          ensinoMCLabel:'Ensino médio completo',
          ensinoSILabel:'Ensino superior incompleto',
          ensinoSCLabel:'Ensino superior completo',
          botaoLabel: 'Cadastrar'
        },
        en: {
          headerTitle: 'Lorem',
          homeLink: 'Home',
          documentsLink: 'Documents',
          placesLink: 'Places',
          languageLink: 'Language',
          donateLink: 'Donate',
          nameLabel: 'Enter your name',
          sobreLabel:'Enter your last name',
          emailLabel: 'Enter you email',
          senhaLabel: 'Enter your password',
          nascLabel:'Enter your birthday',
          numeroLabel: 'Enter your phone number',
          estadoCivilLabel: 'Enter your marital status',
          generoLabel:'Enter your gender',
          escolaridadeLabel:'Enter your level of education',
          paisLabel:'Enter you country',
          solteiroLabel:'Single',
          casadoLabel:'Married',
          viuviLabel:'Widow/er',
          separadoLabel:'Separeted',
          divorciadoLabel:'Divorced',
          masculinoLabel:'Male',
          femininoLabel:'Female',
          ensinoFILabel:'Incomplete elementary school',
          ensinoFCLabel:'Complete elementary school',
          ensinoMILabel:'Incomplete high school',
          ensinoMCLabel:'Complete high school',
          ensinoSILabel:'Incomplete college',
          ensinoSCLabel:'Complete college',
          botaoLabel: 'Sing up'

        },
        es: {
          headerTitle: 'Lorem',
          homeLink: 'Home',
          documentsLink: 'Documentos',
          placesLink: 'Lugares',
          languageLink: 'Idioma',
          donateLink: 'Donar',
          nameLabel: 'Ingrese su nombre',
          sobreLabel: 'Ingrese su apellido',
          emailLabel: 'Ingrese su correo electrónico',
          senhaLabel: 'Ingrese su contraseña',
          nascLabel: 'Ingrese su fecha de nacimiento',
          numeroLabel: 'Ingrese su número de teléfono',
          estadoCivilLabel: 'Ingrese su estado civil',
          generoLabel: 'Ingrese su género',
          escolaridadeLabel: 'Ingrese su nivel de educación',
          paisLabel: 'Ingrese su país',
          solteiroLabel: 'Soltero',
          casadoLabel: 'Casado',
          viuviLabel: 'Viudo/a',
          separadoLabel: 'Separado/a',
          divorciadoLabel: 'Divorciado/a',
          masculinoLabel: 'Masculino',
          femininoLabel: 'Femenino',
          ensinoFILabel: 'Primaria incompleta',
          ensinoFCLabel: 'Primaria completa',
          ensinoMILabel: 'Secundaria incompleta',
          ensinoMCLabel: 'Secundaria completa',
          ensinoSILabel: 'Universidad incompleta',
          ensinoSCLabel: 'Universidad completa',
          botaoLabel: 'Registrarse'
        },
      fr: {
        headerTitle: 'Lorem',
        homeLink: 'Accueil',
        documentsLink: 'Documents',
        placesLink: 'Lieux',
        languageLink: 'Langue',
        donateLink: 'Don',
        nameLabel: "Entrez votre nom",
        sobreLabel: "Entrez votre nom de famille",
        emailLabel: "Entrez votre adresse e-mail",
        senhaLabel: "Entrez votre mot de passe",
        nascLabel: "Entrez votre date de naissance",
        numeroLabel: "Entrez votre numéro de téléphone",
        estadoCivilLabel: "Entrez votre état civil",
        generoLabel: "Entrez votre genre",
        escolaridadeLabel: "Entrez votre niveau d'éducation",
        paisLabel: "Entrez votre pays",
        solteiroLabel: "Célibataire",
        casadoLabel: "Marié",
        viuviLabel: "Veuf/Veuve",
        separadoLabel: "Séparé(e)",
        divorciadoLabel: "Divorcé(e)",
        masculinoLabel: "Homme",
        femininoLabel: "Femme",
        ensinoFILabel: "École primaire incomplète",
        ensinoFCLabel: "École primaire complète",
        ensinoMILabel: "École secondaire incomplète",
        ensinoMCLabel: "École secondaire complète",
        ensinoSILabel: "Université incomplète",
        ensinoSCLabel: "Université complète",
        botaoLabel: "S'inscrire"
      },
      ar: {
        headerTitle: 'Lorem',
        homeLink: 'الصفحة الرئيسية',
        documentsLink: 'وثائق',
        placesLink: 'أماكن',
        languageLink: 'اللغة',
        donateLink: 'تبرع',
        nameLabel: 'أدخل اسمك',
        sobreLabel: 'أدخل اسمك الأخير',
        emailLabel: 'أدخل بريدك الإلكتروني',
        senhaLabel: 'أدخل كلمة المرور الخاصة بك',
        nascLabel: 'أدخل تاريخ ميلادك',
        numeroLabel: 'أدخل رقم هاتفك',
        estadoCivilLabel: 'أدخل حالتك الزوجية',
        generoLabel: 'أدخل جنسك',
        escolaridadeLabel: 'أدخل مستوى تعليمك',
        paisLabel: 'أدخل بلدك',
        solteiroLabel: 'أعزب',
        casadoLabel: 'متزوج',
        viuviLabel: 'أرمل/ة',
        separadoLabel: 'منفصل/ة',
        divorciadoLabel: 'مطلق/ة',
        masculinoLabel: 'ذكر',
        femininoLabel: 'أنثى',
        ensinoFILabel: 'مدرسة ابتدائية غير مكتملة',
        ensinoFCLabel: 'مدرسة ابتدائية كاملة',
        ensinoMILabel: 'مدرسة ثانوية غير مكتملة',
        ensinoMCLabel: 'مدرسة ثانوية كاملة',
        ensinoSILabel: 'كلية غير مكتملة',
        ensinoSCLabel: 'كلية كاملة',
        botaoLabel: 'تسجيل'
      }
      };
    
      function changeLanguage(lang) {
        const elements = Object.keys(translations[lang]);
        elements.forEach(element => {
          document.getElementById(element).innerText = translations[lang][element];
        });
      }