selectAbrigo = document.getElementById("abrigos")
fetch('http://localhost:5145/api/Abrigos',{
                headers: { 
                           'Content-Type': 'application/json'
                          }
              })
        .then(data => {return data.json();})
        .then(post => {
            post.forEach(element => {
                
                abrigos = `<tr>
                <td>${element.nome}</td>
                <td>${element.email}</td>
                <td>${element.telefone}</td>
                <td>${element.endereco.estado}</td>
                <td>${element.endereco.cidade}</td>
                <td>${element.endereco.bairro}</td>
                <td>${element.endereco.rua}</td>
                <td>${element.endereco.numero}</td>
                <td>${element.endereco.cep}</td>
                </tr>`
                selectAbrigo.innerHTML += abrigos
            });
        });   

selectConsulado = document.getElementById("consulados")
fetch('http://localhost:5145/api/Consulados',{
                headers: { 
                           'Content-Type': 'application/json'
                          }
              })
        .then(data => {return data.json();})
        .then(post => {
            post.forEach(element => {
                
                consulados = `<tr>
                <td>${element.nome}</td>
                <td>${element.email}</td>
                <td>${element.telefone}</td>
                <td>${element.endereco.estado}</td>
                <td>${element.endereco.cidade}</td>
                <td>${element.endereco.bairro}</td>
                <td>${element.endereco.rua}</td>
                <td>${element.endereco.numero}</td>
                <td>${element.endereco.cep}</td>
                </tr>`
                selectConsulado.innerHTML += consulados
            });
        });   


selectPosto = document.getElementById("postos")
fetch('http://localhost:5145/api/PostoDeSaude',{
                headers: { 
                           'Content-Type': 'application/json'
                          }
              })
        .then(data => {return data.json();})
        .then(post => {
            post.forEach(element => {
                
                postos = `<tr>
                <td>${element.nome}</td>
                <td>${element.email}</td>
                <td>${element.telefone}</td>
                <td>${element.endereco.estado}</td>
                <td>${element.endereco.cidade}</td>
                <td>${element.endereco.bairro}</td>
                <td>${element.endereco.rua}</td>
                <td>${element.endereco.numero}</td>
                <td>${element.endereco.cep}</td>
                </tr>`
                selectPosto.innerHTML += postos
            });
        });   
var visibilidadeAbrigo = 0
function mostraAbrigos(){
    visibilidadeAbrigo = visibilidadeAbrigo + 1;
    visibilidadeAbrigo = visibilidadeAbrigo%2;
    if(visibilidadeAbrigo == 1){
        document.getElementById("abrigosTabela").removeAttribute("hidden");
    }
    else{
        document.getElementById("abrigosTabela").setAttribute("hidden","")
    }
}
var visibilidadeConsulado = 0
function mostraConsulados(){
    visibilidadeConsulado = visibilidadeConsulado + 1;
    visibilidadeConsulado = visibilidadeConsulado%2;
    if(visibilidadeConsulado == 1){
        document.getElementById("consuladosTabela").removeAttribute("hidden");
    }
    else{
        document.getElementById("consuladosTabela").setAttribute("hidden","")
    }
}
var visibilidadePosto = 0
function mostraPostos(){
    visibilidadePosto = visibilidadePosto + 1;
    visibilidadePosto = visibilidadePosto%2;
    if(visibilidadePosto == 1){
        document.getElementById("postosTabela").removeAttribute("hidden");
    }
    else{
        document.getElementById("postosTabela").setAttribute("hidden","")
    }
}