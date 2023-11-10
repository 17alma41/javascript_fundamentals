const palabra = "hola mundo";

function capitalizarPrimeraLetra(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(capitalizarPrimeraLetra(palabra));