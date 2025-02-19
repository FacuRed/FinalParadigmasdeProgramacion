import { seleccionarOpcion } from './solicitando.js';
import { mostrarDetallesTarea } from './mostrar.js';
import { esperarTeclaParaContinuar, LimpiarPantalla } from './comunicacion.js';
import { mensajesBuscar } from './comunicacion.js';

//funcion para buscar tarea 
function buscarTareaId(tareas) {
    LimpiarPantalla();
    console.log(`Seleccione un ID entre 1 y ${tareas.length} :`)
    const idBusqueda = seleccionarOpcion(tareas);
    // Buscar tarea que coincida con el ID
    let tareaFiltrada = tareas.find(tarea => tarea.id.toString() === idBusqueda);

    // Mostrar resultados
    tareaFiltrada
        ? (mensajesBuscar(1),
            mostrarDetallesTarea(tareaFiltrada))
        : mensajesBuscar(2);
    esperarTeclaParaContinuar();
}

function buscarTareaPorEstado(tareas, estado) {
    LimpiarPantalla();
    //utilizamos el metodo filter para filtrar el arrayTarea comparando el estado recibido por parametro con el estado de la tarea
    let tareasFiltradas = tareas.filter((tareas) => tareas.getEstado() === estado);
    tareasFiltradas.length > 0
        ? (mensajesBuscar(3),
            //Para cada tarea de las tareas filtradas por el metodo filter mostramos el id y el titulo
            tareasFiltradas.forEach(tarea => console.log(`[${tarea.getId()}] Titulo: ${tarea.getTitulo()}`)),
            seleccionarOpcion(tareasFiltradas))
        : console.log(`No hay tareas del tipo ${estado} cargadas`);
}

function buscarTareaPorNombre(tareas, nombre) {
    LimpiarPantalla();
    // Verifica qué contiene el array tareas
    let tareasFiltradas = tareas.filter((tareas) => tareas.getTitulo().toLowerCase().includes(nombre.toLowerCase()));// Filtra coincidencias
    tareasFiltradas.length > 0
        ? (mensajesBuscar(3),
            //Para cada tarea de las tareas filtradas por el metodo filter mostramos el id y el titulo
            tareasFiltradas.forEach(tarea => console.log(`[${tarea.getId()}] Titulo: ${tarea.getTitulo()}`)),
            seleccionarOpcion(tareasFiltradas))
        : console.log(`No hay tareas del tipo ${nombre} cargadas`);
}

export {
    buscarTareaId,
    buscarTareaPorEstado,
    buscarTareaPorNombre
};
/*
PROGRAMACION ESTRUCTURADA: FUNCIONES ESPECIFICAS Y CONTROL DE FLUJO CLARO 
PROGRAMACION ORIENTADA A OBJETOS: USO DE METODOS COMO LOS GET
PROGRAMACION FUNCIONAL: PUREZA
*/