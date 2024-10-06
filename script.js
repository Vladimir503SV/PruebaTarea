// script.js

// Animación al hacer scroll: los elementos aparecen suavemente al entrar en la pantalla
function mostrarElementosConScroll() {
  const elementos = document.querySelectorAll('.ocultar');

  elementos.forEach(elemento => {
    const posicionElemento = elemento.getBoundingClientRect().top;
    const alturaVentana = window.innerHeight;

    if (posicionElemento < alturaVentana * 0.8) {
      elemento.classList.add('mostrar');
    }
  });
}

window.addEventListener('scroll', mostrarElementosConScroll);


// Efecto hover en las imágenes de los servicios
const imagenesServicios = document.querySelectorAll('.servicio img');

imagenesServicios.forEach(imagen => {
  imagen.addEventListener('mouseover', () => {
    imagen.style.transform = 'scale(1.1)'; 
  });

  imagen.addEventListener('mouseout', () => {
    imagen.style.transform = 'scale(1.0)'; 
  });
});
