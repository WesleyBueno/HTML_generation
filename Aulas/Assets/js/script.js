let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let mapa = document.querySelector('#mapa')
let nomeOK= false
let emailOk= false
let assuntoOK = false
let input = document.querySelector('#input')



function validaNome(){
    let txt = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txt.innerHTML ='Nome inválido'
        txt.style.color = 'red'
    } else{
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
        nomeOK = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = 'red'
    }else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = 'green'
        emailOK = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    
    if(assunto.value.length >=100){
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOK = true
    }
}

function enviar(){
    if (nomeOK == true && emailOK == true && assuntoOK == true) {
        alert ('Formulário enviado com sucesso!')
    } else {
        alert ('Preencha o formulário corretamente')
    }
}

function mapaZoom(){
    mapa.style.transform = 'scale(1.4)'
    mapa.style.transition = '0.3s'
}

function mapaNormal(){
    mapa.style.transform = 'scale(1.0)'


    mapa.style.transition = '0.3s'
}

