let cadena = "“It is said that your life flashes before your eyes just before you die. That is true, it’s called life.”"

function ContarLife(cadena) {
    let contador = 0;
    const palabras = cadena.split(' ');
    for(let i = 0; i < palabras.length; i++) {
        if(palabras[i].toLowerCase() === 'life') {
            contador++;
        }
    }
    return contador;
}

ContarLife(cadena);