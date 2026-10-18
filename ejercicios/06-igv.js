// Desarrollo de Interfaces 1 | Guía 01 | Ejercicio 06
// Cálculo de IGV
// Declara const subtotal=100, const TASA_IGV=0.18. Calcula igv y totalPagar, muestra el total.

const subtotal = 100, TASA_IGV = 0.18;
let igv = subtotal * TASA_IGV, totalPagar = subtotal + igv;
console.log("\t\t\tEjercicio 6");
console.log("\n\tSubtotal: s/",subtotal,"\n",
            "\tIGV (18%): s/",igv,"\n",
            "\n\tTotal a pagar: s/",totalPagar);
console.log("\n\t\tEl programa ha terminado");
