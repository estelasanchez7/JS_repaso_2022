/* 
Arrays - Métodos II

.from(iterable) - Convierte en array el elemento iterable

.sort([callback]) - Ordena los elementos de un array alfabéticamente(valor Unicode), si le pasamos un callback los ordena en función del algoritmo que le pasemos.

.forEach(callback(currentValue, [index])) - ejecuta la función indicada una vez por cada elemento del array.

.some(callback) - Comprueba si al menos un elemento del array cumple la condición

.every(callback) - Comprueba si todos los elementos del array cumplen la condición

.map(callback) - Transforma todos los elementos del array y devuelve un nuevo array

.filter(callback) - Filtra todos los elementos del array que cumplan la condición y devuelve un nuevo array

.reduce(callback) - Reduce todos los elementos del array a un único valor
*/

let word = 'hello world'
console.log(Array.from(word))
console.log(word.split(''))