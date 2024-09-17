export class Inventario {
    constructor() {
        this.medicamentos = new Array()
    }
    agregarMedicamento(medicamento) { this.medicamentos.push(medicamento) }
    buscarMedicamento(id) { return this.medicamentos.find(a => a.id == id) }
    mostrarInventario() { this.medicamentos.forEach(a => a.mostrarDetalles()) }
    actualizarStock(id, cantidad) { this.buscarMedicamento(id).stock = cantidad }
}