import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCJxXyhelSdqRQbhjC_UJC3GpXVXUQy0x4",
    authDomain: "brand-c3609.firebaseapp.com",
    projectId: "brand-c3609",
    storageBucket: "brand-c3609.appspot.com",
    messagingSenderId: "522477277943",
    appId: "1:522477277943:web:f7a28739abd196bf3bf9f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)


// Productos

//  Función para añadir productos a Firestore

    //     const productsCollection = collection(db, "products");
    
    //     for (let product of products) {
    //         try {
    //             const docRef = await addDoc(productsCollection, product);
    //             console.log("Document written with ID: ", docRef.id);
    //             // If you need to do something with the product ID, like updating state, do it here
    //             // setProductId(docRef.id); // Assuming you have defined `setProductId` somewhere
    //         } catch (e) {
    //             console.error("Error adding document: ", e);
    //         }
    //     }
    // }
    
    // const db = getFirestore()
    
    // const productsCollection = collection(db, "products")
    
    // addDoc(productsCollection, products).then(({id})=>setProductId(id))
