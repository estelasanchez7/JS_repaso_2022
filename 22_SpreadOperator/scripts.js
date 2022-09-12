/*
Spread Operator (operador de expansión)

Su sintaxis es ...

// 1- Enviar elementos en un array a una función

// 2- Añadir un array a otro array

// 3- Copiar arrays

// 4- Concatenar arrays

// 5- Enviar un número indefinido de argumentos a una función (parámetros REST)

// 6- Librería math

// 7- Eliminar elementos duplicados

*/

const numbers = [-12, 82, 95, 27, 27, 65, 100]
//console.log(...numbers)

// 1- Enviar elementos en un array a una función
/*
const addNumbers = (a, b, c) => {
    console.log(a+b+c)
}

let numbersToAdd = [1,2,3]

addNumbers(...numbersToAdd)
*/

// 2- Añadir un array a otro array

/*
let users = ['javier', 'david', 'rosa', 'juan', 'mercedes']
let newUsers = ['marta', 'jaime', 'laura']*/

  //Antigua forma
/*users.push(newUsers[0], newUsers[1], newUsers[2])
console.log(users)*/

 //Nueva forma
 /*
//users.push(...newUsers)
users.splice(2,0,...newUsers) //más métodos
console.log(users)*/


// 3- Copiar arrays
/*
let arr1 = [1,2,3,4,5]
let arr2 = [...arr1]
console.log(arr2)
*/

// 4- Concatenar arrays
/*
let arr1 = [1,2,3,4,5]
let arr2 = [6,7,8]*/

//AntiguaForma
/*let arrConcat = arr1.concat(arr2)
console.log(arrConcat)*/
/*
let arrConcat = [...arr1, ...arr2]
console.log(arrConcat)*/


// 5- Enviar un número indefinido de argumentos a una función (parámetros REST)
/*
const restParms = (...numbers) => {
    console.log(numbers)
}

restParms(1,2,3)
*/

// 6- Librería math
/*
console.log(Math.max(...numbers)) // si no pusieramos ... no lo podriamos calcular ya que estaría dentro de un array y nos daría NaN

*/

// 7- Eliminar elementos duplicados
console.log([...new Set(numbers)])