import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import ItemCart from './ItemCart';
import BackButton from '../BackButton/BackButton';


const Cart = () => {
    const { cart, clear, totalPrice } = useContext(CartContext);
    
    const localCart = JSON.parse(localStorage.getItem("cartProducts"));
    const hasProducts = cart.length > 0 || (localCart && localCart.length > 0);
    
    if (!hasProducts) {
        return (
            <div className="alaingCart">
                <p className='fw-bolder'>No hay productos cargados en el carrito.</p>
                <Link to="/">
                    <button className="btn btn-dark">Volver al Inicio</button>
                </Link>
            </div>
        );
    }
    

    return (<>
        <section className='paddingCard'>
            <BackButton/>
        </section>
            <div className='container centerTable'> 
                <table className="table-light table-border">
                    <thead>
                        <tr>
                            <th scope="col" className="table-light">Img</th>
                            <th scope="col"className="table-light">Nombre</th>
                            <th scope="col"className="table-light">Precio</th>
                            <th scope="col"className="table-light">Cantidad</th>
                            <th scope="col"className="table-light">Subtotal</th>
                            <th scope="col"className="table-light">Eliminar Prod</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((product)=>( <ItemCart key={product.id} product={product}/> ))}
                    </tbody>
                </table>
            </div>
            <div className='container cartLeft'>
                <section>
                    <p className='fw-bolder'>Total a pagar: ${totalPrice()}</p>
                </section>
                <section>
                    <button className='btn btn-outline-danger' onClick={clear}>Vaciar Carrito</button>
                    <Link to="/Checkout"><button className='btn btn-outline-success'>Finalizar Compra</button></Link>
                </section>
            </div>
        </>
    );
};

export default Cart;
