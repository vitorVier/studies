// Crie uma função que receba um array numérico e retorne a soma total.

function sumArray(arr: number[]) {
    return arr.reduce((prev, curr) => prev + curr)
}

console.log(sumArray([1,2,3,4]))