import React, {useState, useEffect} from 'react';
import Table, {
  AvatarCell,
  SelectColumnFilter,
  StatusPill,
} from 'components/Table';
import 'styles/maestroUsuario.scss';
import { getUsers } from '../utils/api';

const MasterUser = () => {


  const [user, setUsers] = useState([]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Rol',
        accessor: 'idRol',
      },
      {
        Header: 'Estado',
        accessor: 'idEstado',
      
      },
    ],
    []
  );

  useEffect(() => {
    async function loadUsers() {
      const response = await getUsers();
      if (response.status === 200) {
        setUsers(response.data);
      }
    }
    loadUsers();
    //Con los corchetes le decimos a react que sólo ejecute el useEffect cada vez que re actualice el componente
  }, []);


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
              <Table columns={columns} data={user} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterUser;
