// 5. Organizar lista de produtos
// Receba uma lista de produtos (nome e preço) e retorne ordenada pelo preço.

interface ProductProps {
    name: string;
    price: number;
}

function organizeByPrice(products: ProductProps[]) {
    return [...products].sort((x, y) => x.price - y.price)
}

console.log(organizeByPrice([
        { name: 'Notebook', price: 4500},
        { name: 'IPhone', price: 6500},
        { name: 'TV', price: 5000},
        { name: 'Laptop', price: 3500},
        { name: 'IPad', price: 3200},
    ])
)