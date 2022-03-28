class Producto {
    constructor (numero, precio, stock){
        this.numero= numero;
        this.precio= parseInt(precio);
        this.stock= stock;
    }
}

const arrayProductos = [];
arrayProductos.push(new Producto ("paletas", 15000, 20));
arrayProductos.push(new Producto ("bolsos", 7000, 12));
arrayProductos.push(new Producto ("zapatillas", 15000, 18));


let total = 0 ;


function agregarAlCarrito() {

    let otroProducto = false;

    do {

        let producto = prompt("¿Querés comprar:\n paletas?\n bolsos?\n zapatillas?", "Ej: 0");
        let cantidad = parseInt(prompt("¿Cuantos queres comprar?", 0));
        let precio;

        switch (producto) {
            case arrayProductos[0].numero:
                precio = 15000;
                break;
            case arrayProductos[1].numero:
                precio = 7000;
                break;
            case arrayProductos[2].numero:
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











