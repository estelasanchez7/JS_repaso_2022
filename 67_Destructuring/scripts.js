/* 
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment

La destructuración es una expresión de JavaScript que hace posible la extracción de datos de arreglos u objetos
*/

const person = {
    name: 'Estela',
    age: 28,
    email: 'stelasv7@gmail.com'
}

//FORMA TRADICIONAL
// const name = person.name
// const age = person.age
// const email = person.email


//FORMA DESTRUCTURING
/*
const {name:nombre, age:edad, email} = person
console.log(nombre, edad, email)
*/
const numbers = [1,2,3,4]

//FORMA TRADICIONAL
//console.log(numbers[0])

//FORMA DESTRUCTURING
/*
const [primeraPosicion,b,c] = numbers
console.log(primeraPosicion)
*/
/*
const printPerson =({name:nombre})=>{
    console.log(nombre)
}
printPerson(person)
*/
const getUsers = async () => {
    const {data: users} = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(users)
}
getUsers()