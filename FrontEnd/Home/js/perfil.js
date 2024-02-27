let token = localStorage.getItem('token')

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

let idRefugiado = parseJwt(token);


let valores = fetch(`http://localhost:5145/api/Refugiados/${idRefugiado.nameid}`,
{
    headers: {'Authorization': 'Bearer ' + token,
             'Content-Type' : 'application/json'},
})
.then(dados => dados.json())
.then(result => {
return result;
});

const result = Promise.resolve(valores);
        result.then(value => {
            document.getElementById("nome").value = value.nome
            document.getElementById("sobrenome").value = value.sobrenome
            document.getElementById("email").value = value.email
            document.getElementById("dataNascimento").value = value.dataNascimento
            document.getElementById("telefone").value = value.telefone
            if(value.estadoCivil == 1){aux = "Solteiro/a"}
            else if(value.estadoCivil == 2){aux = "Casado/a"}
            else if(value.estadoCivil == 3){aux = "Separado/a"}
            else if(value.estadoCivil == 4){aux = "Divorciado/a"}
            else if(value.estadoCivil == 5){aux = "Viúvo/a"}
            document.getElementById("estadoCivil").value = aux
            if(value.genero == 1){auxGenero = "Masculino"}
            else{auxGenero = "Feminino"}
            document.getElementById("genero").value = auxGenero
            if(value.escolaridade == 1){auxEscolaridade = "Ensino fundamental completo"}
            else if(value.escolaridade == 2){auxEscolaridade = "Ensino fundamental incompleto"}
            else if(value.escolaridade == 3){auxEscolaridade = "Ensino médio completo"}
            else if(value.escolaridade == 4){auxEscolaridade = "Ensino médio incompleto"}
            else if(value.escolaridade == 5){auxEscolaridade = "Ensino superior completo"}
            else {auxEscolaridade = "Ensino superior incompleto"}
            document.getElementById("escolaridade").value = auxEscolaridade
            document.getElementById("paisId").value = value.pais.pais
            document.getElementById("cep").value = value.endereco.cep
            document.getElementById("estado").value = value.endereco.estado
            document.getElementById("cidade").value = value.endereco.cidade
            document.getElementById("bairro").value = value.endereco.bairro
            document.getElementById("rua").value = value.endereco.rua
            document.getElementById("complemento").value = value.endereco.complemento
            document.getElementById("numero").value = value.endereco.numero
        })

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


