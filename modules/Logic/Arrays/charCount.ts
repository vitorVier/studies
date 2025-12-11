// 3. Contador de caracteres
// Dado uma frase, retorne quantas letras existem (ignorando espaços).

function charCount(phrase: string) {
    let newPhrase = phrase.replaceAll(' ', '');
    return newPhrase.length;
}

console.log(charCount(' 12 3 456 7  8   9'))