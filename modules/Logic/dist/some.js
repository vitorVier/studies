"use strict";
// Dado o array:
Object.defineProperty(exports, "__esModule", { value: true });
// [
//   { titulo: "Estudar JS", concluida: true },
//   { titulo: "Estudar SQL", concluida: false },
//   { titulo: "Academia", concluida: true }
// ]
// - Use **some** para verificar se existe **alguma tarefa concluída**.
// - Use **every** para verificar se **todas estão concluídas**.
const tasks = [
    { titulo: "Estudar JS", done: true },
    { titulo: "Estudar SQL", done: false },
    { titulo: "Academia", done: true }
];
const done = tasks.some(task => task.done);
const allDone = tasks.every(task => task.done);
console.log(done);
console.log(allDone);
