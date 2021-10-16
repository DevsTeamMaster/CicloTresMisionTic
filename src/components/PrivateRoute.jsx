import { useAuth0 } from '@auth0/auth0-react';
import 'styles/maestroUsuario.scss';
import { Link } from 'react-router-dom';
import "styles/navBar.scss";
import "index.js";
import { useEffect } from 'react';

const PrivateRoute = ({ children }) => {

  const { isAuthenticated, isLoading, loginwithRedirect,  getAccessTokenSilently} = useAuth0();
  
  useEffect(() => {
    const fetchAuth0Token = async () => {
      const accessToken = await getAccessTokenSilently({
        audience: 'api-autenticacion-devsteammaster',
      });
      localStorage.setItem('token', accessToken);
      
    };
    if (isAuthenticated) {
        fetchAuth0Token();        }   
  }, [isAuthenticated, getAccessTokenSilently])
  
  //const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading ...</div>;

  if (!isAuthenticated){
    return //loginwithRedirect();   
    
      
  }

  return <>{children}</>;

};

export default PrivateRoute;