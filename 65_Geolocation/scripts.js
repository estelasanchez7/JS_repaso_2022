/* 
    https://developer.mozilla.org/es/docs/Web/API/NavigatorGeolocation/geolocation
*/

const button = document.getElementById('button')

button.onclick=()=>{
    const geolocation = navigator.geolocation

    geolocation.getCurrentPosition(getPosition, error, options)
}

const options = {
    enableHightAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}

const getPosition = (position) =>{
    console.log(position)
}

const error=(error)=>{
console.log(error)
}