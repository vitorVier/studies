// Dado o array:

// [
//   { id: 1, total: 89.9 },
//   { id: 2, total: 120.5 },
//   { id: 3, total: 45.0 }
// ]

// Use **reduce** para calcular o **faturamento total**.

const arr = [
  { id: 1, total: 89.9 },
  { id: 2, total: 120.5 },
  { id: 3, total: 45.0 }
]

const newArr = arr.reduce((prev, curr) => prev + curr.total, 0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})

console.log(newArr)