const A = [4, 1, 7];
const B = [3, 2, 6];
const C = [...A, ...B].sort((a, b) => a - b);

console.log('Vetor C ordenado:', C);
