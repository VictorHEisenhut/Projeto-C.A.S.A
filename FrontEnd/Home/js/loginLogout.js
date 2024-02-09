if(localStorage.getItem("token") === null){
    let logout = document.getElementById("logout").style.display = "none"
    let sideBar = document.getElementById("sideBar").style.display = "none";
}
else{
    let login = document.getElementById("login").style.display = "none"
}

function logout(){
    localStorage.removeItem('token')
    location.reload()
}