'use strict';

const contenedorElementos = document.getElementById('elementos');
const cantidadMascotas = parseInt(prompt('Cuantos animales deseas ingresar? '));

let i = 0;
let mascotas = [];
let listaMascotas= '';

while (i < cantidadMascotas){
    alert('Datos de la mascota: ' + (i+1));
    const id = (i + 1);
    const nombre = prompt("Ingrese el nombre de su mascota ")
    const raza = prompt("Ingrese la raza de su mascota ")
    const sexo = prompt("Ingrese el sexo de su mascota ")
    const fechaNacimiento = prompt("Ingrese la fecha de nacimiento de su mascota ")
    const familia = prompt("Ingrese el apellido de la familia que lo adopto ")
    const vacunas = prompt("Cuantas vacunas se ha dado su mascota? ")
    const visitasVete = prompt("Cuantas veces va al veterinario? ")
    const alimentacion = prompt("Que alimentos consume? ")
    mascotas.push([id, nombre, raza, sexo, fechaNacimiento, familia, vacunas, visitasVete]);
    i+=1;
}

i=0;
while (i < mascotas.length){
    listaMascotas += `
        <tr>
            <td scope="col">${mascotas[i][0]}</td>
            <td scope="col">${mascotas[i][1]}</td>
            <td scope="col">${mascotas[i][2]}</td>
            <td scope="col">${mascotas[i][3]}</td>
            <td scope="col">${mascotas[i][4]}</td>
            <td scope="col">${mascotas[i][5]}</td>
            <td scope="col">${mascotas[i][6]}</td>
            <td scope="col">${mascotas[i][7]}</td>
            <td scope="col">${mascotas[i][8]}</td>
        </tr>
    `
    i++;
}

contenedorElementos.innerHTML = `
<br>
<table class="table table-hover table-dark table-sm">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nombre</th>
      <th scope="col">Raza</th>
      <th scope="col">Sexo</th>
      <th scope="col">Familia</th>
      <th scope="col">Fecha de Nacimiento</th>
      <th scope="col">Vacunas</th>
      <th scope="col">Visitas al Veterinario</th>
      <th scope="col">Alimentación</th>
    </tr>
  </thead>
  <tbody>
    ${listaMascotas}
  </tbody>
</table>`
;

/*Clases y herencias*/
class Animal{
    constructor(especie, nombre, ){
        this.especie = especie;
        this.nombre = nombre;
        this.alimentacion = alimentacion;
        this.comunicacion = comunicacion;
        this.domestico = domestico;
    }
}

/*Clase hija*/
class Animales{
    constructor(nombre,dueña,raza,edad,actividades,comida,visitasAlVeterinario, vacunas){
        this.nombre=nombre;
        this.dueña=dueña;
        this.raza=raza;
        this.edad=edad;
        this.actividades=actividades;
        this.comida=comida;
        this.vistasAlVeterinario=visitasAlVeterinario;
        this.vacunas=vacunas
    }
}

let china= new Animales("China","Gisela Flores","Atigrado","4 años","Romper notebook", "Atún, pescado, catchow", "Todos los sábados", "Todas")
console.log(china)