// --- 1. Referencias a los elementos HTML clave ---
// Primero, "guardamos" en variables los elementos HTML que vamos a manipular.
// Esto nos permite acceder a ellos fácilmente desde JavaScript.
const inputNuevaTarea = document.getElementById('nuevatarea');          // El cuadro de texto para escribir la tarea
const botonAnadir = document.getElementById('botonañadir');            // El botón "Añadir"
const contenedorPendientes = document.getElementById('tareas1');      // El bloque donde se listan las tareas pendientes
const contenedorFinalizadas = document.getElementById('tareas2');     // El bloque donde se listan las tareas finalizadas
const contadorTareasSpan = document.getElementById('contador');       // El 'span' para mostrar la cantidad de tareas pendientes

// --- 2. Función principal: Añadir una nueva tarea ---
// Esta función se ejecuta cada vez que el usuario hace clic en el botón "Añadir".
botonAnadir.addEventListener('click', function() {
    const textoDeLaTarea = inputNuevaTarea.value.trim(); // Obtenemos el texto del input y quitamos espacios en blanco al inicio/final.

    // Validación: Si el cuadro de texto está vacío, alertamos al usuario y no hacemos nada.
    if (textoDeLaTarea === '') {
        alert("¡Ops! No puedes dejar el campo de la tarea vacío.");
        inputNuevaTarea.style.backgroundColor = 'lightgrey'; // Cambiamos el fondo para indicar el error.
        return; // Salimos de la función aquí.
    }

    inputNuevaTarea.style.backgroundColor = 'white'; // Restauramos el fondo a blanco si se había cambiado.

    // --- Crear el bloque completo de la tarea ---
    // 1. Creamos el contenedor principal para esta tarea (un <div>).
    const tareaDiv = document.createElement('div');
    tareaDiv.className = 'task-list'; // Le añadimos la clase CSS para que tenga el estilo base.

    // 2. Creamos el signo de "Importante" (!).
    const spanImportante = document.createElement('span');
    spanImportante.className = 'importante'; // Para los estilos del círculo amarillo.
    spanImportante.textContent = '!';
    tareaDiv.appendChild(spanImportante); // Lo añadimos al div de la tarea.
    // Añadimos un evento para que, al hacer clic, cambie la prioridad visual de la tarea.
    spanImportante.addEventListener('click', function() {
        // 'this' se refiere al spanImportante que fue clicado.
        // Con 'closest(".task-list")' encontramos el div de la tarea completa.
        const tareaPadre = this.closest(".task-list");
        if (tareaPadre) {
            tareaPadre.classList.toggle('resaltar-importante'); // Alterna una clase CSS para resaltar.
        }
    });

    // 3. Creamos el nombre de la tarea (el título corto).
    const nombreTareaSpan = document.createElement('span');
    nombreTareaSpan.className = 'tarea-nombre'; // Para los estilos del nombre.
    nombreTareaSpan.textContent = textoDeLaTarea; // Ponemos el texto que el usuario escribió.
    tareaDiv.appendChild(nombreTareaSpan); // Lo añadimos al div de la tarea.
    // Añadimos un evento para que, al hacer clic, se muestre/oculte el texto completo.
    nombreTareaSpan.addEventListener('click', function() {
        // 'this' se refiere al nombreTareaSpan que fue clicado.
        const tareaPadre = this.closest(".task-list");
        if (tareaPadre) {
            const textoCompleto = tareaPadre.querySelector('.texto-completo'); // Buscamos el párrafo con el texto completo.
            if (textoCompleto) {
                // Alternamos la visibilidad: si está oculto, lo muestra (block); si está visible, lo oculta (none).
                textoCompleto.style.display = (textoCompleto.style.display === 'none' || textoCompleto.style.display === '') ? 'block' : 'none';
            }
        }
    });


    // 4. Creamos el botón "X" para mover a finalizadas o eliminar.
    const botonMoverEliminar = document.createElement('span');
    botonMoverEliminar.className = 'btn-borrar'; // Para los estilos del botón "X".
    botonMoverEliminar.textContent = 'X'; // El texto visible de la "X".
    tareaDiv.appendChild(botonMoverEliminar); // Lo añadimos al div de la tarea.
    // Cuando se hace clic en la "X" de una tarea pendiente, la movemos a "Finalizadas".
    botonMoverEliminar.addEventListener('click', function() {
        // 'this' se refiere al botonMoverEliminar que fue clicado.
        const tareaPadre = this.closest(".task-list");
        if (tareaPadre) {
            moverATareasTerminadas(tareaPadre); // Llamamos a la función para moverla.
        }
    });


    // 5. Creamos el párrafo para el texto completo (inicialmente oculto).
    // Nota: Por simplicidad, aquí usamos el mismo texto del input como "texto completo".
    // En una app real, podrías tener otro input para un detalle más largo.
    const parrafoTextoCompleto = document.createElement('p');
    parrafoTextoCompleto.className = 'texto-completo'; // Una clase diferente para diferenciar del span 'texto-nombre'.
    parrafoTextoCompleto.style.display = 'none'; // Importante: Oculto por defecto.
    parrafoTextoCompleto.innerHTML = `Detalle: ${textoDeLaTarea}.
        <span class="textaco" style="cursor: pointer; color: blue;" > Ocultar </span>`; // Añadimos el texto "Ocultar" dentro.
    tareaDiv.appendChild(parrafoTextoCompleto); // Lo añadimos al div de la tarea.

    // Añadimos evento para el botón "Ocultar" dentro del texto completo.
    const spanOcultar = parrafoTextoCompleto.querySelector('.textaco');
    if (spanOcultar) {
        spanOcultar.addEventListener('click', function() {
            // 'this' se refiere al spanOcultar que fue clicado.
            const pPadre = this.closest('.texto-completo');
            if (pPadre) {
                pPadre.style.display = 'none'; // Oculta el párrafo de texto completo.
            }
        });
    }

    // 6. Creamos el div para la información extra (fecha y cantidad de palabras).
    const infoExtraDiv = document.createElement('div');
    infoExtraDiv.className = 'info-extra'; // Para los estilos.
    // Generamos la fecha actual y contamos las palabras.
    const fechaActual = new Date().toLocaleDateString(); // Formato de fecha del sistema (ej: 16/5/2025).
    const cantidadPalabras = textoDeLaTarea.split(' ').filter(word => word !== '').length; // Contamos palabras.

    infoExtraDiv.innerHTML = `
        <span class="fecha">${fechaActual}</span> |
        <span class="palabras">${cantidadPalabras} palabras</span>
    `;
    tareaDiv.appendChild(infoExtraDiv); // Lo añadimos al div de la tarea.


    // Finalmente, añadimos el nuevo div de la tarea completa al contenedor de tareas pendientes.
    contenedorPendientes.appendChild(tareaDiv);

    // Limpiamos el cuadro de texto para la siguiente tarea.
    inputNuevaTarea.value = '';

    // Actualizamos el número de tareas pendientes en el contador.
    actualizarContadorTareas();
});

