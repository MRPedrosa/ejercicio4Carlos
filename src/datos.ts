let btnEnv = document.getElementById("btnEnviar");
let dato = document.forms[0].dato;
let rotulo = document.getElementById("rotulo");

btnEnv.addEventListener("click", () => {
  // TU CODIGO VA AQUI, POR EJEMPLO
  console.log("La altura es", dato.value);
});
rotulo.innerHTML = "Indique la altura de la persona: ";
