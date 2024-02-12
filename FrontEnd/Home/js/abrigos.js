selectAbrigo = document.getElementById("abrigos")
fetch('http://localhost:5145/api/Abrigos',{
                headers: { 
                           'Content-Type': 'application/json'
                          }
              })
        .then(data => {return data.json();})
        .then(post => {
            post.forEach(element => {
                
                abrigos = `<div class="card border-secondary" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">Abrigo</h5>
                <p class="card-text">${element.nome}</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">${element.email}</li>
                <li class="list-group-item">${element.telefone}</li>
                <li class="list-group-item">${element.endereco.rua}, ${element.endereco.numero}<br>${element.endereco.bairro}<br>${element.endereco.cidade} - ${element.endereco.estado}<br>${element.endereco.cep}</li>
              </ul>
              <div class="card-body">
                  <button onclick="linkEndereco('${element.endereco.rua}','${element.endereco.numero}','${element.endereco.bairro}','${element.endereco.cidade}','${element.endereco.estado}','${element.endereco.cep}')" class="btn btn-outline-primary">Link endereço</button>
              </div>
              </div>`
                selectAbrigo.innerHTML += abrigos
            });
        });   

        function linkEndereco(rua,numero,bairro,cidade,estado,cep){
            window.open(`https://www.google.com.br/maps/place/R.+${rua},+${numero}+${bairro},+${cidade}+${estado},+${cep}`,'_blank')

        }