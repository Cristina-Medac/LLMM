
//VARIABLES UTILIZADAS
let boton = document.getElementById('btn-añadir');
let entrada = document.getElementById('nuevaTarea');


//FUNCIÓN PARA AÑADIR UNA TAREA NUEVA
function añadirTarea(){
    if (entrada.value){

        let titulo = prompt("Introduce el título de la tarea");

        //bloque tareas
        let tareas = document.getElementById('tareas1');
        let bloqueNT = document.createElement('div');
        tareas.appendChild(bloqueNT);
        bloqueNT.prioridad = false;
        bloqueNT.className = "tareas1";

        //titulo de la tarea
        let spanTitulo = document.createElement('span');
        bloqueNT.appendChild(spanTitulo);
        spanTitulo.innerText = titulo;
        spanTitulo.className="nombre-tarea";

        //boton borrar tarea
        let spanX = document.createElement('span');
        spanX.innerHTML = 'X';
        bloqueNT.appendChild(spanX);
        spanX.className = "btn-borrar";

        //parrafo con la tarea completa
        let parrafo = document.createElement('p');
        bloqueNT.appendChild(parrafo);
        parrafo.innerText = entrada.value;
        parrafo.className = "fulltext";

        //para la opcion de ocultar texto
        let pOcultar = document.createElement('span');
        pOcultar.innerHTML = 'Ocultar';
        bloqueNT.appendChild(pOcultar);
        pOcultar.className = "btn-ocultar";

        //apartado de la fecha y el número de caracteres
        let infoExtra = document.createElement('p');
        bloqueNT.appendChild(infoExtra);
        let fecha = document.createElement('span');
        let caracteres = document.createElement('span');
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
                pOcultar.innerHTML = 'Ocultar';
            }else {
                parrafo.className = "fulltext";
                pOcultar.innerHTML = 'Mostrar';

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
        let tareasTerminadas = document.getElementById('tareas2');
        tareasTerminadas.appendChild(laTarea);
        
    }
}