// --- 3. Función para mover una tarea a "Tareas Finalizadas" ---
// Se llama cuando haces clic en la "X" de una tarea pendiente.
function moverATareasTerminadas(tareaAMover) {
    // 1. Quitamos el signo "!" de prioridad, ya que la tarea está finalizada.
    const spanImportante = tareaAMover.querySelector('.importante');
    if (spanImportante) {
        spanImportante.remove(); // Eliminamos el elemento del DOM.
    }

    // 2. Modificamos el evento del botón "X": ahora debe eliminar la tarea.
    const botonX = tareaAMover.querySelector('.btn-borrar');
    if (botonX) {
        // Es importante limpiar el listener anterior (el de 'mover').
        // Para simplificar y evitar complicaciones con 'removeEventListener' en funciones anónimas,
        // la manera más directa es reasignar el 'onclick' directamente, lo cual sobrescribe cualquier listener previo.
        botonX.onclick = null; // Quitamos el listener anterior (si lo hubiera por 'onclick').
        // Ahora, cuando se haga clic, llamaremos a la función para eliminar directamente.
        botonX.addEventListener('click', function() {
            eliminarTareaDirecta(tareaAMover);
        });
    }

    // 3. Movemos el div de la tarea al contenedor de tareas finalizadas.
    // Al hacer 'appendChild' en un nuevo padre, el elemento se mueve automáticamente.
    contenedorFinalizadas.appendChild(tareaAMover);

    // 4. Actualizamos el contador de tareas pendientes, ya que una ha sido movida.
    actualizarContadorTareas();
}

// --- 4. Función para eliminar una tarea directamente ---
// Se llama cuando haces clic en la "X" de una tarea finalizada.
function eliminarTareaDirecta(tareaAEliminar) {
    // Simplemente eliminamos el div completo de la tarea del DOM.
    tareaAEliminar.remove();
}

// --- 5. Función para actualizar el contador de tareas pendientes ---
// Cuenta cuántas tareas hay en el bloque de pendientes y actualiza el número en pantalla.
function actualizarContadorTareas() {
    // Seleccionamos todos los elementos con la clase 'task-list' dentro del contenedor de pendientes.
    const cantidad = contenedorPendientes.querySelectorAll('.task-list').length;
    // Actualizamos el texto del 'span' del contador con la cantidad obtenida.
    contadorTareasSpan.textContent = cantidad;
}

// --- 6. Inicializar el contador al cargar la página ---
// Esto es importante para que el contador muestre el número correcto de tareas
// si ya hay alguna tarea predefinida en tu HTML al cargar la página.
document.addEventListener('DOMContentLoaded', actualizarContadorTareas);