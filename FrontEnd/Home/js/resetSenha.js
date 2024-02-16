const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const token = urlParams.get('token')

async function resetSenha(){
    let senha = document.getElementById("senha").value
    const corSenha  = document.getElementById("senha")
    if(senha == ""){
      senha = null
      corSenha.style.borderColor = "red"
    }
    else{
      corSenha.style.borderColor = "white"
    }

    let confirmSenha = document.getElementById("confirmSenha").value
    const corConfirmSenha  = document.getElementById("confirmSenha")
    if(confirmSenha == ""){
      confirmSenha = null
      corConfirmSenha.style.borderColor = "red"
    }
    else{
      corConfirmSenha.style.borderColor = "white"
    }
    
      let obj ={
        token:token,
        senha:senha,
        confirmSenha:confirmSenha
      }
    await fetch('http://localhost:5145/api/Refugiados/reset-senha',
    {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(obj)
    }).then(response => {
      if (!response.ok) {
        showModal(false)      
      }
      else{
        corSenha.style.borderColor = "white"    
        corConfirmSenha.style.borderColor = "white"    
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

        modalObj.style.display = "block"

        bg.classList.add("modal-backdrop")
        bg.classList.add("fade")
        bg.classList.add("show")
    if (token == null) {
      label.innerHTML = "Erro de token"
      div.innerHTML = "Token para reset de senha inválido."
    }
    else if(status == false){
        label.innerHTML = "Erro"
        div.innerHTML = "Senhas inválidas."
      }  
      else{
        label.innerHTML = "Sucesso"
        div.innerHTML = "Senha alterada com sucesso."
    }

    btnClose.onclick = function(){
      modalObj.style.display = "none"
      bg.classList.remove("modal-backdrop")
      bg.classList.remove("fade")
      bg.classList.remove("show")

      if(status){
        window.location.href = "./login.html"
      }
    }

    close.onclick = function(){
      modalObj.style.display = "none"
      bg.classList.remove("modal-backdrop")
      bg.classList.remove("fade")
      bg.classList.remove("show")

      if(status){
        window.location.href = "./login.html"
      }
    }

  }