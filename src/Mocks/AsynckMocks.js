
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








