const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Quanto você ganha por hora? ', valorHora => {
    readline.question('Quantas horas trabalhou no mês? ', horas => {
      const bruto = parseFloat(valorHora) * parseFloat(horas);
      const ir = bruto * 0.11;
      const inss = bruto * 0.08;
      const sindicato = bruto * 0.05;
      const liquido = bruto - ir - inss - sindicato;
  
      console.log(`+ Salário Bruto: R$ ${bruto.toFixed(2)}`);
      console.log(`- IR (11%): R$ ${ir.toFixed(2)}`);
      console.log(`- INSS (8%): R$ ${inss.toFixed(2)}`);
      console.log(`- Sindicato (5%): R$ ${sindicato.toFixed(2)}`);
      console.log(`= Salário Líquido: R$ ${liquido.toFixed(2)}`);
      readline.close();
    });
  });
  