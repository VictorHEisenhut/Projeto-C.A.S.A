const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let numeroRefugiados = document.querySelector("#numeroRefugiados")
fetch('http://localhost:5145/api/Refugiados/Total',{
                headers: {'Content-Type': 'application/json'}
              })
        .then(data => {return data.json();})
        .then(post => {
          numeroRefugiados.innerHTML =  post
        }); 

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}


function scrollToAjudaMe(){
  var destino = document.getElementById("opcao_ajuda_index");
  var destinoPosition = destino.offsetTop;

  window.scrollTo({
    top: destinoPosition,
    behavior: "smooth" 
  });
}

function scrollToAjudar(){
  var destino = document.getElementById("quero_ajudar_index");
  var destinoPosition = destino.offsetTop;

  window.scrollTo({
    top: destinoPosition - 225,
    behavior: "smooth" 
  });
}

function scrollToEnviarSugestao(){
  var destino = document.getElementById("sugestao_index");
  var destinoPosition = destino.offsetTop;

  window.scrollTo({
    top: destinoPosition,
    behavior: "smooth" 
  });
}

function documentosLink(){
  window.location.href = "./DicasEdocumentos.html"
}
function abrigosLink(){
  window.location.href = "./abrigos.html"
}
function consuladosLink(){
  window.location.href = "./consulados.html"
}
function postosLink(){
  window.location.href = "./postosDeSaude.html"
}
