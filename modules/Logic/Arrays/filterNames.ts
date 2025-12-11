// 2. Filtrar nomes curtos
// Receba uma lista de nomes e retorne apenas os nomes com 4 letras ou menos.

function filterNames(names: string[]) {
    return names.filter( n => n.length <= 4)
}

console.log(filterNames(['Vítor', 'Ana', 'Marcos', 'Raí']))