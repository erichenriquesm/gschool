let actionButton = document.getElementById("actionButton");
let inputName = document.getElementById('inputName')
let message = document.getElementById('message')

function action(){
    let inputValue = inputName.value
    if (!inputValue) { //Validação para ver se o usuário preencheu o campo
        message.innerText = 'Preencha o campo!'
        message.style.color = 'red'
        return
    }
}

//innerText é o conteúdo de um elemento
//innerHTML pega o html do elemento