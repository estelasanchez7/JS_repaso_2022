/*
Ordena 3 números de mayor a menor

Permutaciones con 3 elementos

Posibilidades 3! = 3*2*1 = 6

abc - 321
acb - 312
bac - 231
bca - 132
cab - 213
cba - 123
*/

const numbers = document.querySelector('#numbers')
const result = document.querySelector('#result')

let a = prompt('Introduzca el primer nº')
let b = prompt('Introduzca el segundo nº')
let c = prompt('Introduzca el tercer nº')

numbers.textContent = `Los numeros introducidos son ${a}, ${b} y ${c}`

/*Ejercicio */

if(a>=b && a>=c){
    if(b>=c){
        result.textContent = `El orden es : ${a}, ${b}, ${c}`
    }else{
        result.textContent = `El orden es : ${a}, ${c}, ${b}`
    }

}else if(b>=a && b>=c){
    if(a>c){
        result.textContent= `El orden es : ${b}, ${a}, ${c}`
    }else{
        result.textContent= `El orden es : ${b}, ${c}, ${a}`
    }
    
}else if(c>=a && c>=b){
    if(a>b){
        result.textContent = `El orden es : ${c}, ${a}, ${b}`
    }else{
        result.textContent = `El orden es : ${c}, ${b}, ${a}`
    }
}