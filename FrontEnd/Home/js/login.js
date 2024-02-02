async function logar(){
    let email = document.getElementById("email").value
      let senha = document.getElementById("senha").value
      let obj ={
        email:email,
        senha:senha
      }
    await fetch('https://localhost:7288/api/Refugiados/Login',
    {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(obj)
    }).then(data => data.json())
    .then(resp => {
        localStorage.setItem('token', resp.token)
    })
    window.location.href = "./perfil.html"
  }