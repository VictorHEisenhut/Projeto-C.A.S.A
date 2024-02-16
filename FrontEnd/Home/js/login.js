async function logar(){
    let email = document.getElementById("email").value
    const corEmail = document.getElementById("email")
    if(email == ""){
      email = null
      corEmail.style.borderColor = "red"
    }
    else{
      corEmail.style.borderColor = "white"
    }

    let senha = document.getElementById("senha").value
    const corSenha  = document.getElementById("senha")
    if(senha == ""){
      senha = null
      corSenha.style.borderColor = "red"
    }
    else{
      corSenha.style.borderColor = "white"
    }
    
      let obj ={
        email:email,
        senha:senha
      }
      

        await fetch('http://localhost:5145/api/Refugiados/Login',
        {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(obj)
        }).then(data => {
          if (data.status >= 300) {
            data.text().then(t => {
            if(t == "Usuário não verificado."){
                showModal()
              }
            })
            
            showModal(true)
          }
          
          
          return data.json()
        })
        .then(resp => {
            localStorage.setItem('token', resp.token)
        })
      
      if (localStorage.getItem('token') != null && localStorage.getItem('token') != "undefined" ) {
        
        window.location.href = "./perfil.html"
      }
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

    if(status == null){
        label.innerHTML = "Email não verificado"
        div.innerHTML = "Seu email ainda não está verificado, verifique seu email"
        btnEmail.removeAttribute("hidden", "hidden")
    }  
    else{
        label.innerHTML = "Erro"
        div.innerHTML = "Email ou senha inválidos"
        btnEmail.setAttribute("hidden", "hidden")
    }

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

function togglePass() {

  const input = document.getElementById("senha");
  const button = document.getElementById("togglePass");

  if (input.type == "password") {
    input.type = "text";
    button.innerHTML = "ESCONDER";
  } else {
    input.type = "password";
    button.innerHTML = "MOSTRAR";
  }
}

