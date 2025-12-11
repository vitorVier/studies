// 6. Verificador de palíndromo
// Ex.: “arara” → true.

function isPalindrome(str: string) {
    let reverseStr = str.split('').reverse().join('')
    return str === reverseStr;
}

console.log(isPalindrome('teste'))
console.log(isPalindrome('arara'))