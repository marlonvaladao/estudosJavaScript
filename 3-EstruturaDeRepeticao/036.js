let soma = 0;
for (let i = 1; i <= 500; i += 2) {
  if (i % 3 === 0) soma += i;
}
console.log(`Soma: ${soma}`);
