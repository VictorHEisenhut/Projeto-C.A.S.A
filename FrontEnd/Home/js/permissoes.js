if(localStorage.getItem("token") === null){
    let logout = document.getElementById("logout").style.display = "none"
    let sideBar = document.getElementById("sideBar").style.display = "none";
}
else{
    let login = document.getElementById("login").style.display = "none"
}

function logout(){
    localStorage.removeItem('token')
    window.location.href = "/html/index.html"
}

let tokenInfo = localStorage.getItem('token')

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

let InfoConta = parseJwt(tokenInfo);

if(InfoConta.role == "admin"){
    let linkDocumentos = document.getElementById("linkDocumentos").style.display = "none";
}
else{
    let linkAdmin = document.getElementById("linkAdmin").style.display = "none";
}