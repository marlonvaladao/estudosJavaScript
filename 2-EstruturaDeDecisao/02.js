const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite um valor: ', valor => {
    const numero = parseFloat(valor);
    console.log(numero >= 0 ? 'Positivo' : 'Negativo');
    readline.close();
  });
  