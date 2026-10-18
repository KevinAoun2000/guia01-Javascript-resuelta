// Desarrollo de Interfaces 1 | Guía 01 | Ejercicio 03
// Identifica tipos
// Declara const precio=29.90, const titulo="JavaScript", const disponible=true y const pendiente=null. Declara tipoPrecio, tipoTitulo y tipoDisponible utilizando typeof.

const precio = 29.9, titulo = "Javascript", disponible = true, pendiente = null;
let tipoPrecio, tipoTitulo, tipoDisponible, tipoPendiente;
tipoPrecio = typeof(precio);
tipoTitulo = typeof(titulo);
tipoDisponible = typeof(disponible);
tipoPendiente = typeof(pendiente);
console.log("\t\t\tEjercicio 3");
console.log("\n\t\tVariable\t\t\tTipo de variable\n",
            "\tPrecio:",precio,"\t\t\t    ",tipoPrecio,"\n",
            "\tTítulo:",titulo,"\t\t    ",tipoTitulo,"\n",
            "\tDisponible:",disponible,"\t\t    ",tipoDisponible,"\n",
            "\tPendiente:",pendiente,"\t\t    ",tipoPendiente,"\n",);
console.log("\n\t\tEl programa ha terminado");
