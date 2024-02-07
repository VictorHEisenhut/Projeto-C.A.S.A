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
            document.getElementById("nome").value = value.nome
            document.getElementById("sobrenome").value = value.sobrenome
            document.getElementById("email").value = value.email
            document.getElementById("dataNascimento").value = value.dataNascimento
            document.getElementById("telefone").value = value.telefone
            if(value.estadoCivil == 1){aux = "Solteiro/a"}
            else if(value.estadoCivil == 2){aux = "Casado/a"}
            else if(value.estadoCivil == 3){aux = "Separado/a"}
            else if(value.estadoCivil == 4){aux = "Divorciado/a"}
            else if(value.estadoCivil == 5){aux = "Viúvo/a"}
            document.getElementById("estadoCivil").value = aux
            if(value.genero == 1){auxGenero = "Masculino"}
            else{auxGenero = "Feminino"}
            document.getElementById("genero").value = auxGenero
            if(value.escolaridade == 1){auxEscolaridade = "Ensino fundamental completo"}
            else if(value.escolaridade == 2){auxEscolaridade = "Ensino fundamental incompleto"}
            else if(value.escolaridade == 3){auxEscolaridade = "Ensino médio completo"}
            else if(value.escolaridade == 4){auxEscolaridade = "Ensino médio incompleto"}
            else if(value.escolaridade == 5){auxEscolaridade = "Ensino superior completo"}
            else {auxEscolaridade = "Ensino superior incompleto"}
            document.getElementById("escolaridade").value = auxEscolaridade
            document.getElementById("paisId").value = value.pais.pais
            document.getElementById("cpf").value = value.documento.cpf
            document.getElementById("rg").value = value.documento.rg
            document.getElementById("cnh").value = value.documento.cnh
            document.getElementById("crnm").value = value.documento.crnm
            document.getElementById("rne").value = value.documento.rne
            document.getElementById("cep").value = value.endereco.cep
            document.getElementById("estado").value = value.endereco.estado
            document.getElementById("cidade").value = value.endereco.cidade
            document.getElementById("bairro").value = value.endereco.bairro
            document.getElementById("rua").value = value.endereco.rua
            document.getElementById("numero").value = value.endereco.numero
        })

const translations = {
    pt: {
      headerTitle: 'Lorem',
      homeLink: 'Home',
      documentsLink: 'Documentos',
      placesLink: 'Locais',
      languageLink: 'Idioma',
      donateLink: 'Doe',
      nameLabel: 'Nome',
      sobreLabel:'Sobrenome',
      emailLabel: 'Email',
      senhaLabel: 'Senha',
      nascLabel:'Data de nascimento',
      numeroLabel: 'Telefone',
      estadoCivilLabel: 'Estado civíl',
      generoLabel:'Gênero',
      escolaridadeLabel:'Escolaridade',
      paisLabel:'País'
    },
    en: {
      headerTitle: 'Lorem',
      homeLink: 'Home',
      documentsLink: 'Documents',
      placesLink: 'Places',
      languageLink: 'Language',
      donateLink: 'Donate',
      nameLabel: 'Name',
      sobreLabel:'Last name',
      emailLabel: 'Email',
      senhaLabel: 'Password',
      nascLabel:'birthday',
      numeroLabel: 'Phone number',
      estadoCivilLabel: 'Marital status',
      generoLabel:'Gender',
      escolaridadeLabel:'Level of education',
      paisLabel:'Country'
    },
    es: {
      headerTitle: 'Lorem',
      homeLink: 'Home',
      documentsLink: 'Documentos',
      placesLink: 'Lugares',
      languageLink: 'Idioma',
      donateLink: 'Donar',
      nameLabel: 'Nombre',
      sobreLabel:'Apellido',
      emailLabel: 'Correo electrónico',
      senhaLabel: 'Contraseña',
      nascLabel:'Fecha de nacimiento',
      numeroLabel: 'Teléfono',
      estadoCivilLabel: 'Estado civil',
      generoLabel:'Género',
      escolaridadeLabel:'Nivel de educación',
      paisLabel:'País'
    },
  fr: {
    headerTitle: 'Lorem',
    homeLink: 'Accueil',
    documentsLink: 'Documents',
    placesLink: 'Lieux',
    languageLink: 'Langue',
    donateLink: 'Don',
    nameLabel: 'Nom',
    sobreLabel:'Nom de famille',
    emailLabel: 'E-mail',
    senhaLabel: 'Mot de passe',
    nascLabel:'Date de naissance',
    numeroLabel: 'Téléphone',
    estadoCivilLabel: 'État civil',
    generoLabel:'Genre',
    escolaridadeLabel:"Niveau d'éducation",
    paisLabel:'Pays'
  },
  ar: {
    headerTitle: 'Lorem',
    homeLink: 'الصفحة الرئيسية',
    documentsLink: 'وثائق',
    placesLink: 'أماكن',
    languageLink: 'اللغة',
    donateLink: 'تبرع',
  }
  };

  function changeLanguage(lang) {
    const elements = Object.keys(translations[lang]);
    elements.forEach(element => {
      document.getElementById(element).innerText = translations[lang][element];
    });
  }