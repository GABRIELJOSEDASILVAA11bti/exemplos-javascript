/* exempo 1*/

function mostrarAlerta (){

    let nome = "marcio"
    alert ("Seja bem-vindo(a)," + nome)


}

/* exemplo 2 */

function somar (valorA, valorB){
    alert(valorA + valorB)
}

/* exemplo 3 */

function mensagemBoas-vindas(nome,cargo){

    return 'seja bem-vindo (a) ${cargo} ${nome}'

}

let nome = prompt ("Digite o nome do funcionário:")

alert (mensagemBoasVindas (nome, cargo))
console.log (mensagemBoasVindas(nome, cargo))


/* exemplo 4 */

function multiplicacao (numero1, numero2) {
return numero1 * numero2
}

let multiplicacao1 = multiplicacao (6, 7)
let multiplicacao2 = multiplicacao (9, 10)
let multiplicacao3 = multiplicacao (12, 25)

console.log(multiplicacao1)
console.log(multiplicacao2)
console.log(multiplicacao3)


/* exemplo 5 */

function parOuImpar (numero) {

    if (numero %2 === 0) {

        return "par"
    }

    return "Impar"
}

console.log (parOuImpar(14))


/* exemplo 6 */
 
let numero = 10
const button = document.querySelector
("button")
button.add EventListener ("click" function()) {


    numero ++
    console.log (numero)
} 

console.log (numero)


/* exemplo 7 */


let numero = 10

const button = document.querySelector
("button")

button.addEventListener ("click", ())

=>{

    numero++
    console.log (numero)
}

console.log (numero)


/* exemplo 8 */


let somar = (valor1, valor2) => valor1 + valor2
let multiplicacao = (numero1, numero2) => numero1 * numero2
console.log (somar(10, 70))


