let token = localStorage.getItem('token')
selectRefugiados = document.getElementById("div_admin_refugiados")
let refugiadosNumero = document.querySelector("#p_refugiados_numero")
fetch('http://localhost:5145/api/Refugiados',{
                headers: {'Authorization': 'Bearer ' + token,'Content-Type': 'application/json'}
              })
        .then(data => {return data.json();})
        .then(post => {
            post.data.forEach(element => {
                refugiados = `<tr>
                <td>${element.id}</td>
                <td>${element.nome}</td>
                <td>${element.sobrenome}</td>
                <td>${element.email}</td>
                <td>${element.telefone}</td>
                <td>${element.pais.pais}</td>
                <tr>
                `
                selectRefugiados.innerHTML += refugiados
            });
            refugiadosNumero.innerHTML =  post.total
        }); 

let abrigosNumero = document.querySelector("#p_abrigos_numero")
fetch('http://localhost:5145/api/Abrigos',{
                headers: {'Authorization': 'Bearer ' + token,'Content-Type': 'application/json'}
              })
        .then(data => {return data.json();})
        .then(post => {
            abrigosNumero.innerHTML =  post.total
        }); 

let consuladosNumero = document.querySelector("#p_consulados_numero")
fetch('http://localhost:5145/api/Consulados',{
                headers: {'Authorization': 'Bearer ' + token,'Content-Type': 'application/json'}
              })
        .then(data => {return data.json();})
        .then(post => {
            consuladosNumero.innerHTML =  post.total
        });

let postosNumero = document.querySelector("#p_postos_numero")
fetch('http://localhost:5145/api/PostoDeSaude',{
                headers: {'Authorization': 'Bearer ' + token,'Content-Type': 'application/json'}
              })
        .then(data => {return data.json();})
        .then(post => {
            postosNumero.innerHTML =  post.total
        });

function logout(){
    localStorage.removeItem('token')
    window.location.href = "/html/index.html"
}