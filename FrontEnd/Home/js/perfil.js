let token = localStorage.getItem('token')

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

let idRefugiado = parseJwt(token);


let valores = fetch(`https://localhost:7288/api/Refugiados/${idRefugiado.nameid}`,
{
    headers: {'Authorization': 'Bearer ' + token,
             'Content-Type' : 'application/json'},
})
.then(dados => dados.json())
.then(result => {
return result;
});
const result = Promise.resolve(valores);
        result.then(value => {
            document.getElementById("nome").value = value.nome
            document.getElementById("sobrenome").value = value.sobrenome
            document.getElementById("email").value = value.email
            document.getElementById("senha").value = value.senha
            document.getElementById("dataNascimento").value = value.dataNascimento
            document.getElementById("telefone").value = value.telefone
            document.getElementById("estadoCivil").value = value.estadoCivil
            document.getElementById("genero").value = value.genero
            document.getElementById("escolaridade").value = value.escolaridade
            document.getElementById("paisId").value = value.paisId
            document.getElementById("cpf").value = value.cpf
            document.getElementById("rg").value = value.rg
            document.getElementById("cnh").value = value.cnh
            document.getElementById("registroEmigrante").value = value.registroEmigrante
            document.getElementById("crnm").value = value.crnm
            document.getElementById("rne").value = value.rne
            document.getElementById("dprnm").value = value.dprnm
            document.getElementById("protocoleRefugio").value = value.protocoleRefugio
        })