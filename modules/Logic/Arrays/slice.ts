// Dado o array:

// const usuarios = [
//   { id: 1, nome: "A" },
//   { id: 2, nome: "B" },
//   { id: 3, nome: "C" },
//   { id: 4, nome: "D" }
// ];

// - Use **slice** para retornar apenas os dois primeiros usuários (sem alterar o array original).
// - Use **splice** para **remover** o usuário com `id === 3` (alterando o array original).

const users = [
  { id: 1, nome: "A" },
  { id: 2, nome: "B" },
  { id: 3, nome: "C" },
  { id: 4, nome: "D" }
];

const firstUsers = users.slice(0, 2)
const splicedUser = users.splice(2, 1)

console.log(firstUsers)
console.log(users)