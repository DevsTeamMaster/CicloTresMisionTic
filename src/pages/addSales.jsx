import 'styles/addSales.scss';

import React from 'react';

const AddSales = () => {
  return (
    <div className='product-container'>
      <div className='md:flex flex-col h-screen items-center justify-center rounded-3xl ml-5 mt-5 product-div'>
        <div className='flex flex-col bg-gray-100 shadow-2xl border border-gray-300 rounded-xl px-52'>
          <h1 className='flex justify-center font-bold text-2xl text-gray-800 p-2'>
            Agregar venta
          </h1>
          <form className='flex flex-col mt-10 mb-5'>
            <div className='md:flex justify-between mb-2'>
              <label
                className='-mt-8 md:flex flex-col font-bold text-gray-800'
                htmlFor='fecha'
              >
                Fecha
                <input
                  className='flex w-48 bg-gray-50 border border-blue-900 p-1 rounded-lg m-2'
                  name='fecha'
                  type='date'
                  required
                ></input>
              </label>
              <label
                className='-mt-8 md:flex flex-col font-bold text-gray-800'
                htmlFor='IDVenta'
              >
                ID venta
                <input
                  className='flex w-20 bg-gray-50 border border-blue-900 p-1 rounded-lg m-2'
                  name='IDVenta'
                  type='text'
                  placeholder='#'
                  required
                ></input>
              </label>
            </div>
            <hr className='border-gray-700' />
            <div className='md:flex justify-between mt-2'>
              <label
                className='flex flex-col font-bold text-gray-800'
                htmlFor='código'
              >
                Código producto
                <input
                  className='flex w-32 bg-gray-50 border border-blue-900 p-1 rounded-lg m-2 mr-10'
                  name='codigo'
                  type='text'
                  placeholder='SKU'
                  required
                ></input>
              </label>
              <label
                className='flex flex-col font-bold text-gray-800'
                htmlFor='precio'
              >
                Precio
                <input
                  className='flex w-40 bg-gray-50 border border-blue-900 p-1 rounded-lg m-2'
                  name='precio'
                  type='number'
                  placeholder='$'
                  required
                ></input>
              </label>
              <label
                className='flex flex-col font-bold text-gray-800'
                htmlFor='cantidad'
              >
                Cantidad
                <input
                  className='flex w-16 bg-gray-50 border border-blue-900 p-1 rounded-lg m-2'
                  name='cantidad'
                  type='number'
                  placeholder='#'
                  required
                ></input>
              </label>
            </div>
            <div className='flex my-2'>
              <label className='flex font-bold text-gray-800' htmlFor='total'>
                Total
                <input
                  className='flex w-40 bg-gray-50 border border-blue-900 p-1 rounded-lg m-2'
                  name='total'
                  type='number'
                  placeholder='$'
                  required
                ></input>
              </label>
            </div>
            <hr className='border-gray-700' />
            <h1 className='flex justify-start mt-2 font-bold text-xl text-gray-800'>
              Datos cliente
            </h1>
            <div className='md:flex my-2'>
              <label
                className='flex flex-col font-bold text-gray-800'
                htmlFor='IDCliente'
              >
                ID cliente
                <input
                  className='flex w-40 bg-gray-50 border border-blue-900 p-1 rounded-lg m-2'
                  name='IDCliente'
                  type='text'
                  placeholder='ID'
                  required
                ></input>
              </label>
              <label
                className='flex flex-col font-bold text-gray-800'
                htmlFor='nombres'
              >
                Nombres
                <input
                  className='flex w-40 bg-gray-50 border border-blue-900 p-1 rounded-lg m-2'
                  name='nombres'
                  type='text'
                  placeholder='Nombres'
                  required
                ></input>
              </label>
              <label
                className='flex flex-col font-bold text-gray-800'
                htmlFor='apellidos'
              >
                Apellidos
                <input
                  className='flex w-40 bg-gray-50 border border-blue-900 p-1 rounded-lg m-2'
                  name='apellidos'
                  type='text'
                  placeholder='Apellidos'
                  required
                ></input>
              </label>
            </div>
            <hr className='border-gray-700' />
            <h1 className='flex justify-start mt-2 font-bold text-xl text-gray-800'>
              Datos vendedor
            </h1>
            <div className='md:flex mt-2'>
              <label
                className='flex flex-col font-bold text-gray-800'
                htmlFor='IDVendedor'
              >
                ID vendedor
                <input
                  className='flex w-40 bg-gray-50 border border-blue-900 p-1 rounded-lg m-2'
                  name='IDVendedor'
                  type='text'
                  placeholder='ID'
                  required
                ></input>
              </label>
              <label
                className='flex flex-col font-bold text-gray-800'
                htmlFor='nombres'
              >
                Nombres
                <input
                  className='flex w-40 bg-gray-50 border border-blue-900 p-1 rounded-lg m-2'
                  name='nombres'
                  type='text'
                  placeholder='Nombres'
                  required
                ></input>
              </label>
              <label
                className='flex flex-col font-bold text-gray-800'
                htmlFor='apellidos'
              >
                Apellidos
                <input
                  className='flex w-40 bg-gray-50 border border-blue-900 p-1 rounded-lg m-2'
                  name='apellidos'
                  type='text'
                  placeholder='Apellidos'
                  required
                ></input>
              </label>
            </div>
            <div className='flex flex-col '>
              <button
                className='flex justify-center cursor-pointer ring-4 ring-indigo-300  mt-5 w-full rounded-full py-2 px-8 font-bold text-white shadow-2x bg-purple-600 hover:bg-purple-900'
                type='submit'
              >
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    /*<div className="div-form">
      <form className="flex justify-center w-max padre">
        <div className=" bg-white  flex flex-col form-sales" >
          <div className="mt-1">
            <h1 className="uppercase tracking-wide text-black font-bold text-xl text-center">
              - Panel de ventas -
            </h1>
          </div>

          <div className="-mx-3 flex justify-end">
            <div className="md:flex">
              <div className="md:w-40 px-3 md:mb-0">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  ID factura*
                </label>
                <input
                  className="w-28 bg-gray-200 text-black border border-gray-200 rounded py-1 px-4"
                  type="text"
                  placeholder="REF"
                />
              </div>
            </div>
          </div>

          <div className="pb-2 flex">
            <span className="text-black font-bold text-xm italic">Producto</span>
          </div>

          <div className="-mx-3 md:flex">
            <div className="mx-7 md:w-1/3 px-3 md:mb-0">
              <label className="uppercase tracking-wide text-black text-xs font-bold">
                Código producto*
              </label>
              <input
                className="w-4/5 bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3"
                type="text"
                placeholder="SKU"
              />
            </div>

            <div className="-mx-3 md:flex">
              <div className="mx-10 md:w-2/3 px-3 md:mb-0">
                <label className="uppercase tracking-wide text-black text-xs font-bold">
                  Precio*
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3"
                  type="text"
                  placeholder="$"
                />
              </div>
            </div>
          </div>

          <div className="-mx-3 md:flex mb-6">
            <div className="mx-7 md:w-full px-3">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                Descripción*
              </label>
              <input
                className="w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3"
                id="application-link"
                type="text"
                placeholder="..."
              />
            </div>
          </div>

          <div className="pb-2">
            <span className="text-black font-bold text-xm italic">Cliente</span>
          </div>

          <div className="-mx-3 md:flex">
            <div className="mx-7 md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                for="company"
              >
                Nombre cliente*
              </label>
              <input
                className="w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3"
                type="text"
                placeholder="Nombre"
              />
            </div>
            <div className="mx-7 md:w-1/2 px-3">
              <label
                className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                for="title"
              >
                Apellidos cliente*
              </label>
              <input
                className="w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3"
                id="title"
                type="text"
                placeholder="Apellido"
              />
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="mx-7 md:w-1/4 px-3 mb-6 md:mb-0">
              <label
                className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                for="company"
              >
                ID cliente*
              </label>
              <input
                className="w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3"
                id="company"
                type="text"
                placeholder="ID"
              />
            </div>
            <div className="mx-7 md:w-2/5 px-3">
              <label
                className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                for="title"
              >
                Teléfono cliente*
              </label>
              <input
                className="w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3"
                id="title"
                type="text"
                placeholder="Tel"
              />
            </div>
          </div>

          <div className="pb-2">
            <span className="text-black font-bold text-xm italic">Total</span>
          </div>

          <div className="-mx-3 md:flex justify-start">
          <div className="md:flex mb-6">
              <div className="mx-7 md:w-3/5 px-3 mb-10 md:mb-0">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Cantidad Vendida*
                </label>
                <input
                  className="w-44 bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3"
                  type="text"
                  placeholder="$"
                />
              </div>
            </div>

            <div className="md:flex mb-6">
              <div className="mx-7 md:w-3/5 px-3 mb-10 md:mb-0">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Impuesto (IVA%)*
                </label>
                <input
                  className="w-44 bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3"
                  type="text"
                  placeholder="$"
                />
              </div>
            </div>

            <div className="md:flex mb-6">
              <div className="mx-7 md:w-3/5 px-3 mb-10 md:mb-0">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Total venta*
                </label>
                <input
                  className="w-44 bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3"
                  type="text"
                  placeholder="$"
                />
              </div>
            </div>
          </div>
          <div className="md:w-full px-3 btn-sales">
              <button className="mb-1 md:w-full bg-gray-700 text-white font-bold py-2 px-4 border-b-4 hover:border-b-1 border-gray-600 hover:border-gray-100 rounded-full ">
                Agregar
              </button>
            </div>

        </div>
      </form>
  </div>*/
  );
};

export default AddSales;
