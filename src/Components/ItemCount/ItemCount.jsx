import {useState} from "react"


const ItemCount = ({initial=1, stock, onAdd})=>{
    const[count, setCount] = useState(initial)

    const decrement = () =>{
        if(count > 1){
            setCount( prev => prev - 1 )
        }
    }

    const increment = () =>{
        if (count < stock){
            setCount( prev => prev + 1 )
        }
    }

    return(
        <article>
            <h4>{count}</h4>
            <button onClick={decrement}>-</button>
            <button onClick={() => onAdd(count)}>Agregar  a carrito</button>
            <button onClick={increment}>+</button>
        </article>
    )
}

export default ItemCount