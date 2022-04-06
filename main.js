


class Producto {
    constructor (nombre, precio, stock){
        this.nombre= nombre;
        this.precio= parseInt(precio);
        this.stock= stock;
    }

    sinIva(){
        this.precio = this.precio - this.precio*0.21;
    }

    actualizarStock(x){
        this.stock= this.stock - x;
    }
}

const arrayProductos = [];
arrayProductos.push(new Producto ("paletas", 20000, 18));
arrayProductos.push(new Producto ("zapatillas", 12000, 10));
arrayProductos.push(new Producto ("bolsos", 7000, 15));


let total = 0;
const products =
[
    {
        id: 1,
        nombre: "paletas",
        descripcion: "super accesibles",
        precio: 20000,
        cantidad:20
    },

    {
        id: 2,
        nombre: "zapatillas",
        desc: "super facheras",
        precio: 12000,
        cantidad:10
    },

    {
        id: 3,
        nombre: "bolsos",
        desc: "comodidad al 100%",
        precio: 7000,
        cantidad:15
    }
]



//FUNCION ORDENAMIENTO DE MENOR A MAYOR

function ordenarDeMAyoraMenor(){
    let confirmacion = confirm ("Queres ordenarlos de Menor a Mayor ?")
    confirmacion = products.sort((a,b)=> b.precio - a.precio);
    mostrarListaOrdenada();
}

function mostrarListaOrdenada(){
    let array = [];
    for (i=0; i<products.length; i++){
        array.push(products[i].nombre+" $"+products[i].precio);
    }
    alert("Lista de precios:"+"\n"+array.join("\n"))
}


function agregarAlCarrito() {
    let otroMas;

    //Ciclo para sumar productos al carrito
    do {
        let producto = prompt ("¿Querés comprar paletas, zapatillas o bolsos?", "Ej: todos");
        let cantidad = parseInt(prompt ("¿Cuántos querés comprar?"));
        let precio;

        switch (producto) {
            case arrayProductos[0].nombre:
                arrayProductos[0].actualizarStock(cantidad);
                if (arrayProductos[0].stock < 0 || Number.isNaN(cantidad)){
                    alert("Lo sentimos. En este momento no tenemos stock")
                    arrayProductos[0].stock = arrayProductos[0].stock + cantidad;
                    precio = 0;
                    cantidad = 0;
                }else{
                    precio = arrayProductos[0].precio;
                }
                break;
            case arrayProductos[1].nombre:
                arrayProductos[1].actualizarStock(cantidad);
                if (arrayProductos[1].stock < 0 || Number.isNaN(cantidad)){
                    alert("Lo sentimos. En este momento no tenemos stock")
                    arrayProductos[1].stock = arrayProductos[1].stock + cantidad;
                    precio = 0;
                    cantidad = 0;
                }else{
                    precio = arrayProductos[1].precio;
                }
                break;
            case arrayProductos[2].nombre:
                arrayProductos[2].actualizarStock(cantidad);
                if (arrayProductos[2].stock < 0 || Number.isNaN(cantidad)){
                    alert("Lo sentimos. En este momento no tenemos stock")
                    arrayProductos[2].stock = arrayProductos[2].stock + cantidad;
                    precio = 0;
                    cantidad = 0;
                }else{
                    precio = arrayProductos[2].precio;
                }
                break;
            default:
                alert("Alguno de los ingresados no es correcto");
                precio = 0;
                cantidad = 0;
        }

        total = total + precio * cantidad;

        otroMas = confirm("¿Querés agregar otro producto?");

    }while (otroMas);
}

//Función para calcular el descuento
function calcularDescuento (total) {
    if (total>=10000){
        total = total*0.80;
        alert("Tenés 20% de descuento")
    }
    return total;
}

//Función para calcular el envío
function calcularEnvio (total) {
    let confirmacion = confirm("¿Querés envio a domicilio?");
    if (confirmacion && total>=15000){
        alert("Tenés envío gratis. El total de tu compra es $"+total);
    }else if (confirmacion && total<7000 && total!=0){
        total=total+700;
        alert("El envío cuesta $1200. El total de tu compra asciende a $"+total);
    }else{
        alert("El total de tu compra es $"+total);
    }
    return total;
}

//Calculo la cantidad de cuotas
let cuotas;
function cantidadCuotas(){
    let confirmacion = confirm("¿Querés pagar en cuotas?");
    if(confirmacion) {
        cuotas=  parseInt(prompt("¿En cuántas cuotas querés pagar?"));
        if (cuotas==0){
            cuotas=1;
        }else if (Number.isNaN(cuotas)){
            cantidadCuotas();
        }
    }else {
        cuotas= 1;
    }
    return cuotas;
}

//Calculo los intereses de las cuotas
function calcularIntereses (cuotas) {
    if (cuotas==1){
        return 0;
    }else{
        let tasa = 12.3+ cuotas*0.2;
        return tasa*cuotas;
    }
}

//Calculo el total de carrito
function totalAPagar (total, cuotas, intereses) {
    total = (total+intereses)
    let valorCuota= total/cuotas;
    alert ("El total a pagar es $"+total+" en "+cuotas+" cuotas de $"+valorCuota);
}

ordenarDeMAyoraMenor () ;
agregarAlCarrito();
totalAPagar(calcularEnvio(calcularDescuento(total)), cantidadCuotas(), calcularIntereses(cuotas))