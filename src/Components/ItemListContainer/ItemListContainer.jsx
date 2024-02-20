import React from 'react'

function ItemListContainer(props) {
return (
    <>
        <div className='container'>
            <p>
                {props.greeting}
            </p>
        </div>
    </>
)
}

export default ItemListContainer