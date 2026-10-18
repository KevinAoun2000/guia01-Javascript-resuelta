// Desarrollo de Interfaces 1 | Guía 01 | Ejercicio 05
// Boleta de compra
// Declara const producto="Cuaderno", const precioUnitario=12.5, const cantidad=3. Calcula subtotal y crea mensajeBoleta que incluya producto y total.

const producto = "Cuaderno", precioUnitario = 12.5, cantidad = 3;
console.log("\t\t\tEjercicio 5");
function mensajeBoleta(producto, precioUnitario, cantidad) {
    let total = precioUnitario * cantidad;
    console.log("\n\tProducto:",producto,"\n",
                "\tPrecio unitario: s/",precioUnitario.toFixed(2),"\n",
                "\tCantidad:",cantidad,"\n",
                "\n\tTotal a pagar: s/",total.toFixed(2));
}
mensajeBoleta(producto, precioUnitario, cantidad);
console.log("\n\t\tEl programa ha terminado");
