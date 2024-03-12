const products = [{
    id: '1',
    name: 'Iphone 12',
    price: 200000,
    category: 'Celulares',
    img: '#',
    stock: 20,
    description: '128 GB, Ancho: 7,15 cm, Alto: 14,67 cm, Grosor: 0,74cm, Peso: 162 g,Chip A14 Bionic, CPU de 6 núcleos'
}, {
    id: '2',
    name: 'Iphone 11',
    price: 150000,
    category: 'Celulares',
    img: '#',
    stock: 20,
    description: '128 GB, Ancho: 7,57 cm, Alto: 15,09 cm, Grosor: 0,83 cm, Peso: 194 g, Chip A13 Bionic, CPU de 6 núcleos'
}, {
    id: '3',
    name: 'iPad 9ºgeneracion',
    price: 400000,
    category: 'iPads',
    img: '#',
    stock: 20,
    description: '256 GB, Ancho: 174,1 mm, Profundidad: 7,5 mm, Grosor: 250,6 mm, Peso: 487 g, Chip A13 Bionic, Neural Engine'
}, {
    id: '4',
    name: 'iPad 8ºgeneracion',
    price: 350000,
    category: 'iPads',
    img: '#',
    stock: 20,
    description: '128 GB, Alto: 25,06 cm, Ancho: 17,41 cm, Grosor: 0,75 cm, Peso: 490 g, Chip A12 Bionic con arquitectura de 64 bits, Neural Engine'
}, {
    id: '5',
    name: 'MackBook air 13º pulgadas(M2)',
    price: 500000,
    category: 'Laptops',
    img: '#',
    stock: 20,
    description: '256 GB, Grosor: 1.13 cm, Ancho: 30.41 cm, Profundidad: 21.5cm, Peso: 1.24 kg, Chip M2 de Apple, CPU de 8 núcleos'
}, {
    id: '6',
    name: 'MackBook air 15º pulgadas(M3)',
    price: 700000,
    category: 'Laptops',
    img: '#',
    stock: 20,
    description: '512 GB, Grosor: 1.15 cm, Ancho: 34.04 cm, Profundidad: 23.76 cm, Peso: 1.51 kg, Chip M3 de Apple, GPU de 10 núcleos'
}];


export const getProducts = () =>{
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(products)
        }, 100)
    }) 
}


export const getProductsByCategory = (categoryId) =>{
    return new Promise((resolve)=> {
        setTimeout (() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductsById = (itemId) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 100)
    })
}








