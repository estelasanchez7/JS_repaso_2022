/*2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
triángulo = b _ h/2
rectángulo = b _ h
círculo = π _ r2 (pi _ radio al cuadrado)
*/

let figure = prompt('Introduce la figura geométrica de la que quieres calcular el área: triangle, rectangle or circle')

let base;
let height;
let radius;

switch (figure) {
    case 'triangle':
        base = prompt('Introduce la base del triangulo')
        height = prompt('Introduce la altura del triangulo')
        console.log(`El área el triangulo es ${(base * height) / 2}`)
        break
    case 'rectangle':
        base = prompt('Introduce la base del rectángulo')
        height = prompt('Introduce la altura del rectángulo')
        console.log(`El área el rectángulo es ${(base * height)}`)
        break
    case 'triangle':
        radius = prompt('Introduce la base del círculo')
        console.log(`El área el círculo es ${Math.Pi * Math.pow (radius,)}`);
        break
    default: console.log('la figura geométrica no es válida');

}