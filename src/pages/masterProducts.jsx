import React, { useState, useEffect } from 'react';
import Table from '../components/Table';
import { getProducts } from '../utils/api';
import 'styles/maestroUsuario.scss';

const MasterProducts = () => {
  const [products, setProducts] = useState([]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Código Producto',
        accessor: 'idProducto',
      },
      {
        Header: 'Descripción',
        accessor: 'descripcion_producto',
      },
      {
        Header: 'Precio',
        accessor: 'precio_producto',
      },
      {
        Header: 'Inventario',
        accessor: 'cantidad_producto',
      },
      {
        Header: 'Estado',
        accessor: 'idEstadoToString',
      },
    ],
    []
  );

  useEffect(() => {
    async function loadProducts() {
      const response = await getProducts();
      if (response.status === 200) {
        setProducts(response.data);
      }
    }
    loadProducts();
    //Con los corchetes le decimos a react que sólo ejecute el useEffect cada vez que re actualice el componente
  }, []);

  return (
    <div className='product-container-usu'>
      <div className='rounded-3xl ml-5 mt-5 product-div-usu'>
        <div className='container-usu'>
          <div className='maestro-usu'>
            <h1>Maestro de Productos</h1>
          </div>
          <div className='container-eye'>
            <button className='btn-save'>
              <i className='far fa-save'></i>
            </button>
          </div>
        </div>
        <div className='container-reg asd'>
          <div className='column'>
            <div className='mt-7'>
              <Table columns={columns} data={products} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterProducts;
