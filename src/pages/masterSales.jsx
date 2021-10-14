import React from 'react';
import Table from 'components/Table';
import { useGlobalFilter } from 'react-table';

const data = [
  {
    idVenta: '123',
    nombreCliente: 'Jane Cooper',
    idCliente: '123456',
    nombreVendedor: 'Theodore John',
    totalVenta: '745.900',
    fecha: '01-10-2021',
  },
  {
    idVenta: '456',
    nombreCliente: 'Cody Fisher',
    idCliente: '745835',
    nombreVendedor: 'Theodore John',
    totalVenta: '445.900',
    fecha: '01-10-2021',
  },
  {
    idVenta: '789',
    nombreCliente: 'Esther Howard',
    idCliente: '213594',
    nombreVendedor: 'Theodore John',
    totalVenta: '44.900',
    fecha: '01-10-2021',
  },
  {
    idVenta: '174',
    nombreCliente: 'Jenny Wilson',
    idCliente: '238543',
    nombreVendedor: 'Theodore John',
    totalVenta: '4.900',
    fecha: '01-10-2021',
  },
  {
    idVenta: '749',
    nombreCliente: 'Kristin Watson',
    idCliente: '749528',
    nombreVendedor: 'Theodore John',
    totalVenta: '1.344.900',
    fecha: '01-10-2021',
  },
  {
    idVenta: '749',
    nombreCliente: 'Kristin Watson',
    idCliente: '749528',
    nombreVendedor: 'Theodore John',
    totalVenta: '1.344.900',
    fecha: '01-10-2021',
  },
  {
    idVenta: '749',
    nombreCliente: 'Kristin Watson',
    idCliente: '749528',
    nombreVendedor: 'Theodore John',
    totalVenta: '1.344.900',
    fecha: '01-10-2021',
  },
  {
    idVenta: '749',
    nombreCliente: 'Kristin Watson',
    idCliente: '749528',
    nombreVendedor: 'Theodore John',
    totalVenta: '1.344.900',
    fecha: '01-10-2021',
  },
  {
    idVenta: '749',
    nombreCliente: 'Kristin Watson',
    idCliente: '749528',
    nombreVendedor: 'Theodore John',
    totalVenta: '1.344.900',
    fecha: '01-10-2021',
  },
  {
    idVenta: '749',
    nombreCliente: 'Kristin Watson',
    idCliente: '749528',
    nombreVendedor: 'Theodore John',
    totalVenta: '1.344.900',
    fecha: '01-10-2021',
  },
  {
    idVenta: '749',
    nombreCliente: 'Kristin Watson',
    idCliente: '749528',
    nombreVendedor: 'Theodore John',
    totalVenta: '1.344.900',
    fecha: '01-10-2021',
  },
  {
    idVenta: '749',
    nombreCliente: 'Kristin Watson',
    idCliente: '749528',
    nombreVendedor: 'Theodore John',
    totalVenta: '1.344.900',
    fecha: '01-10-2021',
  },
];

function MasterSales() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'ID Venta',
        accessor: 'idVenta',
        filter: useGlobalFilter,
      },
      {
        Header: 'Nombre cliente',
        accessor: 'nombreCliente',
      },
      {
        Header: 'ID cliente',
        accessor: 'idCliente',
      },
      {
        Header: 'Nombre vendedor',
        accessor: 'nombreVendedor',
      },
      {
        Header: 'Total venta',
        accessor: 'totalVenta',
      },
      {
        Header: 'Fecha',
        accessor: 'fecha',
      },
    ],
    []
  );

  //const data = React.useMemo(() => getData(), []);

  return (
    <div className='product-container-usu'>
      <div className='rounded-3xl ml-5 mt-5 product-div-usu'>
        <div className='container-usu'>
          <div className='maestro-usu'>
            <h1>Maestro de Ventas</h1>
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
              <Table columns={columns} data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
    /*<div className='min-h-full bg-gray-500 text-gray-900'>
      <main className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4'>
        <div className=''>
          <h1 className='text-xl font-semibold'>Maestro de ventas</h1>
        </div>
        <div className='mt-6'>
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>*/
  );
}

export default MasterSales;
