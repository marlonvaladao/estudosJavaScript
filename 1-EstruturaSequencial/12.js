const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite sua altura em metros: ', altura => {
    const pesoIdeal = (72.7 * parseFloat(altura)) - 58;
    console.log(`Seu peso ideal é: ${pesoIdeal.toFixed(2)} kg`);
    readline.close();
  });
  