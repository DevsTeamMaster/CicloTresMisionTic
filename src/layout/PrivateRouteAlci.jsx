import { cleanup } from "../../node_modules/axe-core/axe";

import React, {userEffect} from "react";
import { LocalStorageCache } from "../../node_modules/@auth0/auth0-react/dist/index";


const PrivateRoute = ({children}) => {
 const { isAuthenticated, isLoading, loginwithRedirect,  getAccessTokenSilently} = useAuth(); 
}
//  getAccessTokenSilently esta es la importante para pedir el token 


userEffect(() => {
    const fetchAuth0Token = async () =>{
    if (localStorage.getItem('toquen')){   //validar el token
    } else {
        const accessToken = await getAccessTokenSilently({   //pedir el token
        audience: 'api-autenticacion-devsteammaster'        
    });
    localStorage.setItem('token', accessToken);
    }    //para guardar los token solicitados
    };
   
 if (isAuthenticated) {
    fetchAuth0Token();
} 
}, [isAuthenticated, getAccessTokenSilently]



//hay que importar es en el react arriba {userEffect}
