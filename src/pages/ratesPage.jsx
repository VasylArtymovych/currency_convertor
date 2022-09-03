import { useEffect, useState } from 'react';
import requestOptions from 'headers/headers';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import styled from '@emotion/styled';
import Loader from 'components/Loader';

const titleStyle = {
  fontSize: '22px',
  background: 'grey',
};

const RatesPage = () => {
  const [rates, setRates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://api.apilayer.com/exchangerates_data/latest?base=UAH',
      requestOptions
    )
      .then(response => response.json())
      .then(result => {
        setRates(Object.entries(result.rates));
      })
      .catch(error => console.log('error', error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const toggleVisible = () => {
    const windowHeight = document.documentElement.clientHeight;
    const scrolled = document.documentElement.scrollTop;

    if (scrolled >= windowHeight) {
      setIsVisible(true);
    } else if (scrolled < windowHeight) {
      setIsVisible(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 350 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={titleStyle}>
                  Currency
                </TableCell>
                <TableCell align="center" sx={titleStyle}>
                  Rates UAH
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rates.map(row => (
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
      )}
      {isVisible && (
        <StyledButton onClick={handleScrollToTop}>
          <KeyboardArrowUp />
        </StyledButton>
      )}
    </>
  );
};

const StyledButton = styled('div')({
  position: 'fixed',
  right: '20px',
  bottom: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  background: 'black',
  color: 'white',
});

export default RatesPage;
