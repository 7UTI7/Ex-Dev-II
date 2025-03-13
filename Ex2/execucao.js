const array = [1, 2, 3, 4, 5, 6];
const tamanho = array.length;

const arrayInverso = [];

for (let i = tamanho - 1; i >= 0; i--) {
    arrayInverso.push(array[i]);
}

console.log("Array original:", array);
console.log("Array invertido:", arrayInverso);