const button = document.querySelector('#button')

/*
Objeto window - Es el objeto global, de él descienden todos los objetos
    alert()
    prompt()
    confirm()
*/

//alert('Hola')
//addEventListener('click', (e)=>{console.log(e)})

/*let name = prompt('Escriba su nombre')
console.log(name)*/

/*NO SE USA - SE USA UNA VENTANA MODAL YA QUE NO SE PUEDE DAR ESTILO */
/*
if(confirm('Acepta?')){
    console.log('El usuario aceptó')
} else{
    console.log('El usuario no aceptó')
}*/


/* Objeto console - Es el objeto que contiene la consola del navegador
    https://developer.mozilla.org/es/docs/Web/API/Console
    console.log()
    console.dir()
    console.error()
    console.table()
*/

//console.dir(button)
//console.error()

/*
const person = {
    name: 'Dorian',
    age: 30,
    email: 'dorian@gmail.com'
}
console.table(person)*/

/* Objeto location - Es el objeto que contiene la barra de direcciones
    https://developer.mozilla.org/es/docs/Web/API/Location
    location.href
    location.protocol
    location.host (Nos da el dominio principal)
    location.pathname (Quita el dominio principal y nos da los subdirectorios)
    location.hash (a través del dom puedes cambiar unos links u otros)
    location.reload()
*/


//console.log(location.href)
//console.log(location.protocol)
//console.log(location.host)
//console.log(location.pathname)
//console.log(location.hash)
//location.reload()

//location.href = 'https://google.com'

/* Objeto history
    https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador

    3 Metodos:
    back() ->atras
    forward() ->alante
    go(n|-n) -> x paginas hacia alante o atras. numero positivo|numero negativo

    1 Propiedad:
    length
*/
 /* esto se tiene que hacer insepccionando directamente en la pagina, no con codigo aquí. */


/* Objeto date
    https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date
    https://www.w3schools.com/jsref/jsref_obj_date.asp
*/

/* PARA USAR EL OBJETO DATE ES NECESARIO INSTANCIARLO, ES DECIR, LLAMARLO. */

/*
const date = new Date()

console.log(date.getDate())
console.log(date.getDay()-1)// Domingo es el día 0 - Enero es el mes 0
console.log(date)
*/

/* const date = new Date()
console.log(date) */

/*
Timers
    Timeout:
    https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout

    setTimeout(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función despues de delay. Si lo referenciamos mediante una variable/constante podemos pararlo con clearTimeout(referencia)

    Interval:
    https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

    setInterval(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función cada delay milisegundos. Si lo referenciamos mediante una variable/constante podemos pararlo con clearInterval(referencia)
*/
/*
button.onclick=()=>{
    setTimeout(saludar,3000)
}
*/
/*
button.onclick=()=>{
    setTimeout(()=>{
        console.log('BYE')
    },3000)
}*/
/*
const timeout = setTimeout (()=>{
    console.log('HELLO')
},3000)

button.onclick=()=>{
    clearTimeout(timeout)
}
*/

const saludar = () =>
{
    console.log('Hola')
}

//const interval = setInterval(saludar, 3000);

let cont = 0
const interval = setInterval(()=>{
    console.log(cont)
    cont++
},3000)

button.onclick=()=>{
    clearInterval(interval)
}