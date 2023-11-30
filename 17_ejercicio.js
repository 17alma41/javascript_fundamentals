function modificarString(string){
    let new_string = ""

for(let i = 0; i < string.length; i++){
    if(i%2 === 0){
        new_string += string.charAt(i).toUpperCase()
    } else{
        new_string += string.charAt(i).toLowerCase()
    }
}
return new_string
}

modificarString("Hola Mundo")