function ModalConfirmEditar(){
    var modalObj = document.getElementById("ConfirmEditarModal");
    var bg = document.getElementById("modalBackground");
    var close = document.getElementById("ConfirmEditarClose");
    var btnClose = document.getElementById("btnConfirmEditarClose");
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

function showSuccessModal(){
  document.getElementById("nome").setAttribute("disabled","")
  document.getElementById("sobrenome").setAttribute("disabled","")
  document.getElementById("dataNascimento").setAttribute("disabled","")
  document.getElementById("telefone").setAttribute("disabled","")
  document.getElementById("estadoCivil").setAttribute("disabled","")
  document.getElementById("estadoCivil").removeAttribute("hidden")
  document.getElementById("estadoCivilEditar").setAttribute("hidden","")
  document.getElementById("genero").setAttribute("disabled","")
  document.getElementById("genero").removeAttribute("hidden")
  document.getElementById("generoEditar").setAttribute("hidden","")
  document.getElementById("escolaridade").setAttribute("disabled","")
  document.getElementById("escolaridade").removeAttribute("hidden")
  document.getElementById("escolaridadeEditar").setAttribute("hidden","")
  document.getElementById("cep").setAttribute("disabled","")
  document.getElementById("complemento").setAttribute("disabled","")
  document.getElementById("numero").setAttribute("disabled","")
  document.getElementById("btnIniciarEditar").removeAttribute("hidden")
  document.getElementById("btnConfirmar").setAttribute("hidden","")

  var modalObj = document.getElementById("editouModal");
  var bg = document.getElementById("modalBackground");
  var close = document.getElementById("editouClose");
  var btnClose = document.getElementById("btneditouClose");
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

function showErrorModal(){
  var modalObj = document.getElementById("ErrorModal");
  var bg = document.getElementById("modalBackground");
  var close = document.getElementById("ErrorClose");
  var btnClose = document.getElementById("btnErrorClose");
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


function confirmaEditar(){
  var modalObj = document.getElementById("ConfirmEditarModal");
  modalObj.style.display = 'none';
  var bg = document.getElementById("modalBackground");
  bg.classList.remove("modal-backdrop")
  bg.classList.remove("fade")
  bg.classList.remove("show")
  document.getElementById("nome").removeAttribute("disabled")
  document.getElementById("sobrenome").removeAttribute("disabled")
  document.getElementById("dataNascimento").removeAttribute("disabled")
  document.getElementById("telefone").removeAttribute("disabled")
  document.getElementById("estadoCivil").removeAttribute("disabled")
  document.getElementById("estadoCivil").setAttribute("hidden","")
  document.getElementById("estadoCivilEditar").removeAttribute("hidden")
  document.getElementById("genero").removeAttribute("disabled")
  document.getElementById("genero").setAttribute("hidden","")
  document.getElementById("generoEditar").removeAttribute("hidden")
  document.getElementById("escolaridade").removeAttribute("disabled")
  document.getElementById("escolaridade").setAttribute("hidden","")
  document.getElementById("escolaridadeEditar").removeAttribute("hidden")
  document.getElementById("cep").removeAttribute("disabled")
  document.getElementById("numero").removeAttribute("disabled")
  document.getElementById("complemento").removeAttribute("disabled")
  document.getElementById("btnConfirmar").removeAttribute("hidden")
  document.getElementById("btnIniciarEditar").setAttribute("hidden","")
}


async function editar()
    {
        let nome = document.getElementById("nome").value
        const cornome = document.getElementById("nome")
        if(nome == ""){
          cornome.style.borderColor = "red"
        }
        else{
          cornome.style.borderColor = "black"
        }
        let sobrenome = document.getElementById("sobrenome").value
        const corsobrenome = document.getElementById("sobrenome")
        if(sobrenome == ""){
          corsobrenome.style.borderColor = "red"
        }
        else{
          corsobrenome.style.borderColor = "black"
        }
        let email = document.getElementById("email").value
        const coremail = document.getElementById("email")
        if(email == "" ){
          coremail.style.borderColor = "red"
        }
        else{
          coremail.style.borderColor = "black"
        }
        let dataN = document.getElementById("dataNascimento").value
        const cordataN = document.getElementById("dataNascimento")
        if(dataN == ""){
          cordataN.style.borderColor = "red"
        }
        else{
          cordataN.style.borderColor = "black"
        }
        let fone = document.getElementById("telefone").value
        const corfone = document.getElementById("telefone")
        if(fone == "" || fone.length != 11){
          corfone.style.borderColor = "red"
        }
        else{
          corfone.style.borderColor = "black"
        }

        let estadoCivil = document.getElementById("estadoCivilSelect")
        const corestadoCivil = document.getElementById("estadoCivilSelect")
        estadoCivil.addEventListener('change', function(){})
        var auxEC = parseInt(estadoCivil.value);
        if(estadoCivil.value == "Selecione seu estado civíl"){
          corestadoCivil.style.border = "solid red"
        }
        else{
          corestadoCivil.style = "default"
        }
        let genero = document.getElementById("generoSelect")
        const corgenero = document.getElementById("generoSelect")
        genero.addEventListener('change', function(){})
        var auxG = parseInt(genero.value);
        if(genero.value == "Selecione seu gênero"){
          corgenero.style.border = "solid red"
        }
        else{
          corgenero.style = "default"
        }
        let escolaridade = document.getElementById("escolaridadeSelect")
        const corescolaridade = document.getElementById("escolaridadeSelect")
        escolaridade.addEventListener('change', function(){})
        var auxE = parseInt(escolaridade.value);
        if(escolaridade.value == "Selecione sua escolaridade"){
          corescolaridade.style.border = "solid red"
        }
        else{
          corescolaridade.style = "default"
        }

        let cep = document.getElementById('cep').value
        const corcep = document.getElementById("cep")
        if(cep == ""){
          cep = null
          corcep.style.borderColor = "red"
        }
        else{
          corcep.style.borderColor = "black"
        }

        let estado = document.getElementById("estado").value
        const corestado = document.getElementById("estado")
        if(estado == ""){
          estado = null
          corestado.style.borderColor = "red"
        }
        else{
          corestado.style.borderColor = "black"
        }

        let cidade = document.getElementById("cidade").value
        const corcidade = document.getElementById("cidade")
        if(cidade == ""){
          cidade = null
          corcidade.style.borderColor = "red"
        }
        else{
          corcidade.style.borderColor = "black"
        }

        let bairro = document.getElementById("bairro").value
        const corbairro = document.getElementById("bairro")
        if(bairro == ""){
          bairro = null
          corbairro.style.borderColor = "red"
        }
        else{
          corbairro.style.borderColor = "black"
        }

        let rua = document.getElementById("rua").value
        const corrua = document.getElementById("rua")
        if(rua == ""){
          rua = null
          corrua.style.borderColor = "red"
        }
        else{
          corrua.style.borderColor = "black"
        }

        let complemento = document.getElementById("complemento").value
        const corcomplemento = document.getElementById("complemento")
        if(complemento == ""){
          complemento = null
          corcomplemento.style.borderColor = "red"
        }
        else{
          corcomplemento.style.borderColor = "black"
        }

        let numero = document.getElementById("numero").value
        const cornumero = document.getElementById("numero")
        var auxN = parseInt(numero);
        if(numero <= 0 ){
          auxN = null
          cornumero.style.borderColor = "red"
        }
        else{
          cornumero.style.borderColor = "black"
        }

        let obj = 
        {
            nome: nome,
            sobrenome: sobrenome,
            dataNascimento: dataN,
            telefone: fone,
            estadoCivil: auxEC,
            genero: auxG,
            escolaridade: auxE,
            endereco: 
            {
              estado: estado,
              cidade: cidade,
              bairro: bairro,
              rua: rua,
              complemento:complemento,
              numero: auxN,
              cep:cep
            }
        }
        console.log(obj)
        console.log(idRefugiado.nameid)

        try{
          const response = await fetch(`http://localhost:5145/api/Refugiados/${idRefugiado.nameid}`,
          {
              method: "PUT",
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(obj)
          })
              if (await response.ok) {
                showSuccessModal();
                console.log("Edição bem-sucedido.");
              } else {
                showErrorModal();
                console.log("Erro ao Editar:", await response.text());
            }
        } catch (error) {
          console.error("Erro ao cadastrar:", error);
      }
          
        }

        async function confirmaDeletar(){
          await fetch(`http://localhost:5145/api/Refugiados/${idRefugiado.nameid}`,
        {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'},
        })
        .then(response => {
          if (!response.ok) {
            showModal(false)  
                response.text().then(t => console.log(t))
          }
          else{
            showModal(true)
          }
        })
        }

        async function showModal(status) {
          
          var modalObj = document.getElementById("successModal");
          var bg = document.getElementById("modalBackground");
          var close = document.getElementById("modalClose");
          var btnClose = document.getElementById("btnModalClose");
          var div = document.getElementById("divText")
          var label = document.getElementById("successModalLabel")
          var btnDelete = document.getElementById("btnDelete")
      
              modalObj.style.display = "block"
      
              bg.classList.add("modal-backdrop")
              bg.classList.add("fade")
              bg.classList.add("show")
      
          if(status == null){
              label.innerHTML = "Você tem certeza?"
              div.innerHTML = "Ao clicar em deletar, sua conta e todos seus dados serão excluídos!"
      }  
          else if(status == false){
              label.innerHTML = "Erro"
              div.innerHTML = "Falha ao deletar conta."
              btnDelete.setAttribute("hidden", "hidden")
      }
          else{
            label.innerHTML = "Sucesso"
            div.innerHTML = "Conta deletada com sucesso."
            btnDelete.setAttribute("hidden", "hidden")
          }
      
          btnClose.onclick = function(){
            modalObj.style.display = "none"
            bg.classList.remove("modal-backdrop")
            bg.classList.remove("fade")
            bg.classList.remove("show")

            if (status == true) {
              localStorage.removeItem('token')
              window.location.href = "/html/index.html"
            }
          }
      
          close.onclick = function(){
            modalObj.style.display = "none"
            bg.classList.remove("modal-backdrop")
            bg.classList.remove("fade")
            bg.classList.remove("show")

            if (status == true) {
              localStorage.removeItem('token')
              window.location.href = "/html/index.html"
            }
          }
      
        }

const translations = {
      pt: {
      homeLink: 'Home',
      documentsLink: 'Documentos',
      placesLink: 'Locais',
      languageLink: 'Idioma',
      donateLink: 'Doe',
      abrigo_trd:'Abrigo',
      cons_trad:'Consulados',
      posto_trd:"Postos de saúde",
      informa_trad:"Informações Gerais",
      pinforma_trad:"Aqui estão as suas informações, e você tem total liberdade para editá-las da maneira que preferir.",
      nameLabel:"Nome",
      sobreLabel:"Sobrenome",
      emailLabel:"Email",
      numeroLabel:"Telefone",
      nascLabel:"Data de nascimento",
      generoLabel:"Gênero",
      selec_trad:"Selecione seu gênero",
      masculinoLabel:"Masculino",
      femininoLabel:"Feminino",
      estadoCivilLabel:"Estado Civíl",
      selec_ec_trad:"Selecione seu estado civíl",
      solteiroLabel:"Solteiro/a",
      casadoLabel:"Casado/a",
      separadoLabel:"Separado/a",
      divorciadoLabel:"Divorciado/a",
      viuvoLabel:"Viúvo/a",
      escolaridadeLabel:"Escolaridade",
      selec_es_trad:"Selecione sua escolaridade",
      ensinoFCLabel:"Ensino fundamental completo",
      ensinoFILabel:"Ensino fundamental incompleto",
      ensinoMCLabel:"Ensino médio completo",
      ensinoMILabel:"Ensino médio incompleto",
      ensinoSCLabel:"Ensino superior completo",
      ensinoSILabel:"Ensino superior incompleto",
      paisLabel:"País",
      Endereço_trad:"Endereço",
      Pendereco_trad:"Neste espaço, você tem a oportunidade de criar novos documentos ou editar aqueles já existentes.",
      estado_trad:"Estado",
      cidade_trad:"Cidade",
      bairro_trad:"Bairro",
      rua_trad:"Rua",
      complemento_trad:"Complemento",      
      numero_trad:"Numero",
      btn_alterar:"Modificar Conta",
      btn_alterar2:"Confirmar alterações",
      btn_deletar:"Deletar Conta",
      editouModalLabel:"Edição realizada com sucesso!",
      mensagemeditou:" Suas informações foram alteradas.",
      btneditouClose:"Voltar",
      ErrorModalLabel:"Erro!",
      mensagemError:"Confira se preencheu todas as informações.",
      btnErrorClose:"Voltar",
      ConfirmEditarModalLabel:"Deseja mesmo editar?",
      mensagemConfirmEditar:"Você tem certeza que deseja editar suas informações?",
      btn_alterar3:"Sim",
      btnConfirmEditarClose:"Não",
      btnModalClose:"Cancelar",
      btnDelete:"Deletar",
      btnDoacoesModalClose:"Fechar",
    },
    en: {
      homeLink: 'Home',
      documentsLink: 'Documents',
      placesLink: 'Places',
      languageLink: 'Language',
      donateLink: 'Donate',
      abrigo_trd: 'Shelter',
      cons_trad: 'Consulates',
      posto_trd: 'Health Centers',
      informa_trad: 'General Information',
      pinforma_trad: 'Here are your details, and you have complete freedom to edit them as you prefer.',
      nameLabel: 'Name',
      sobreLabel: 'Last Name',
      emailLabel: 'Email',
      numeroLabel: 'Phone',
      nascLabel: 'Date of Birth',
      generoLabel: 'Gender',
      selec_trad: 'Select your gender',
      masculinoLabel: 'Male',
      femininoLabel: 'Female',
      estadoCivilLabel: 'Marital Status',
      selec_ec_trad: 'Select your marital status',
      solteiroLabel: 'Single',
      casadoLabel: 'Married',
      separadoLabel: 'Separated',
      divorciadoLabel: 'Divorced',
      viuvoLabel: 'Widowed',
      escolaridadeLabel: 'Education',
      selec_es_trad: 'Select your education level',
      ensinoFCLabel: 'Complete Elementary School',
      ensinoFILabel: 'Incomplete Elementary School',
      ensinoMCLabel: 'Complete High School',
      ensinoMILabel: 'Incomplete High School',
      ensinoSCLabel: 'Complete Higher Education',
      ensinoSILabel: 'Incomplete Higher Education',
      paisLabel: 'Country',
      Endereço_trad: 'Address',
      Pendereco_trad: 'In this space, you have the opportunity to create new documents or edit existing ones.',
      estado_trad: 'State',
      cidade_trad: 'City',
      bairro_trad: 'Neighborhood',
      rua_trad: 'Street',
      complemento_trad: 'Complement',
      numero_trad: 'Number',
      btn_alterar: 'Modify Account',
      btn_alterar2: 'Confirm Changes',
      btn_deletar: 'Delete Account',
      editouModalLabel: 'Edition successful!',
      mensagemeditou: ' Your information has been changed.',
      btneditouClose: 'Back',
      ErrorModalLabel: 'Error!',
      mensagemError: 'Check if you filled in all the information.',
      btnErrorClose: 'Back',
      ConfirmEditarModalLabel: 'Do you really want to edit?',
      mensagemConfirmEditar: 'Are you sure you want to edit your information?',
      btn_alterar3: 'Yes',
      btnConfirmEditarClose: 'No',
      btnModalClose: 'Cancel',
      btnDelete: 'Delete',
      btnDoacoesModalClose: 'Close',
    },
    es: {
      homeLink: 'Inicio',
      documentsLink: 'Documentos',
      placesLink: 'Lugares',
      languageLink: 'Idioma',
      donateLink: 'Donar',
      abrigo_trd: 'Refugio',
      cons_trad: 'Consulados',
      posto_trd: 'Centros de Salud',
      informa_trad: 'Información General',
      pinforma_trad: 'Aquí están tus detalles, y tienes total libertad para editarlos como prefieras.',
      nameLabel: 'Nombre',
      sobreLabel: 'Apellido',
      emailLabel: 'Correo Electrónico',
      numeroLabel: 'Teléfono',
      nascLabel: 'Fecha de Nacimiento',
      generoLabel: 'Género',
      selec_trad: 'Selecciona tu género',
      masculinoLabel: 'Masculino',
      femininoLabel: 'Femenino',
      estadoCivilLabel: 'Estado Civil',
      selec_ec_trad: 'Selecciona tu estado civil',
      solteiroLabel: 'Soltero/a',
      casadoLabel: 'Casado/a',
      separadoLabel: 'Separado/a',
      divorciadoLabel: 'Divorciado/a',
      viuvoLabel: 'Viudo/a',
      escolaridadeLabel: 'Educación',
      selec_es_trad: 'Selecciona tu nivel educativo',
      ensinoFCLabel: 'Educación Primaria Completa',
      ensinoFILabel: 'Educación Primaria Incompleta',
      ensinoMCLabel: 'Educación Secundaria Completa',
      ensinoMILabel: 'Educación Secundaria Incompleta',
      ensinoSCLabel: 'Educación Superior Completa',
      ensinoSILabel: 'Educación Superior Incompleta',
      paisLabel: 'País',
      Endereço_trad: 'Dirección',
      Pendereco_trad: 'En este espacio, tienes la oportunidad de crear nuevos documentos o editar los existentes.',
      estado_trad: 'Estado',
      cidade_trad: 'Ciudad',
      bairro_trad: 'Barrio',
      rua_trad: 'Calle',
      complemento_trad: 'Complemento',
      numero_trad: 'Número',
      btn_alterar: 'Modificar Cuenta',
      btn_alterar2: 'Confirmar Cambios',
      btn_deletar: 'Eliminar Cuenta',
      editouModalLabel: 'Edición exitosa',
      mensagemeditou: ' Tus datos han sido modificados.',
      btneditouClose: 'Volver',
      ErrorModalLabel: '¡Error!',
      mensagemError: 'Verifica si completaste toda la información.',
      btnErrorClose: 'Volver',
      ConfirmEditarModalLabel: '¿Realmente deseas editar?',
      mensagemConfirmEditar: '¿Estás seguro de que deseas editar tu información?',
      btn_alterar3: 'Sí',
      btnConfirmEditarClose: 'No',
      btnModalClose: 'Cancelar',
      btnDelete: 'Eliminar',
      btnDoacoesModalClose: 'Cerrar',
    },
    fr: {
      homeLink: 'Accueil',
      documentsLink: 'Documents',
      placesLink: 'Lieux',
      languageLink: 'Langue',
      donateLink: 'Don',
      abrigo_trd: 'Abris',
      cons_trad: 'Consulats',
      posto_trd: 'Centres de Santé',
      informa_trad: 'Informations Générales',
      pinforma_trad: 'Voici vos détails, et vous avez toute la liberté de les éditer comme vous le souhaitez.',
      nameLabel: 'Nom',
      sobreLabel: 'Nom de famille',
      emailLabel: 'Email',
      numeroLabel: 'Téléphone',
      nascLabel: 'Date de naissance',
      generoLabel: 'Genre',
      selec_trad: 'Sélectionnez votre genre',
      masculinoLabel: 'Masculin',
      femininoLabel: 'Féminin',
      estadoCivilLabel: 'État Civil',
      selec_ec_trad: 'Sélectionnez votre état civil',
      solteiroLabel: 'Célibataire',
      casadoLabel: 'Marié/e',
      separadoLabel: 'Séparé/e',
      divorciadoLabel: 'Divorcé/e',
      viuvoLabel: 'Veuf/Veuve',
      escolaridadeLabel: 'Éducation',
      selec_es_trad: 'Sélectionnez votre niveau d\'éducation',
      ensinoFCLabel: 'École primaire complète',
      ensinoFILabel: 'École primaire incomplète',
      ensinoMCLabel: 'École secondaire complète',
      ensinoMILabel: 'École secondaire incomplète',
      ensinoSCLabel: 'Enseignement supérieur complet',
      ensinoSILabel: 'Enseignement supérieur incomplet',
      paisLabel: 'Pays',
      Endereço_trad: 'Adresse',
      Pendereco_trad: 'Dans cet espace, vous avez la possibilité de créer de nouveaux documents ou de modifier ceux existants.',
      estado_trad: 'État',
      cidade_trad: 'Ville',
      bairro_trad: 'Quartier',
      rua_trad: 'Rue',
      complemento_trad: 'Complément',
      numero_trad: 'Numéro',
      btn_alterar: 'Modifier le Compte',
      btn_alterar2: 'Confirmer les modifications',
      btn_deletar: 'Supprimer le Compte',
      editouModalLabel: 'Modification réussie!',
      mensagemeditou: ' Vos informations ont été modifiées.',
      btneditouClose: 'Retour',
      ErrorModalLabel: 'Erreur!',
      mensagemError: 'Vérifiez si vous avez rempli toutes les informations.',
      btnErrorClose: 'Retour',
      ConfirmEditarModalLabel: 'Voulez-vous vraiment éditer?',
      mensagemConfirmEditar: 'Êtes-vous sûr de vouloir modifier vos informations?',
      btn_alterar3: 'Oui',
      btnConfirmEditarClose: 'Non',
      btnModalClose: 'Annuler',
      btnDelete: 'Supprimer',
      btnDoacoesModalClose: 'Fermer',
    },
    ar: {
      homeLink: 'الصفحة الرئيسية',
      documentsLink: 'وثائق',
      placesLink: 'أماكن',
      languageLink: 'اللغة',
      donateLink: 'تبرع',
      abrigo_trd: 'مأوى',
      cons_trad: 'القنصليات',
      posto_trd: 'مراكز الصحة',
      informa_trad: 'معلومات عامة',
      pinforma_trad: 'إليك تفاصيلك، ولديك كامل الحرية لتحريرها كما تفضل.',
      nameLabel: 'الاسم',
      sobreLabel: 'اسم العائلة',
      emailLabel: 'البريد الإلكتروني',
      numeroLabel: 'الهاتف',
      nascLabel: 'تاريخ الميلاد',
      generoLabel: 'النوع',
      selec_trad: 'اختر جنسك',
      masculinoLabel: 'ذكر',
      femininoLabel: 'أنثى',
      estadoCivilLabel: 'الحالة الاجتماعية',
      selec_ec_trad: 'اختر الحالة الاجتماعية',
      solteiroLabel: 'أعزب/عزباء',
      casadoLabel: 'متزوج/متزوجة',
      separadoLabel: 'منفصل/منفصلة',
      divorciadoLabel: 'مطلق/مطلقة',
      viuvoLabel: 'أرمل/أرملة',
      escolaridadeLabel: 'التعليم',
      selec_es_trad: 'اختر مستوى التعليم الخاص بك',
      ensinoFCLabel: 'تعليم أساسي كامل',
      ensinoFILabel: 'تعليم أساسي غير كامل',
      ensinoMCLabel: 'تعليم ثانوي كامل',
      ensinoMILabel: 'تعليم ثانوي غير كامل',
      ensinoSCLabel: 'تعليم عالي كامل',
      ensinoSILabel: 'تعليم عالي غير كامل',
      paisLabel: 'البلد',
      Endereço_trad: 'العنوان',
      Pendereco_trad: 'في هذا المكان، لديك الفرصة لإنشاء وثائق جديدة أو تحرير تلك الموجودة بالفعل.',
      estado_trad: 'الولاية',
      cidade_trad: 'المدينة',
      bairro_trad: 'الحي',
      rua_trad: 'الشارع',
      complemento_trad: 'التكملة',
      numero_trad: 'الرقم',
      btn_alterar: 'تعديل الحساب',
      btn_alterar2: 'تأكيد التغييرات',
      btn_deletar: 'حذف الحساب',
      editouModalLabel: 'تم التعديل بنجاح!',
      mensagemeditou: ' تم تغيير معلوماتك.',
      btneditouClose: 'رجوع',
      ErrorModalLabel: 'خطأ!',
      mensagemError: 'تحقق مما إذا كنت قد قمت بملء جميع المعلومات.',
      btnErrorClose: 'رجوع',
      ConfirmEditarModalLabel: 'هل تريد حقاً التعديل؟',
      mensagemConfirmEditar: 'هل أنت متأكد أنك تريد تعديل معلوماتك؟',
      btn_alterar3: 'نعم',
      btnConfirmEditarClose: 'لا',
      btnModalClose: 'إلغاء',
      btnDelete: 'حذف',
      btnDoacoesModalClose: 'إغلاق',
    },
  };
  
  function changeLanguage(lang) {
    const elements = Object.keys(translations[lang]);
    elements.forEach(element => {
      document.getElementById(element).innerText = translations[lang][element];
    });
  }