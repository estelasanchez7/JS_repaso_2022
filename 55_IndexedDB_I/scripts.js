/*
+QUÉ ES:
-Es una manera de almacenar datos de manera persistente en el navegador.
-Lo mismo k con local storage. Diferencia: este es xa porciones de datos mas grandes. Ej: perfil completo de un usuario (imagen, likes...)
-Almacena pares clave-valor
-La API es mayormente asíncrona
-Usa eventos DOM xa notificar cuando los resultados están disponibles
-Es orientada a objetos
-Es una base de datos indexada: NoSql (no lo guardamos en tablas)

+CREACIÓN:
-Crear la base de datos a través del objeto indexedDB y el método open()
-Comprobar si la base de datos existe o tiene que ser creada a través del método onupgradeneeded()
-Crear almacén de objetos con el método createObjectStore()
-Escuchar los eventos de éxito y de error con los métodos onsucces() y onerror()
*/

const indexedDB = window.indexedDB

if(indexedDB){
    let db
    const request = indexedDB.open('tasksList',1)

    request.onsuccess=()=>{
        db = request.result
        console.log('open', db)
    }
    request.onupgradeneeded=()=>{
        db = request.result
        console.log('Create', db)
        const objectStore = db.createObjectStore('tasks')
        const objectStore2 = db.createObjectStore('tasks2')
   
    }

    request.onerror=(error)=>{
        console.log('error',error)
    }
}