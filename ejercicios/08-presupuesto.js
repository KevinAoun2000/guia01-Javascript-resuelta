// Desarrollo de Interfaces 1 | Guía 01 | Ejercicio 08
// Presupuesto estudiantil
// Declara const presupuestoTexto="150", const transporteTexto="25.50", const alimentacionTexto="40". Convierte cada valor y calcula saldoDisponible después de ambos gastos.

const presupuestoTexto = "150", transporteTexto = "25.50", alimentacionTexto = "40";
let presupuesto = Number(presupuestoTexto), transporte = Number(transporteTexto), alimentacion = Number(alimentacionTexto), saldoDisponible = presupuesto - (transporte + alimentacion);
console.log("\t\t\tEjercicio 8");
console.log("\n\tPresupuesto: s/",presupuesto.toFixed(2),"\n",
            "\n\tTransporte: s/",transporte.toFixed(2),"\n",
            "\tAlimentación: s/",alimentacion.toFixed(2),"\n",
            "\n\tSaldo disponible: s/",saldoDisponible.toFixed(2));
console.log("\n\t\tEl programa ha terminado");
