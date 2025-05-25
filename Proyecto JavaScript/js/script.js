

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
        let pOcultar = document.createElement('p');
        pOcultar.innerHTML = 'Mostrar';
        bloqueNT.appendChild(pOcultar);
        pOcultar.className = "btn-ocultar";

        //apartado de la fecha y el número de caracteres
        let infoExtra = document.createElement('p');
        bloqueNT.appendChild(infoExtra);
        let fecha = document.createElement('span');
        let caracteres = document.createElement('span');
        infoExtra.appendChild(fecha);
        infoExtra.appendChild(caracteres);
        infoExtra.className = "info-extra";

        let f_actual = new Date(); //crea objeto Date con la fecha y hora actual
        let f_texto = f_actual.toLocaleDateString('es-Es'); //convierte esta fecha a un formato legible de un idioma especificado
        fecha.innerHTML = f_texto + " | ";

        let n_carac = entrada.value.length; //coge los caracteres introducidos y cuenta su longitud
        caracteres.innerHTML = n_carac + " caracteres."

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

        //actualizo el contador llamando a la función
        actualizarContador();
        
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
    actualizarContador();
}

//FUNCIÓN PARA ACTUALIZAR EL CONTADOR
function actualizarContador(){
        let contenedor = document.getElementById('tareas1');//tareas1 = tareas pendientes
        let divs = contenedor.getElementsByTagName('div');//busco todos los 'div' que hay y los guardo en una lista
        let num_divs = divs.length;
        document.getElementById('contador').innerText = num_divs -1; //cambio el número que hay  
}


//FUNCION PARA CAMBIAR EL ESTILO A MODO OSCURO
function cambiarEstilo(){
    document.body.classList.toggle("modo-oscuro"); 
    //toglle --> si no tiene la clase modo-oscuro, la pone. Si tiene la clase modo-oscuro, la quita
}

//FUNCIÓN PARA CAMBIAR EL ORDEN DE LOS CARACTERES
function invertirTexto(id){
    let elementos = document.getElementById(id);
    elementos.innerText = elementos.innerText.split("").reverse().join("");
}

function alreves(){
   let ids = ["1","2","3","btn-añadir","cambiar-estilo","reves"];
   ids.forEach(invertirTexto);
}
