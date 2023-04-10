const sizeInput = document.querySelector("input[type=range]")
const pwSizeSpan = document.querySelector(".pw-size")
const generateBtn = document.querySelector(".generate-button")
const containerPassword = document.querySelector(".pw-container")
const passwordField = document.querySelector(".password")

let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%*'

function initEvents(){
    sizeInput.addEventListener('input', e => {
        pwSizeSpan.innerHTML = sizeInput.value
    });

    generateBtn.addEventListener('click', generatePassword)

    containerPassword.addEventListener('click', copyToClipboard)
}

function generatePassword(){
    let pw = '';

    for (let i = 0; i < sizeInput.value; i++){
        let n = characters.length
        pw += characters.charAt(Math.floor(Math.random() * n))
    }

    containerPassword.classList.remove("hide");
    passwordField.innerHTML = pw
}

function copyToClipboard(){
    navigator.clipboard.writeText(passwordField.innerHTML)
    .then(
        alert('Senha copiada!')
    ).catch(err => {
        console.error(err)
    })
}

initEvents();