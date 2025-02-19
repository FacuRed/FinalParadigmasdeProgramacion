import { mensajesMenu, pedirDatoNumerico } from './comunicacion.js'

//funciones de Menu (principal, secundario, editar)
function menuPrincipal() {//Funcion que muestra el primer menu que aparece
    mensajesMenu(1);
    mensajesMenu(2);
    let opcion = pedirDatoNumerico();
    return opcion;//retorna la opcion ingresada por el usuario
}

function menuSecundario() {//Funcion que muestra el menu donde queremos ver que tareas se necesitan
    mensajesMenu(3);
    mensajesMenu(2);
    let opcion1 = pedirDatoNumerico();
    return opcion1;//retorna la opcion ingresada por el usuario
}

function menuBuscar() {//Funcion que muestra el menu de lo que queremos buscar
    mensajesMenu(4);
    mensajesMenu(2);
    let opcion2 = pedirDatoNumerico();
    return opcion2;//retorna la opcion ingresada por el usuario
}

export {
    menuPrincipal,
    menuSecundario,
    menuBuscar
};//Exportamos funciones para que puedan ser usadas en otro archivo
/*
UTILIZAMOS PROGRAMACION ESTRUCTURADA Y FUNCIONAL
ESTRUCTURADA: FUNCIONES ESPECIFICAS CON UN FLUJO CONTROLADO
FUNCIONAL: TENEMOS PUREZA ADEMAS DE LA RECURSIVIDAD
*/