const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite um número menor que 1000: ', num => {
    const n = parseInt(num);
    if (n >= 1000) return console.log('Número inválido');
  
    const c = Math.floor(n / 100);
    const d = Math.floor((n % 100) / 10);
    const u = n % 10;
  
    let resultado = [];
    if (c) resultado.push(`${c} ${c === 1 ? 'centena' : 'centenas'}`);
    if (d) resultado.push(`${d} ${d === 1 ? 'dezena' : 'dezenas'}`);
    if (u) resultado.push(`${u} ${u === 1 ? 'unidade' : 'unidades'}`);
  
    console.log(`${n} = ${resultado.join(', ').replace(/,([^,]*)$/, ' e$1')}`);
    readline.close();
  });
  