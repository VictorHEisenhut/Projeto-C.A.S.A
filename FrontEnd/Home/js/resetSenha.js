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
        response.text().then(t => {
          alert(t)
        })      
      }
      else{
        response.text().then(t => {
          alert(t)
        })   
        window.location.href = "./login.html"
        corSenha.style.borderColor = "white"    
        corConfirmSenha.style.borderColor = "white"    
      }
    })
  }