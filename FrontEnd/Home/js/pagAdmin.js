let token = localStorage.getItem('token')
selectTbody = document.getElementById("tbody_admin")
selectThead = document.getElementById("thead_admin")

function refugiadosTabela(){
  selectTbody.innerHTML = ""
  selectThead.innerHTML = `<tr class="table-dark">
  <th>Id</th>
  <th>Nome</th>
  <th>Sobrenome</th>
  <th>Email</th>
  <th>Telefone</th>
  <th>País</th>
  <th>Excluir</th>
</tr>`
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
                <td><button onclick="showModal(null, ${element.id})" class="btn btn-outline-danger">Excluir</button></td>
                <tr>
                `
                selectTbody.innerHTML += refugiados
            });
        }); 
}



function abrigosTable(){
  selectTbody.innerHTML = ""
  selectThead.innerHTML = `<tr class="table-dark">
  <th>Id</th>
  <th>Nome</th>
  <th>Email</th>
  <th>Telefone</th>
  <th>Excluir</th>
</tr>`

  fetch('http://localhost:5145/api/Abrigos',{
                headers: {'Content-Type': 'application/json'}
              })
        .then(data => {return data.json();})
        .then(post => {
            post.data.forEach(element => {
                abrigos = `<tr>
                <td>${element.id}</td>
                <td>${element.nome}</td>
                <td>${element.email}</td>
                <td>${element.telefone}</td>
                <td><button onclick="showModalAbrigos(null, ${element.id})" class="btn btn-outline-danger">Excluir</button></td>
                <tr>
                `
                selectTbody.innerHTML += abrigos
            });
        }); 
}     

function consuladosTable(){
  selectTbody.innerHTML = ""
  selectThead.innerHTML = `<tr class="table-dark">
  <th>Id</th>
  <th>Nome</th>
  <th>Email</th>
  <th>Telefone</th>
  <th>Excluir</th>
</tr>`

  fetch('http://localhost:5145/api/Consulados',{
                headers: {'Content-Type': 'application/json'}
              })
        .then(data => {return data.json();})
        .then(post => {
            post.data.forEach(element => {
                consulados = `<tr>
                <td>${element.id}</td>
                <td>${element.nome}</td>
                <td>${element.email}</td>
                <td>${element.telefone}</td>
                <td><button onclick="showModalConsulados(null, ${element.id})" class="btn btn-outline-danger">Excluir</button></td>
                <tr>
                `
                selectTbody.innerHTML += consulados
            });
        }); 
}     

function postosTable(){
  selectTbody.innerHTML = ""
  selectThead.innerHTML = `<tr class="table-dark">
  <th>Id</th>
  <th>Nome</th>
  <th>Email</th>
  <th>Telefone</th>
  <th>Excluir</th>
</tr>`

  fetch('http://localhost:5145/api/PostoDeSaude',{
                headers: {'Content-Type': 'application/json'}
              })
        .then(data => {return data.json();})
        .then(post => {
            post.data.forEach(element => {
                postos = `<tr>
                <td>${element.id}</td>
                <td>${element.nome}</td>
                <td>${element.email}</td>
                <td>${element.telefone}</td>
                <td><button onclick="showModalPostos(null, ${element.id})" class="btn btn-outline-danger">Excluir</button></td>
                <tr>
                `
                selectTbody.innerHTML += postos
            });
        }); 
}   


async function confirmaDeletarAbrigos(id){
  await fetch(`http://localhost:5145/api/Abrigos/${id}`,
{
    method: "DELETE",
    headers: {'Authorization': 'Bearer ' + token,'Content-Type': 'application/json'},
})
.then(response => {
  if (!response.ok) {
    showModalAbrigos(false)  
        response.text().then(t => console.log(t))
  }
  else{
    showModalAbrigos(true)
  }
})
}
    
