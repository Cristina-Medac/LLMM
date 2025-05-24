
let boton = document.getElementById('btn-añadir');
let entrada = document.getElementById('nuevaTarea');
let titulo;
let tareas;
let bloqueNT;
let spanImportante;
let spanTitulo;
let spanX;
let parrafo;
let ocultar;
let infoExtra;
let fecha;
let caracteres;

function añadirTarea(){


    if (entrada.value){

        titulo = prompt("Introduce el título de la tarea");

        //bloque tareas
        tareas = document.getElementById('tareas');
        bloqueNT = document.createElement('div');
        tareas.appendChild(bloqueNT);
        bloqueNT.className = "tareas";

        //signo para cambiar prioridad
        spanImportante = document.createElement('span');
        spanImportante.innerText = '!';
        bloqueNT.appendChild(spanImportante);
        spanImportante.className = "importante";

        //titulo de la tarea
        spanTitulo = document.createElement('span');
        bloqueNT.appendChild(spanTitulo);
        spanTitulo.innerText = titulo;
        spanTitulo.className="nombre-tarea";

        //boton borrar tarea
        spanX = document.createElement('span');
        spanX.innerHTML = 'X';
        bloqueNT.appendChild(spanX);
        spanX.className = "btn-borrar";

        //parrafo con la tarea completa
        parrafo = document.createElement('p');
        bloqueNT.appendChild(parrafo);
        parrafo.innerText = entrada.value;

        //para la opcion de ocultar texto
        ocultar = document.createElement('span');
        ocultar.innerHTML = 'Ocultar';
        bloqueNT.appendChild(ocultar);
        ocultar.className = "btn-ocultar";

        //apartado de la fecha y el número de caracteres
        infoExtra = document.createElement('p');
        bloqueNT.appendChild(infoExtra);
        fecha = document.createElement('span');
        caracteres = document.createElement('span');
        infoExtra.appendChild(fecha);
        infoExtra.appendChild(caracteres);
        fecha.innerHTML = 'fecha';
        caracteres.innerHTML = 'caracteres';
        infoExtra.className = "info-extra";

        entrada.value = "";

    }else{
        alert("La tarea no puede estar vacía");
    }
};


