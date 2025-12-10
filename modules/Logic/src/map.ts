// Dado o array:
// [
//   { id: 1, nome: "Teclado", preco: 120 },
//   { id: 2, nome: "Mouse", preco: 60 },
//   { id: 3, nome: "Monitor", preco: 900 }
// ]

// Use **map** para retornar um novo array com `{ id, nome, precoComDesconto }`, aplicando **10% de desconto**.

const products = [
  { id: 1, name: "Teclado", price: 120 },
  { id: 2, name: "Mouse", price: 60 },
  { id: 3, name: "Monitor", price: 900 }
];

const productsWithDescount = products.map(product => {
    return {
        id: product.id,
        name: product.name,
        price: (product.price - (product.price * 0.1)).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
    }
})

console.log(productsWithDescount)