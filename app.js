import { carritoIndex } from "./carritoIndex.js";
import { productos } from "./stock.js";

const mostrarProductos = (productos) => {

  const contenedorProductos = document.getElementsByClassName("seccion-main-uno");

  productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML += `<div data-aos="flip-left" class="card" style="background: linear-gradient( #5c5c5c, #050505);">
    <img src=${producto.img}class="card-img-top" alt="Padel Straviv">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">${producto.precio}</p>
      <a href="#" class="btn btn-outline-light boton-comprar d-flex justify-content-center id= boton ${producto.id}">${producto.boton}</a>
    </div>
  </div>
  <div data-aos="flip-left" class="card" style="background: linear-gradient( #5c5c5c, #050505);">
    <img src=${producto.img} class="card-img-top" alt="Zapatilla Azul">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">${producto.precio}</p>
      <a href="#" class="btn btn-outline-light boton-comprar d-flex justify-content-center id= boton ${producto.id}">${producto.boton}</a>
    </div>
  </div>
  </div>
  <div data-aos="flip-left" class="card" style="background: linear-gradient( #5c5c5c, #050505);">
    <img src= ${producto.img} class="card-img-top" alt="Bull Padel">
    <div class="card-body">
      <h5 class=${producto.nombre}</h5>
      <p class="card-text">${producto.precio}</p>
      <a href="#" class="btn btn-outline-light boton-comprar d-flex justify-content-center id= boton ${producto.id}">${producto.boton}</a>
    </div>
  </div>
                      `
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
      carritoIndex(producto.id);
    });
  });
};

mostrarProductos(productos);