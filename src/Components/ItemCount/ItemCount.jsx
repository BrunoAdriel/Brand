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
            <div className="btn-toolbar mb-3 centerButtonItemCount" role="toolbar" aria-label="Toolbar with button groups">
                <div className="btn-group me-2" role="group" aria-label="First group">
                    <button type="button" className="btn btn-outline-secondary" onClick={decrement}>-</button>
                    <button type="button" className="btn btn-outline-secondary" onClick={() => onAdd(count)}>Agregar  a carrito</button>
                    <button type="button" className="btn btn-outline-secondary" onClick={increment}>+</button>
                </div>
            </div>
        </article>
    )
}

export default ItemCount






