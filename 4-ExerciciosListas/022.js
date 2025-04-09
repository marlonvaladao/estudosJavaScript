const A = [1, 3, 5];
const B = [2, 4, 6];
const C = [];

for (let i = 0; i < A.length; i++) {
  C.push(A[i], B[i]);
}

console.log('Vetor C intercalado:', C);
