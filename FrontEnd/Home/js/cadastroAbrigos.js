let token = localStorage.getItem('token')

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

function logout(){
  localStorage.removeItem('token')
  window.location.href = "/html/index.html"
}

let idEndereco = 0;
async function cadastrar(){
    let cep = document.getElementById('cep').value
        const corcep = document.getElementById("cep")
        if(cep == ""){
          corcep.style.borderColor = "red"
        }
        else{
          corcep.style.borderColor = "#181822"
        }

        let estado = document.getElementById("estado").value
        const corestado = document.getElementById("estado")
        if(estado == ""){
          corestado.style.borderColor = "red"
        }
        else{
          corestado.style.borderColor = "#181822"
        }

        let cidade = document.getElementById("cidade").value
        const corcidade = document.getElementById("cidade")
        if(cidade == ""){
          corcidade.style.borderColor = "red"
        }
        else{
          corcidade.style.borderColor = "#181822"
        }

        let bairro = document.getElementById("bairro").value
        const corbairro = document.getElementById("bairro")
        if(bairro == ""){
          corbairro.style.borderColor = "red"
        }
        else{
          corbairro.style.borderColor = "#181822"
        }

        let rua = document.getElementById("rua").value
        const corrua = document.getElementById("rua")
        if(rua == ""){
          corrua.style.borderColor = "red"
        }
        else{
          corrua.style.borderColor = "#181822"
        }

        let numero = document.getElementById("numero").value
        const cornumero = document.getElementById("numero")
        var auxN = parseInt(numero);
        if(numero < 0 ){
          cornumero.style.borderColor = "red"
        }
        else{
          cornumero.style.borderColor = "#181822"
        }

        let nome = document.getElementById("nome").value
        const nomecor = document.getElementById("nome")
        if(nome == ""){
            nomecor.style.borderColor = "red"
        }
        else{
            nomecor.style.borderColor = "#181822"
        }

        let telefone = document.getElementById("telefone").value
        const cortelefone = document.getElementById("telefone")
        if(telefone == ""){
            cortelefone.style.borderColor = "red"
        }
        else{
            cortelefone.style.borderColor = "#181822"
        }

        let email = document.getElementById("email").value
        const coremail = document.getElementById("email")
        if(email == ""){
            coremail.style.borderColor = "red"
        }
        else{
            coremail.style.borderColor = "#181822"
        }

        let obj = {
            cep:cep,
            estado:estado,
            cidade:cidade,
            rua:rua,
            bairro:bairro,
            numero:auxN
        }
        console.log(obj)
        if(cep == ""|| estado == ""|| cidade == ""|| rua == ""|| bairro == ""|| numero < 0 || email == ""||telefone == ""||nome == ""){
          showErrorModal()
        }
        else{
            await fetch('http://localhost:5145/api/Enderecos',
            {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(obj)
            })
            .then(response => response.json())
            .then((response)=> idEndereco = response.id )
            cadastroAbrigos()
        }
}
async function cadastroAbrigos(){
        let nome = document.getElementById("nome").value
        let telefone = document.getElementById("telefone").value
        let email = document.getElementById("email").value
        let objAbrigo = {
            enderecoId: idEndereco,
            nome: nome,
            email: email,
            telefone: telefone 
        }
        console.log(objAbrigo)

        try{
          const response = await fetch('http://localhost:5145/api/Abrigos',
          {
              method: "POST",
              headers: {'Authorization': 'Bearer ' + token,'Content-Type': 'application/json'},
              body: JSON.stringify(objAbrigo)
          })
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
  }

  close.onclick = function(){
    modalObj.style.display = "none"
    bg.classList.remove("modal-backdrop")
    bg.classList.remove("fade")
    bg.classList.remove("show")
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