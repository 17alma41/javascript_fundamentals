const lista = [20, 30, 8, 1, 10, 3]

function minimo(lista) {
  let min = lista[0]
  for (let i = 0; i < lista.length; i++) {
    if(lista[i] < min) {
      min = lista[i]
    }
  }
    console.log(min)
}      
 minimo(lista) 

function maximo(lista) {
  let max = lista[0]
  for (let i = 0; i < lista.length; i++) {
    if(lista[i] > max) {
      max = lista[i]
    }
  }
    console.log(max)
}      
 maximo(lista) 

function promedio(lista) {
  let media = lista[0]
  for (let i = 0; i < lista.length; i++) {
      media = media + lista[i]
  }
  media = media / lista.length
  console.log(media)
}

promedio(lista)