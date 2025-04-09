const numeros = [5, 7, 3, 8, 9, 1, 4, 6, 2, 10];
const soma = numeros.reduce((a, b) => a + b);
const media = soma / numeros.length;
const maior = Math.max(...numeros);
const menor = Math.min(...numeros);

console.log(`Soma: ${soma}, Média: ${media}, Maior: ${maior}, Menor: ${menor}`);
