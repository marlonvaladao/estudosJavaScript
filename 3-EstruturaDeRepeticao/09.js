const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let numeros = [];
  
  function pedirNumero(n) {
    if (n > 10) {
      const maior = Math.max(...numeros);
      const menor = Math.min(...numeros);
      console.log(`Maior número: ${maior}`);
      console.log(`Menor número: ${menor}`);
      readline.close();
      return;
    }
  
    readline.question(`Digite o ${n}º número: `, valor => {
      numeros.push(parseFloat(valor));
      pedirNumero(n + 1);
    });
  }
  
  pedirNumero(1);
  