let token = localStorage.getItem('token')
selectRefugiados = document.getElementById("div_admin_refugiados")
let refugiadosNumero = document.querySelector("#p_refugiados_numero")
fetch('http://localhost:5145/api/Refugiados',{
                headers: {'Authorization': 'Bearer ' + token,'Content-Type': 'application/json'}
              })
        .then(data => {return data.json();})
        .then(post => {
            post.data.forEach(element => {
                refugiados = `<p>${element.nome}</p>`
                selectRefugiados.innerHTML += refugiados
            });
            refugiadosNumero.innerHTML =  post.total
        }); 

selectAbrigos = document.getElementById("div_admin_abrigos")
let abrigosNumero = document.querySelector("#p_abrigos_numero")
fetch('http://localhost:5145/api/Abrigos',{
                headers: {'Authorization': 'Bearer ' + token,'Content-Type': 'application/json'}
              })
        .then(data => {return data.json();})
        .then(post => {
            post.data.forEach(element => {
                abrigos = `<p>${element.nome}</p>`
                selectAbrigos.innerHTML += abrigos
            });
            abrigosNumero.innerHTML =  post.total
        }); 

selectConsulados = document.getElementById("div_admin_consulados")
let consuladosNumero = document.querySelector("#p_consulados_numero")
fetch('http://localhost:5145/api/Consulados',{
                headers: {'Authorization': 'Bearer ' + token,'Content-Type': 'application/json'}
              })
        .then(data => {return data.json();})
        .then(post => {
            post.data.forEach(element => {
                consulados = `<p>${element.nome}</p>`
                selectConsulados.innerHTML += consulados
            });
            consuladosNumero.innerHTML =  post.total
        });

selectPostos = document.getElementById("div_admin_postos")
let postosNumero = document.querySelector("#p_postos_numero")
fetch('http://localhost:5145/api/PostoDeSaude',{
                headers: {'Authorization': 'Bearer ' + token,'Content-Type': 'application/json'}
              })
        .then(data => {return data.json();})
        .then(post => {
            post.data.forEach(element => {
                postos = `<p>${element.nome}</p>`
                selectPostos.innerHTML += postos
            });
            postosNumero.innerHTML =  post.total
        });