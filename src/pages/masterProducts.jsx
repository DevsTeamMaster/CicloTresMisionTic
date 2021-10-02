import React from 'react'
import Table from 'components/Table'
import 'styles/maestroUsuario.scss'

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
    return [...data, ...data];
  };


const MasterProducts = () => {

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
            Header: 'Actualizar Rol',
            accessor: 'nombreVendedor',
          },
          {
            Header: 'Actualizar Estado',
            accessor: 'totalVenta',
          } 
        ],
        []
      );
    
      const data = React.useMemo(() => getData(), []);

    return (
    <div className='product-container-usu'>
        <div className='rounded-3xl ml-5 mt-5 product-div-usu'>  
            <div className="container-usu">
                <div className="maestro-usu">
                    <h1>Maestro de Productos</h1> 
                    
                </div>
                <div className="container-eye">
                  <button className="btn-save">
                   <i class="far fa-save"></i>
                  </button>
                </div>   
            </div>   
            <div className="container-reg asd">
                <div className="column">
                    <div className='mt-7' >
                        <Table columns={columns} data={data} />
                    </div>                   
                </div>
            </div>         
        </div>
      </div>
    )
}

export default MasterProducts
