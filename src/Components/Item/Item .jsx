import React from 'react'
import { Link } from 'react-router-dom'

const Item  = ({ id, name, category, img, description}) => {
    return (
    <article>
        <div className="card mb-3 imgItem">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{category}, {name}</h5>
                        <p className="card-text">{description}</p>
                        <Link to={`/item/${id}`} className="linkClass">Ver producto</Link>
                    </div>
                </div>
            </div>
        </div>
    </article>
)}

export default Item





    


