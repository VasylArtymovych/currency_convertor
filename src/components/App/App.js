import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "components/SharedLayout";

const HomePage = lazy(() => import("pages/homePage"));
const RatesPage = lazy(() => import("pages/ratesPage"));

function App() {
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
