import React from 'react';
import 'styles/addSales.scss';

const AddProduct = () => {
  return (
    <div className='flex flex-col h-screen items-center justify-center border-gray-800 border rounded-3xl mt-5 ml-5 bg-gradient-to-r from-gray-200 via-white to-gray-200'>
      <div className='flex flex-col bg-gray-100 shadow-2xl border border-gray-300 rounded-xl px-52 pt-10 my-10'>
        <h1 className='flex justify-center font-bold text-2xl text-gray-800'>
          Agregar producto
        </h1>
        <form className='flex flex-col my-10'>
          <label
            className='flex flex-col font-bold text-gray-800'
            htmlFor='código'
          >
            Código producto
            <input
              className='flex bg-gray-50 border border-blue-900 p-2 rounded-lg m-2'
              name='código'
              type='text'
              placeholder='SKU'
              required
            ></input>
          </label>

          <label
            className='flex flex-col font-bold text-gray-800'
            htmlFor='descripción'
          >
            Descripción
            <input
              className='flex bg-gray-50 border border-blue-900 p-2 rounded-lg m-2'
              name='descripción'
              type='text'
              placeholder='Descripción'
              required
            ></input>
          </label>

          <label
            className='flex flex-col font-bold text-gray-800'
            htmlFor='precio'
          >
            Precio
            <input
              className='flex bg-gray-50 border border-indigo-900 p-2 rounded-lg m-2'
              name='precio'
              type='text'
              placeholder='Precio'
              required
            ></input>
          </label>

          <h3 className='flex my-5 justify-center font-bold text-gray-800'>
            Estado
          </h3>
          <div className='flex justify-between'>
            <label className='ml-10 text-gray-800' htmlFor='activo'>
              Activo
              <input
                className='m-3'
                name='activo'
                type='checkbox'
                placeholder='Estado'
                required
              ></input>
            </label>
            <label className='text-gray-800' htmlFor='inactivo'>
              Inactivo
              <input
                className='m-3 mr-10'
                name='inactivo'
                type='checkbox'
                placeholder='Estado'
                required
              ></input>
            </label>
          </div>

          <div className='flex flex-col items-end'>
            <button
              className='flex mt-5 bg-gradient-to-r from-black to-blue-900 border border-gray-900 rounded-full py-2 px-8 font-bold text-white shadow-2xl hover:bg-gray-800'
              type='submit'
            >
              Agregar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
{
  /**/
}
