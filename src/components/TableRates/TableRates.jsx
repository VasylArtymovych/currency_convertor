import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const titleStyle = {
  fontSize: '22px',
  background: 'grey',
};

function TableRates({ rates }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={titleStyle}>
              Currency
            </TableCell>
            <TableCell align="center" sx={titleStyle}>
              Rates USD
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rates.length !== 0 &&
            rates.map(row => (
              <TableRow
                key={row[0]}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  align="center"
                  sx={{ fontSize: '18px' }}
                >
                  {row[0]}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: '18px', color: 'darkBlue' }}
                >
                  {row[1]}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableRates;
