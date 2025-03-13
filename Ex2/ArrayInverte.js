export function ArrayInverte(fila = [], size) {
    const arrayInverso = [];
    for (let i = size - 1; i >= 0; i--) {
        arrayInverso.push(fila[i]);
    }
    return arrayInverso;
}