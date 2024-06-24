src="file:///C:/Users/Usuario/Desktop/TrabajoPracticoEspecial/script.js";
document.addEventListener("DOMContentLoaded", function () {
    var boton = document.getElementById('agregar');
    if(boton){
        boton.addEventListener('click', function(){
            alert('boton clickeado');
        });
    } else{
        console.error('El elemento con id "agregar" no fue encontrado');
    }

    const formulario = document.getElementById("formulario").value;
    const tabla = document.getElementById("tabla").value;
    const vaciarTablaBtn = document.getElementById("vaciar_tabla").value;
    const agregarBtn = document.getElementById("agregar").value;
    const eliminarBtn = document.getElementById("eliminar").value;
    const generarAutomaticamenteBtn = document.getElementById("generarAutomaticamente").value;


  
    formulario.addEventListener("formulario", function (event) {
      event.preventDefault();
  
      const nombres = document.getElementById("nombres").value;
      const porcentaje = document.getElementById("porcentaje").value;
  
      agregarElementoTabla(nombres, porcentaje);
  
      formulario.reset();
    });
  
    vaciarTablaBtn.addEventListener("click", function () {
      tabla.querySelector("tbody").innerHTML = "";
    });

    generarAutomaticamenteBtn.textContent = "Generar Automáticamente";
    generarAutomaticamenteBtn.addEventListener("click", function () {
      generarElementosAleatorios(3);
    });
    formulario.appendChild(generarAutomaticamenteBtn);
  
    function agregarElementoTabla(nombres, porcentaje) {
      const fila = document.createElement("tr");
  
      const nombresTd = document.createElement("td");
      nombresTd.textContent = nombres;

      const porcentajeTd = document.createElement("td");
      porcentajeTd.textContent = porcentaje;
  
      const accionesTd = document.createElement("td");
      const eliminarBtn = document.createElement("button");
      eliminarBtn.textContent = "eliminar";
      eliminarBtn.addEventListener("click", function () {
        fila.remove();
      });
  
      accionesTd.appendChild(eliminarBtn);
  
      fila.appendChild(nombresTd);
      fila.appendChild(porcentajeTd);

      tabla.querySelector("tbody").appendChild(fila);
    }
  
    generarElementosAleatorios(3);
  
    function generarElementosAleatorios(cantidad) {
      const nombres = [ "Zanahoria","Papas","Remolacha","Tomate", "Manzana", "Pepino", "Anana", "Frutilla","Pera","Banana","Morron","Naranja","Mandarina"];
      const porcentaje = ["89%","67%","23%","91%", "20%", "19%", "34%","89%","35%","22%","11%"];
  
      for (let i = 0; i < cantidad; i++) {
        const nombres = nombres[Math.floor(Math.random() * nombres.length)];
        const porcentaje = porcentaje[Math.floor(Math.random() * porcentaje.length)];
  
        agregarElementoTabla(nombres, porcentaje);
      }
   }

})
  