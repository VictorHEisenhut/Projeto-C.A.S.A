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
          cornome.style.borderColor = "#f6f6f6"
        }
        let sobrenome = document.getElementById("sobrenome").value
        const corsobrenome = document.getElementById("sobrenome")
        if(sobrenome == ""){
          corsobrenome.style.borderColor = "red"
        }
        else{
          corsobrenome.style.borderColor = "#f6f6f6"
        }
        let email = document.getElementById("email").value
        const coremail = document.getElementById("email")
        if(email == "" ){
          coremail.style.borderColor = "red"
        }
        else{
          coremail.style.borderColor = "#f6f6f6"
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
          corsenha.style.borderColor = "#f6f6f6"
          corsenhaC.style.borderColor = "#f6f6f6"
        }
        let dataN = document.getElementById("dataN").value
        const cordataN = document.getElementById("dataN")
        if(dataN == ""){
          cordataN.style.borderColor = "red"
        }
        else{
          cordataN.style.borderColor = "#f6f6f6"
        }
        let fone = document.getElementById("fone").value
        const corfone = document.getElementById("fone")
        if(fone == "" || fone.length != 11){
          corfone.style.borderColor = "red"
        }
        else{
          corfone.style.borderColor = "#f6f6f6"
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
        
        // let cpf = document.getElementById("cpf").value
        // if(cpf == ""){
        //   cpf = null
        // }
        // let rg = document.getElementById("rg").value
        // if(rg == ""){
        //   rg = null
        // }
        // let cnh = document.getElementById("cnh").value
        // if(cnh == ""){
        //   cnh = null
        // }
        // let crnm = document.getElementById("crnm").value
        // if(crnm == ""){
        //   crnm = null
        // }
        // let rne = document.getElementById("rne").value
        // if(rne == ""){
        //   rne = null
        // }

        // let cep = document.getElementById('cep').value
        // const corcep = document.getElementById("cep")
        // if(cep == ""){
        //   cep = null
        //   corcep.style.borderColor = "red"
        // }
        // else{
        //   corcep.style.borderColor = "#f6f6f6"
        // }

        // let estado = document.getElementById("estado").value
        // const corestado = document.getElementById("estado")
        // if(estado == ""){
        //   estado = null
        //   corestado.style.borderColor = "red"
        // }
        // else{
        //   corestado.style.borderColor = "#f6f6f6"
        // }

        // let cidade = document.getElementById("cidade").value
        // const corcidade = document.getElementById("cidade")
        // if(cidade == ""){
        //   cidade = null
        //   corcidade.style.borderColor = "red"
        // }
        // else{
        //   corcidade.style.borderColor = "#f6f6f6"
        // }

        // let bairro = document.getElementById("bairro").value
        // const corbairro = document.getElementById("bairro")
        // if(bairro == ""){
        //   bairro = null
        //   corbairro.style.borderColor = "red"
        // }
        // else{
        //   corbairro.style.borderColor = "#f6f6f6"
        // }

        // let rua = document.getElementById("rua").value
        // const corrua = document.getElementById("rua")
        // if(rua == ""){
        //   rua = null
        //   corrua.style.borderColor = "red"
        // }
        // else{
        //   corrua.style.borderColor = "#f6f6f6"
        // }

        // let numero = document.getElementById("numero").value
        // const cornumero = document.getElementById("numero")
        // var auxN = parseInt(numero);
        // if(numero < 0 ){
        //   auxN = null
        //   cornumero.style.borderColor = "red"
        // }
        // else{
        //   cornumero.style.borderColor = "#f6f6f6"
        // }

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
              // cpf: cpf,
              // rg: rg,
              // cnh: cnh,
              // crnm: crnm,
              // rne: rne
            },
            endereco: 
            {
              // estado: estado,
              // cidade: cidade,
              // bairro: bairro,
              // rua: rua,
              // numero: auxN,
              // cep:cep
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
              console.log("Erro ao cadastrar:", await response.text());
          }
      } catch (error) {
          console.error("Erro ao cadastrar:", error);
      }
        
        //let login ={
        //  email:email,
        //  senha:senha
        //}
        //await fetch('https://localhost:7288/api/Refugiados/Login',
        //{
        //    method: "POST",
        //    headers: {'Content-Type': 'application/json'},
        //    body: JSON.stringify(login)
        //}).then(data => data.json())
        //.then(resp => {
        //    localStorage.setItem('token', resp.token)
        //})
        //window.location.href = "./perfil.html"       
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

    
    const translations = {
        pt: {
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
          botaoLabel: 'Cadastrar',
          cpfLabel: 'Digite seu CPF',
          rgLabel: 'Digite seu rg',
          cnhLabel:'Digite seu cnh',
          crnmLabel:'Digite seu crnm',
          rneLabel:'Digite seu rne',
        },
        en: {
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
          botaoLabel: 'Sing up',
          cpfLabel: 'Enter your CPF',
          rgLabel: 'Enter your rg',
          cnhLabel:'Enter your cnh',
          crnmLabel:'Enter your crnm',
          rneLabel:'Enter your rne',
        },
        es: {
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
          viuvoLabel: 'Viudo/a',
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
          botaoLabel: 'Registrarse',
          cpfLabel: 'Ingrese su CPF',
          rgLabel: 'Ingrese su rg',
          cnhLabel:'Ingrese su cnh',
          crnmLabel:'Ingrese su crnm',
          rneLabel:'Ingrese su rne',
        },
      fr: {
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
        viuvoLabel: "Veuf/Veuve",
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
        botaoLabel: "S'inscrire",
        cpfLabel: 'Entrez votre CPF',
        rgLabel: 'Entrez votre rg',
        cnhLabel:'Entrez votre cnh',
        crnmLabel:'Entrez votre crnm',
        rneLabel:'Entrez votre rne',
      },
      ar: {
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
        viuvoLabel: 'أرمل/ة',
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
        botaoLabel: 'تسجيل',
        cpfLabel: 'أدخل CPF',
        rgLabel: 'أدخل rg',
        cnhLabel:'أدخل cnh',
        crnmLabel:'أدخل crnm',
        rneLabel:'أدخل rne',
      }
      };
    
      function changeLanguage(lang) {
        const elements = Object.keys(translations[lang]);
        elements.forEach(element => {
          document.getElementById(element).innerText = translations[lang][element];
        });
      }