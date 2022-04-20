import { actualizarCarrito } from "./actualizarCarrito.js";
import { productos } from "./stock.js";

let carritoDeCompras = [];

export const carritoIndex = (productoId) => {

  const contenedorCarrito = document.getElementById('carrito-contenedor');
  let productoRepetido = carritoDeCompras.find(producto => producto.id == productoId);

  const renderProductosCarrito = () => {
    let producto = productos.find(producto => producto.id == productoId);
    carritoDeCompras.push(producto);

    producto.cantidad = 1;
    let div = document.createElement('div');
    div.classList.add('productoEnCarrito');
    div.innerHTML = `<p>${producto.nombre}</p>
                          <p>Precio:${producto.precio}</p>
                          <p id=cantidad${producto.id}>Cantidad:${producto.cantidad}</p>
                          <button id=eliminar${producto.id} class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                          `;
    contenedorCarrito.appendChild(div);
    
    actualizarCarrito(carritoDeCompras);
  }

  const contarProductosRepetidos = (prodRepetido) => {
    
    if (prodRepetido) {
      prodRepetido.cantidad++
      document.getElementById(`cantidad${prodRepetido.id}`).innerHTML = `<p id=cantidad${prodRepetido.id}>Cantidad:${prodRepetido.cantidad}</p>`;
      actualizarCarrito(carritoDeCompras);
    } else {
      renderProductosCarrito(productoId);
    }
  }

  const eliminarProductoCarrito = (productoId) => {
    let botonEliminar = document.getElementById(`eliminar${productoId}`);

    botonEliminar.addEventListener('click', () => {
      botonEliminar.parentElement.remove();
      carritoDeCompras = carritoDeCompras.filter(el => el.id != productoId);
      actualizarCarrito(carritoDeCompras);
    });
  }

  contarProductosRepetidos(productoRepetido);
  eliminarProductoCarrito(productoId);
}