async function showModalAbrigos(status, id) {
          
    var modalObj = document.getElementById("successModal");
    var bg = document.getElementById("modalBackground");
    var close = document.getElementById("modalClose");
    var btnClose = document.getElementById("btnModalClose");
    var div = document.getElementById("divText")
    var label = document.getElementById("successModalLabel")
    var btnDelete = document.getElementById("btnDelete")

    btnDelete.onclick = function(){
        confirmaDeletarAbrigos(id)
    } 


        modalObj.style.display = "block"

        bg.classList.add("modal-backdrop")
        bg.classList.add("fade")
        bg.classList.add("show")

    if(status == null){
        label.innerHTML = "Você tem certeza?"
        div.innerHTML = "Ao clicar em deletar, este abrigo e todos seus dados serão excluídos!"
}  
    else if(status == false){
        label.innerHTML = "Erro"
        div.innerHTML = "Falha ao deletar abrigo."
        btnDelete.setAttribute("hidden", "hidden")
}
    else{
      label.innerHTML = "Sucesso"
      div.innerHTML = "Abrigo deletada com sucesso."
      btnDelete.setAttribute("hidden", "hidden")
    }

    btnClose.onclick = function(){
      modalObj.style.display = "none"
      bg.classList.remove("modal-backdrop")
      bg.classList.remove("fade")
      bg.classList.remove("show")

      if (status == true) {
        window.location.reload()
      }
    }

    close.onclick = function(){
      modalObj.style.display = "none"
      bg.classList.remove("modal-backdrop")
      bg.classList.remove("fade")
      bg.classList.remove("show")

      if (status == true) {
        window.location.reload()
      }
    }

  }

  async function confirmaDeletarPostos(id){
    await fetch(`http://localhost:5145/api/Abrigos/${id}`,
  {
      method: "DELETE",
      headers: {'Authorization': 'Bearer ' + token,'Content-Type': 'application/json'},
  })
  .then(response => {
    if (!response.ok) {
      showModalPostos(false)  
          response.text().then(t => console.log(t))
    }
    else{
      showModalPostos(true)
    }
  })
  }
      
  async function showModalPostos(status, id) {
            
      var modalObj = document.getElementById("successModal");
      var bg = document.getElementById("modalBackground");
      var close = document.getElementById("modalClose");
      var btnClose = document.getElementById("btnModalClose");
      var div = document.getElementById("divText")
      var label = document.getElementById("successModalLabel")
      var btnDelete = document.getElementById("btnDelete")
  
      btnDelete.onclick = function(){
        confirmaDeletarPostos(id)
      } 
  
  
          modalObj.style.display = "block"
  
          bg.classList.add("modal-backdrop")
          bg.classList.add("fade")
          bg.classList.add("show")
  
      if(status == null){
          label.innerHTML = "Você tem certeza?"
          div.innerHTML = "Ao clicar em deletar, este abrigo e todos seus dados serão excluídos!"
  }  
      else if(status == false){
          label.innerHTML = "Erro"
          div.innerHTML = "Falha ao deletar abrigo."
          btnDelete.setAttribute("hidden", "hidden")
  }
      else{
        label.innerHTML = "Sucesso"
        div.innerHTML = "Abrigo deletada com sucesso."
        btnDelete.setAttribute("hidden", "hidden")
      }
  
      btnClose.onclick = function(){
        modalObj.style.display = "none"
        bg.classList.remove("modal-backdrop")
        bg.classList.remove("fade")
        bg.classList.remove("show")
  
        if (status == true) {
          window.location.reload()
        }
      }
  
      close.onclick = function(){
        modalObj.style.display = "none"
        bg.classList.remove("modal-backdrop")
        bg.classList.remove("fade")
        bg.classList.remove("show")
  
        if (status == true) {
          window.location.reload()
        }
      }
  
    }

  async function confirmaDeletarConsulados(id){
    await fetch(`http://localhost:5145/api/Consulados/${id}`,
  {
      method: "DELETE",
      headers: {'Authorization': 'Bearer ' + token,'Content-Type': 'application/json'},
  })
  .then(response => {
    if (!response.ok) {
      showModalConsulados(false)  
          response.text().then(t => console.log(t))
    }
    else{
      showModalConsulados(true)
    }
  })
  }
      
  async function showModalConsulados(status, id) {
            
      var modalObj = document.getElementById("successModal");
      var bg = document.getElementById("modalBackground");
      var close = document.getElementById("modalClose");
      var btnClose = document.getElementById("btnModalClose");
      var div = document.getElementById("divText")
      var label = document.getElementById("successModalLabel")
      var btnDelete = document.getElementById("btnDelete")
  
      btnDelete.onclick = function(){
        confirmaDeletarConsulados(id)
      } 
  
  
          modalObj.style.display = "block"
  
          bg.classList.add("modal-backdrop")
          bg.classList.add("fade")
          bg.classList.add("show")
  
      if(status == null){
          label.innerHTML = "Você tem certeza?"
          div.innerHTML = "Ao clicar em deletar, este abrigo e todos seus dados serão excluídos!"
  }  
      else if(status == false){
          label.innerHTML = "Erro"
          div.innerHTML = "Falha ao deletar abrigo."
          btnDelete.setAttribute("hidden", "hidden")
  }
      else{
        label.innerHTML = "Sucesso"
        div.innerHTML = "Abrigo deletada com sucesso."
        btnDelete.setAttribute("hidden", "hidden")
      }
  
      btnClose.onclick = function(){
        modalObj.style.display = "none"
        bg.classList.remove("modal-backdrop")
        bg.classList.remove("fade")
        bg.classList.remove("show")
  
        if (status == true) {
          window.location.reload()
        }
      }
  
      close.onclick = function(){
        modalObj.style.display = "none"
        bg.classList.remove("modal-backdrop")
        bg.classList.remove("fade")
        bg.classList.remove("show")
  
        if (status == true) {
          window.location.reload()
        }
      }
  
    }


