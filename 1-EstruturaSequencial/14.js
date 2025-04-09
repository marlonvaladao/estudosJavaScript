const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite o peso dos peixes (em kg): ', peso => {
    const limite = 50;
    const excesso = Math.max(0, parseFloat(peso) - limite);
    const multa = excesso * 4;
  
    console.log(`Excesso: ${excesso} kg`);
    console.log(`Multa a pagar: R$ ${multa.toFixed(2)}`);
    readline.close();
  });
  