import { Autocomplete, Box, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { CurrencyExchange } from "@mui/icons-material";
import { useState } from "react";

import requestOptions from "headers/headers";

function Form({ currency }) {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [result, setResult] = useState(null);

  const handleClick = () => {
    setLoading(true);
    fetch(
      `https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${value}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setResult(result);
        console.log(result);
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 3,
        }}
      >
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={currency}
          sx={{ width: 200 }}
          renderInput={(params) => <TextField {...params} label="From" />}
          onChange={(e) => {
            setFrom(e.target.textContent);
          }}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={currency}
          sx={{ width: 200, mt: "10px" }}
          renderInput={(params) => <TextField {...params} label="To" />}
          onChange={(e) => {
            setTo(e.target.textContent);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Sum"
          variant="outlined"
          value={value}
          sx={{ width: 200, mt: "10px", mb: "10px" }}
          onChange={(e) => setValue(e.target.value)}
        />
        <LoadingButton
          size="small"
          endIcon={<CurrencyExchange />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
          onClick={handleClick}
        >
          Convert
        </LoadingButton>

        {result && (
          <p style={{ marginTop: "10px" }}>Rate: {result?.info?.rate}</p>
        )}
        {result && <p>Result: {result?.result}</p>}
      </Box>
    </>
  );
}

export default Form;
