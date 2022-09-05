/* Bucles */

/* 
    Determinados

    bucle for

    Su sintaxis se compone de 3 partes
        Iniciación de variable
        Número de vueltas
        Incremento o decremento

    for(let i=0;i<=10;i++){
        Código a ejecutar
    }
*/

let numbers = [14,51,27,83,64,95]

for(let i=0;i<numbers.length;i++){
    console.log(`i vale ${i} y el valor de esa posicion en el array es ${numbers[i]}`)
}

//*NOTA: cuando ponemos.length nunca pondremos <=, ya que nos dará en la última posicion undefined.
