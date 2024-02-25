select = document.getElementById("pais")
fetch('http://localhost:5145/api/Paises',{
                headers: { 
                           'Content-Type': 'application/json'
                          }
              })
        .then(data => {return data.json();})
        .then(post => {
            post.forEach(element => {
                pais = `<option value=${element.id}>${element.pais}</option>`
                select.innerHTML += pais
            });
        });   

        function dadosEndereco() {
          let cep = document.getElementById('cep').value
          fetch(`https://viacep.com.br/ws/${cep}/json/`)
              .then((dados) => dados.json())
              .then((response) => {
                  document.getElementById('rua').value = response.logradouro
                  if(response.logradouro == ""){
                    document.getElementById("rua").removeAttribute("disabled");
                  }
                  else{
                    document.getElementById("rua").setAttribute("disabled","");
                  }
                  document.getElementById('bairro').value = response.bairro
                  if(response.bairro == ""){
                    document.getElementById("bairro").removeAttribute("disabled");
                  }
                  else{
                    document.getElementById("bairro").setAttribute("disabled","");
                  }
                  document.getElementById('cidade').value = response.localidade
                  document.getElementById("estado").value = response.uf
              }
              )
              .catch((erro) => console.log(erro))
      }

      var acc = document.getElementsByClassName("accordion");
      var i;

      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
      }


      async function cadastrar()
    {
        let nome = document.getElementById("nome").value
        const cornome = document.getElementById("nome")
        if(nome == ""){
          cornome.style.borderColor = "red"
        }
        else{
          cornome.style.borderColor = "#181822"
        }
        let sobrenome = document.getElementById("sobrenome").value
        const corsobrenome = document.getElementById("sobrenome")
        if(sobrenome == ""){
          corsobrenome.style.borderColor = "red"
        }
        else{
          corsobrenome.style.borderColor = "#181822"
        }
        let email = document.getElementById("email").value
        const coremail = document.getElementById("email")
        if(email == "" ){
          coremail.style.borderColor = "red"
        }
        else{
          coremail.style.borderColor = "#181822"
        }
        let senha = document.getElementById("senha").value
        let senhaConfirma = document.getElementById("senhaConfirma").value
        // if(senha != senhaConfirma){
        //   senha = ""
        //   senhaConfirma = ""
        //   document.getElementById("senhasNaoCoincidem").removeAttribute("hidden");
        // }
        // else{
        //   document.getElementById("senhasNaoCoincidem").setAttribute("hidden","");
        // }
        const corsenha = document.getElementById("senha")
        const corsenhaC = document.getElementById("senhaConfirma")
        if(senha == "" || senha.length < 8 || senha.length>16){
          corsenha.style.borderColor = "red"
          corsenhaC.style.borderColor = "red"
        }
        else{
          corsenha.style.borderColor = "#181822"
          corsenhaC.style.borderColor = "#181822"
        }
        let dataN = document.getElementById("dataN").value
        const cordataN = document.getElementById("dataN")
        if(dataN == ""){
          cordataN.style.borderColor = "red"
        }
        else{
          cordataN.style.borderColor = "#181822"
        }
        let fone = document.getElementById("fone").value
        const corfone = document.getElementById("fone")
        if(fone == "" || fone.length != 11){
          corfone.style.borderColor = "red"
        }
        else{
          corfone.style.borderColor = "#181822"
        }

        let estadoCivil = document.getElementById("estadoCivil")
        const corestadoCivil = document.getElementById("estadoCivil")
        estadoCivil.addEventListener('change', function(){})
        var auxEC = parseInt(estadoCivil.value);
        if(estadoCivil.value == "Selecione seu estado civíl"){
          corestadoCivil.style.border = "solid red"
        }
        else{
          corestadoCivil.style = "default"
        }
        let genero = document.getElementById("genero")
        const corgenero = document.getElementById("genero")
        genero.addEventListener('change', function(){})
        var auxG = parseInt(genero.value);
        if(genero.value == "Selecione seu gênero"){
          corgenero.style.border = "solid red"
        }
        else{
          corgenero.style = "default"
        }
        let escolaridade = document.getElementById("escolaridade")
        const corescolaridade = document.getElementById("escolaridade")
        escolaridade.addEventListener('change', function(){})
        var auxE = parseInt(escolaridade.value);
        if(escolaridade.value == "Selecione sua escolaridade"){
          corescolaridade.style.border = "solid red"
        }
        else{
          corescolaridade.style = "default"
        }
        let paisId = document.getElementById("pais")
        const corpaisId = document.getElementById("pais")
        paisId.addEventListener('change', function(){})
        var auxP = parseInt(paisId.value);
        if(paisId.value == "Selecione seu país"){
          corpaisId.style.border = "solid red"
        }
        else{
          corpaisId.style = "default"
        }
        
        let cpf = document.getElementById("cpf").value
        if(cpf == ""){
          cpf = null
        }
        let rg = document.getElementById("rg").value
        if(rg == ""){
          rg = null
        }
        let cnh = document.getElementById("cnh").value
        if(cnh == ""){
          cnh = null
        }
        let crnm = document.getElementById("crnm").value
        if(crnm == ""){
          crnm = null
        }
        let rne = document.getElementById("rne").value
        if(rne == ""){
          rne = null
        }

        let cep = document.getElementById('cep').value
        if(cep == ""){
          cep = null
        }

        let estado = document.getElementById("estado").value
        if(estado == ""){
          estado = null
        }

        let cidade = document.getElementById("cidade").value
        if(cidade == ""){
          cidade = null
        }
       
        let bairro = document.getElementById("bairro").value
        if(bairro == ""){
          bairro = null
        }
       

        let rua = document.getElementById("rua").value
        if(rua == ""){
          rua = null
        }
        

        let numero = document.getElementById("numero").value
        var auxN = parseInt(numero);
        if(numero < 0 ){
          auxN = null
        }

        let obj = 
        {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            senha: senha,
            confirmSenha:senhaConfirma,
            dataNascimento: dataN,
            telefone: fone,
            estadoCivil: auxEC,
            genero: auxG,
            escolaridade: auxE,
            paisId: auxP,
            documento: 
            {
              cpf: cpf,
              rg: rg,
              cnh: cnh,
              crnm: crnm,
              rne: rne
            },
            endereco: 
            {
              estado: estado,
              cidade: cidade,
              bairro: bairro,
              rua: rua,
              numero: auxN,
              cep:cep
            }
        }
        console.log(obj)
        try {
          const response = await fetch('http://localhost:5145/api/Refugiados', {
              method: "POST",
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(obj)
          });
  
          if (await response.ok) {
              showModal();
              console.log("Cadastro bem-sucedido.");
            } else {
              showErrorModal();
              console.log("Erro ao cadastrar:", await response.text());
          }
      } catch (error) {
          console.error("Erro ao cadastrar:", error);
      }
        }

        async function showModal() {
          var modalObj = document.getElementById("successModal");
          var bg = document.getElementById("modalBackground");
          var close = document.getElementById("modalClose");
          var btnClose = document.getElementById("btnModalClose");
              modalObj.style.display = "block"
              bg.classList.add("modal-backdrop")
              bg.classList.add("fade")
              bg.classList.add("show")
          btnClose.onclick = function(){
            modalObj.style.display = "none"
            bg.classList.remove("modal-backdrop")
            bg.classList.remove("fade")
            bg.classList.remove("show")
            window.location.href = "./login.html"
          }
          close.onclick = function(){
            modalObj.style.display = "none"
            bg.classList.remove("modal-backdrop")
            bg.classList.remove("fade")
            bg.classList.remove("show")
            window.location.href = "./login.html"
          }

        }

        async function showErrorModal(){
          var modalObjError = document.getElementById("ErrorModal");
          var bgError = document.getElementById("modalBackground");
          var closeError = document.getElementById("modalCloseError");
          var btnCloseError = document.getElementById("btnModalCloseError");

              modalObjError.style.display = "block"

              bgError.classList.add("modal-backdrop")
              bgError.classList.add("fade")
              bgError.classList.add("show")

          btnCloseError.onclick = function(){
            modalObjError.style.display = "none"
            bgError.classList.remove("modal-backdrop")
            bgError.classList.remove("fade")
            bgError.classList.remove("show")
          }

          closeError.onclick = function(){
            modalObjError.style.display = "none"
            bgError.classList.remove("modal-backdrop")
            bgError.classList.remove("fade")
            bgError.classList.remove("show")
          }
        }

    
    const translations = {
        pt: {
          nameLabel: 'Nome',
          sobreLabel:'Sobrenome',
          emailLabel: 'Email',
          senhaLabel: 'Senha',
          nascLabel:'Data de nascimento',
          numeroLabel: 'Telefone',
          estadoCivilLabel: 'Estado civíl',
          generoLabel:'Gênero',
          escolaridadeLabel:'Escolaridade',
          paisLabel:'País de origem',
          solteiroLabel:'Solteiro/a',
          casadoLabel:'Casado/a',
          viuvoLabel:'Viúvo/a',
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
          cpfLabel: 'CPF',
          rgLabel: 'RG',
          cnhLabel:'CNH',
          crnmLabel:'CRNM',
          rneLabel:'RNE',
          cepLabel:'CEP',
          estadoLabel:'Estado',
          cidadeLabel:'Cidade',
          bairroLabel:'Bairro',
          ruaLabel:'Rua',
          numeroCasaLabel:'Número da residência',
          h1Cadastro:'Cadastro',
          textoCadastro:'Bem-vindo ao nosso site! Estamos empolgados em tê-lo conosco. Por favor, preencha o formulário abaixo para criar sua conta e aproveitar todos os benefícios oferecidos:',
          h5Fone:'11 dígitos',
          h5Email:'Verifique se digitou corretamente seu endereço de email',
          btnProximo:'Próximo',
          btnProximo2:'Próximo',
          btnProximo3:'Próximo',
          btnProximo4:'Próximo',
          btnProximo5:'Próximo',
          btnProximo6:'Próximo',
          btnAnterior:'Anterior',
          btnAnterior2:'Anterior',
          btnAnterior3:'Anterior',
          btnAnterior4:'Anterior',
          btnAnterior5:'Anterior',
          btnAnterior6:'Anterior',
          btnAnterior7:'Anterior',
          optionPais:'Selecione seu país',
          optionGenereo:'Selecione seu gênero',
          optionEstadoCivil:'Selecione seu estado civíl',
          optionEscolaridade:'Selecione sua escolaridade',
          h5Senha:'Deve conter: Mínimo 8 dígitos, Máximo 16 dígitos, Ao menos um número, Ao menos uma letra maiúscula e uma minúscula',
          h5ConfirmaSenha:'Verifique se ambas as senhas estão iguais',
          pDocumentos:'Deseja cadastrar documentos?',
          aSim:'Sim',
          aNao:'Não',
          h5Endereco:'Deseja cadastrar endereço?',
          aSim2:'Sim',
          aNao2:'Não',
          h5Cep:'CEP deve conter hífen',
          pMensagemFinal:'Clique em enviar para confirmar seu cadastro. Caso seja necessário, você poderá alterar suas informações na página do seu perfil. Se deseja conferir suas informações antes de concluir o cadastro clique em voltar.',
          btnVoltar:'Voltar',
          btn_submit:'Cadastrar',
          successModalLabel:'Verificação de conta',
          mensagemEmail:'Um email com um link de verificação de conta foi enviado para você.',
          btnModalClose:'Fechar',
          btnModalReenviar:'Reenviar email',
          ErrorModalLabel:'Erro!',
          MensagemErro:'Ocorreu algum erro em seu cadastro verifique se alguma de suas informações foi digitada incorretamente.',
          btnModalCloseError:'Fechar',
          senhaConfirmaLabel:'Confirmar Senha'
        },
        en: {
          nameLabel: 'Name',
          sobreLabel:'Last name',
          emailLabel: 'Email',
          senhaLabel: 'Password',
          nascLabel:'Birthday',
          numeroLabel: 'Phone number',
          estadoCivilLabel: 'Marital status',
          generoLabel:'Gender',
          escolaridadeLabel:'Level of education',
          paisLabel:'Country',
          solteiroLabel:'Single',
          casadoLabel:'Married',
          viuvoLabel:'Widow/er',
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
          cpfLabel: 'CPF',
          rgLabel: 'RG',
          cnhLabel:'CNH',
          crnmLabel:'CRNM',
          rneLabel:'RNE',
          cepLabel: 'ZIP Code',
          estadoLabel: 'State',
          cidadeLabel: 'City',
          bairroLabel: 'Neighborhood',
          ruaLabel: 'Street',
          numeroCasaLabel: 'House number',
          h1Cadastro: 'Sing up',
          textoCadastro: 'Welcome to our website! We are excited to have you with us. Please fill out the form below to create your account and enjoy all the benefits offered:',
          h5Fone: '11 digits',
          h5Email: 'Make sure you have entered your email address correctly',
          btnProximo:'Next',
          btnProximo2:'Next',
          btnProximo3:'Next',
          btnProximo4:'Next',
          btnProximo5:'Next',
          btnProximo6:'Next',
          btnAnterior: 'Back',
          btnAnterior2:'Back',
          btnAnterior3:'Back',
          btnAnterior4:'Back',
          btnAnterior5:'Back',
          btnAnterior6:'Back',
          btnAnterior7:'Back',
          optionPais: 'Select your country',
          optionGenereo: 'Select your gender',
          optionEstadoCivil: 'Select your marital status',
          optionEscolaridade: 'Select your level of education',
          h5Senha: 'Must contain: Minimum 8 characters, Maximum 16 characters, At least one number, At least one uppercase and one lowercase letter',
          h5ConfirmaSenha: 'Make sure both passwords match',
          pDocumentos: 'Do you want to register your documents?',
          aSim: 'Yes',
          aNao: 'No',
          h5Endereco:'Do you want to register your address?',
          aSim2:'Yes',
          aNao2:'No',
          h5Cep: 'ZIP Code must contain a hyphen',
          pMensagemFinal: 'Click submit to confirm your Sing up. If necessary, you can change your information on your profile page. If you want to review your information before completing the registration, click the back button.',
          btnVoltar: 'Back',
          btn_submit: 'Sing up',
          successModalLabel: 'Account Verification',
          mensagemEmail: 'An email with an account verification link has been sent to you.',
          btnModalClose: 'Close',
          btnModalReenviar: 'Resend Email',
          ErrorModalLabel: 'Error!',
          MensagemErro: 'An error occurred in your registration. Please check if any of your information was entered incorrectly.',
          btnModalCloseError: 'Close',
          senhaConfirmaLabel: 'Confirm Password'
        },
        es: {
          nameLabel: "Nombre",
          sobreLabel: "Apellido",
          emailLabel: "Correo electrónico",
          senhaLabel: "Contraseña",
          nascLabel: "Fecha de nacimiento",
          numeroLabel: "Número de teléfono",
          estadoCivilLabel: "Estado civil",
          generoLabel: "Género",
          escolaridadeLabel: "Nivel de educación",
          paisLabel: "País",
          solteiroLabel: "Soltero/a",
          casadoLabel: "Casado/a",
          viuvoLabel: "Viudo/a",
          separadoLabel: "Separado/a",
          divorciadoLabel: "Divorciado/a",
          masculinoLabel: "Masculino",
          femininoLabel: "Femenino",
          ensinoFILabel: "Educación primaria incompleta",
          ensinoFCLabel: "Educación primaria completa",
          ensinoMILabel: "Educación secundaria incompleta",
          ensinoMCLabel: "Educación secundaria completa",
          ensinoSILabel: "Educación universitaria incompleta",
          ensinoSCLabel: "Educación universitaria completa",
          cpfLabel: "CPF",
          rgLabel: "RG",
          cnhLabel: "CNH",
          crnmLabel: "CRNM",
          rneLabel: "RNE",
          cepLabel: 'Código Postal',
          estadoLabel: 'Estado',
          cidadeLabel: 'Ciudad',
          bairroLabel: 'Barrio',
          ruaLabel: 'Calle',
          numeroCasaLabel: 'Número de casa',
          h1Cadastro: 'Registro',
          textoCadastro: '¡Bienvenido a nuestro sitio web! Estamos emocionados de tenerte con nosotros. Por favor, complete el formulario a continuación para crear su cuenta y disfrutar de todos los beneficios ofrecidos:',
          h5Fone: '11 dígitos',
          h5Email: 'Asegúrese de haber ingresado correctamente su dirección de correo electrónico',
          btnProximo:'Siguiente',
          btnProximo2:'Siguiente',
          btnProximo3:'Siguiente',
          btnProximo4:'Siguiente',
          btnProximo5:'Siguiente',
          btnProximo6:'Siguiente',
          btnAnterior: 'Volver',
          btnAnterior2:'Volver',
          btnAnterior3:'Volver',
          btnAnterior4:'Volver',
          btnAnterior5:'Volver',
          btnAnterior6:'Volver',
          btnAnterior7:'Volver',
          optionPais: 'Seleccione su país',
          optionGenereo: 'Seleccione su género',
          optionEstadoCivil: 'Seleccione su estado civil',
          optionEscolaridade: 'Seleccione su nivel de educación',
          h5Senha: 'Debe contener: Mínimo 8 caracteres, Máximo 16 caracteres, Al menos un número, Al menos una letra mayúscula y una minúscula',
          h5ConfirmaSenha: 'Asegúrese de que ambas contraseñas coincidan',
          pDocumentos: '¿Desea registrar sus documentos?',
          aSim: 'Sí',
          aNao: 'No',
          h5Endereco:'¿Desea registrar su dirección?',
          aSim2:'Sí',
          aNao2:'No',
          h5Cep: 'El código postal debe contener un guión',
          pMensagemFinal: 'Haga clic en enviar para confirmar su registro. Si es necesario, puede cambiar su información en la página de su perfil. Si desea revisar su información antes de completar el registro, haga clic en el botón de atrás.',
          btnVoltar: 'Atrás',
          btn_submit: 'Registrarse',
          successModalLabel: 'Verificación de cuenta',
          mensagemEmail: 'Se ha enviado un correo electrónico con un enlace de verificación de cuenta.',
          btnModalClose: 'Cerrar',
          btnModalReenviar: 'Reenviar correo electrónico',
          ErrorModalLabel: '¡Error!',
          MensagemErro: 'Se produjo un error en su registro. Por favor, verifique si alguna de sus informaciones fue ingresada incorrectamente.',
          btnModalCloseError: 'Cerrar',
          senhaConfirmaLabel: 'Confirmar Contraseña'
        },
      fr: {
        nameLabel: "Nom",
        sobreLabel: "Nom de famille",
        emailLabel: "E-mail",
        senhaLabel: "Mot de passe",
        nascLabel: "Date de naissance",
        numeroLabel: "Numéro de téléphone",
        estadoCivilLabel: "État civil",
        generoLabel: "Genre",
        escolaridadeLabel: "Niveau d'éducation",
        paisLabel: "Pays",
        solteiroLabel: "Célibataire",
        casadoLabel: "Marié",
        viuvoLabel: "Veuf/Veuve",
        separadoLabel: "Séparé(e)",
        divorciadoLabel: "Divorcé(e)",
        masculinoLabel: "Masculin",
        femininoLabel: "Féminin",
        ensinoFILabel: "École primaire incomplète",
        ensinoFCLabel: "École primaire complète",
        ensinoMILabel: "École secondaire incomplète",
        ensinoMCLabel: "École secondaire complète",
        ensinoSILabel: "Collège incomplet",
        ensinoSCLabel: "Collège complet",
        cpfLabel: "CPF",
        rgLabel: "RG",
        cnhLabel: "CNH",
        crnmLabel: "CRNM",
        rneLabel: "RNE",
        cepLabel: "Code postal",
        estadoLabel: "État",
        cidadeLabel: "Ville",
        bairroLabel: "Quartier",
        ruaLabel: "Rue",
        numeroCasaLabel: "Numéro de maison",
        h1Cadastro: "Inscrivez-vous",
        textoCadastro: "Bienvenue sur notre site web! Nous sommes ravis de vous avoir avec nous. Veuillez remplir le formulaire ci-dessous pour créer votre compte et profiter de tous les avantages offerts:",
        h5Fone: "11 chiffres",
        h5Email: "Assurez-vous d'avoir saisi correctement votre adresse e-mail",
        btnProximo: "Suivant",
        btnProximo2: "Suivant",
        btnProximo3: "Suivant",
        btnProximo4: "Suivant",
        btnProximo5: "Suivant",
        btnProximo6: "Suivant",
        btnAnterior: "Retour",
        btnAnterior2: "Retour",
        btnAnterior3: "Retour",
        btnAnterior4: "Retour",
        btnAnterior5: "Retour",
        btnAnterior6: "Retour",
        btnAnterior7: "Retour",
        optionPais: "Sélectionnez votre pays",
        optionGenereo: "Sélectionnez votre genre",
        optionEstadoCivil: "Sélectionnez votre état civil",
        optionEscolaridade: "Sélectionnez votre niveau d'éducation",
        h5Senha: "Doit contenir : Minimum 8 caractères, Maximum 16 caractères, Au moins un chiffre, Au moins une lettre majuscule et une lettre minuscule",
        h5ConfirmaSenha: "Assurez-vous que les deux mots de passe correspondent",
        pDocumentos: "Voulez-vous enregistrer vos documents?",
        aSim: "Oui",
        aNao: "Non",
        h5Endereco: "Voulez-vous enregistrer votre adresse?",
        aSim2: "Oui",
        aNao2: "Non",
        h5Cep: "Le code postal doit contenir un tiret",
        pMensagemFinal: "Cliquez sur soumettre pour confirmer votre inscription. Si nécessaire, vous pouvez modifier vos informations sur votre page de profil. Si vous souhaitez vérifier vos informations avant de terminer l'inscription, cliquez sur le bouton retour.",
        btnVoltar: "Retour",
        btn_submit: "Inscrivez-vous",
        successModalLabel: "Vérification du compte",
        mensagemEmail: "Un e-mail avec un lien de vérification de compte vous a été envoyé.",
        btnModalClose: "Fermer",
        btnModalReenviar: "Renvoyer l'e-mail",
        ErrorModalLabel: "Erreur!",
        MensagemErro: "Une erreur s'est produite lors de votre inscription. Veuillez vérifier si l'une de vos informations a été saisie incorrectement.",
        btnModalCloseError: "Fermer",
        senhaConfirmaLabel: 'Confirmer le mot de passe'
      },
      ar: {
        nameLabel: "الاسم",
        sobreLabel: "الاسم الأخير",
        emailLabel: "البريد الإلكتروني",
        senhaLabel: "كلمة المرور",
        nascLabel: "تاريخ الميلاد",
        numeroLabel: "رقم الهاتف",
        estadoCivilLabel: "الحالة الاجتماعية",
        generoLabel: "الجنس",
        escolaridadeLabel: "المستوى التعليمي",
        paisLabel: "الدولة",
        solteiroLabel: "أعزب/عزباء",
        casadoLabel: "متزوج/متزوجة",
        viuvoLabel: "أرمل/أرملة",
        separadoLabel: "منفصل/منفصلة",
        divorciadoLabel: "مطلق/مطلقة",
        masculinoLabel: "ذكر",
        femininoLabel: "أنثى",
        ensinoFILabel: "التعليم الابتدائي غير كامل",
        ensinoFCLabel: "التعليم الابتدائي كامل",
        ensinoMILabel: "التعليم الثانوي غير كامل",
        ensinoMCLabel: "التعليم الثانوي كامل",
        ensinoSILabel: "التعليم الجامعي غير كامل",
        ensinoSCLabel: "التعليم الجامعي كامل",
        cpfLabel: "CPF",
        rgLabel: "RG",
        cnhLabel: "CNH",
        crnmLabel: "CRNM",
        rneLabel: "RNE",
        cepLabel: "الرمز البريدي",
        estadoLabel: "الولاية",
        cidadeLabel: "المدينة",
        bairroLabel: "الحي",
        ruaLabel: "الشارع",
        numeroCasaLabel: "رقم المنزل",
        h1Cadastro: "التسجيل",
        textoCadastro: "مرحبًا بك في موقعنا على الويب! نحن متحمسون لوجودك معنا. يرجى ملء النموذج أدناه لإنشاء حسابك والاستمتاع بجميع الفوائد المقدمة:",
        h5Fone: "11 أرقام",
        h5Email: "تأكد من أنك قد أدخلت عنوان بريدك الإلكتروني بشكل صحيح",
        btnProximo:"التالي",
        btnProximo2:"التالي",
        btnProximo3:"التالي",
        btnProximo4:"التالي",
        btnProximo5:"التالي",
        btnProximo6:"التالي",
        btnAnterior: "رجوع",
        btnAnterior2:"رجوع",
        btnAnterior3:"رجوع",
        btnAnterior4:"رجوع",
        btnAnterior5:"رجوع",
        btnAnterior6:"رجوع",
        btnAnterior7:"رجوع",
        optionPais: "اختر بلدك",
        optionGenereo: "اختر جنسك",
        optionEstadoCivil: "اختر الحالة الزواجية",
        optionEscolaridade: "اختر مستوى تعليمك",
        h5Senha: "يجب أن تحتوي على: الحد الأدنى 8 أحرف ، الحد الأقصى 16 حرفًا ، على الأقل رقم واحد ، على الأقل حرف كبير وحرف صغير واحد",
        h5ConfirmaSenha: "تأكد من تطابق كلمتي المرور",
        pDocumentos: "هل ترغب في تسجيل وثائقك؟",
        aSim: "نعم",
        aNao: "لا",
        h5Endereco:"هل ترغب في تسجيل عنوانك؟",
        aSim2:"نعم",
        aNao2:"لا",
        h5Cep: "يجب أن يحتوي الرمز البريدي على شرطة",
        pMensagemFinal: "انقر فوق إرسال لتأكيد تسجيلك. إذا لزم الأمر ، يمكنك تغيير معلوماتك على صفحة ملفك الشخصي. إذا كنت ترغب في مراجعة معلوماتك قبل إكمال التسجيل ، فانقر فوق الزر الخلفي.",
        btnVoltar: "رجوع",
        btn_submit: "التسجيل",
        successModalLabel: "التحقق من الحساب",
        mensagemEmail: "تم إرسال بريد إلكتروني يحتوي على رابط التحقق من الحساب إليك.",
        btnModalClose: "إغلاق",
        btnModalReenviar: "إعادة إرسال البريد الإلكتروني",
        ErrorModalLabel: "خطأ!",
        MensagemErro: "حدث خطأ في تسجيلك. يرجى التحقق مما إذا كانت أي من معلوماتك قد تم إدخالها بشكل غير صحيح.",
        btnModalCloseError: "إغلاق",
        senhaConfirmaLabel: 'تأكيد كلمة المرور'
      }
      };
    
      function changeLanguage(lang) {
        const elements = Object.keys(translations[lang]);
        elements.forEach(element => {
          document.getElementById(element).innerText = translations[lang][element];
        });
      }