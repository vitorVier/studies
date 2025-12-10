"use strict";
// Dado o objeto:
Object.defineProperty(exports, "__esModule", { value: true });
// const usuario = {
//   nome: "Vitor",
//   idade: 23,
//   cidade: "Ijuí"
// };
// - Use **spread** para criar um novo usuário incluindo `admin: true`.
// - Crie uma função que recebe várias notas via **rest** e retorna a média.
const user = {
    name: "Vitor",
    age: 23,
    city: "Ijuí"
};
const newUser = { ...user, admin: true };
console.log(newUser);
function avg(...grades) {
    const sum = grades.reduce((total, grade) => total + grade, 0);
    return sum;
}
console.log('Average: ' + avg(7, 8, 10, 9.8, 5.7));
