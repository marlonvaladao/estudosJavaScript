const numeros = [3, 5, 7, 10, 12, 15, 20, 21, 25, 27, 30, 33, 35, 36, 39, 40, 45, 48, 50, 60];
const multiplos = numeros.filter(n => n % 3 === 0 || n % 5 === 0);

console.log('Múltiplos de 3 ou 5:', multiplos);
