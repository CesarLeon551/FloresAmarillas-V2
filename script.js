onload = () => {
  document.body.classList.remove("container");
};

document.addEventListener("DOMContentLoaded", function () {
  const hiddenZone = document.getElementById("hidden-zone");
  const closeButton = document.getElementById("close-hidden-zone");

  // Mostrar la zona oculta al interactuar con un elemento
  document.querySelector(".flowers").addEventListener("click", function () {
    hiddenZone.style.display = "flex";
  });

  // Cerrar la zona oculta al hacer clic en el botón de cerrar
  closeButton.addEventListener("click", function () {
    hiddenZone.style.display = "none";
  });
});