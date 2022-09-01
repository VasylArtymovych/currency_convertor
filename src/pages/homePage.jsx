import Form from "components/Form/Form";
import { useEffect, useState } from "react";
import requestOptions from "headers";

const HomePage = () => {
  const [fetching, setFetching] = useState(false);
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    setFetching(true);
    fetch("https://api.apilayer.com/fixer/symbols", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const currency = Object.keys(result.symbols);
        setCurrency(currency);
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setFetching(false);
      });
  }, []);

  return <>{fetching ? <div>Loading...</div> : <Form currency={currency} />}</>;
};

export default HomePage;
