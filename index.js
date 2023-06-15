class Compra {
    constructor (carritoCompras){
        this.carrito = carritoCompras
    }
    subtotal() {
        if (this.carrito.length >0){
            return this.carrito.reduce((acc, producto) => acc + producto.Precio,0)
        }
    }
}

const cervezas = [
    {Codigo:1, Nombre:'Cream Ale', IBU: 30, Alcohol: ' 5,5%', Caracteristicas: ' Rubia suave', Precio:580, Stock:12},
    {Codigo:2, Nombre:'Red Ale', IBU: 30, Alcohol: ' 5,5%', Caracteristicas: ' Roja, Lupulada', Precio:580, Stock:24},
    {Codigo:3, Nombre:'Porter', IBU: 30, Alcohol: ' 5,5%', Caracteristicas: ' Negra, Maltosa', Precio:580, Stock:12},
    {Codigo:4, Nombre:'Stout', IBU: 30, Alcohol: ' 5,5%', Caracteristicas: ' Negra, Tostada', Precio:580, Stock:12},
    {Codigo:5, Nombre:'IPA', IBU: 30, Alcohol: ' 5,5%', Caracteristicas: ' Rubia, Lupulada', Precio:650, Stock:24},
    {Codigo:6, Nombre:'Scotish Ale', IBU: 30, Alcohol: ' 5,5%', Caracteristicas: ' Roja, Maltosa', Precio:580, Stock:24},
    {Codigo:7, Nombre:'Heineken', IBU: 30, Alcohol: ' 5,5%', Caracteristicas: ' Rubia, Lager', Precio:480, Stock:24},
    {Codigo:8, Nombre:'Six Pack', IBU: 30, Alcohol: ' 5,5%', Caracteristicas: ' Estilos Varios', Precio:2300, Stock:12}
]
const carrito = []

function buscarProducto(Codigo){
    let resultado = cervezas.find((producto) => producto.Codigo === parseInt(Codigo))
    return resultado
}

function comprar(){
    let Codigo = prompt('Ingrese el codigo del producto que desea comprar.')
    let productoElegido = buscarProducto(Codigo)
    if (productoElegido !== undefined) {
        carrito.push(productoElegido)
        alert('El producto ' + productoElegido.Nombre +' se agrego al carrito')
        let agregarProductoCarrito = confirm('Desea agregar un producto al carrito?')
        if (agregarProductoCarrito === true){
            comprar()
        }
        else {
            finalizarCompra()
        }
    }
    else {
        alert('El producto seleccionado no se encuentra en stock')
        comprar()
    }
}

function finalizarCompra(){
    const compras = new Compra (carrito)
    console.log('El monto total de la compra es: $' + compras.subtotal())
    alert('El monto total del carrito es: $'+ compras.subtotal())
    console.log(compras.subtotal())
    let montoApagar = compras.subtotal()
    let metodoPago = prompt('Elige el metodo de pago que desea: 0-Efectivo , 1-Tarjeta Debito , 2 Transf. Bancaria , 3-Tarjeta Credito')
    switch(parseInt(metodoPago)){
        case 0:
            alert("El monto a pagar en efectivo es:$" + compras.subtotal())
            break;
        case 1:
            alert("El monto a pagar con tarjeta de debito es:$" + compras.subtotal())
            break;
        case 2:
            alert("El monto a pagar por transferencia bancaria es:$" + compras.subtotal())
            break;
        case 3:
            cuotas(montoApagar)
            break;
    }
} 

function cuotas(montoApagar){
    const recargo = 0.06
    alert('El pago con cuotas tiene un recargo del 6% por cuota')
    let ncuotas = prompt('Elige el numero de cuotas que desea: 3, 6 o 12')
    let montoTotal = montoApagar*(1+ncuotas*recargo);
    let valorCuota = montoTotal/ncuotas
    console.log('El monto total a pagar en cuotas es: $' + montoTotal)
    console.log(' El valor de la cuota resula:$' + valorCuota.toFixed(2))
    alert(' El valor de la cuota resula:$' + valorCuota.toFixed(2))
}

console.log('Listado de Productos')
console.table(cervezas)
comprar()
console.log(carrito)