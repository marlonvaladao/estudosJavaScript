const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite a temperatura em Celsius: ', c => {
    const fahrenheit = (parseFloat(c) * 9 / 5) + 32;
    console.log(`A temperatura em Fahrenheit é: ${fahrenheit.toFixed(2)}°F`);
    readline.close();
  });
  