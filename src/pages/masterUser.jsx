import React from 'react';
import Table, {
  AvatarCell,
  SelectColumnFilter,
  StatusPill,
} from 'components/Table';
import 'styles/maestroUsuario.scss';

const getData = () => {
  const data = [
    {
      email: 'juandavidguz28@gmail.com',
      rol: 'Administrador',
      status: 'Pendiente',
      nombreVendedor: '',
      actualizarRol: '',
      actualizarEstado: '',
    },
    {
      email: 'fgilp95@gmail.com',
      rol: 'Vendedor',
      status: 'Autorizado',
      nombreVendedor: '',
      actualizarRol: '',
      actualizarEstado: '',
    },
    {
      email: 'joshiecruz@gmail.com ',
      rol: 'Administrador',
      status: 'No Autorizado',
      nombreVendedor: '',
      actualizarRol: '',
      actualizarEstado: '',
    },
    {
      email: 'giovanny_ballen@hotmail.com ',
      rol: 'Vendedor',
      status: 'Pendiente',
      nombreVendedor: '',
      actualizarRol: '',
      actualizarEstado: '',
    },
    {
      email: 'alcides44c@gmail.com ',
      rol: 'Administrador',
      status: 'No Autorizado',
      nombreVendedor: '',
      actualizarRol: '',
      actualizarEstado: '',
    },
    {
      email: 'alcides44c@gmail.com ',
      rol: 'Administrador',
      status: 'No Autorizado',
      nombreVendedor: '',
      actualizarRol: '',
      actualizarEstado: '',
    },
  ];
  return [...data, ...data];
};

const MasterUser = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Rol',
        accessor: 'rol',
      },
      {
        Header: 'Estado',
        accessor: 'status',
        //Cell: StatusPill,
      },
      /*{
        Header: 'Actualizar Rol',
        accessor: 'nombreVendedor',
      },
      {
        Header: 'Actualizar Estado',
        accessor: 'totalVenta',
      },*/

    ],
    []
  );

  const data = React.useMemo(() => getData(), []);

  return (
    <div className='product-container-usu'>
      <div className='rounded-3xl ml-5 mt-5 product-div-usu'>
        <div className='container-usu'>
          <div className='maestro-usu'>
            <h1>Maestro de Usuarios</h1>
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
              <Table columns={columns} data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterUser;
