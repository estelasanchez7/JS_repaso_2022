/*
    Fetch API
        blob(): Binary Long Object
        Si ponemos la ruta hacia el archivo podemos leer ese archivo y renderizarlo en pantalla

        URL: Con el objeto URL usando el método createObjectURL(archivo) podemos crear una ruta válida para ver ese archivo
        https://developer.mozilla.org/es/docs/Web/API/URL
*/

const buttonImg = document.querySelector('#button-img')
const buttonPDF = document.querySelector('#button-pdf')

buttonImg.onclick=()=>{
    fetch('charmander.png')
    .then(res=>res.blob())
    .then(img=>{
        document.querySelector('#img').src= URL.createObjectURL(img)
    })
}

buttonPDF.onclick=()=>{
    fetch('esanchez_U3_TAREA.pdf')
    .then(res=>res.blob())
    .then(pdf=>{
        document.querySelector('#pdf').href=URL.createObjectURL(pdf)
    })
}