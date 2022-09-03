import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';

const HomePage = lazy(() => import('pages/homePage'));
const RatesPage = lazy(() => import('pages/ratesPage'));

function App() {
  // const [currentCurrency, setCurrentCurrency] = useState(null);

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(position => {
  //       const latitude = position?.coords?.latitude;
  //       const longitude = position?.coords?.longitude;

  //       const apiKey = 'd4683b09d0c94ec0aebf0b2e043decbf';
  //       const urlPosition = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}&language=en`;

  //       fetch(urlPosition)
  //         .then(response => {
  //           if (!response.ok) {
  //             throw new Error(response.status);
  //           }
  //           return response.json();
  //         })
  //         .then(data => {
  //           setCurrentCurrency(data.results[0].annotations.currency.iso_code);
  //         });
  //     });
  //   }
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="rates" element={<RatesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
