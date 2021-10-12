import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export async function getProducts() {
  try {
    const response = await axios({
      method: 'GET',
      url: 'http://localhost:8080/productos',
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

/*
export const getProducts = async () => {
  const options = { method: 'GET', url: 'http://localhost:8080/productos' };

  await axios
    .request(options)
    .then(function (response) {
      console.log('API connection data', response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
*/

export const createProducts = async (data) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:8080/productos/create',
    headers: { 'Content-Type': 'application/json' },
    data: {
      idProduct: data.idProduct,
      description: data.description,
      price: data.price,
      quantity: data.quantity,
      state: data.state,
    },
  };
  console.log('Options');

  await axios
    .request(options)
    .then(function (response) {
      console.log('Response data: ', response.data);
      console.log('Response data: ', options);
      toast.success('Producto creado con éxito.');
    })
    .catch(function (error) {
      console.error(error);
      toast.error('Error al crear producto. Intenta de nuevo.');
    });
};
