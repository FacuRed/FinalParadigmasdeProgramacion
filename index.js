import { buscarTareaId, buscarTareaPorEstado, buscarTareaPorNombre } from './buscar.js';//Importo funciones de el archivo buscar
import { crearTarea } from './funcionesTareas.js';//Importo funciones de el archivo funcionesTarea
import { solicitarNombre } from './solicitando.js';//Importo funciones de el archivo solicitando
import { mostrarTodasLasTareas } from './mostrar.js';//Importo funciones de el archivo mostrar
import { menuPrincipal, menuSecundario, menuBuscar } from './menu.js';//Importo funciones de el archivo menu
import { convertirMenuEstado } from './control.js';//Importo funciones de el archivo control
import { mensajesIndex, esperarTeclaParaContinuar, LimpiarPantalla } from './comunicacion.js';//Importo funciones de el archivo comunicacion

//COMIENZA EL CODIGO
let tareas = [];//creo arreglo de tareas

function ejecutarMenu() {//Funcion que ejecuta el menu
    LimpiarPantalla();
    switch (menuPrincipal()) {//este switch tiene como parametro la funcion menuPrincipal
        case 1://ver tareas
            LimpiarPantalla();
            tareas.length === 0 ? (mensajesIndex(1), esperarTeclaParaContinuar()) : mostrarTodasLasTareas(tareas);//si es igual a 0 no hay tareas, si es otro valor entonces muestra las tareas
            esperarTeclaParaContinuar();
            LimpiarPantalla();//funcion de limpiar pantalla
            ejecutarMenu();//funcion que ejecuta el menu
            break;
        case 2://buscar tarea
            LimpiarPantalla();
            if (tareas.length === 0) {
                mensajesIndex(1);
                esperarTeclaParaContinuar();
            }
            else {
                LimpiarPantalla();
                switch (menuBuscar()) {//este switch tiene como parametro la funcion menuBuscar
                    case 1:
                        LimpiarPantalla();
                        let nombre = solicitarNombre();//pedimos el nombre para pasarlo como parametro
                        buscarTareaPorNombre(tareas, nombre);//le pasamos como parametros el arreglo y el nombre, para que pueda usarse en la funcion
                        esperarTeclaParaContinuar();
                        break;
                    case 2:
                        LimpiarPantalla();
                        buscarTareaId(tareas);//le paso el arreglo tareas para que la busque por ID
                        esperarTeclaParaContinuar();
                        break;
                    case 3:
                        LimpiarPantalla();
                        let estado = menuSecundario();//creo una variable estado del menuSecundario
                        estado > 1 ?//si es mayor a 1 entonces convierte el menu al estado y despues pasarlo a texto
                            (estado = convertirMenuEstado(estado),
                                buscarTareaPorEstado(tareas, estado)) : mostrarTodasLasTareas(tareas);//si no, muestra todas las  tareas
                                esperarTeclaParaContinuar();
                        break;
                }
            }
            ejecutarMenu();//ejecuta el menu al salir del switch interno
            break;
        case 3://agregar tarea
            crearTarea(tareas);//creamos la tarea pasandole el arreglo de tareas como atributo
            esperarTeclaParaContinuar();//funcion de esperar tecla
            ejecutarMenu();//ejecutamos el menu para empezar
            LimpiarPantalla();//limpiamos pantalla
            break;
        case 0://salimos del programa
            mensajesIndex(2);
            esperarTeclaParaContinuar();
            break;
        default:
            mensajesIndex(3);
            esperarTeclaParaContinuar();
            ejecutarMenu();
           
            break;
    }
}

ejecutarMenu();//ejecutamos el menu denuevo para evitar el while de manera recursiva

export {
    tareas
};//exportamos para poder usar en otros archivos
/*
PROGRAMACION ESTRUCTURADA: FLUJO CLARO, SWITCH Y CONDICIONALES, Y EVADIMOS LOS BUCLES USANDO RECURSIVIDAD
PROGRAMACION FUNCIONAL: MODULARIDAD, CADA TAREA SE DELEGA A UNA DETERMINADA FUNCION, INMUTABILIDAD 
*/

    