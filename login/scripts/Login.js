// Validação de login
function validaLogin(event){
    event.preventDefault();
    let isLogado = false;

    let user = document.getElementById("login").value.toLowerCase();
    let pass = document.getElementById("password").value.toLowerCase();
    
    // Valida dados inseridos e faz o encaminhamento a página correta
    if(user == "admin" && pass == "admin"){
        isLogado = true;
        alert("Bem vindo, Administrador!");
        window.location.href = "CCH-PW1/login/adm/adm.html";
    } else if (user == "diretor" && pass == "diretor"){
        isLogado = true;
        alert("Bem vindo, Diretor!");
        window.location.href = "CCH-PW1login/diretor/diretor.html";
    } else if (user == "respo1" && pass == "respo1"){
        isLogado = true;
        alert("Bem vindo, Responsável!");
        window.location.href = "CCH-PW1/login/responsaveis/respo.html";
    }

    if(!isLogado){
        alert("Dados incorretos!");
    }
}

let btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click', validaLogin);
