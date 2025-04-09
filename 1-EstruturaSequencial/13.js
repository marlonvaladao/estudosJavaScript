const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite sua altura em metros: ', altura => {
    readline.question('Você é homem (H) ou mulher (M)? ', sexo => {
      const h = parseFloat(altura);
      let pesoIdeal;
  
      if (sexo.toUpperCase() === 'H') {
        pesoIdeal = (72.7 * h) - 58;
      } else {
        pesoIdeal = (62.1 * h) - 44.7;
      }
  
      console.log(`Seu peso ideal é: ${pesoIdeal.toFixed(2)} kg`);
      readline.close();
    });
  });
  