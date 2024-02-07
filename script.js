let password = document.getElementById("password");
let eye = document.getElementById("eye");

eye.onclick = function () {
  if(password.type == "password"){
    password.type ="text"
    eye.src = "/media/eye-open.png"
  }else{
    password.type ="password"
    eye.src = "/media/eye-close.png"
  }
  
}
