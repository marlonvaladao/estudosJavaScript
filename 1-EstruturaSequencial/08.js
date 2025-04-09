const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Quanto você ganha por hora? ', valorHora => {
    readline.question('Quantas horas você trabalhou no mês? ', horas => {
      const salario = parseFloat(valorHora) * parseFloat(horas);
      console.log(`Seu salário no mês é: R$ ${salario.toFixed(2)}`);
      readline.close();
    });
  });
  