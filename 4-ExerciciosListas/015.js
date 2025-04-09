const A = [1, 2, 3, 4, 5];
const B = [10, 20, 30, 40, 50];
const C = [];

for (let i = 0; i < A.length; i++) {
  C.push(A[i] + B[i]);
}

console.log('Vetor C:', C);
