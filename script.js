import { Inventario } from "./inventario.js";
import { Medicamento } from "./medicamentos.js";
import { Venta } from "./venta.js";

const inventario = new Inventario()
const paracetamol = new Medicamento(1, 'paracetamol', 2500, 30)
const ibuprofeno = new Medicamento(2, 'ibuprofeno', 3000, 20)
const insulina = new Medicamento(3, 'insulina', 20000, 10)
inventario.agregarMedicamento(paracetamol)
inventario.agregarMedicamento(ibuprofeno)
inventario.agregarMedicamento(insulina)
inventario.mostrarInventario()
console.log(inventario.buscarMedicamento(2), 'buscando medicamento')
inventario.actualizarStock(1, 25)
console.log('modificado stock')
inventario.mostrarInventario()
console.log('probando venta')
Venta.registrarVenta(new Venta(insulina, 10, 40000))
inventario.mostrarInventario()