//let nombre =  prompt ("ingrese su Nombre");

//let apellido = prompt ("ingrese su apellido");

//while  (nombre != "" && apellido !="") {

    //if ( nombre != apellido) {
        //alert ("Bienvenido"+ " " + nombre + " " + apellido)
        //break;
    //}
    //else {
       // alert ("Erorr: los datos ingresados son incorrectos")
   // }
//}


let total = 0 ;
let precio = 0 ;
let masProductos = false;

function agregarAlCarrito() {

    do {

        let producto = prompt("¿Querés comprar:\n 1- paletas?\n 2- bolsos?\n 3- zapatillas?", "Ej: 0");
        let cantidad = parseInt(prompt("¿Cuantos queres comprar?", 0));

        switch (producto) {
            case "1":
                precio = 15000;
                break;
            case "2":
                precio = 7000;
                break;
            case "3":
                precio = 12000;
                break;
            default:
                alert("Algunos de los datos ingresados no son correctos");
                precio = 0;
                cantidad = 0;
        }

        total = total + precio * cantidad;
        otroProducto = confirm("¿Queres agregar otro producto?")

    } while (otroProducto);
    console.log(total);
}

function aplicarDescuento(total) {
    if (total >= 10000) {
        total = total * 0.50;
    }

    return total
}
    function calcularEnvio(total) {
        let confirmacion = confirm("¿Querés que te lo enviemos a tu casa?");

        if (confirmacion && total >= 20000) {
          alert("Tenés envio gratis. Tu compra es de $" + total);
        } else if (confirmacion && total < 12000 && total != 0) {
          total = total + 1200;
          alert("El envío cuesta $700. Tu compra es de $" + total);
        } else {
          alert("Tu compra es de $" + total);
        }

        return total;
    }

agregarAlCarrito ();
calcularEnvio (aplicarDescuento(total));