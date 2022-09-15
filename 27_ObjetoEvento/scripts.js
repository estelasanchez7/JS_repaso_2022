const form = document.getElementById('form')
const input = document.querySelector('#input')
const button = document.querySelector('#button')

/*
input.addEventListener('keyup',(e)=>{
    console.log(e)
})

button.addEventListener('click',(e)=>{
    console.log(e);
})*/

const gallery = document.querySelector('#gallery')
/*
gallery.addEventListener('click',(e)=>{
    console.log(e.target.textContent)
})*/

/*
gallery.addEventListener('click', (e) => {
    e.target.classList.add('red')
})*/

const link = document.querySelector('#link')
link.addEventListener('click',(e)=>{
    e.preventDefault()
})

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log('El formulario se ha enviado')
})

button.addEventListener('click',()=>{
    input.value='Has hecho click'
})