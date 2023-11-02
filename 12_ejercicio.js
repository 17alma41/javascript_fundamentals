function calcularImc(peso, altura) {
  let imc = peso / (altura * altura)
  console.log(`Mi peso es ${peso} kg y mi altura es ${altura} cm y mi IMC es ${imc}`)
  return imc
}

calcularImc(60, 1.70)