let refugiadosNumero = document.querySelector("#p_refugiados_numero")
fetch('http://localhost:5145/api/Refugiados',{
                headers: {'Authorization': 'Bearer ' + token,'Content-Type': 'application/json'}
              })
        .then(data => {return data.json();})
        .then(post => {
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

async function confirmaDeletar(id){
    await fetch(`http://localhost:5145/api/Refugiados/${id}`,
  {
      method: "DELETE",
      headers: {'Content-Type': 'application/json'},
  })
  .then(response => {
    if (!response.ok) {
      showModal(false)  
          response.text().then(t => console.log(t))
    }
    else{
      showModal(true)
    }
  })
  }

async function showModal(status, id) {
          
    var modalObj = document.getElementById("successModal");
    var bg = document.getElementById("modalBackground");
    var close = document.getElementById("modalClose");
    var btnClose = document.getElementById("btnModalClose");
    var div = document.getElementById("divText")
    var label = document.getElementById("successModalLabel")
    var btnDelete = document.getElementById("btnDelete")

    btnDelete.onclick = function(){
        confirmaDeletar(id)
    } 


        modalObj.style.display = "block"

        bg.classList.add("modal-backdrop")
        bg.classList.add("fade")
        bg.classList.add("show")

    if(status == null){
        label.innerHTML = "Você tem certeza?"
        div.innerHTML = "Ao clicar em deletar, esta conta e todos seus dados serão excluídos!"
}  
    else if(status == false){
        label.innerHTML = "Erro"
        div.innerHTML = "Falha ao deletar conta."
        btnDelete.setAttribute("hidden", "hidden")
}
    else{
      label.innerHTML = "Sucesso"
      div.innerHTML = "Conta deletada com sucesso."
      btnDelete.setAttribute("hidden", "hidden")
    }

    btnClose.onclick = function(){
      modalObj.style.display = "none"
      bg.classList.remove("modal-backdrop")
      bg.classList.remove("fade")
      bg.classList.remove("show")

      if (status == true) {
        window.location.reload()
      }
    }

    close.onclick = function(){
      modalObj.style.display = "none"
      bg.classList.remove("modal-backdrop")
      bg.classList.remove("fade")
      bg.classList.remove("show")

      if (status == true) {
        window.location.reload()
      }
    }

  }