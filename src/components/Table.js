import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import "../styling/styles.css";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme)=>({
  tableHeaderCell:{
    backgroundColor:"#373A4D",
    padding:"20px 16px",
    color:"#fff",
    textTransform:"uppercase",
    fontSize:"12px",
    fontWeight:"bold"
  },
  tableBodyCell: {
    padding:"22px 16px",
    fontSize:"16px"
  }
}));

const columns = [
  { id: 'transaction', label: 'Transaction Type', minWidth: 170, align: 'left'},
  { id: 'detail', label: 'Transaction Detail', minWidth: 170,align: 'left' },
  {
    id: 'currency',
    label: 'Currency',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'date',
    label: 'Transaction Date',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'status',
    label: 'Transaction Status',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'amount',
    label: 'Amount',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(transaction, detail, currency, date, status,amount) {
  return { transaction, detail, currency, date, status,amount };
}

const rows = [
  createData('Transfer', 'akpkaeta@site.com', "US Dollars", "10/30/2021", "Pending","$ 2,350"),
  createData('Transfer', 'akpkaeta@site.com', "US Dollars", "10/30/2021","Pending","$ 2,350"),
  createData('Transfer', 'akpkaeta@site.com', "US Dollars", "10/30/2021","Pending","$ 2,350"),
  createData('Transfer', 'akpkaeta@site.com', "US Dollars", "10/30/2021","Pending","$ 2,350"),
  createData('Transfer', 'akpkaeta@site.com', "US Dollars", "10/30/2021","Pending","$ 2,350"),
  createData('Transfer', 'akpkaeta@site.com', "US Dollars", "10/30/2021","Pending","$ 2,350"),
  createData('Transfer', 'akpkaeta@site.com', "US Dollars", "10/30/2021","Pending","$ 2,350"),
  createData('Transfer', 'akpkaeta@site.com', "US Dollars", "10/30/2021","Pending","$ 2,350"),
  createData('Transfer', 'akpkaeta@site.com', "US Dollars", "10/30/2021","Pending","$ 2,350"),
  createData('Transfer', 'akpkaeta@site.com', "US Dollars", "10/30/2021","Pending","$ 2,350"),
  createData('Transfer', 'akpkaeta@site.com', "US Dollars", "10/30/2021","Pending","$ 2,350"),
  createData('Transfer', 'akpkaeta@site.com', "US Dollars", "10/30/2021","Pending","$ 2,350"),
  createData('Transfer', 'akpkaeta@site.com', "US Dollars", "10/30/2021","Pending","$ 2,350"),
  createData('Transfer', 'akpkaeta@site.com', "US Dollars", "10/30/2021","Pending","$ 2,350"),
  createData('Transfer', 'akpkaeta@site.com', "US Dollars", "10/30/2021","Pending","$ 2,350"),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const classes = useStyles();

  return (
    <div className='table'>
      <h4 className="carousel-header">Your latest transaction</h4>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer className={classes.table} sx={{ maxHeight: 600 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead className={classes.tableHeaderCell}>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  className={classes.tableHeaderCell}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.detail}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell className={classes.tableBodyCell} key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
  );
}