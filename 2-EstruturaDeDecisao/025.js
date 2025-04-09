const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const perguntas = [
    'Telefonou para a vítima?',
    'Esteve no local do crime?',
    'Mora perto da vítima?',
    'Devia para a vítima?',
    'Já trabalhou com a vítima?'
  ];
  
  let respostas = [];
  let i = 0;
  
  function perguntar() {
    readline.question(`${perguntas[i]} (s/n): `, r => {
      respostas.push(r.toLowerCase() === 's' ? 1 : 0);
      i++;
      if (i < perguntas.length) {
        perguntar();
      } else {
        const soma = respostas.reduce((a, b) => a + b);
        let resultado;
        if (soma === 2) resultado = 'Suspeita';
        else if (soma <= 4) resultado = 'Cúmplice';
        else if (soma === 5) resultado = 'Assassino';
        else resultado = 'Inocente';
        console.log(`Classificação: ${resultado}`);
        readline.close();
      }
    });
  }
  
  perguntar();
  