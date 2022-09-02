/*Strings*/

let cadena = 'Hola mundo';

/*PROPIEDADES
length -> Devuelve la longitud de la cadena
*/

console.log(cadena.length);

/* MÉTODOS
Todos los métodos devuelven una cadena nueva, la cadena original no será modificada.

toUpperCase() -> Devuleve la cadena a mayúsculas
*/


/* console.log(cadena.toUpperCase());
console.log(cadena);

let cadenaMayus = cadena.toUpperCase();
console.log(cadenaMayus);*/


/*
toLowerCase() -> Devuelve la cadena a minúsculas
*/

/*let cadenaMinus = cadena.toLowerCase()

console.log(cadenaMinus);*/


/*
indexOf(string) -> Devuelve la posición en la que se encuentra el string, si no lo encuentra devuelve -1
 */

/*console.log(cadena.indexOf('Hola'))
console.log(cadena.indexOf('o'))*/


/*
replace(valor a buscar, valor nuevo) -> Remplaza el fragmento de la cadena que le digamos y pone el valor nuevo
*/
/*console.log(cadena.replace('Hola', 'Estela'))*/


/*substring(inicio [,fin]) Extrae los caracteres desde inicio hasta fin ( el final no se incluye)

NOTA: siempre que encontremos [], será opcional.
*/
/*
console.log(cadena.substring(3,7))
console.log(cadena.substring(2))*/


/*
slice(inicio [,fin]) -> Igual que substring pero admite valores negativos, si ponemos valores negativos empezará desde atrás.

Si no se incluye el final extrae hasta el final
	(2,-4) -> Empieza a contar en el tercer caracter y los 4 últimos no los considera
*/
/*
console.log(cadena.slice(2, -4))
console.log(cadena.slice(1, -2))
console.log(cadena.slice(0, -2))
*/



/*
trim()-> Elimina los espacios al inicio y al final de la cadena
*/
/*
let cadena2 ='     Hola youtube estamos trabajando con cadenas    ';

console.log(cadena2.trim())*/


/*
--ES6--
startsWith(valor [,inicio]) -> Sirve para saber si la cadena empieza con ese valor. Devuleve true o false
*/
/*
console.log(cadena.startsWith('H'))
console.log(cadena.startsWith('h'))

console.log(cadena.startsWith('m', 5))*/
/*
console.log(cadena.endsWith('o'))
console.log(cadena.endsWith('a', 4))
console.log(cadena.endsWith('mundo'))*/


/*
console.log(cadena.includes('n'))
console.log(cadena.includes('a', 2)) //existe a partir de la segunda posicion
console.log(cadena.includes('a', 5)) //no existe a partir de esa posicion*/

/*
repeat(valor) -> Repite el string el número de veces que le indiquemos.
*/

/*
let cadena3 = 'hello'
console.log(cadena3.repeat(3))
console.log('r'.repeat(10))*/

/*Template Strings*/

let nombre = 'Juan'
let apellido ='Gomez'
let edad = 20

console.log('Hola ' + nombre + ' ' + apellido + '. Tienes '+ edad + ' años.')

console.log(`Hola ${nombre} ${apellido}. El año que viene tendrás ${edad+1} años`)