import { mensajesControl, pedirDato } from './comunicacion.js';//Importo funciones de el archivo comunicacion

//CONTROLES 
function AtributoEnBlanco(dato) {//pasamos como paramtro el dato y corroboramos que sea blanco o no
    return dato === '' ? true : dato;
}

function RepetirAtributo(dato, datoAnterior) {//le pasamos el nuevo y el antiguo dato y lo vemos para repetirlo, si ingresamos igual queda el anterior
    return dato === '=' ? datoAnterior : dato;
}

function verificarID(idBusqueda, tareas) {//Pasamos como parametro idBusqueda y tareas 
    return AtributoEnBlanco(idBusqueda) //verifico si el ID es vacio
        ? (mensajesControl(4), false) // si es verdadero le dice al usuario que no puede ser vacio
        :(idBusqueda >= tareas.length && idBusqueda < 0)// si el id es mayor a la cantidad de tareas o negativo
            ? (mensajesControl(5), false)// le dice al usuario que ingreso un id incorrecto
            : true;// caso contrario valida el ID
}   
function ValidarDescripcion(nuevaDescripcion, descripcion) {//validamos la descripcion, pasando la nueva y la anterior
    return validarLongitudString(nuevaDescripcion, 500) ?//vemos si tiene 500 caracteres, si tiene mas entonces pedimos de nuevo, si no queda como nueva desc
        (RepetirAtributo(nuevaDescripcion, descripcion)) : (mensajesControl(1),
            nuevaDescripcion = pedirDato(),//ingresamos nueva descripcion
            ValidarDescripcion(nuevaDescripcion, descripcion))//la validamos
}

function ValidarTitulo(nuevoTitulo, titulo) {//validamos el titulo con el nuevo y el anterior, es lo mismo que con descripcion pero con 100 caracteres
    return AtributoEnBlanco(nuevoTitulo) === nuevoTitulo ?
        validarLongitudString(nuevoTitulo, 100) ?
            RepetirAtributo(nuevoTitulo, titulo) : (mensajesControl(2),
                nuevoTitulo = pedirDato(),
                ValidarTitulo(nuevoTitulo, titulo)) :
        (mensajesControl(3), nuevoTitulo = pedirDato(), ValidarTitulo(nuevoTitulo, titulo))
}

function convertirTextoEstado(inicial) {//convertimos las letras a el estado completo Mapeo
    const estados = {
        'P': 'Pendiente',
        'E': 'En Curso',
        'T': 'Terminada',
        'C': 'Cancelada',
        '': 'Pendiente'
    };
    // Convertir a mayúsculas solo si es una cadena válida, de lo contrario usa una cadena vacía
    const inicialMay = (inicial || '').toUpperCase();
    // Convertir la inicial a mayúsculas y buscar el estado
    return estados[inicialMay]; // Si no hay coincidencia, devuelve el valor original
}

function convertirEstadoInicial(inicial) {//cambia del estado completo a las inciales Mapeo
    const estados = {
        'Pendiente': 'P',
        'En Curso': 'E',
        'Terminada': 'T',
        'Cancelada': 'C'
    };
    return estados[inicial]; // Si no hay coincidencia, devuelve el valor original
}

function convertirMenuEstado(inicial) {//convierte el valor del menu en las iniciales de el estado
    // Mapeo de iniciales a estados
    const estados = {
        '2': 'P',
        '3': 'E',
        '4': 'T',
        '5': 'C'
    };
    return estados[inicial]; // Si no hay coincidencia, devuelve el valor original
}

function convertirTextoDificultad(inicial) {//convertimos la incial de la dificultad en emojis
    const dificultad = {
        '1': 'Bajo ⭐ ☆ ☆',
        '2': 'Medio ⭐ ⭐ ☆',
        '3': 'Alto ⭐ ⭐ ⭐',
        '': 'Bajo ⭐ ☆ ☆',
    };
    return dificultad[inicial];//Si no hay coincidencia, devuleve el valor original
}

function convertirDificultadATexto(inicial) {//convertimos la dificultad al numero
    const dificultad = {
        'Bajo ⭐ ☆ ☆': '1',
        'Medio ⭐ ⭐ ☆': '2',
        'Alto ⭐ ⭐ ⭐': '3',
    };
    return dificultad[inicial];//Si no hay coincidencia, devuelve el valor original
}

/* CHAT GPT - VERIFICA QUE UNA FECHA SEA VALIDA Y ESTE EN EL FORMATO CORRECTO */
function validarFecha(fecha) {
    // Expresión regular para verificar el formato YYYY-MM-DD
    const regexFecha = /^\d{4}-\d{2}-\d{2}$/;
    // Verificar si cumple con el formato
    if (!regexFecha.test(fecha)) {
        return false; // Retorna false si no cumple el formato
    }
    // Intentar crear un objeto Date para verificar si es una fecha válida
    const fechaObj = new Date(fecha);
    // Comprobar si el objeto fecha es válido
    if (isNaN(fechaObj.getTime())) {
        return false; // Retorna false si la fecha no es válida
    }
    // Si pasó todas las validaciones, es una fecha válida
    return true;
}

function validarInicialEstado(inicial) {//Hacemos que la incial se pase a mayuscula y corroboramos que sea de las disponibles
    return (inicial.toUpperCase() === 'P' ||
        inicial.toUpperCase() === 'T' ||
        inicial.toUpperCase() === 'E' ||
        inicial.toUpperCase() === 'C' ||
        inicial === '');
}

function validarInicialDificultad(inicial) {//Corroboramos que sea de los disponibles
    return (inicial === '1' ||
        inicial === '2' ||
        inicial === '3' ||
        inicial === '=' ||
        inicial === '');
}

function validarLongitudString(dato, maxLongitud) {//Le pasamos como parametro el dato y la longitud maxima, si es menor o igual es correcto, si no es falso
    return dato.length <= maxLongitud ? true : false;
}



export {
    convertirMenuEstado,
    convertirDificultadATexto,
    convertirEstadoInicial,
    ValidarDescripcion,
    AtributoEnBlanco,
    RepetirAtributo,
    ValidarTitulo,
    convertirTextoEstado,
    convertirTextoDificultad,
    validarFecha,
    validarInicialEstado,
    validarInicialDificultad,
    validarLongitudString,
    verificarID
};
/* 
USAMOS PROGRAMACION ESTRUCTURADA: FUNCIONES PEQUEÑAS Y ESPECIFICAS, USAMOS CONDICIONALES PARA CONTROLAR EL CODIGO 
PROGRAMACION FUNCIONAL: NO ES EL ENFOQUE PRINCIPAL PEERO USAMOS ALGUNAS FUNCIONES PURAS Y TENEMOS MAPEOS CON OBJETOS TAMBIEN INMUTABILIDAD
PROGRAMACION IMPERATIVA: MANIPULACION EXPLICITA DE VARIABLES ES SECUENCIAL 
*/