const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let numeros = [];
  
  function perguntar(index) {
    readline.question(`Digite o número ${index + 1}: `, valor => {
      numeros.push(parseFloat(valor));
      if (index === 1) {
        readline.question('Digite a operação (+, -, *, /): ', op => {
          let resultado;
          switch (op) {
            case '+': resultado = numeros[0] + numeros[1]; break;
            case '-': resultado = numeros[0] - numeros[1]; break;
            case '*': resultado = numeros[0] * numeros[1]; break;
            case '/': resultado = numeros[0] / numeros[1]; break;
            default: return console.log('Operação inválida.');
          }
  
          console.log(`Resultado: ${resultado}`);
          console.log(resultado % 2 === 0 ? 'Par' : 'Ímpar');
          console.log(resultado > 0 ? 'Positivo' : resultado < 0 ? 'Negativo' : 'Zero');
          console.log(Number.isInteger(resultado) ? 'Inteiro' : 'Decimal');
          readline.close();
        });
      } else {
        perguntar(index + 1);
      }
    });
  }
  
  perguntar(0);
  