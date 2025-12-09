// Crie uma função que receba um array numérico e retorne a soma total.
function sumArray(arr) {
    return arr.reduce(function (prev, curr) { return prev + curr; });
}
console.log(sumArray([1, 2, 3, 4]));
