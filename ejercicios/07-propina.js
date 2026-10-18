// Desarrollo de Interfaces 1 | Guía 01 | Ejercicio 07
// Calculadora de propina
// Declara const montoTexto="80.50", const porcentajeTexto="10". Convierte ambos a Number; calcula propina y totalConPropina (monto + propina).

const montoTexto = "80.50", porcentajeTexto = "10";
let monto = Number(montoTexto), porcentaje = Number(porcentajeTexto) / 100, propina = monto * porcentaje, totalConPropina = monto + propina;
console.log("\t\t\tEjercicio 7");
console.log("\n\tMonto: s/",monto.toFixed(2),"\n",
            "\tPropina (10%): s/",propina.toFixed(2),"\n",
            "\tTotal a pagar: s/",totalConPropina.toFixed(2));
console.log("\n\t\tEl programa ha terminado");
