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

