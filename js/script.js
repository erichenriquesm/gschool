// pedir ao usuário o nome dele e comprimentar 
// let userName = +prompt("Digite o seu nome");
// console.log(userName);



//definam 2 variáveis que guardarão 2 numeros e some no console 

let userName = "Eric"; //string
let age = 18.55; //number
let isStudent = false; //boolean
let user = [userName, age, isStudent, "valores diretos", 1, "teste"]//array
// console.log(user[1]) // Acessa o elemento de index 1

// user.unshift("Manu"); // insere no primeiro index do array 
// user.push("Manu"); // insere no último index do array  

// user[0] = "Teste";

// console.log(user);

// arrayName.length -> Mostra quantos elementos o array "arrayName" tem


//solicitar ao usuário pelo prompt um index a ser acesado e ai fazer um alert acessando dentro do array o valor que está no  index que o usuário digitou

let students = ["Gui", "João", "Mario"];
function accessIndexes(){
    for (let index = 0; index < students.length; index++) {
        const element = students[index];
        console.log(`O elemento ${element} está no index ${index}`);
    }
}

let me = {
    name: "Eric",
    age: 18,
    height: 1.64,
    hobbies: ["Jogar", "Aprender programação"],
    ofAge: true,
    dogs: [
        {name: "Pingo", raca: "pincher"},
        {name: "Zeus", raca: "pitbull"}
    ]
};

me.dogs.push({name: "teste", raca: "teste"});

console.log(me);
let meString = JSON.stringify(me); //converte array ou objeto em texto(JSON)

console.log(typeof meString, meString);

console.log(JSON.parse(meString)); // converte a string(JSON) em objeto ou array

