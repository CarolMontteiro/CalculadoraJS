const VALID_EMAIL = 'carol123@gmail.com';
const VALID_PASSWORD = 'Carol1.';

const campo = document.getElementsByClassName("required");
const emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/;

function setError(index) {
    campo[index].style.background = "#ea7c7c";
}

function removeError(index) {
    campo[index].style.background= "";
}

function validateEmail() {
    if(emailRegex.test(campo[0].value)) {
        console.log('valido');
        removeError(0);
    }else {
        console.log('não validado');  
        setError(0);
    }
}

function logar() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if(email == "carol123@gmail.com" && password == "Carol1.") {
        alert('Sucesso');
        location.href = "index.html";
    }else{
        alert('Email ou senha inválida');
    }
}
