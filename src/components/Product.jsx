import React from 'react'
import 'styles/product.scss'

const Product = ({nombreProduct,imagen,precio}) => {
    return (
        <div className='bg-white-500'>
            <li className='breedCard' >
             <div className='contenedorImagen '>
             <img src={imagen} alt={nombreProduct} />
            </div>
             <span className='breedTitle'>{nombreProduct}</span>
             <span className='priceValue'>{precio}</span>
            </li>
        </div>
    )
}

export default Product

