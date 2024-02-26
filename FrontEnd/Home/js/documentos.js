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

let IdDocumento;

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
            document.getElementById("cpf").value = value.documento.cpf
            document.getElementById("rg").value = value.documento.rg
            document.getElementById("cnh").value = value.documento.cnh
            document.getElementById("crnm").value = value.documento.crnm
            document.getElementById("rne").value = value.documento.rne
            IdDocumento = value.documento.id
        })





        function ModalConfirmEditar(){
            var modalObj = document.getElementById("ConfirmEditarModal");
            var bg = document.getElementById("modalBackground");
            var close = document.getElementById("ConfirmEditarClose");
            var btnClose = document.getElementById("btnConfirmEditarClose");
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
        
        function showSuccessModal(){
          document.getElementById("cpf").setAttribute("disabled","")
          document.getElementById("rg").setAttribute("disabled","")
          document.getElementById("cnh").setAttribute("disabled","")
          document.getElementById("crnm").setAttribute("disabled","")
          document.getElementById("rne").setAttribute("disabled","")

          document.getElementById("btnIniciarEditar").removeAttribute("hidden")
          document.getElementById("btnConfirmar").setAttribute("hidden","")
        
          var modalObj = document.getElementById("editouModal");
          var bg = document.getElementById("modalBackground");
          var close = document.getElementById("editouClose");
          var btnClose = document.getElementById("btneditouClose");
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
        
        function showErrorModal(){
          var modalObj = document.getElementById("ErrorModal");
          var bg = document.getElementById("modalBackground");
          var close = document.getElementById("ErrorClose");
          var btnClose = document.getElementById("btnErrorClose");
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
        
        
        function confirmaEditar(){
          var modalObj = document.getElementById("ConfirmEditarModal");
          modalObj.style.display = 'none';
          var bg = document.getElementById("modalBackground");
          bg.classList.remove("modal-backdrop")
          bg.classList.remove("fade")
          bg.classList.remove("show")
          document.getElementById("cpf").removeAttribute("disabled")
          document.getElementById("rg").removeAttribute("disabled")
          document.getElementById("cnh").removeAttribute("disabled")
          document.getElementById("crnm").removeAttribute("disabled")
          document.getElementById("rne").removeAttribute("disabled")

          document.getElementById("btnConfirmar").removeAttribute("hidden")
          document.getElementById("btnIniciarEditar").setAttribute("hidden","")
        }
        
        
        async function editar()
            {
                let cpf = document.getElementById("cpf").value
                if(cpf == ""){
                    cpf = null
                }

                let rg = document.getElementById("rg").value
                if(rg == ""){
                    rg = null
                }

                let cnh = document.getElementById("cnh").value
                if(cnh == "" ){
                    cnh = null
                }

                let crnm = document.getElementById("crnm").value
                if(crnm == ""){
                    crnm = null
                }
        
                let rne = document.getElementById("rne").value
                if(rne == ""){
                    rne = null
                }
        
                
                let obj = 
                {
                    cpf:cpf,
                    rg:rg,
                    cnh:cnh,
                    crnm:crnm,
                    rne:rne
                }
                console.log(obj)
                console.log(idRefugiado.nameid)
        
                try{
                  const response = await fetch(`http://localhost:5145/api/Documentos/${IdDocumento}`,
                  {
                      method: "PUT",
                      headers: {'Content-Type': 'application/json'},
                      body: JSON.stringify(obj)
                  })
                      if (await response.ok) {
                        showSuccessModal();
                        console.log("Edição bem-sucedido.");
                      } else {
                        showErrorModal();
                        console.log("Erro ao Editar:", await response.text());
                    }
                } catch (error) {
                  console.error("Erro ao cadastrar:", error);
              }
                  
                }