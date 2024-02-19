selectPosto = document.getElementById("postos")

window.addEventListener('load', function() {
  // Oculte a loading screen
  var loadingScreen = document.getElementById('loadingScreen');

fetch('http://localhost:5145/api/PostoDeSaude/Pages?pageNumber=0&pageSize=8',{
                headers: { 
                           'Content-Type': 'application/json'
                          }
              })
        .then(data => {return data.json();})
        .then(post => {
            post.forEach(element => {
                
                postos = `<div class="card border-secondary card_postos">
                <div class="card-body">
                <h5 class="card-title">Postos de saúde</h5>
                <p class="card-text">${element.nome}</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">${element.email}</li>
                <li class="list-group-item">${element.telefone}</li>
                <li class="list-group-item">${element.endereco.rua}, ${element.endereco.numero}<br>${element.endereco.bairro}<br>${element.endereco.cidade} - ${element.endereco.estado}<br>${element.endereco.cep}</li>
              </ul>
              <div class="card-body">
                  <button onclick="linkEndereco('${element.endereco.rua}',
                  '${element.endereco.numero}','${element.endereco.bairro}',
                  '${element.endereco.cidade}','${element.endereco.estado}',
                  '${element.endereco.cep}')" 
                  class="btn btn-outline-primary"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="29" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg> Link endereço</button>
              </div>
              </div>`
              loadingScreen.style.display = 'none';
              selectPosto.innerHTML += postos
            });
        });   

  selectPosto.style.display = 'flex';
});

        function linkEndereco(rua,numero,bairro,cidade,estado,cep){
            window.open(`https://www.google.com.br/maps/place/R.+${rua},+${numero}+${bairro},+${cidade}+${estado},+${cep}`,'_blank')

        }