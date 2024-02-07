const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const token = urlParams.get('token')

async function resetSenha(){
    let senha = document.getElementById("senha").value
    let confirmSenha = document.getElementById("confirmSenha").value
    
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
    })
    window.location.href = "./login.html"
  }