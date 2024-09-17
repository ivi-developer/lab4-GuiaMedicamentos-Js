export class Venta {
    constructor(medicamento, cantidad, total) {
        this.cantidad = cantidad
        this.medicamento = medicamento
        this.total = total
    }
    static registrarVenta(venta) {
        venta.medicamento.stock - venta.cantidad >= 0 ? venta.medicamento.stock -= venta.cantidad : console.log('no hay suficiente stock del medicamento')
    }
}