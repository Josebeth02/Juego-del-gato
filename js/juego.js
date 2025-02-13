let celdas = document.getElementsByClassName("celdas");
const cuadro = document.getElementById("cuadro");
const anuncio = document.getElementsByClassName("anuncio");
const btn = document.getElementById("btn");

let jugador = true;

const ganar = [
    [0,1,2], [0,4,8], [0,3,6],
    [1,4,7], [2,5,8], [3,5,6],
    [3,4,5], [6,7,8]];

for (let index = 0; index < celdas.length; index++) {
    celdas[index].addEventListener("click",function() {   
         
   if (jugador == true) {
        celdas[index].innerHTML = "X"  
        jugador = false;
        } else {
        celdas[index].innerHTML = "O"
        jugador = true
        }
        
for (let index = 0; index < ganar.length; index++) { 
     
        }

    })
}




if (ganar == true) {
    jugador = ganar
    alert = "Haz ganado"
} else {

    
    
}