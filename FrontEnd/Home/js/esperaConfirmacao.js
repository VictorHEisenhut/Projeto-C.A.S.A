const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const userEmail = urlParams.get('email')
console.log(userEmail)

let valor = fetch('http://localhost:5145/api/Refugiados',{
                headers: { 
                           'Content-Type': 'application/json'
                          }
              })
        .then(data => data.json())
        .then(post => {
            post.forEach(element => {
                
                if (element.email == userEmail) {
                    console.log(element)
                    if (element.tokenResetSenha != null) {
                        console.log(element.tokenResetSenha)
                        document.getElementById("status").value = "Status: false"
                    }
                    else{
                        document.getElementById("status").value = "Status: true  Você pode fechar esta guia!"
                    }
                    return element
                }
            });
        });   

