var nombreClics = 0;

function addone() {
  nombreClics++;
  document.getElementById("compteur").textContent = nombreClics;

}
document.getElementById("button").addEventListener("click", addone);

