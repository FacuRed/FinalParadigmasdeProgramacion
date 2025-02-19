import { Tarea } from './claseTarea.js'//Importo funciones de el archivo claseTarea
import { solicitarDificultad } from './solicitando.js';//Importo funciones de el archivo solicitando
import { mostrarDetallesTarea } from './mostrar.js';//Importo funciones de el archivo mostrar
import { convertirDificultadATexto, convertirEstadoInicial, ValidarDescripcion, RepetirAtributo, ValidarTitulo, convertirTextoEstado, convertirTextoDificultad, validarFecha, validarInicialEstado, validarInicialDificultad } from './control.js';//Importo funciones de el archivo control
import { esperarTeclaParaContinuar, LimpiarPantalla } from './comunicacion.js';//Importo funciones de el archivo comunicacion
import { mensajesfuncionesTareas, pedirDato } from './comunicacion.js';

//funcion para crear tarea que recibe como parametro el arreglos tareas
function crearTarea(tareas) {
    LimpiarPantalla();
    let estado = 'P', dificultad = '', titulo, descripcion, vencimiento, creacion; //inicializamos variables
    mensajesfuncionesTareas(1);

    titulo = pedirDato();
    titulo = ValidarTitulo(titulo, '');

    mensajesfuncionesTareas(2);
    descripcion = pedirDato();

    estado = convertirTextoEstado(estado);//convertimos el estado
    dificultad = solicitarDificultad();

    mensajesfuncionesTareas(3);
    vencimiento = pedirDato();
    while (!validarFecha(vencimiento)) {
        mensajesfuncionesTareas(9);
        vencimiento = pedirDato();
    }
    let fechaModificacion = new Date();
    let nuevaTarea = new Tarea(titulo, descripcion, estado, dificultad, vencimiento, fechaModificacion, creacion);

    tareas.push(nuevaTarea);//ingresamos la tarea creada al arreglo
    mensajesfuncionesTareas(4);
    mostrarDetallesTarea(nuevaTarea);//mostramos los detalles de esa tarea
}

function editarTarea(tarea) {//funcion para editar tarea
    LimpiarPantalla();
    mensajesfuncionesTareas(5);
    mensajesfuncionesTareas(6);
    let nuevoTitulo = ``, nuevaDescripcion = ``, nuevoEstado = ``, nuevaDificultad = ``, nuevoVencimiento = ``, inicial = ``;//inicializamos todo 

    // Editar el título
    console.log(`Nuevo título (anterior: ${tarea.titulo}): `);
    nuevoTitulo = pedirDato();
    nuevoTitulo = ValidarTitulo(nuevoTitulo, tarea.titulo);//validamos el nuevo titulo

    // Editar la descripción
    console.log(`Nueva descripción (anterior: ${tarea.descripcion}): `);
    nuevaDescripcion = pedirDato();
    nuevaDescripcion = ValidarDescripcion(nuevaDescripcion, tarea.descripcion);//validamos la nueva descripcion

    // Editar el estado
    console.log(`Nuevo estado (anterior: ${tarea.estado}) [P]endiente, [E]n curso, [T]erminada, [C]ancelada: `);
    inicial = pedirDato();
    while (!validarInicialEstado(inicial) && inicial !== '=') {
        mensajesfuncionesTareas(7);
        inicial = pedirDato();
    }//LO VAMOS A DEJAR CON EL WHILE?
    tarea.estado = convertirEstadoInicial(tarea.estado);//hacemos que se complete la palabra con el convertir estado
    inicial = RepetirAtributo(inicial, tarea.estado);//si el valor no lo cambiamos queda el mismo, si no, modificamos al nuevo
    nuevoEstado = convertirTextoEstado(inicial);//nuesvo estado que convertimos a texto

    // Editar la dificultad
    console.log(`Nueva dificultad (anterior: ${tarea.dificultad}) ([1] Baja, [2] Media, [3] Alta): `);
    inicial = pedirDato();
    while (!validarInicialDificultad(inicial) && inicial !== '=') {
        mensajesfuncionesTareas(8);
        inicial = pedirDato();
    }//LO VAMOS A DEJAR CON EL WHILE?
    tarea.dificultad = convertirDificultadATexto(tarea.dificultad);//convertimos la dificultad a texto
    inicial = RepetirAtributo(inicial, tarea.dificultad);//corroboramos si se repite el atributo, si no modificamos
    nuevaDificultad = convertirTextoDificultad(inicial);//convertimos dificultad a emoji

    // Editar la fecha de vencimiento
    console.log(`Nueva fecha de vencimiento (anterior: ${tarea.vencimiento}): `);
    nuevoVencimiento = pedirDato();
    while (!validarFecha(nuevoVencimiento) && nuevoVencimiento !== '' && nuevoVencimiento !== '=') {
        mensajesfuncionesTareas(9);
        nuevoVencimiento = pedirDato();
    }//LO VAMOS A DEJAR CON EL WHILE?
    nuevoVencimiento = RepetirAtributo(nuevoVencimiento, tarea.vencimiento);//repetimos si es igual q antes, si no, ponemos el nuevo

    // Actualizar la tarea
    tarea.titulo = nuevoTitulo;
    tarea.descripcion = nuevaDescripcion;
    tarea.estado = nuevoEstado;
    tarea.dificultad = nuevaDificultad;
    tarea.vencimiento = nuevoVencimiento;
    actualizarModificacion(tarea);
    mensajesfuncionesTareas(10);
    mostrarDetallesTarea(tarea);
   
}
//registra la fecha y la hora de la ultima modificacion de la tarea
function actualizarModificacion(tarea) {
    tarea.fechaModificacion = new Date();
}

export {
    crearTarea,
    editarTarea,
    actualizarModificacion
};//exportamos funciones para poder usar en otro archivo
/*
ACA UTILIZAMOS PROGRAMACION ESTRUCTURADA (modularizacion para mantener codigo legible), 
PROGRAMACION ORIENTADA A OBJETOS (encapsulamiento),
Y PROGRAMACION FUNCIONAL (funcions puras, casi que no tenemos efectos secundarios)
usamos recursividad para sustituir whiles y bucles que nos pueden generar efectos secundarios y hacer funciones puras
 */