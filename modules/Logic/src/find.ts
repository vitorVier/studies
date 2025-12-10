// Dado o array:
    
//     [
//       { id: 101, nome: "Cliente A" },
//       { id: 102, nome: "Cliente B" },
//       { id: 103, nome: "Cliente C" }
//     ]
    
//     Use **find** para localizar o cliente com pelo.

const clients = [
    { id: 101, nome: "Cliente A" },
    { id: 102, nome: "Cliente B" },
    { id: 103, nome: "Cliente C" }
]

const localeClient = (id: number) => clients.find(i => i.id === id)

console.log(localeClient(102))