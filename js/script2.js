// pedir ao usuário o nome dele e comprimentar 
// let userName = +prompt("Digite o seu nome");
// console.log(userName);



//definam 2 variáveis que guardarão 2 numeros e some no console 

let userName = "Eric"; //string
let age = 18.55; //number
let isStudent = false; //boolean
let user = [userName, age, isStudent, "valores diretos", 1, "teste"]//array
// console.log(user[1]) // Acessa o elemento de index 1

user.unshift("Manu"); // insere no primeiro index do array 
// user.push("Manu"); // insere no último index do array  

user[0] = "Teste";

// console.log(user);

// arrayName.length -> Mostra quantos elementos o array "arrayName" tem


//solicitar ao usuário pelo prompt um index a ser acesado e ai fazer um alert acessando dentro do array o valor que está no  index que o usuário digitou

function accessIndex(){
    let index = +prompt(`Digite o index da variável que deseja acessar (de 0 a ${user.length - 1})`)
    alert(`O elemento de index ${index} é "${user[index]}". O primeiro elemento desse array é "${user[0]}". Esse array tem um total de "${user.length}" elementos, sendo o último elemento "${user[user.length - 1]}"`)
}

//na função, solicitar ao usuário um número para que seja gerada a tabuada do mesmo
// como deve ficar no console: numeroEscolhido x contador = resultado
// * -> operador da multiplicação

function showStudents(){
    let students = ['Reginaldo', 'Lucas', 'Júlia', 'Fernando', 'Rodrigo', 'Vitor']
    for (let index = 0; index < students.length; index++) {
        console.log(`O elemento de index ${index} é ${students[index]}`);
    }
    //for (contador; condicao; incremento )
}

let Reginaldo = {
    studentName: 'Reginaldo',
    studentAge: 18,
    userHeight: 1.71,
    ofAge: true,
    hobbies: ['Jogar', 'Assistir série', 'Tocar violão']
}

console.log(Reginaldo.hobbies[0]);

let videos = [
    {
        name: 'Tutorial avançado de JS',
        duration: '4:30:00',
        link: 'linkdovideo.com'
    },
    {
        name: 'Tutorial avançado de CSS',
        duration: '4:30:00',
        link: 'linkdovideo.com'
    },
    {
        name: 'Tutorial avançado de HTML',
        duration: '4:30:00',
        link: 'linkdovideo.com'
    },
    {
        name: 'Tutorial avançado de Vue',
        duration: '4:30:00',
        link: 'linkdovideo4.com'
    },
    {
        name: 'Tutorial avançado de Laravel',
        duration: '4:30:00',
        link: 'linkdovideo.com'
    },
]

// console.log('Array de objetos (videos)', videos);
// console.log('Objeto (videos[2])', videos[2]);
// console.log('Propriedade do objeto (videos[2].duration)', videos[2].duration);

// console.log(typeof videos, videos); // Array comum
// let videosString = JSON.stringify(videos)
// console.log(typeof videosString, videosString);
// let videosArray = JSON.parse(videosString)
// console.log(typeof videosArray, videosArray);

let button = document.getElementById("action");
button.innerText = "Clicou"