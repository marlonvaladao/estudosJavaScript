for (let num = 1; num <= 1000; num++) {
    let soma = 0;
    for (let i = 1; i < num; i++) {
      if (num % i === 0) soma += i;
    }
    if (soma === num) {
      console.log(`${num} é perfeito`);
    }
  }
  