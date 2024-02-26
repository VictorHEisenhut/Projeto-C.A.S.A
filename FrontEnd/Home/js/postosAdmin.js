let tokens = localStorage.getItem('token')
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
                <button onclick="showModal(null, ${element.id})" class="btn btn-outline-danger" id="deleteButton">Excluir</button>
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

        async function confirmaDeletar(id){
            await fetch(`http://localhost:5145/api/PostoDeSaude/${id}`,
          {
              method: "DELETE",
              headers: {'Authorization': 'Bearer ' + tokens,'Content-Type': 'application/json'},
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
                  div.innerHTML = "Ao clicar em deletar, este posto de saúde e todos seus dados serão excluídos!"
          }  
              else if(status == false){
                  label.innerHTML = "Erro"
                  div.innerHTML = "Falha ao deletar posto de saúde."
                  btnDelete.setAttribute("hidden", "hidden")
          }
              else{
                label.innerHTML = "Sucesso"
                div.innerHTML = "Posto de saúde deletada com sucesso."
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