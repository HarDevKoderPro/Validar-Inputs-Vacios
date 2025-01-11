// Activo modo estricto
"use strict";

// Referencio elementos DOM
const getEL = (id) => document.getElementById(id);
const inputNombre = getEL("inputNombre");
const inputEdad = getEL("inputEdad");
const inputPass = getEL("inputPass");
const botonValidar = getEL("botonValidar");

// Funcion que cuenta y valida los inputs vacios (sin datos)
const hayInputsVacios = () => {
  const inputsArr = document.querySelectorAll("input");
  return [...inputsArr].some((input) => input.value.trim() === "");
};

// Sweet Alert Exito
function sweetAlertExito(message, fontSize) {
  Swal.fire({
    position: "center",
    width: "200px",
    heightAuto: false,
    showConfirmButton: false,
    background: "#ABEBC6",
    icon: "success",
    iconColor: "green",
    color: "green",
    timer: 1300,
    html: `<div style="font-size: ${fontSize}; text-align: center;">${message}</div>`, // Personaliza el tamaño del mensaje
  });
}

// Sweet Alert Error
function sweetAlertError(message, fontSize) {
  Swal.fire({
    position: "center",
    width: "200px",
    heightAuto: false,
    showConfirmButton: false,
    background: "#E6B0AA",
    icon: "error",
    iconColor: "red",
    color: "red",
    timer: 1300,
    html: `<div style="font-size: ${fontSize}; text-align: center;">${message}</div>`, // Personaliza el tamaño del mensaje
  });
}

// PROGRAMA PRINCIPAL
botonValidar.addEventListener("click", () => {
  if (hayInputsVacios()) {
    // Si hay vacios, no deja continuar al programa principal
    sweetAlertError("Faltan datos", "1.1em");
  } else {
    // Logica del resto del programa principal
    sweetAlertExito("Envío exitoso!", "1.1em");
  }
});
