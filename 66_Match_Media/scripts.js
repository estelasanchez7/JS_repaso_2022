/*
    https://developer.mozilla.org/es/docs/Web/API/Window/matchMedia

    mql = window.matchMedia(mediaQueryString)
    mql viene de media query list, que es el objeto que se crea con el método matchMedia()
    mediaQueryString es cualquier media query válida en CSS
*/
//SIEMPRE QUE ESTEMOS EN TEMA DE RESPONSIVE UTILIZAR MATCHMEDIA, MUY RECOMENDABLE!!!!
const title = document.getElementById('title')

const mql = matchMedia('(min-width:400px) and (orientation: landscape) and (orientation:landscape)')

const applyMatchMedia = mql =>{
    mql.matches ?
    title.classList.add('clase que sea')
    :
    title.classList.remove('clase que sea')
}

addEventListener('resize', () => applyMatchMedia(mql))
addEventListener('DOMContentLoaded', () => applyMatchMedia(mql))
applyMatchMedia(mql)