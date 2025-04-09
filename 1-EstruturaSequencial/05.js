const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite o valor em metros: ', metros => {
    const centimetros = parseFloat(metros) * 100;
    console.log(`${metros} metros equivalem a ${centimetros} centímetros.`);
    readline.close();
  });
  