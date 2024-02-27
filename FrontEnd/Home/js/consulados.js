let tokens = localStorage.getItem('token')
selectConsulado = document.getElementById("consulados")
  window.addEventListener('load', function() {

  let pageNumbers = document.getElementById("pageNumbers")
  var loadingScreen = document.getElementById('loadingScreen');
  fetch('http://localhost:5145/api/Consulados/Pages?pageNumber=0',{
                headers: { 
                           'Content-Type': 'application/json'
                          }
              })
        .then(data => {return data.json();})
        .then(post => {
            post.data.forEach(element => {
                
                consulados = `<div class="card border-secondary card_cons">
                <div class="card-body">
                <h5 class="card_title">Consulados</h5>
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

              selectConsulado.innerHTML += consulados
            });

            for (let i = 0; i < post.totalPages; i++) {
              btnPageNumbers = `<button class="numberPageButtons" id="btnPagination${i}" onclick="load(this.innerHTML)">${i}</button>`
              pageNumbers.innerHTML += btnPageNumbers
            } 
            
        });   

          pageNumbers.style.display = "flex"
  selectConsulado.style.display = 'flex';
});

function load(pageNumber) {
  loadingScreen.style.display = 'flex';
  selectConsulado.innerHTML = ""
  fetch(`http://localhost:5145/api/Consulados/Pages?pageNumber=${pageNumber}`,{
                headers: { 
                           'Content-Type': 'application/json'
                          }
              })
        .then(data => {return data.json();})
        .then(post => {
            post.data.forEach(element => {
                
              consulados = `<div class="card border-secondary card_cons">
                <div class="card-body">
                <h5 class="card_title">Consulados</h5>
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
              selectConsulado.innerHTML += consulados
            });

            for (let i = 0; i < post.totalPages; i++) {
              if (i == pageNumber) {
                document.getElementById(`btnPagination${i}`).style.backgroundColor = "rgb(53, 117, 212)"
                document.getElementById(`btnPagination${i}`).style.color = "white"
              }
              else{
                let button =document.getElementById(`btnPagination${i}`)
                button.style.backgroundColor = "white"
                button.style.color = "rgb(53, 117, 212)"
                button.addEventListener('mouseover', () => {
                button.style.backgroundColor = 'rgb(53, 117, 212)';
                button.style.color = "white"
              });
                button.addEventListener('mouseout', () => {
                button.style.backgroundColor = 'white';
                button.style.color = "rgb(53, 117, 212)"
              });
              }
            }           
        });   

        selectConsulado.style.display = 'flex';
}

function linkEndereco(rua,numero,bairro,cidade,estado,cep){
    window.open(`https://www.google.com.br/maps/place/R.+${rua},+${numero}+${bairro},+${cidade}+${estado},+${cep}`,'_blank')
}

const translations = {
  pt: {
    homeLink: 'Home',
    documentsLink: 'Documentos',
    placesLink: 'Locais',
    languageLink: 'Idioma',
    donateLink: 'Doe',
    abrigo_trd: 'Abrigos',
    consulados_trd: 'Consulados',
    posto_trd: 'Posto de saúde',
    Carregando_trad: 'Carregando...',
    logout: 'Sair',
    login: 'Entrar',
    btnModalClose:"Cancelar",
    btnDelete:"Deletar",
    card_title:"Consulados",
  },
  en: {
    homeLink: 'Home',
    documentsLink: 'Documents',
    placesLink: 'Places',
    languageLink: 'Language',
    donateLink: 'Donate',
    abrigo_trd: 'Shelters',
    consulados_trd: 'Consulates',
    posto_trd: 'Health Center',
    Carregando_trad: 'Loading...',
    logout: 'Logout',
    login: 'Login',
    btnModalClose: "Cancel",
    btnDelete: "Delete",
    card_title:"Consulates",
  },
  es: {
    homeLink: 'Home',
    documentsLink: 'Documentos',
    placesLink: 'Lugares',
    languageLink: 'Idioma',
    donateLink: 'Donar',
    abrigo_trd: 'Refugios',
    consulados_trd: 'Consulados',
    posto_trd: 'Centro de salud',
    Carregando_trad: 'Cargando...',
    logout: 'Cerrar sesión',
    login: 'Iniciar sesión',
    btnModalClose: "Cancelar",
    btnDelete: "Eliminar",
    card_title:"Consulados",
  },
  fr: {
    homeLink: 'Accueil',
    documentsLink: 'Documents',
    placesLink: 'Lieux',
    languageLink: 'Langue',
    donateLink: 'Don',
    abrigo_trd: 'Abris',
    consulados_trd: 'Consulats',
    posto_trd: 'Centre de santé',
    Carregando_trad: 'Chargement...',
    logout: 'Déconnexion',
    login: 'Connexion',
    btnModalClose: "Cancelar",
    btnModalClose: "Annuler",
    btnDelete: "Supprimer",
    card_title:"Consulats",

  },
  ar: {
    homeLink: 'الصفحة الرئيسية',
    documentsLink: 'وثائق',
    placesLink: 'أماكن',
    languageLink: 'اللغة',
    donateLink: 'تبرع',
    abrigo_trd: 'الملاجئ',
    consulados_trd: 'القنصليات',
    posto_trd: 'مركز الصحة',
    Carregando_trad: 'جار التحميل...',
    logout: 'تسجيل الخروج',
    login: 'تسجيل الدخول',
    btnModalClose: "إلغاء",
    btnDelete: "حذف",
    card_title:"القنصليات",
  }
};

function changeLanguage(lang) {
  const elements = Object.keys(translations[lang]);
  elements.forEach(element => {
    document.getElementById(element).innerText = translations[lang][element];
  });
}