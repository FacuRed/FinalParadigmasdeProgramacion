import promptSync from 'prompt-sync';//Importamos prompt sync para que el usuario pueda interactuar
const prompt = promptSync({ sigint: true });

function esperarTeclaParaContinuar() {//funcion que espera una tecla, para dar mas claridad a la consola
    prompt('Presiona Enter para continuar...');
}

function LimpiarPantalla() {//usamos esta funcion para conservar pureza
    console.clear();
}

//ESTAS FUNCIONES ESTAN CREADAS CON EL OBJETIVO DE CONSERVAR LA PUREZA 
function mensajesIndex(parametro) {
    switch (parametro) {
        case 1:
            console.log("No hay tareas creadas");
            break;
        case 2:
            console.log("Saliendo del Programa\n");
            break;
        case 3:
            console.log("ERROR, opcion incorrecta \n");
            break;
    }
}

function mensajesBuscar(parametro) {
    switch (parametro) {
        case 1:
            console.log("\nSe encontró la tarea:");
            break;
        case 2:
            console.log("\nNo se encontró ninguna tarea con el ID proporcionado.");
            break;
        case 3:
            console.log("Las tareas encontradas son: ");
            break;
        case 4:
            console.log("No hubo coincidencias con la búsqueda.");
            break;
    }
}

function mensajesSolicitando(parametro) {
    switch (parametro) {
        case 1:
            console.log("Ingrese el ID de la tarea que desea buscar: ");
            break;
        case 2:
            console.log("El ID ingresado no es válido. Por favor, inténtalo nuevamente.");
            break;
        case 3:
            console.log("Ingrese el nombre de la tarea que desea buscar: ");
            break;
        case 4:
            console.log('Dificultad de la tarea ([1] Baja, [2] Media, [3] Alta): ');
            break;
        case 5:
            console.log("La dificultad ingresada no es valida. Por favor, inténtalo nuevamente.");
            break;
        case 6:
            console.log("Ingrese el índice de la tarea para ver detalles (0 para regresar al menú): ");
            break;
        case 7:
            console.log("\nDetalles de la tarea selecionada");
            break;
        case 8:
            console.log("¿Desea editar la tarea?S/N");
            break;
        case 9:
            console.log("Regresando al menú...");
            break;
        case 10:
            console.log("Opción no válida.");
            break;
    }
}

function mensajesMostrar(parametro) {
    switch (parametro) {
        case 1:
            console.log("Estas son todas las tareas: ");
            break;
        case 2:
            console.log("No hay tareas cargadas por el momento ");
            break;
        case 3:
            console.log("ERROR, opcion incorrecta ");
            break;
        case 4:
            console.log(`Todas las tareas:`);
            break;
        case 5:
            console.log("Ingrese el índice de la tarea para ver detalles (0 para regresar al menú): ");
            break;
        case 6:
            console.log("¿Desea editar esta tarea? (S/N) : ");
            break;
        case 7:
            console.log(`Regresando al menú...`);
            break;
        case 8:
            console.log(`Opción no válida.`);
            break;
    }
}

function mensajesMenu(parametro) {
    switch (parametro) {
        case 1:
            console.log("MENU\n[1] Ver mis Tareas\n[2] Buscar por:\n[3] Agregar una Tarea\n[0] Salir");
            break;
        case 2:
            console.log("Ingrese la opcion: ");
            break;
        case 3:
            console.log("MENU\n[1] Todas \n[2] Pendientes\n[3] En curso\n[4] Terminadas\n[5] Canceladas\n[0] Salir");
            break;
        case 4:
            console.log("MENU\n[1] Nombre \n[2] ID \n[3] Estado\n[0] Salir");
            break;
    }
}

function mensajesfuncionesTareas(parametro) {
    switch (parametro) {
        case 1:
            console.log("AGREGAR TAREA\nTítulo de la tarea (máx. 100 caracteres): ");
            break;
        case 2:
            console.log('Descripción de la tarea: ');
            break;
        case 3:
            console.log('Fecha de vencimiento (YYYY-MM-DD): ');
            break;
        case 4:
            console.log("Tarea creada con éxito");
            break;
        case 5:
            console.log(`Editando tarea...`);
            break;
        case 6:
            console.log(`IMPORTANTE\nSi no desea cambiar un dato ingrese '='\nSi desea dejarlo en blanco presione Enter...\n\n`);
            break;
        case 7:
            console.log(`Entrada inválida. Ingrese una opción válida ([P]endiente, [E]n curso, [T]erminada, [C]ancelada), o deje en blanco:`);
            break;
        case 8:
            console.log(`Entrada inválida. Ingrese una opción válida ([1] Baja, [2] Media, [3] Alta): `);
            break;
        case 9:
            console.log(`Fecha inválida. Ingrese una fecha válida en formato YYYY-MM-DD.`);
            break;
        case 10:
            console.log(`\n\nTarea actualizada con éxito!`);
            break;
    }
}

function mensajesControl(parametro) {
    switch (parametro) {
        case 1:
            console.log(`\n (Recordatorio: La descripcion ingresada debe tener una longitud inferior a 500 caracteres).La descripcion es incorrecto Ingrese una nueva descripcion:`);
            break;
        case 2:
            console.log(`\n (Recordatorio: El titulo ingresado debe tener una longitud inferior a 100 caracteres).El título es incorrecto Ingrese un título:`);
            break;
        case 3:
            console.log(`\n (Recordatorio: El titulo ingresado no debe ser vacio.El título es incorrecto Ingrese un título:`);
            break;
        case 4:
            console.log("El ID no puede ser vacío.");
            break;
        case 5:
            console.log("El ID es  incorrecto.");
            break;
    }
}

function pedirDato() {
    return prompt();
}

function pedirDatoNumerico() {
    return parseInt(prompt());
}

export {
    esperarTeclaParaContinuar,
    LimpiarPantalla,
    mensajesIndex,
    mensajesBuscar,
    mensajesSolicitando,
    mensajesMostrar,
    mensajesMenu,
    mensajesfuncionesTareas,
    mensajesControl,
    pedirDato,
    pedirDatoNumerico
};
/*
PROGRAMACION ESTRUCTURADA: FUNCIONES ESPECIALIZADAS, CONTROL DE FLUJO CLARO
PROGRAMACION IMPERATIVA: DESCRIBIMOS EXPLICCITAMENTE COMO SE REALIZAN LAS TAREAS
PROGRAMACION FUNCIONAL: NO EXISTEN SIDE EFFECTS 
*/