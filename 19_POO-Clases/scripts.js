class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad

        this.datos = `Me llamo ${nombre} ${apellido} y tengo ${edad} años`
    }

    saludar(){
        return `Hola me llamo ${this.nombre} y tengo ${this.edad} años`
    }
}

const estela = new Persona('Estela', 'Sánchez', 28)
const marta = new Persona('Marta', 'Sanchez', 38)

console.log(estela)
console.log(estela.saludar())