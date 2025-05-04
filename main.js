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