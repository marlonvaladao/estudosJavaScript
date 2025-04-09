const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Valor da hora: ', valorHora => {
    readline.question('Horas trabalhadas no mês: ', horas => {
      const valor = parseFloat(valorHora);
      const h = parseFloat(horas);
      const bruto = valor * h;
  
      let ir = 0;
      if (bruto <= 900) ir = 0;
      else if (bruto <= 1500) ir = bruto * 0.05;
      else if (bruto <= 2500) ir = bruto * 0.10;
      else ir = bruto * 0.20;
  
      const inss = bruto * 0.10;
      const fgts = bruto * 0.11;
      const totalDescontos = ir + inss;
      const liquido = bruto - totalDescontos;
  
      console.log(`Salário Bruto: R$ ${bruto.toFixed(2)}`);
      console.log(`(-) IR: R$ ${ir.toFixed(2)}`);
      console.log(`(-) INSS (10%): R$ ${inss.toFixed(2)}`);
      console.log(`FGTS (11%): R$ ${fgts.toFixed(2)}`);
      console.log(`Total de descontos: R$ ${totalDescontos.toFixed(2)}`);
      console.log(`Salário Líquido: R$ ${liquido.toFixed(2)}`);
      readline.close();
    });
  });
  