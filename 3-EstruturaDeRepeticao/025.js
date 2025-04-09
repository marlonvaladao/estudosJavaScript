const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function validarIdade() {
    readline.question('Digite a idade (0-150): ', idade => {
      const i = parseInt(idade);
      if (i >= 0 && i <= 150) validarSalario();
      else {
        console.log('Idade inválida.');
        validarIdade();
      }
    });
  }
  
  function validarSalario() {
    readline.question('Digite o salário (>0): ', salario => {
      const s = parseFloat(salario);
      if (s > 0) validarSexo();
      else {
        console.log('Salário inválido.');
        validarSalario();
      }
    });
  }
  
  function validarSexo() {
    readline.question('Digite o sexo (f/m): ', sexo => {
      const s = sexo.toLowerCase();
      if (s === 'f' || s === 'm') {
        console.log('Dados válidos!');
        readline.close();
      } else {
        console.log('Sexo inválido.');
        validarSexo();
      }
    });
  }
  
  validarIdade();
  