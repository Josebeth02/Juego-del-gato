let celdas = document.getElementsByClassName("celdas");
const cuadro = document.getElementById("cuadro");
const anuncio = document.getElementsByClassName("anuncio");
const btn = document.getElementById("btn");
let celdasDisponibles =[];
let celdasOcupadas =[];
let celdasDesocupadas =[];

let jugador = true;

const ganar = [
    [0,1,2], [0,4,8], [0,3,6],
    [1,4,7], [2,5,8], [3,5,6],
    [3,4,5], [6,7,8]];

for (let index = 0; index < celdas.length; index++) {
    celdasDisponibles.push(index)
    celdas[index].addEventListener("click",function() {       
    if (celdas[index].textContent == "" ) {
            celdas[index].innerHTML = "X";
            celdasOcupadas.push(index);
            celdasDesocupadas = celdasDisponibles.filter(el => !celdasOcupadas.includes(el));
            retornar()
            ganadores()
               
    }else{
        alert("Casilla ocupada")
    } 
})
}
 function retornar() {
        let num  = celdasDesocupadas[Math.floor(Math.random() * (celdasDesocupadas.length))];
        celdas[num].innerHTML = "O";
        celdasOcupadas.push(num);
        console.log(celdasDesocupadas);
        console.log("Celdas Ocupadas ", celdasOcupadas);
    }

    function ganadores() {
   for (let combinación of ganar) {  
     if (celdas[combinación[0]].textContent == "X" && celdas[combinación[1]].textContent == "X" && celdas[combinación[2]].textContent == "X"){
        alert("¡Ha ganado X!");
        console.log("¡Ha ganado X!");
    }
    if (celdas[combinación[0]].textContent == "O" && celdas[combinación[1]].textContent == "O" && celdas[combinación[2]].textContent == "O"){
        alert("¡Ha ganado O!");
        console.log("¡Ha ganado O!");
     }
     }
     if (celdas) {
      
     }
     btn.addEventListener("click",function() {
      location.reload();
     })
    }


























      // if (celdaContenedores.includes("")){
       // empate++
       // empates.textContent = empate
       // alert("Empate")
       // console.log(empates);
       // return true }
     