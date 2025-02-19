import { editarTarea } from './funcionesTareas.js';//Importo funciones de el archivo funcionesTarea
import { mostrarDetallesTarea } from './mostrar.js';//Importo funciones de el archivo mostrar
import { convertirTextoDificultad, validarInicialDificultad } from './control.js';//Importo funciones de el archivo control
import { mensajesSolicitando, pedirDato, pedirDatoNumerico } from './comunicacion.js';//Importo funciones de el archivo comunicacion



function solicitarNombre() {//funcion que pide el nombre de la tarea a buscar
    mensajesSolicitando(3);
    let nombre = pedirDato();
    return nombre;//devuleve el nombre ingresado para que sea utilizado en la busqueda
}

function solicitarDificultad() {//funcion que solicita la dificultad de la tarea
    mensajesSolicitando(4);
    let dificultad = pedirDato();
    return validarInicialDificultad(dificultad)//valida la inicial de la dificultad
        ? dificultad = convertirTextoDificultad(dificultad)//si es verdadero, convierte la dificultar en emoji
        : (mensajesSolicitando(5),
            solicitarDificultad());//si es falso, entonces vuelve a pedir la dificultad
}

function seleccionarOpcion(resultados) {//funcion que toma como parametro resultados, es usada para seleccionar las opciones
    let tareaSeleccionada, opcion, opcion2;
    mensajesSolicitando(6);
    opcion = pedirDatoNumerico();

    // Verificación con operador ternario para comprobar si el ID ingresado es válido
     tareaSeleccionada = resultados.find(tarea => tarea.getId() === opcion);

    // Usamos operador ternario para controlar el flujo de las opciones
    return tareaSeleccionada 
        ? (
            mensajesSolicitando(7),
            mostrarDetallesTarea(tareaSeleccionada),
            mensajesSolicitando(8),
            opcion2 = pedirDato().toUpperCase(),
            opcion2 === 'S' 
                ? editarTarea(tareaSeleccionada)
                :mensajesSolicitando(9), null) // Si la opción es no, no hace nada y retorna
        : (opcion === 0 
            ? (mensajesSolicitando(9), null) // Si la opción es 0, regresa
            : (mensajesSolicitando(10), seleccionarOpcion(resultados)) // Si no es válida, se vuelve a pedir
        );
        
     
      
}


export {
    solicitarNombre,
    solicitarDificultad,
    seleccionarOpcion
};//exporto funciones para utilizar en otros archivos

/*
PARADIGMAS UTILIZADOS
ESTRUCTURADO: MODULARIZACION, SIMPLEZA
FUNCIONAL: RECURSIVIDAD, FUNCIONES PURAS
 */
