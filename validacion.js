function verifEdad (annoCumple,mesCumple) {
    const annoActual = 2023;
    const mesActual = 05;
    if ((annoActual - annoCumple)>=18) {
        if ((annoActual - annoCumple)==18) {
            if ((mesCumple-mesActual)>=0) {
                alert('Esta prohibida la venta de bebidas alcoholicas a menores de 18 años.'); 
                condicion = true;
            } 
            else{
                alert('Bienvenido a la Tienda Cervecera');
                condicion = false;

            }
        }
        else{
            alert('Bienvenido a la Tienda Cervecera');
            condicion = false;
        }
    }
    else {
        alert('Esta prohibida la venta de bebidas alcoholicas a menores de 18 años.');
        condicion = true; 
    }    
    }

do {
    alert('Esta ingresando a un sitio de venta de alcohol');
let annoCumple = prompt('Ingrese el año de nacimiento (aaaa)');
let mesCumple = prompt('Ingrese el mes de su nacimiento (mm)');
const annoActual = 2023;
const mesActual = 05;
/* isNaN(annoCumple);
isNaN(mesCumple); */
if ((isNaN(annoCumple)==false || isNaN(mesCumple)==false)&&(annoCumple!=0 && mesCumple!=0)){
    verifEdad(annoCumple,mesCumple);
}
else{
    alert('Ha ingresado datos erroneos');
    condicion = true;
}
}
while (condicion)
