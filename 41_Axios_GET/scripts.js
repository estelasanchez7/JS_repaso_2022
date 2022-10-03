/*
Axios es una librería(API) JavaScript que puede ejecutarse en el navegador y que nos permite hacer sencillas las operaciones como cliente HTTP, por lo que podremos configurar y realizar solicitudes (con los métodos GET, DELETE, POST, PUT, PATCH, HEAD Y OPTIONS) a un servidor y recibiremos respuestas fáciles de procesar.

¿Qué es mejor Axios o Fetch?
En conclusión, si vamos a crear un proyecto en dónde haya muchas peticiones http, nos convendría usar axios por su manejo de errores y su sintaxis straight-forward. Pero en el caso de un proyecto más chico, nos podemos arreglar con la api fetch.

-> SI el único objetivo va a ser solo traer datos de una API REST: por ejemplo para traer datos, usa axios

-Pesa muy poco, a diferencia de JQuery
*/

const button = document.querySelector('#button')

button.onclick=()=>{
    axios({
        method:'GET',
        url:'https://jsonplaceholder.typicode.com/users'
    }).then(res=>{
        const list = document.querySelector('#list')
        const fragment = document.createDocumentFragment()
        for(const userInfo of res.data){
            const listItem = document.createElement('LI')
            listItem.textContent =`${userInfo.id} - ${userInfo.name}`
            fragment.appendChild(listItem)
        }
        list.appendChild(fragment)
    })
       
    .catch(err =>console.log(err))
}