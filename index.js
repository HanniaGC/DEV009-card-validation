import validator from './validator.js';



document.getElementById("secciondonar").style.display = "none";

const button = document.getElementById("Donar");
const element = document.getElementById("secciondonar");

button.addEventListener("click", function () {
  if (element.style.display === "none") {
    element.style.display = "block";
    document.getElementById("contenido").style.display = "none";
  } else {
    element.style.display = "none";
  }
});

const form = document.querySelector('form');
form.addEventListener('submit',function (event) {
  event.preventDefault();

  const tarjeta = document.querySelector('input[name="numero_tarjeta"]');

  const numeroTarjeta = tarjeta.value;

  const maskedNumber = validator.maskify(numeroTarjeta);

  const isValid = validator.isValid(numeroTarjeta);

      if (maskedNumber && isValid) {
        tarjeta.value = maskedNumber
        document.querySelector(".mensaje").innerHTML='¡Muchas gracias por tu donación!';
      } else {
        document.querySelector(".mensaje").innerHTML='Error en la donación. Por favor, verifica tu número de tarjeta.';
      }

});


