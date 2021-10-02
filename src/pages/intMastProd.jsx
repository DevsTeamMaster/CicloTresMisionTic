import 'styles/intMastProd.scss';
import React from 'react'
import 'styles/addProduct.scss'
import Product from 'components/Product'
import Pcimage from 'media/pc-prueba.webp'


const intMastProd = () => {
    return ( 
      <div className='product-container'>
      <div className='flex flex-col h-screen items-center justify-center rounded-3xl mt-5 ml-5 product-div'>
      <ul className= 'flex mx-5'>
        <li><Product nombreProduct="Portátil ASUS X415JA" imagen={Pcimage} precio='$1.500.000'/></li>
        <li><Product nombreProduct="Portátil ASUS X415JA" imagen={Pcimage} precio='$1.500.000'/></li>
        <li><Product nombreProduct="Portátil ASUS X415JA" imagen={Pcimage} precio='$1.500.000'/></li>
        <li><Product nombreProduct="Portátil ASUS X415JA" imagen={Pcimage} precio='$1.500.000'/></li>
        <li><Product nombreProduct="Portátil ASUS X415JA" imagen={Pcimage} precio='$1.500.000'/></li>
      </ul>
      <ul className= 'flex mx-5'>
        <li><Product nombreProduct="Portátil ASUS X415JA" imagen={Pcimage} precio='$1.500.000'/></li>
        <li><Product nombreProduct="Portátil ASUS X415JA" imagen={Pcimage} precio='$1.500.000' /></li>
        <li><Product nombreProduct="Portátil ASUS X415JA" imagen={Pcimage} precio='$1.500.000'/></li>
        <li><Product nombreProduct="Portátil ASUS X415JA" imagen={Pcimage} precio='$1.500.000'/></li>
        <li><Product nombreProduct="Portátil ASUS X415JA" imagen={Pcimage} precio='$1.500.000'/></li> 
      </ul>
      </div>
    </div>
  );
};

export default intMastProd;
