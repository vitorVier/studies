// Dado:

// const pedido = {
//   id: 88,
//   cliente: "Gabriel",
//   itens: [
//     { produto: "Teclado", preco: 120 },
//     { produto: "Mouse", preco: 60 }
//   ]
// };

// - Use **desestruturação de objeto** para extrair `cliente` e `itens`.
// - Use **desestruturação de array** para pegar o primeiro e o segundo item.

const pedido = {
  id: 88,
  cliente: "Gabriel",
  itens: [
    { produto: "Teclado", preco: 120 },
    { produto: "Mouse", preco: 60 }
  ]
};

const { id, itens } = pedido;
const {itens: [item1, item2]} = pedido

console.log(id, itens)
console.log(item1, item2)