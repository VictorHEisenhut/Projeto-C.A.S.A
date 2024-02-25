async function showCNH() {
    var modalObj = document.getElementById("CNHModal");
    var bg = document.getElementById("modalBackground");
    var close = document.getElementById("CNHClose");
    var btnClose = document.getElementById("btnCNHClose");
        modalObj.style.display = "block"
        bg.classList.add("modal-backdrop")
        bg.classList.add("fade")
        bg.classList.add("show")
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

async function showCRNM() {
  var modalObj = document.getElementById("CRNMModal");
  var bg = document.getElementById("modalBackground");
  var close = document.getElementById("CRNMClose");
  var btnClose = document.getElementById("btnCRNMClose");
      modalObj.style.display = "block"
      bg.classList.add("modal-backdrop")
      bg.classList.add("fade")
      bg.classList.add("show")
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

async function showCTPS() {
    var modalObj = document.getElementById("CTPSModal");
    var bg = document.getElementById("modalBackground");
    var close = document.getElementById("CTPSClose");
    var btnClose = document.getElementById("btnCTPSClose");
        modalObj.style.display = "block"
        bg.classList.add("modal-backdrop")
        bg.classList.add("fade")
        bg.classList.add("show")
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

async function showCPF() {
  var modalObj = document.getElementById("CPFModal");
  var bg = document.getElementById("modalBackground");
  var close = document.getElementById("CPFClose");
  var btnClose = document.getElementById("btnCPFClose");
      modalObj.style.display = "block"
      bg.classList.add("modal-backdrop")
      bg.classList.add("fade")
      bg.classList.add("show")
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