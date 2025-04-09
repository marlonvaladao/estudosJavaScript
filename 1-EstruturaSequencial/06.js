const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite o raio do círculo: ', raio => {
    const area = Math.PI * Math.pow(parseFloat(raio), 2);
    console.log(`A área do círculo é: ${area.toFixed(2)}`);
    readline.close();
  });
  