import React, { useState, useEffect } from 'react';
import { TablePagination } from '@mui/material';
import './style.module.scss'
interface Props {
  data: any[]; // Expecting an array of objects for data
  view: (id: string) => string | number | void; // View function that takes an id
  viewlogs: (id: string) => string | number | void;
  btn?: string
  logbtn?: string
  TableTitle: string
}

/**
 * Create a table to take in the data from the workers,bots,logs
 * @param param0 
 * @returns 
 */

const DynamicTable: React.FC<Props> = ({ data, view, btn, TableTitle, logbtn, viewlogs }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Safely get the headers
  const headers = data.length ? Object.keys(data[0]) : [];

  useEffect(() => {
    console.log(`DATA`, data);
  }, [data]);

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (headers.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <>
<table>
  <caption data-testid={`${TableTitle}`}>{TableTitle}</caption>
  <thead>
    <tr>
    {headers.map((header) => (
                <th
                  key={header}
                >
                  {header.charAt(0).toUpperCase() + header.slice(1)}
                </th>
              ))}
              {
                 btn !== "" && 
        <th>
            Actions
        </th>
              }
    </tr>
  </thead>
  <tbody>
        {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any, index: number) => (
                <tr key={index}>
                  {headers.map((header) => (
                    <td
                      key={header}
                      align="right"
                    >
                      {row[header]}
                    </td>
                  ))}
                  {
                     btn !== "" &&
                  <td
                 align="right"
                  >
                    <button onClick={() => view(row['id'])}>{btn}</button>
                    <button onClick={() => viewlogs(row['id'])}>{logbtn}</button>

                    
                  </td>
                  }
                </tr>
              ))}
  </tbody>
</table>
<TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

    </>
 
  );
};

export default DynamicTable;

