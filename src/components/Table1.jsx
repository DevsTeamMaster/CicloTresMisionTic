import React from 'react';
import {
  useTable,
  useState,
  useFilters,
  useAsyncDebounce,
  useGlobalFilter,
  usePagination,
} from 'react-table';

//Take it from https://react-table.tanstack.com/docs/api/useFilters
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span className='flex text-xl'>
      Buscar:{' '}
      <input
        className='p-1 ml-2 text-lg border rounded-md border-purple-900 shadow-sm focus:border-porple-900 focus:ring focus:ring-purple-800'
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} registros...`}
      />
    </span>
  );
}

function Table({ columns, data }) {
  // Use the useTable Hook to send the columns and data to build the table

  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    page,
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)

    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,

    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters, // Adding the useFilters Hook to the table
    useGlobalFilter,
    usePagination
  );

  /* 
    Render the UI for your table
    - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
  */

  return (
    <>
      {/*Global Filter*/}
      <div>
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </div>
      {/*Table*/}
      <div className='mt-4 flex flex-col'>
        <div className='-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden border-b border-purple-900 sm:rounded-lg'>
              <table
                {...getTableProps()}
                className='min-w-full  divide-y divide-blue-900'
              >
                <thead className='bg-purple-900'>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          className='group px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'
                          {...column.getHeaderProps()}
                        >
                          {column.render('Header')}
                        </th>
                      ))}
                    </tr>
                  ))}
                  <th className='group px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>
                    Editar
                  </th>
                  <th className='group px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>
                    Eliminar
                  </th>
                </thead>

                <tbody
                  className='bg-white divide-y divide-purple-200'
                  {...getTableBodyProps}
                >
                  {page.map((row, i) => {
                    // This line is necessary to prepare the rows and get the row props from react-table dynamically

                    // Each row can be rendered directly as a string using the react-table render method
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td
                              className='px-6 py-4 whitespace-nowrap'
                              {...cell.getCellProps()}
                            >
                              {cell.render('Cell')}
                            </td>
                          );
                        })}
                        <td className='px-6 py-4 whitespace-nowrap flex '>
                          <div className=' editar-icon'>
                            <button
                              type='button'
                              className='btn btn-outline-primary'
                            >
                              <i className='far fa-edit text-yellow-700 hover:text-yellow-500'></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/*Pagination*/}
      <div className='flex justify-between mt-3'>
        <div>
          <span className='text-lg text-gray-700'>
            P??gina <span>{state.pageIndex + 1}</span> de{' '}
            <span>{pageOptions.length}</span>
          </span>
        </div>
        <div>
          <button
            className='fas fa-angle-double-left fa-2x fa-border fa-rounded-lg hover:bg-gray-100'
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          ></button>
          <button
            className='fas fa-angle-left fa-2x fa-border hover:bg-gray-100'
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          ></button>
          <button
            className='fas fa-angle-right fa-2x fa-border hover:bg-gray-100'
            onClick={() => nextPage()}
            disabled={!canNextPage}
          ></button>
          <button
            className='fas fa-angle-double-right fa-2x fa-border hover:bg-gray-100'
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          ></button>
        </div>
      </div>
    </>
  );
}

export default Table;
