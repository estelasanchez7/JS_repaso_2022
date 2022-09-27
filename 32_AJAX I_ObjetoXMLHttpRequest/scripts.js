/* Protocolo HTTP: https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto */
/* Códigos de estado de respuesta HTTP: https://developer.mozilla.org/es/docs/Web/HTTP/Status */

const button = document.querySelector('#button')

button.onclick=()=>
{
    let xhr
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest()
    }else{
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }
  
}