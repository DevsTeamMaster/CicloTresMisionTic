import React, { useState, useEffect } from 'react';
import Table from '../components/Table';
import { getProducts } from '../utils/api';
import 'styles/maestroUsuario.scss';

const getData = () => {
  const data = [
    {
      codigo: '2364',
      descripcion: 'Linterna',
      precio: '10.000',
      nombreVendedor: '',
      actualizarRol: '',
      actualizarEstado: '',
    },
    {
      codigo: '3487',
      descripcion: 'Nevera',
      precio: '1.160.245',
      nombreVendedor: '',
      actualizarRol: '',
      actualizarEstado: '',
    },
    {
      codigo: '3322 ',
      descripcion: 'Televisor',
      precio: '2.000.000',
      nombreVendedor: '',
      actualizarRol: '',
      actualizarEstado: '',
    },
    {
      codigo: '8609',
      descripcion: 'Equipo de Sonido',
      precio: '400.000',
      nombreVendedor: '',
      actualizarRol: '',
      actualizarEstado: '',
    },
    {
      codigo: '4823',
      descripcion: 'Bafle',
      precio: '150.000',
      nombreVendedor: '',
      actualizarRol: '',
      actualizarEstado: '',
    },
    {
      codigo: '5856',
      descripcion: 'Ventilador',
      precio: '89.990',
      nombreVendedor: '',
      actualizarRol: '',
      actualizarEstado: '',
    },
  ];
  return [...data];
};

const MasterProducts = () => {
  const [products, setProducts] = useState([]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Código Producto',
        accessor: 'codigo',
      },
      {
        Header: 'Descripción',
        accessor: 'descripcion',
      },
      {
        Header: 'Precio',
        accessor: 'precio',
      },
      {
        Header: 'Inventario',
        accessor: 'inventario',
      },
      {
        Header: 'Estado',
        accessor: 'estado',
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

  const data = React.useMemo(() => getData());

  return (
    <div className='product-container-usu'>
      <div className='rounded-3xl ml-5 mt-5 product-div-usu'>
        <div className='container-usu'>
          <div className='maestro-usu'>
            <h1>Maestro de Productos</h1>
          </div>
          <div className='container-eye'>
            <button className='btn-save'>
              <i class='far fa-save'></i>
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
