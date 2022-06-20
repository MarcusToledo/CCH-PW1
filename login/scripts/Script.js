 window.onload = function(){
     const date = new Date();
   
     document.getElementById("current_date").innerHTML = " " + date.toLocaleDateString();
 }


 // Validação de logout
var btnLogout = document.getElementById('btnLogout');

 let isLogado = true;
 btnLogout.onclick = () => {
      if(isLogado){
          alert("Você saiu do sistema. Até mais!");
          isLogado = false;
          window.location = "../../../index.html";
      }
 }
