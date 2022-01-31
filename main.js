
var clases = document.querySelector("#side").classList;

function toggleBtn(){
    clases.toggle("closed");
    clases.toggle("btn");
    clases.remove("btn2");
}

function ver(){
    if (!clases.contains("closed")) {
        clases.add("closed");
    }
}

function mouseSobreElSide(){
    if (clases.contains("closed")) {
        clases.remove("closed");
    }
}

 function mouseSaleDelSide(){
    if (!clases.contains("closed") && !clases.contains("btn") && !clases.contains("btn2")) {
        clases.add("closed");
    }
}

for (let i= 0; i < 11; i++) {
    document.querySelector(".table tbody").innerHTML += `
<tr>
<td>Oficina Central</td>
<td>Reconstrucción</td>
<td>Carlos Feliz</td>
<td>8095330538</td>
<td>Escaner</td>
<td>Luz roja encendida de manera intermitente y no permite escanear</td>
<td>En Proceso</td>
<td></td>
</tr>
`    
}

/*----------------------Active class---------------------------*/

/*var href = location.href;

switch (href) {
    case "http://127.0.0.1:5500/#1":
        console.log("Estás en Inicio");
        document.querySelector(".side ul li.home").classList.add("active");
        break;

    case "http://127.0.0.1:5500/#2":
        console.log("Estás en Productos");
        document.querySelector(".side ul li.productos").classList.add("active");
        break;
        
    case "http://127.0.0.1:5500/#3":
        console.log("Estás en Nosotros");
        document.querySelector(".side ul li.nosotros").classList.add("active");
        break;

    case "http://127.0.0.1:5500/#4":
        console.log("Estás en Contacto");
        document.querySelector(".side ul li.contacto").classList.add("active");
        break;

    default:
        console.log("Estás en Inicio");
        break;
}*/

/*--------------------------Modal---------------------------------------------------*/


let cerrarModalBtn1 = document.querySelectorAll(".closeModal")[0];
let cerrarModalBtn2 = document.querySelectorAll(".closeModal")[1];
let abrirModal = document.querySelectorAll(".openModal")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalContainer = document.querySelector(".modalContainer");

abrirModal.addEventListener("click", function(e) {
    e.preventDefault();
    modalContainer.style.opacity = "1"
    modalContainer.style.visibility = "visible"
    modal.classList.toggle("modalClose");
});

cerrarModalBtn1.addEventListener("click", function(e) {
    modal.classList.toggle("modalClose");
    setTimeout(function() {
    modalContainer.style.opacity = "0"
    modalContainer.style.visibility = "hidden"  
    }, 300)  
})

cerrarModalBtn2.addEventListener("click", function(e) {
    modal.classList.toggle("modalClose");
    setTimeout(function() {
    modalContainer.style.opacity = "0"
    modalContainer.style.visibility = "hidden"  
    }, 300)  
})

window.addEventListener("click", function(e) {
    if(e.target == modalContainer){
        modal.classList.toggle("modalClose");
        setTimeout(function() {
        modalContainer.style.opacity = "0"
        modalContainer.style.visibility = "hidden"  
        }, 300)
    }
})



class usuarios{
    nombre="";
    apellido="";
    salario="";
    estatus="";
}

let cambio = 15.3;
let mensaje = "Hola Nadie";

function comprar(moneda, cantidad, mensaje) {
    resultado = (moneda / cambio) * cantidad;
    console.log(`Este es el mensaje ${mensaje} ${resultado}`);
}

comprar(25, 750, "Hola Nadie");




 
 