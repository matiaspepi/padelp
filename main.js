let nombre =  prompt ("ingrese su Nombre");

let apellido = prompt ("ingrese su apellido");

while  (nombre != "" && apellido !="") {

    if ( nombre != apellido) {
        alert ("Bienvenido"+ " " + nombre + " " + apellido)
        break;
    }
    else {
        alert ("Erorr: los datos ingresados son incorrectos")
    }
}
