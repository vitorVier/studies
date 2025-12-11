// 7. Conversor de temperatura
// Função que recebe °C e retorna °F.

function tempConverter(temp: number) {
    console.log(`Temperatura em ºC: ${temp}`)
    return temp * 1.8 + 32
}

console.log(`Temperatura em ºF: ${tempConverter(25)}`)