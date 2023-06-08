import validator from './validator.js';

function validateCard(event) {
  event.preventDefault(); 

  const numeroTarjeta = document.querySelector('input[name="numero_tarjeta"]').value;

  const maskedNumber = validator.maskify(numeroTarjeta);
  console.log(maskedNumber);

  const isValid = validator.isValid(numeroTarjeta);
  console.log(isValid);

}

function mostrarSeccionDonar() {
  const donarSection = document.getElementById("secciondonar");
  donarSection.style.display = "block";

  const contenidoSection = document.getElementById("contenido");
  contenidoSection.style.display = "none";
}

const contenidoSection = document.getElementById("contenido");
contenidoSection.addEventListener("click", mostrarSeccionDonar);

const form = document.querySelector('form');
form.addEventListener('submit', validateCard);
