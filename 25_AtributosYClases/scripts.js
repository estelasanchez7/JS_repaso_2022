/* 
Atributos
    element.getAttribute('attribute')
    element.setAttribute('attribute', value)
Clases
    element.classList.add('class','class',...)
    element.classList.remove('class','class',...)
    element.classList.contains('class')
    element.classList.replace('oldClass', newClass)
    
    element.classList.toggle('class'[,force])
atributos directos
    id
    value
*/

const title = document.querySelector('#title')
const names = document.querySelector('#name')

//console.log(names.getAttribute('type'))
/*names.setAttribute('type','date')
console.log(names)*/

//title.classList.add('main-title', 'other-title')
//title.classList.remove('title')

/*
if(title.classList.contains('title'))
console.log('Title tiene la clase title')
else console.log('Title no tiene la clase title'
) */

//title.classList.replace('title','main-title')

//console.log(title.innerHTML)
console.log(names.value.length)
/*
console.log(title)
console.log(names)*/