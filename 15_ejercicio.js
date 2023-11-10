function parOimpar() {
    let randomNumber = Math.floor(Math.random() * 10)
    
    if (randomNumber % 2 == 0) 
    {
      return console.log(`El número ${randomNumber} es par`);
    } else{
      return console.log(`El número ${randomNumber} es impar`);
    }
  }  
  parOimpar()