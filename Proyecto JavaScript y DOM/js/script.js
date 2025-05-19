
let texto = document.getElementById("nuevatarea"); //caja de texto
let btn_add = document.getElementById("botonañadir"); //boton de añadir



btn_add.addEventListener('click', function (){

  let nuevaTarea = document.getElementById("tareas1");
  let bloque = document.createElement('div');
  nuevaTarea.appendChild(bloque);

  
  let importante = document.createElement('span');
  let sig_importante = "!";
  bloque.appendChild(importante);
  importante.className = "importante";
  importante.innerHTML= sig_importante;

  //creo un span y lo pongo en el bloque
  let espacioTitulo = document.createElement('span');
  bloque.appendChild(espacioTitulo);
  
  //creo un parrafo, lo meto en el bloque, y le añado el contenido
  let parrafo = document.createElement('p');
  bloque.appendChild(parrafo);
  parrafo.innerHTML = texto.value;

  //pregunto el título que quiere y lo meto dentro del hueco para el titulo del span
  let nombreTitulo = prompt("Introduce el título de la tarea: ");
  espacioTitulo.innerHTML = nombreTitulo;







})


