function cambiarVocales(string, vocal) {
    let new_string = ""
    for (const caracter of string){
        if(caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u"){
            new_string += vocal
        } else {
            new_string += caracter
        }
    }
    return new_string
}

cambiarVocales("Hola Mundo", "u")