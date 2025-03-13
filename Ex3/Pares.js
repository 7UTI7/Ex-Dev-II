export function NumerosPares(N) {
    const pares = [];
    for (let i = 2; pares.length < N; i += 2) {
        pares.push(i);
    }
    return pares;
}