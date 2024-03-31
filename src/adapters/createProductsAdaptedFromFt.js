
export const createProductsAdaptedFromFt = (doc) => {
    const data= doc.data()

    return {
        id: doc.id,
        name: data.name,
        price: data.price,
        quantity: data.quantity,
        img: data.img,
        description: data.description,
        stock: data.stock
}
}

