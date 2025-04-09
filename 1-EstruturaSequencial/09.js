const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite a temperatura em Fahrenheit: ', f => {
    const celsius = 5 * ((parseFloat(f) - 32) / 9);
    console.log(`A temperatura em Celsius é: ${celsius.toFixed(2)}°C`);
    readline.close();
  });
  