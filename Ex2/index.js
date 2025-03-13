import { ArrayInverte } from "./ArrayInverte.js";

const array = [1, 2, 3, 4, 5, 6];
const tamanho = array.length;

const resultado = ArrayInverte(array, tamanho);

console.log("Array original:", array);
console.log("Array invertido:", resultado);