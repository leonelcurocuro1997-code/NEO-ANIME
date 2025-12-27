// Espera a que la página esté cargada
document.addEventListener('DOMContentLoaded', () => {
  const boton = document.getElementById('miBoton');
  const parrafo = document.querySelector('p');

  boton.addEventListener('click', () => {
    parrafo.textContent = '¡Gracias por hacer clic! Ahora sí tengo interacción.';
  });
});