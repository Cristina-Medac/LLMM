
//VARIABLES UTILIZADAS
let boton = document.getElementById('btn-añadir');
let entrada = document.getElementById('nuevaTarea');
let titulo;
let tareas;
let bloqueNT;
let spanImportante;
let spanTitulo;
let spanX;
let parrafo;
let pOcultar;
let infoExtra;
let fecha;
let caracteres;
let tareasTerminadas;
let textoCompleto;





//FUNCIÓN PARA AÑADIR UNA TAREA NUEVA
function añadirTarea(){
    if (entrada.value){

        titulo = prompt("Introduce el título de la tarea");

        //bloque tareas
        tareas = document.getElementById('tareas1');
        bloqueNT = document.createElement('div');
        tareas.appendChild(bloqueNT);
        bloqueNT.prioridad = false;
        bloqueNT.className = "tareas1";

        //signo para cambiar prioridad
        /*spanImportante = document.createElement('span');
        spanImportante.innerText = '!';
        bloqueNT.appendChild(spanImportante);
        spanImportante.className = "importante";*/

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
        parrafo.className = "fulltext";

        //para la opcion de ocultar texto
        pOcultar = document.createElement('span');
        pOcultar.innerHTML = 'Ocultar';
        bloqueNT.appendChild(pOcultar);
        pOcultar.className = "btn-ocultar";

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
        
        //llamada a la función para borrar tarea
        spanX.onclick = function(){
            eliminarTarea(bloqueNT);
        }
        
        
        //FUNCIÓN PARA MOSTRAR Y OCULTAR
        pOcultar.addEventListener('click', function(){
            
            if(getComputedStyle(parrafo).display === 'none'){
                parrafo.className = "verTexto";
            }else {
                parrafo.className = "fulltext";
            }
        })
        
    }else{
        alert("La tarea no puede estar vacía");
    }
};

//FUNCIÓN PARA ELIMINAR LA TAREA
function eliminarTarea(laTarea){
    if(laTarea.parentNode.id ==='tareas2'){
        laTarea.remove();  
    }else {
        tareasTerminadas = document.getElementById('tareas2');
        tareasTerminadas.appendChild(laTarea);
        
    }
}







/*//lamo a la función de cambiar prioridad
spanImportante.onclick = function (){
    cambiarPrioridad(bloqueNT);
}

function cambiarPrioridad(bloqueImportante){
    if(bloqueImportante.prioridad === false){
        bloqueImportante.style.border = '4px solid rgb(195, 14, 14)';
        bloqueImportante.prioridad = true;

    }else {
        bloqueImportante.style.border = "";
        bloqueImportante.prioridad = false;
    }
}*/