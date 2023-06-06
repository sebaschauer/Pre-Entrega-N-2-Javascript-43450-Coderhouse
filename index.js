function validarDatos (verif){
    let productos = 0;
    let cantidad = 0;
    let preciouni = 0;
    let precioTotal = 0;
    let totalApagar = 0;
    let validar = true;
if (verif=='si'){
    alert('Bienvenidos a la Tienda');
    console.log('Bienvenidos a la Tienda');
    let item = document.getElementsByClassName("item");
    for (const cervezas of item){
        console.table(cervezas.innerHTML);
    }
    let item2 = document.getElementsByClassName("item2");
    for (const precios of item2){
        console.table(precios.innerHTML);
    }
    ingresarProducto(productos, cantidad, preciouni,precioTotal,totalApagar);
}
else {
    alert('La venta de bebidas alcohólicas está prohibida a menores de 18 años');
    validar = false;
}
return validar;
}
function ingresarProducto (productos, cantidad, preciouni,precioTotal,totalApagar) {
    let validar = true;
    while (validar){
        productos = prompt('Ingrese el nombre del producto que quiere agregar al carrito o "fin" para salir');        
        if(productos !='fin'){
            cantidad = prompt('Ingrese la cantidad:');
            preciouni = parseFloat(prompt ('Ingrese el precio del producto:'));
            precioTotal = cantidad * preciouni;
            console.log(`Su pedido es: ${productos} x ${cantidad} x ${preciouni}`);
            alert(`Su pedido es: ${productos} x ${cantidad} x ${preciouni}`);
            console.log(`El precio total es: ${precioTotal}`);
            alert(`El precio total es: ${precioTotal}`);
            totalApagar += precioTotal;
            validar = true; 
        }
        else{
            console.log(`El total a pagar es: ${totalApagar}`);
            alert(`El total a pagar es: ${totalApagar}`);
            let n = 0;
            let cuotas = 0;
            calculoCuotas(totalApagar,n,cuotas);
            console.log('Gracias por su compra');
            alert('Gracias por su compra');
            validar = false;
        }   
    }
}
function calculoCuotas (totalApagar,n,cuotas,recargo,total){
    if (totalApagar!=0){
        pago = prompt('Pulse t si desea pagar con tarjeta o cualquier tecla para continuar en efectivo');
        if (pago=='t'){
            console.log('El pago en cuotas tiene un recargo del 6% por cuota');
            n = prompt('Ingrese el numero de cuotas con las que desea realizar el pago:');
            if (n<=1){
                cuotas = totalApagar;
                console.log(`Su pago en una cuota es de: ${cuotas}`);
                alert(`Su pago en una cuota es de: ${cuotas}`);
            }
            else{
                recargo = (0.06*n)*100;
                cuotas = (((0.06*n)+1)*totalApagar)/n;
                total = (((0.06*n)+1)*totalApagar);
                console.log (`El recargo para ${n} cuotas es de: ${recargo}%`);
                console.log (`El monto total con recargo es de: ${total}`);
                alert(`El monto total con recargo es de: ${total}`);
                console.log(`Su pago en ${n} cuotas es de: ${cuotas.toFixed(2)} por cuota`);
                alert(`Su pago en ${n} cuotas es de: ${cuotas.toFixed(2)} por cuota`);
            }
        }
        else{
            console.log(`Su pago en efectivo es de: ${totalApagar}`);
            alert(`Su pago en efectivo es de: ${totalApagar}`); 
            }
    }
    else{
        console.log('Muchas gracias por visitarnos, hasta la proxima!!'); 
        alert('Muchas gracias por visitarnos, hasta la proxima!!'); 
    }
}

let verif= prompt('Soy mayor de 18 años');
validarDatos(verif);


