const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite uma data (dd/mm/aaaa): ', data => {
    const [dia, mes, ano] = data.split('/').map(Number);
    const valida = new Date(`${ano}-${mes}-${dia}`);
    const correta = valida.getDate() === dia && valida.getMonth() + 1 === mes && valida.getFullYear() === ano;
    console.log(correta ? 'Data válida' : 'Data inválida');
    readline.close();
  });
  