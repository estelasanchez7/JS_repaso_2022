const fileInput = document.querySelector('#file')
const dropZone = document.querySelector('#drop-zone')

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault()
    dropZone.classList.add('drop-zone--active')
})

dropZone.addEventListener('dragleave', (e) => {
    e.preventDefault()
    dropZone.classList.remove('drop-zone--active')
})

dropZone.addEventListener('drop', (e) => {
    e.preventDefault()
    fileInput.files = e.dataTransfer.files
    console.log(fileInput.files)
})

fileInput.addEventListener('change',(e)=> {
    console.log(fileInput.files)
})
