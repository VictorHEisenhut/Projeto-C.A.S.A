async function esqueciSenha(){
    let email = document.getElementById("email").value
    
      let obj ={
        email:email,
      }
    await fetch(`http://localhost:5145/api/Refugiados/esqueci-senha?email=${email}`,
    {
        method: "GET",
        headers: {'Content-Type': 'application/json'},
    })
    window.location.href = `./esperaConfirmacao.html?email=${email}`
  }