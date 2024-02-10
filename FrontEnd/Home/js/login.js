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
          if (data.status > 300) {
            data.text().then(t => {
              alert(t)
            })
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