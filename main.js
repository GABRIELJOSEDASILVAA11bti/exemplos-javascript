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


