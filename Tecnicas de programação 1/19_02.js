console.log("primeira aula de javascript")

let steveRogers = 'Capitão América';
var tonyStark = 'Homem de Ferro';
console.log("Super-heróis da Marvel: " + steveRogers + " " + tonyStark);

let pagamento = 1500.50;
var conta = 2356;
console.log("Fazer pagamento de: " + pagamento + " Na conta: " + conta);


if(true){
    var hulk = 'Eric Bana'
    console.log(hulk)
}
console.log(hulk)

if(true){
    let hulk = 'Mark Ruffalo'
    console.log(hulk)
}
console.log(hulk)


let idade = 80 // Number
let nome = "Steve Rogers" // String
let capitao = { nome: "Steve Rogers", idade: 80 } // Object
console.log('Nome do personagem: ' + capitao.nome + " idade: " + capitao['idade']);



let x = 10
let y = x
y = y + 10
console.log(`x: ${10} y: ${10}`)


let obj = {
    x: 10,
    y: "ABC"
}
let obj2 = obj
obj2.x = 20
console.log(`obj: ${obj.x} obj2: ${obj2.x} y: ${obj2.y}`)


function calcularPotencia(base, exponente) {
    return base ** exponente;
  }
  
  let resultado = calcularPotencia(2, 3);
  console.log('resultado: ' + resultado);

  
  



