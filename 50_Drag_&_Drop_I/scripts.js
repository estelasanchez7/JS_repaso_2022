/*
    API drag & drop:
    Existen dos partes principales en esta API, el objeto a arrastrar y la zona donde vamos a dejarlo
    Para controlar estas acciones tenemos varios eventos de cada una de las partes

        Objeto a arrastrar:
            dragstart: Se dispara al comenzar a arrastrar
            drag: Se dispara mientras arrastramos
            dragend: Se dispara cuando soltamos el objeto

        Zona de destino:
            dragenter: Se dispara cuando el objeto entra en la zona de destino
            dragover: Se dispara cuando el
            objeto se mueve sobre la zona de destino
            drop: Se dispara cuando soltamos el objeto en la zona de destino (este siempre hay que ponerlo con dragover + (e) + e.preventDefault()porque sino no funciona)
            dragleave: Se dispara cuando el objeto sale de la zona de destino (aquí tb poner (e) + e.preventDefault()porque sino no funciona)
*/

const charmander = document.getElementById('charmander')
const dropZone = document.getElementById('drop-zone')

/*charmander.addEventListener('dragend',()=>{
    console.log('Drag end')
})*/

dropZone.addEventListener('dragover', (e)=>{
    e.preventDefault()
    console.log('Drag over')
})


dropZone.addEventListener('drop', (e)=>{
    e.preventDefault()
    console.log('Drop')
})

dropZone.addEventListener('dragleave', (e)=>{
    e.preventDefault()
    console.log('Drag leave')
})

