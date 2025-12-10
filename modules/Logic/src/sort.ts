// Dado o array:

// [
//   { nome: "Notebook", preco: 4500 },
//   { nome: "Headset", preco: 200 },
//   { nome: "Cadeira Gamer", preco: 1200 }
// ]

// - Ordene do **mais barato para o mais caro**.
// - Ordene do **mais caro para o mais barato**.

const products = [
  { name: "Notebook", price: 4500 },
  { name: "Headset", price: 200 },
  { name: "Cadeira Gamer", price: 1200 }
]

const mostExpensive = [...products].sort((a, b) => a.price - b.price)
const lessExpensive = products.sort((a, b) => b.price - a.price)

console.log(mostExpensive)
console.log(lessExpensive)