let token = localStorage.getItem('token')

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

let info = parseJwt(token);



function dadosEndereco() {
    let cep = document.getElementById('cep').value
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((dados) => dados.json())
        .then((response) => {
            document.getElementById('rua').value = response.logradouro
            if(response.logradouro == ""){
              document.getElementById("rua").removeAttribute("disabled");
            }
            else{
              document.getElementById("rua").setAttribute("disabled","");
            }
            document.getElementById('bairro').value = response.bairro
            if(response.bairro == ""){
              document.getElementById("bairro").removeAttribute("disabled");
            }
            else{
              document.getElementById("bairro").setAttribute("disabled","");
            }
            document.getElementById('cidade').value = response.localidade
            document.getElementById("estado").value = response.uf
        }
        )
        .catch((erro) => console.log(erro))
}
let idEndereco = 0;
async function cadastrar(){
    let cep = document.getElementById('cep').value
        const corcep = document.getElementById("cep")
        if(cep == ""){
          corcep.style.borderColor = "red"
        }
        else{
          corcep.style.borderColor = "#f6f6f6"
        }

        let estado = document.getElementById("estado").value
        const corestado = document.getElementById("estado")
        if(estado == ""){
          corestado.style.borderColor = "red"
        }
        else{
          corestado.style.borderColor = "#f6f6f6"
        }

        let cidade = document.getElementById("cidade").value
        const corcidade = document.getElementById("cidade")
        if(cidade == ""){
          corcidade.style.borderColor = "red"
        }
        else{
          corcidade.style.borderColor = "#f6f6f6"
        }

        let bairro = document.getElementById("bairro").value
        const corbairro = document.getElementById("bairro")
        if(bairro == ""){
          corbairro.style.borderColor = "red"
        }
        else{
          corbairro.style.borderColor = "#f6f6f6"
        }

        let rua = document.getElementById("rua").value
        const corrua = document.getElementById("rua")
        if(rua == ""){
          corrua.style.borderColor = "red"
        }
        else{
          corrua.style.borderColor = "#f6f6f6"
        }

        let numero = document.getElementById("numero").value
        const cornumero = document.getElementById("numero")
        var auxN = parseInt(numero);
        if(numero < 0 ){
          cornumero.style.borderColor = "red"
        }
        else{
          cornumero.style.borderColor = "#f6f6f6"
        }

        let nome = document.getElementById("nome").value
        const nomecor = document.getElementById("nome")
        if(nome == ""){
            nomecor.style.borderColor = "red"
        }
        else{
            nomecor.style.borderColor = "#f6f6f6"
        }

        let telefone = document.getElementById("telefone").value
        const cortelefone = document.getElementById("telefone")
        if(telefone == ""){
            cortelefone.style.borderColor = "red"
        }
        else{
            cortelefone.style.borderColor = "#f6f6f6"
        }

        let email = document.getElementById("email").value
        const coremail = document.getElementById("email")
        if(email == ""){
            coremail.style.borderColor = "red"
        }
        else{
            coremail.style.borderColor = "#f6f6f6"
        }

        let obj = {
            cep:cep,
            estado:estado,
            cidade:cidade,
            rua:rua,
            bairro:bairro,
            numero:auxN
        }
        console.log(obj)
        if(cep == ""|| estado == ""|| cidade == ""|| rua == ""|| bairro == ""|| numero < 0 || email == ""||telefone == ""||nome == ""){
            alert("Erro")
        }
        else{
            await fetch('http://localhost:5145/api/Enderecos',
            {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(obj)
            })
            .then(response => response.json())
            .then((response)=> idEndereco = response.id )
            cadastroAbrigos()
        }
}
async function cadastroAbrigos(){
        let nome = document.getElementById("nome").value
        let telefone = document.getElementById("telefone").value
        let email = document.getElementById("email").value
        let objAbrigo = {
            enderecoId: idEndereco,
            nome: nome,
            email: email,
            telefone: telefone 
        }
        console.log(objAbrigo)
        await fetch('http://localhost:5145/api/Abrigos',
            {
                method: "POST",
                headers: {/*'Authorization': 'Bearer ' + token,*/'Content-Type': 'application/json'},
                body: JSON.stringify(objAbrigo)
            })
}