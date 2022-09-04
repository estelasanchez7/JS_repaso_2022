/*
Sintaxis Simple
switch(evaluación) {
    case n1: 
        //código
    break;
    case n2:
        //código
    break;
    default:
         //código
}
Sintaxis Múltiple
switch(evaluación) {
    case n1:
    case n2:
    case n3:
    case n4:
        //código
    break;
    case n5:
    case n6:
        //código
    break;
    default:
         //código
} 
*/


let num = 3

 /*Sintaxis simple */
switch(num){
    case 1: console.log('Num tiene el valor 1');
    break;
    case 2: console.log('Num tiene el valor 2');
    default: console.log('Num no vale ni 1 ni 2')
}
/*Sintaxis multiple */
switch(num){
    case 1:
    case 3:
    case 5:
    console.log('Num es impar')
    break;
    case 2:
    case 4:
    console.log('Num es par')
}

/*Sintaxis multiple encadenada */
