const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite o salário atual: ', salario => {
    const sal = parseFloat(salario);
    let percentual = 0;
  
    if (sal <= 280) percentual = 0.20;
    else if (sal <= 700) percentual = 0.15;
    else if (sal <= 1500) percentual = 0.10;
    else percentual = 0.05;
  
    const aumento = sal * percentual;
    const novoSalario = sal + aumento;
  
    console.log(`Salário antes do reajuste: R$ ${sal.toFixed(2)}`);
    console.log(`Percentual de aumento aplicado: ${percentual * 100}%`);
    console.log(`Valor do aumento: R$ ${aumento.toFixed(2)}`);
    console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`);
    readline.close();
  });
  