// 8. Contagem de itens repetidos
// Receba um array e retorne um objeto com quantas vezes cada item aparece.

function duplicates(arr: any[]): Record<string, number> {
    return arr.reduce((count, curr) => {
        count[curr] = (count[curr] || 0 ) + 1
        return count
    }, {})
}

console.log(duplicates(['maçã', 'banana', 'abacaxi', 'banana', 'abacaxi', 'abacaxi']))