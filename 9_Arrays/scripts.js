/* 
 - Son estructuras que nos permiten almacenar varios datos y agruparlos.
 - Se pueden llenar con cualquier tipo de dato válido en JavaScript y deben ir separados por comas
 - Se pueden mezclar tipos de datos, pero no es recomendable.
 - Se declaran con llaves cuadradas o corchetes []
 - Pueden declararse vacíos o con un contenido ya establecido
 - Pueden añadirse o eliminarse elementos en el momento que queramos
    let array = [] //Array vacío
    let numeros = [1,2,3,4,5] //Array con contenido inicial
*/

let numeros = [1,2,3,4,5];

let palabras =  ['hola', 'estamos', 'en', 'youtube'];

let booleans = [true, true, false, false];

console.log(numeros[0]+numeros[1]);
console.log(numeros);

console.log(`La palabra "${palabras[2]}" tiene ${palabras[2].length} letras`);