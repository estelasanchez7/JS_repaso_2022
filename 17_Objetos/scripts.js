const person = 
{
    name:'Estela',
    age: 28,
    sons:['Alma', 'Leo', 'Stella', 'Pablo', 'Diego']
}

//console.log(person.sons)

/*PARA IMPRIMIR SOLO LA PROPIEDAD */
/*for(const key in person)
{
    console.log(key)
}*/

/*PARA IMPRIMIR SOLO EL VALOR */
/*for(const key in person)
{
    console.log(person[key])
}*/

/*
for(const son of person.sons)
{
    console.log(son)
}*/

/*PARA IMPRIMIR TODO EL OBJETO COMO UNA FRASE */
console.log(`Hola mi nombre es ${person.name}, tengo ${person.age} y mis hijos se llaman ${person.sons.join(', ')}`)