async function showDoarModal() {
          
    var modalObj = document.getElementById("doacoesModal");
    var bg = document.getElementById("modalBackground");
    var close = document.getElementById("doacoesModalClose");
    var btnClose = document.getElementById("btnDoacoesModalClose");
    var div = document.getElementById("doacoesDivText")
    var label = document.getElementById("doacoesModalLabel")
    var lingua = document.getElementById("lingua_trad").value

      console.log(lingua)
        modalObj.style.display = "block"

        bg.classList.add("modal-backdrop")
        bg.classList.add("fade")
        bg.classList.add("show")
      if(lingua == "pt"){
        label.innerHTML = "Sua ajuda para esta causa será extremamente apreciada!"
      }
      if(lingua == "en"){
        label.innerHTML = "Your help for this cause will be greatly appreciated!"
      }
      if(lingua == "es"){
        label.innerHTML = "Tu ayuda para esta causa será muy apreciada."
      }
      if(lingua == "fr"){
        label.innerHTML = "Votre aide pour cette cause sera grandement appréciée!"
      }
      if(lingua == "ar"){
        label.innerHTML = "ستكون مساعدتك لهذه القضية موضع تقدير كبير!"
      }
      //label.innerHTML = "Sua ajuda para esta causa será extremamente apreciada!"
      div.style.display = "flex"
      div.style.justifyContent = "center"
      div.style.alignItems = "center"
      div.innerHTML = `<button id='btnCinco' class='btn btn-success m-2'>R$5,00</button>
                       <button id='btnDez' class='btn btn-success m-2'>R$10,00</button>
                       <button id='btnQuinze' class='btn btn-success m-2'>R$15,00</button>`

    var cincoReais = document.getElementById("btnCinco")
    var dezReais = document.getElementById("btnDez")
    var quinzeReais = document.getElementById("btnQuinze")

    cincoReais.onclick = function(){
        label.innerHTML = "Valor: R$5,00"
        div.style.display = "flex"
        div.style.justifyContent = "center"
        div.style.alignItems = "center"
         div.innerHTML = "<img src='/imagens/qrCodeCincoReais.png'></img>"
         btnClose.innerHTML = "Fechar"
    }

    dezReais.onclick = function(){
        label.innerHTML = "Valor: R$10,00"
        div.style.display = "flex"
        div.style.justifyContent = "center"
        div.style.alignItems = "center"
         div.innerHTML = "<img src='/imagens/qrCodeDezReais.png'></img>"
         btnClose.innerHTML = "Fechar"
    }

    quinzeReais.onclick = function(){
        label.innerHTML = "Valor: R$15,00"
        div.style.display = "flex"
        div.style.justifyContent = "center"
        div.style.alignItems = "center"
         div.innerHTML = "<img src='/imagens/qrCodeQuinzeReais.png'></img>"
         btnClose.innerHTML = "Fechar"
    }

    btnClose.onclick = function(){
      modalObj.style.display = "none"
      bg.classList.remove("modal-backdrop")
      bg.classList.remove("fade")
      bg.classList.remove("show")

    }

    close.onclick = function(){
      modalObj.style.display = "none"
      bg.classList.remove("modal-backdrop")
      bg.classList.remove("fade")
      bg.classList.remove("show")


    }

  }