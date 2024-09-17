export class Medicamento {
    constructor(id, nombre, precio, stock) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
    mostrarDetalles() {
        console.log(`Medicamento: ${this.nombre}, vale: $${this.precio}, stock: ${this.stock}`)
    }
}