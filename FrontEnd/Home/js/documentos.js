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


let valores = fetch(`http://localhost:5145/api/Refugiados/${idRefugiado.nameid}`,
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
            document.getElementById("cpf").value = value.documento.cpf
            document.getElementById("rg").value = value.documento.rg
            document.getElementById("cnh").value = value.documento.cnh
            document.getElementById("crnm").value = value.documento.crnm
            document.getElementById("rne").value = value.documento.rne
        })