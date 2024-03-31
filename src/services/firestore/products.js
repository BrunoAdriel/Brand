import {getDocs, collection, query, where, orderBy, getDoc, doc} from 'firebase/firestore'
import { db } from '../firebaseConfig';
import { toast } from 'react-toastify';
import { createProductsAdaptedFromFt } from '../../adapters/createProductsAdaptedFromFt';

export const getProducts = (categoryId) =>{
    const prodsCollection = categoryId
        ? query(collection(db, 'products'), where ('category', '==', categoryId))
        : query(collection(db, 'products'), orderBy('category'))

        return getDocs(prodsCollection)
            .then(querySnapshot =>{
                const productAdapted = querySnapshot.docs.map( doc =>{
                    return createProductsAdaptedFromFt(doc)
                })
                return productAdapted
            })
            .catch(error=>{
                toast.error(`Error al cargar los productos`,error)
            })
}

export const getProductsById = (itemId) =>{
    const productDoc = doc(db, 'products', itemId)

    return getDoc(productDoc)
        .then(QueryDocumentSnapshot =>{
            const prodAdapted = createProductsAdaptedFromFt( QueryDocumentSnapshot)

            return prodAdapted
        })
        .catch(error=>{
            return error
        })
}