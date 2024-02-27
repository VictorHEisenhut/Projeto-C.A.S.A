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
    }

    close.onclick = function(){
      modalObj.style.display = "none"
      bg.classList.remove("modal-backdrop")
      bg.classList.remove("fade")
      bg.classList.remove("show")
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

const translations = {
  pt: {
    email: 'Email',
    senha: 'Senha',
    togglePass: 'MOSTRAR',
    esqueci_senha: 'Esqueci minha senha',
    Criar_trad: 'Criar uma conta',
    Voltar_trad:'Voltar ao Início',
  },
  en: {
    email: 'Email',
    senha: 'Password',
    togglePass: 'SHOW',
    esqueci_senha: 'Forgot my password',
    Criar_trad: 'Create an account',
    Voltar_trad: 'Back to Home',
  },
  es: {
    email: 'Email',
    senha: 'Contraseña',
    togglePass: 'MOSTRAR',
    esqueci_senha: 'Olvidé mi contraseña',
    Criar_trad: 'Crear una cuenta',
    Voltar_trad: 'Volver al Inicio',

  },
  fr: {
    email: 'Email',
    senha: 'Mot de passe',
    togglePass: 'MONTRER',
    esqueci_senha: 'Mot de passe oublié',
    Criar_trad: 'Créer un compte',
    Voltar_trad: 'Retour à l\'accueil',
  },
  ar: {
    email: 'البريد الإلكتروني',
    senha: 'كلمة المرور',
    togglePass: 'عرض',
    esqueci_senha: 'نسيت كلمة المرور',
    Criar_trad: 'إنشاء حساب',
    Voltar_trad: 'العودة إلى الصفحة الرئيسية',
  }
};

function changeLanguage(lang) {
  const elements = Object.keys(translations[lang]);
  elements.forEach(element => {
    document.getElementById(element).innerText = translations[lang][element];
  });
}