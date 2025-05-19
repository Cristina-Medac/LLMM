
var boton = document.getElementById('btn');

var entrada = document.getElementById('entrada'); //guardo lo que se escribe en el cuadro de texto

boton.addEventListener('click', function () {

    if (entrada.value) {
        //cada elemento que vayamos a usar hay que cogerlo y guardarlo en una variable
        var tareas = document.getElementById('tareas'); //creo variable 'tareas', que guarda el <div> con id=tareas.
        var tareaNueva = document.createElement('div'); //creo variable tareaNueva, que guarda un <div> vacío
        tareas.appendChild(tareaNueva); //con el appendchild meto el div vacío dentro del div de 'tareas'

        var parrafo = document.createElement('p');//creo un párrafo
        tareaNueva.appendChild(parrafo);//meto el párrafo dentro del div que he creado, 'tareaNueva'

        parrafo.innerHTML = entrada.value; //meto el texto del cuadro de texto dentro del párrafo
        tareaNueva.className = "task"; //hago que 'tareaNueva' tenga el mismo aspecto que tiene el div class="task"
        // innerHTML --> permite acceder al contendio de un elemento, incluyendo etiquetas;

        var cruz = document.createElement('span');
        tareaNueva.appendChild(cruz);
        cruz.innerHTML = 'X';
        cruz.className = 'close';//se vuelve a usar la clase para que coja el mismo estilo


        entrada.style.backgroundColor = 'White'; //al terminar el fondo se vuelve blanco
        entrada.value = ""; //al terminar el cuadro de texto está vacío

        //LLAMO A LA FUNCIÓN PARA QUE FUNCIONE LA EQUIS
        cruz.addEventListener('click', function () {
            borrar(tareaNueva); //le paso el div de la tarea

        });


    } else {
        alert("La tarea no puede estar vacía.");
        entrada.style.backgroundColor = 'Grey';
    }

});

function borrar(tareaBorrar) {
    var tareaRealizada = document.getElementById('tareas-realizadas'); //guardo el bloque de la tarea
    tareaBorrar.remove(); //esto es para borrar un elemento
    tareaRealizada.appendChild(tareaBorrar);
    //tareaRealizada es la nueva variable donde voy a guardar la tarea
    //tareaBorrar es la variable que le estamos pasando desde la otra función
}

