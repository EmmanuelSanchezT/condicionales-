/* var numA = 10;
var numB = 5;
var numC = 10;
 */

let numA = prompt ("ingrese un número");
let numB = prompt ("ingrese un número");
let numC = prompt ("ingrese un número");


if (numA === numB && numA === numC) {
   document.write("Todos los números son iguales")
 }else if(numA > numB){ // se cumple si A es mayor que B
   if(numA > numC){
    document.write("El número A", numA, "es el mayor")
   } else if(numC > numA){
    document.write("El número C", numC, "es el mayor")
   } else{
    document.write("El número A y el número C son iguales", numA, numC)
   }
 } else if(numB > numA){ // se cumple si B es mayor que A
   if(numB > numC){
    document.write("El número B", numB, "es el mayor")
   } else if(numC > numB){
    document.write("El número C",numC,"es el mayor")
   }else {
    document.write("El número B y el C son iguales", numB, numC)
   }
 } else { 
    document.write("El número B y el A son iguales", numA, numB)
 }
