var nome = window.document.getElementById('nome')
var nomeOK = false
var email = document.querySelector ('#email')


function validarNome(){
    let TxtNome = document.querySelector('#TxtNome')
    if (nome.ariaValueMax.length < 2) {
        TxtNome.innerHTML = "Nome Inválido"
        TxtNome.style.color = 'red'
        nomeOK = false
    }
    else {
        TxtNome.innerHTML = "Nome Válido"
        TxtNome.style.color = 'green'
        nomeOK = true
    }
}

function validarEmail() {
    let TxtEmail = document.querySelector('#TxtEmail')
    if (email.ariaValueMax.indexOf('@') > 0 && email.ariaValueMax.indexOf('.') > 0 ) {
         TxtEmail.innerHTML = 'email inválido'
         TxtEmail.style.color = 'red'
    }
    else {
        TxtEmail.innerHTML = 'email válido'
        TxtEmail.style.color ='green'
    }
}

function Enviar(){
    if(nomeOK == true) {
        alert('preenchido corretamente!')
    }
    else {
       alert('preencha o campo corretamente!')
    }
}