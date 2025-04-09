const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('População A: ', pa => {
    readline.question('Crescimento A (%): ', ta => {
      readline.question('População B: ', pb => {
        readline.question('Crescimento B (%): ', tb => {
          let a = parseFloat(pa);
          let b = parseFloat(pb);
          const taxaA = parseFloat(ta) / 100;
          const taxaB = parseFloat(tb) / 100;
          let anos = 0;
  
          while (a < b) {
            a += a * taxaA;
            b += b * taxaB;
            anos++;
          }
  
          console.log(`População A ultrapassará B em ${anos} anos.`);
          readline.close();
        });
      });
    });
  });
  