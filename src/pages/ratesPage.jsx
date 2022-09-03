import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Loader from 'components/Loader';
import { KeyboardArrowUp } from '@mui/icons-material';
import requestOptions from 'headers/headers';
import TableRates from 'components/TableRates';

const RatesPage = () => {
  const [rates, setRates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://api.apilayer.com/exchangerates_data/latest?base=USD',
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
      {isLoading ? <Loader /> : <TableRates rates={rates} />}
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
