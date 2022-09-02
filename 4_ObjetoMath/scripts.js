/*Objeto Math

Es un objeto estático

Tenemos que usar su nombre para usarlo

Propiedades:
    Math.E - Math.Pi

Métodos:
    Math.abs(x) Devuelve el valor absoluto de x
    Math.ceil(x) Devuelve el entero más grande mayor o igual que un número.
    Math.floor(x) Devuelve el entero más pequeño menor o igual que un número.
    Math.pow(x, y) Devuelve la potencia de x elevado a y
    Math.sqrt(x) Devuelve la raiz cuadrada de x
    Math.random() Genera un número pseudoaleatorio entre 0 y 1
    Math.round(x) Devuelve el valor de un número redondeado al entero más cercano.
    Math.sign(x) Devuelve el signo de la x, que indica si x es positivo, negativo o cero.

*/

console.log(Math.E)
console.log(Math.PI)

let num = 5.3

console.log(Math.abs(num))
console.log(Math.ceil(num))
console.log(Math.floor(num))
console.log(Math.pow(2,3))
console.log(Math.round(Math.random()*5))
/* Para que nos salga un nº entre dos numeros concretos:
console.log(Math.random() * (max - min) + min)
Ej:

 */
console.log(Math.round(Math.random() * (10 - 5) +5))

console.log(Math.sign(800)) // únicos posibles resultados: -1 / 0 / 1

console.log(Math.sqrt(9))
