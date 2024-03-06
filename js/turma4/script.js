//(var, let e const) nomeCompleto = valor;
// Crie uma variável chamada userName
// Atribua o seu nome como o valor dessa variável
// Faça um console nessa variável para mostrar seu nome no console do navegador

// let helloWorld = "Hello, World";


//peça para o usuário digitar o nome dele e mostre no console "boa tarde com o nome do usuário"

//digite 2 numeros pelo navegador (prompt) e mostre no console a soma dos dois números

// let firstNumber = +prompt("Digite o primeiro número");
// let secondNumber = +prompt("Digite o segundo número");

// console.log(firstNumber + secondNumber);



// let userName = "Eric", age = 18, student = false;

// console.log(typeof userName, typeof age, typeof student);



// console.log("Meu nome é " + userName + " e tenho " + (age + 2) + " anos");

// console.log(`Meu nome é ${userName} e tenho ${age} anos`);


// soma : +
// subtrair : -
// multiplicar : *
// dividir : / 
// exponênciar **


// pedir ao usuario uma base e altura de um retângulo e mostrar a aréa do retângulo: base vezes a altura

// let base = +prompt("Digite a base (cm) "), altura = +prompt("Digite a altura (cm)");

// console.log(`A aréa do retângulo é: ${base * altura}cm²`);

let userName = "Eric"; //string
let number = 18.55; //number
let isStudent = false; //boolean

//array

let user = [userName, number, isStudent, "valor direto", 18, true, 'Eric'];

// user.push("Manu"); inserir na última posição
// user.unshift("Manu"); inserir na primeira posição 
// console.log(user);


//ao clicar no botão, solicitar ao usuário qual index ele quer acessar dentro do array user e, logo após, apresentar por meio do alert o valor

// function accessIndex(){
//     let index = +prompt(`Digite o index do elemento que seja acessar (de 0 a ${user.length - 1})`);
//     alert(`O elemento de index ${index} é ${user[index]}. O primeiro elemento desse array é ${user[0]} e o último elemento desse array é ${user[user.length - 1]}`);
// }

// //solicitar um número para o usuário e gerar a tabuada daquele número 

// // numDigitado x contador = cálculo
// //5 x 10 = 50

// function helloWorld10(){
//     for (let contador = 1; contador <= 10; contador = contador + 1) {
//         console.log("Hello, World" + contador);
//     }

//     //for(contador; condicao; passo)

// }

// function accessIndexes(){
//     let students = ['Vitor', 'Jair', 'Miquael', 'Maria', 'Felipe']
//     for (let index = 0; index < students.length; index++) {
//         const element = students[index];
//         console.log(element);
//     }
// }


// let meArray = ["Eric", 18, 1.64, true, ["Jogar", "Programar"]];


// let me = {
//     name: "Eric",
//     age: 18,
//     height: 1.64,
//     ofAge: true,
//     hobbies: ["Jogar", "Programar"]
// };

// //title, duration:(4:00:00), link
// let videos = [
//     {
//         title: "Aprendendo JS",
//         duration: "4:00:00",
//         link: "https://youtube.com"
//     },
//     {
//         title: "Aprendendo HTML",
//         duration: "2:00:00",
//         link: "https://youtube.com"
//     },
//     {
//         title: "Aprendendo CSS",
//         duration: "2:00:00",
//         link: "https://youtube.com"
//     }
// ]

// // for(let index = 0; index < videos.length; index++) {
// //     console.log(videos[index].title);
// // }


// console.log(typeof videos);

// let videosJson = JSON.stringify(videos); // converte array/objeto em string(JSON)

// console.log(typeof videosJson, videosJson);

// console.log(JSON.parse(videosJson)); // transforma a string(JSON) em um array ou obejto novamente


// let actionButton = document.getElementById("actionButton");
// let inputAge = document.getElementById("inputAge");
// let message = document.getElementById('message')

// let localAge = localStorage.getItem('localAge')

// if (localAge) {
//     inputAge.value = localAge
//     action()
// }

function action() {
    let data = {
        nome: "Eric",
        idade: 18
    } 
    
    fetch("https://webhook.site/3199b824-acd0-44f6-9482-6dc31bb7b218", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    
}

action();