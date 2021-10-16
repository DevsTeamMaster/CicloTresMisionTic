
import axios from 'axios';
import Header from 'components/Header';
import { get } from 'jquery';
import { LocalStorageCache } from '../../node_modules/@auth0/auth0-react/dist/index';

const getToken = () => {
    return 'Bearer ${localStorage.getItem('token')}';
}


Header: 'GET',
url: 'http:localhost:5000/xxxxxx',
headers: {
    Authorization: getToken();   //esto se coloca en todas las páginas para permitir el ingreso a cad una de ellas
}
