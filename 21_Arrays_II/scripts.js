/* 
Arrays - Métodos II

.from(iterable) - Convierte en array el elemento iterable

.sort([callback]) - Ordena los elementos de un array alfabéticamente(valor Unicode), si le pasamos un callback los ordena en función del algoritmo que le pasemos.

.forEach(callback(currentValue, [index])) - ejecuta la función indicada una vez por cada elemento del array.

.some(callback) - Comprueba si al menos un elemento del array cumple la condición

.every(callback) - Comprueba si todos los elementos del array cumplen la condición

// Estos son más cómodos que usar bucles:

.map(callback) - Transforma todos los elementos del array y devuelve un nuevo array

.filter(callback) - Filtra todos los elementos del array que cumplan la condición y devuelve un nuevo array

.reduce(callback) - Reduce todos los elementos del array a un único valor
*/

/*
let word = 'hello world'
console.log(Array.from(word))
console.log(word.split(''))*/


/*SORT */
/*
const letters = ['b', 'a', 'z', 'n']
const numbers = [1,8,100,300,3]

console.log(letters.sort())
console.log(numbers.sort((a,b)=>a-b))

function menorMayor(a, b) {
    if (a-b < 0) return -1;
    if (a-b > 0) return 1;
    if(a == b) return 0;
    }

function mayorMenor(a, b) {
    if (b-a < 0) return -1;
    if (b-a > 0) return 1;
    if(b == a) return 0;
    }
*/

/*
const numbers = [12, 25, 38, 69]

numbers.forEach((number)=>console.log(number))
numbers.forEach((number, index)=>
    console.log( `${number} está en la posición ${index}`))
*/

/*
const words = ['HTML', 'CSS', 'JS', 'REACT']

console.log(words.some(word => word.length>10))
console.log(words.every(word => word.length>1))
*/

/*
const numbers = [12, 25, 58, 63]

//numbers.map(number=>(console.log(number*2)))

//numbers.filter(number=>(console.log(number>40))) //si quiero que me devuelva un booleano

const numbers2 = numbers.filter(number=>(number > 20))
console.log(numbers2)// si quiero que me devuelva el array filtrado

console.log(numbers.reduce((a,b)=>a+b)) //esto es la suma de todos los números*/

const users = [
    {
        name:'user 1',
        online: true
    },
    {
        name:'user 2',
        online: true
    },
    {
        name:'user 3',
        online: true
    },
    {
        name:'user 4',
        online: false
    },
    {
        name:'user 5',
        online: true
    },
    {
        name:'user 6',
        online: true
    },
    {
        name:'user 7',
        online: false
    },
]

const usersOnline = users.reduce((cont, user)=>{
    if(user.online) cont++
    return cont
},0) //IMPORTANTE PONER EL CONTADOR A 0 CON ,0

console.log(`Hay ${usersOnline} usuarios conectados`)