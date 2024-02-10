async function esqueciSenha(){
    let email = document.getElementById("email").value
    const corEmail = document.getElementById("email")
    if(email == ""){
      corEmail.style.borderColor = "red"
      email = null
    }
    console.log(email)

        await fetch(`http://localhost:5145/api/Refugiados/esqueci-senha?email=${email}`,
        {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
        })
        .then(response => {
          if (!response.ok) {
            response.text().then(t => {
              alert(t)
            })   
            email = null
            corEmail.style.borderColor = "red"    
          }
          else{
            response.text().then(t => {
              alert(t)
            })   
            corEmail.style.borderColor = "white"    
          }
        })
      
    // window.location.href = `./esperaConfirmacao.html?email=${email}`
  }