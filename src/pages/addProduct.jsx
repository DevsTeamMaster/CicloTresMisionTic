import React, { useState, useRef } from 'react';
import { createProducts } from '../utils/api';
import 'styles/addProduct.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
  const form = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const newProduct = {};
    fd.forEach((value, key) => {
      newProduct[key] = value;
    });
    console.log('Datos del formulario: ', newProduct);
    //Calling api
    createProducts(newProduct);
  };

  return (
    <div className='product-container'>
      <div className='flex flex-col h-screen items-center justify-center  rounded-3xl mt-5 ml-5 product-div'>
        <div className='flex flex-col bg-gray-100 shadow-2xl border border-gray-300 rounded-xl px-52 pt-10 my-10'>
          <h1 className='flex justify-center font-bold text-2xl text-gray-800'>
            Agregar producto
          </h1>
          <form
            ref={form}
            onSubmit={submitForm}
            className='flex flex-col my-10'
          >
            <label
              className='flex flex-col font-bold text-gray-800'
              htmlFor='idProduct'
            >
              Código producto
              <input
                className='flex bg-gray-50 border border-blue-900 p-2 rounded-lg m-2'
                name='idProduct'
                type='number'
                placeholder='SKU'
                required
              ></input>
            </label>

            <label
              className='flex flex-col font-bold text-gray-800'
              htmlFor='description'
            >
              Descripción
              <input
                className='flex bg-gray-50 border border-blue-900 p-2 rounded-lg m-2'
                name='description'
                type='text'
                placeholder='Descripción'
                required
              ></input>
            </label>

            <label
              className='flex flex-col font-bold text-gray-800'
              htmlFor='price'
            >
              Precio
              <input
                className='flex bg-gray-50 border border-blue-900 p-2 rounded-lg m-2'
                name='price'
                type='number'
                placeholder='Precio'
                required
              ></input>
            </label>

            <label
              className='flex flex-col font-bold text-gray-800'
              htmlFor='quantity'
            >
              Cantidad
              <input
                className='flex w-24 bg-gray-50 border border-blue-900 p-2 rounded-lg m-2'
                name='quantity'
                type='text'
                placeholder='Cantidad'
                required
              ></input>
            </label>

            <h3 className='flex mb-3 justify-center font-bold text-gray-800'>
              Estado
            </h3>
            <select
              className='bg-gray-50 border border-blue-900 rounded-lg text-gray-800'
              name='state'
            >
              <option className='text-black' value='0'>
                Inactivo
              </option>
              <option className='text-black' value='1'>
                Activo
              </option>
            </select>

            {/*<div className='flex justify-between'>
              <label className='ml-10 text-gray-800' htmlFor='able'>
                Activo
                <input
                  className='m-3'
                  id='able'
                  name='able'
                  type='checkbox'
                  placeholder='Estado'
                ></input>
              </label>
              <label className='text-gray-800' htmlFor='unable'>
                Inactivo
                <input
                  className='m-3 mr-10'
                  id='unable'
                  name='unable'
                  type='checkbox'
                  placeholder='Estado'
                ></input>
              </label>
            </div>*/}

            <div className='flex flex-col items-end '>
              <button
                className='flex justify-center mt-5 w-full rounded-full py-2 px-8 font-bold text-white shadow-2x bg-purple-600 hover:bg-purple-900'
                type='submit'
              >
                Agregar
              </button>
              <ToastContainer position='bottom-center' autoClose={5000} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
{
  /**/
}
