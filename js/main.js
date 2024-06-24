const numCaptcha = document.getElementById("numCaptcha");
let num= Math.floor(Math.random() * 100);
numCaptcha.innerText= num;

const validarBtn = document.getElementById("validarCaptcha");
validarBtn.addEventListener ("click", validarCaptcha);

const form = document.getElementById("formulario");
const aviso = document.getElementById("aviso");

form.addEventListener("submit", enviarForm);

function validarCaptcha (){
    const inputCaptcha = document.getElementById("inputCaptcha").value;
    if(inputCaptcha== numCaptcha.innerText) {
        console.log(true);
        return true; 
    } else{
        console.log(false);
        return false;
    }
}

function enviarForm(e){
    e.preventDefault();

    if(validarCaptcha()){
        aviso.innerText = "Captcha valido, formulario enviado";
    } else{
        aviso.innerText = "Captcha NO valido, no se envio nada";
    }
}

  