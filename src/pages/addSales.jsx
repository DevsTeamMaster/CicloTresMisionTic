import "styles/addSales.scss";

import React from "react";

const AddSales = () => {
  return (
    <div className="div-form">
      <form class="flex justify-center w-max padre">
        <div class=" bg-white  flex flex-col form-sales" >
          <div class="mt-1">
            <h1 class="uppercase tracking-wide text-black font-bold text-xl text-center">
              - Panel de ventas -
            </h1>
          </div>

          <div class="-mx-3 flex justify-end">
            <div class="md:flex">
              <div class="md:w-40 px-3 md:mb-0">
                <label class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  ID factura*
                </label>
                <input
                  class="w-28 bg-gray-200 text-black border border-gray-200 rounded py-1 px-4"
                  type="text"
                  placeholder="REF"
                />
              </div>
            </div>
          </div>

          <div class="pb-2 flex">
            <span class="text-black font-bold text-xm italic">Producto</span>
          </div>

          <div class="-mx-3 md:flex">
            <div class="mx-7 md:w-1/3 px-3 md:mb-0">
              <label class="uppercase tracking-wide text-black text-xs font-bold">
                Código producto*
              </label>
              <input
                class="w-4/5 bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3"
                type="text"
                placeholder="SKU"
              />
            </div>

            <div class="-mx-3 md:flex">
              <div class="mx-10 md:w-2/3 px-3 md:mb-0">
                <label class="uppercase tracking-wide text-black text-xs font-bold">
                  Precio*
                </label>
                <input
                  class="w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3"
                  type="text"
                  placeholder="$"
                />
              </div>
            </div>
          </div>

          <div class="-mx-3 md:flex mb-6">
            <div class="mx-7 md:w-full px-3">
              <label class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                Descripción*
              </label>
              <input
                class="w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3"
                id="application-link"
                type="text"
                placeholder="..."
              />
            </div>
          </div>

          <div class="pb-2">
            <span class="text-black font-bold text-xm italic">Cliente</span>
          </div>

          <div class="-mx-3 md:flex">
            <div class="mx-7 md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                for="company"
              >
                Nombre cliente*
              </label>
              <input
                class="w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3"
                type="text"
                placeholder="Nombre"
              />
            </div>
            <div class="mx-7 md:w-1/2 px-3">
              <label
                class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                for="title"
              >
                Apellidos cliente*
              </label>
              <input
                class="w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3"
                id="title"
                type="text"
                placeholder="Apellido"
              />
            </div>
          </div>
          <div class="-mx-3 md:flex mb-6">
            <div class="mx-7 md:w-1/4 px-3 mb-6 md:mb-0">
              <label
                class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                for="company"
              >
                ID cliente*
              </label>
              <input
                class="w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3"
                id="company"
                type="text"
                placeholder="ID"
              />
            </div>
            <div class="mx-7 md:w-2/5 px-3">
              <label
                class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                for="title"
              >
                Teléfono cliente*
              </label>
              <input
                class="w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3"
                id="title"
                type="text"
                placeholder="Tel"
              />
            </div>
          </div>

          <div class="pb-2">
            <span class="text-black font-bold text-xm italic">Total</span>
          </div>

          <div class="-mx-3 md:flex justify-start">
          <div class="md:flex mb-6">
              <div class="mx-7 md:w-3/5 px-3 mb-10 md:mb-0">
                <label class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Cantidad Vendida*
                </label>
                <input
                  class="w-44 bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3"
                  type="text"
                  placeholder="$"
                />
              </div>
            </div>

            <div class="md:flex mb-6">
              <div class="mx-7 md:w-3/5 px-3 mb-10 md:mb-0">
                <label class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Impuesto (IVA%)*
                </label>
                <input
                  class="w-44 bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3"
                  type="text"
                  placeholder="$"
                />
              </div>
            </div>

            <div class="md:flex mb-6">
              <div class="mx-7 md:w-3/5 px-3 mb-10 md:mb-0">
                <label class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Total venta*
                </label>
                <input
                  class="w-44 bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3"
                  type="text"
                  placeholder="$"
                />
              </div>
            </div>
          </div>
          <div class="md:w-full px-3 btn-sales">
              <button class="mb-1 md:w-full bg-gray-700 text-white font-bold py-2 px-4 border-b-4 hover:border-b-1 border-gray-600 hover:border-gray-100 rounded-full ">
                Agregar
              </button>
            </div>

        </div>
      </form>
    </div>
  );
};

export default AddSales;
