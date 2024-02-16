async function esqueciSenha(){
    let email = document.getElementById("email").value
    const corEmail = document.getElementById("email")
    if(email == ""){
      corEmail.style.borderColor = "red"
      email = null
    }

        await fetch(`http://localhost:5145/api/Refugiados/esqueci-senha?email=${email}`,
        {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
        })
        .then(response => {
          if (!response.ok) {
            showModal(false)  
            email = null
            corEmail.style.borderColor = "red"    
          }
          else{
            corEmail.style.borderColor = "white"    
            showModal(true)
          }
        })
      
    // window.location.href = `./esperaConfirmacao.html?email=${email}`
  }

  async function showModal(status) {
    
    var modalObj = document.getElementById("successModal");
    var bg = document.getElementById("modalBackground");
    var close = document.getElementById("modalClose");
    var btnClose = document.getElementById("btnModalClose");
    var div = document.getElementById("divText")
    var label = document.getElementById("successModalLabel")
    var btnEmail = document.getElementById("btnEmail")

        modalObj.style.display = "block"

        bg.classList.add("modal-backdrop")
        bg.classList.add("fade")
        bg.classList.add("show")

    if(status == false){
        label.innerHTML = "Erro"
        div.innerHTML = "Email inválido."
        btnEmail.setAttribute("hidden", "hidden")
      }  
      else{
        label.innerHTML = "Sucesso"
        div.innerHTML = "Um link para alteração de senha foi enviado para seu email."
        btnEmail.removeAttribute("hidden", "hidden")
    }

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