"use strict";
// Dado o array:
Object.defineProperty(exports, "__esModule", { value: true });
// [
//   { nome: "Ana", ativo: true },
//   { nome: "Carlos", ativo: false },
//   { nome: "João", ativo: true }
// ]
// Use **filter** para retornar apenas os usuários ativos.
const users = [
    { name: "Ana", isActive: true },
    { name: "Carlos", isActive: false },
    { name: "João", isActive: true }
];
const activeUsers = users.filter(user => user.isActive === true);
console.log(activeUsers);
