import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Home from './pages/Home';
import AppLayout from './pages/AppLayout';
import LogIn from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import CityList from './components/CityList.jsx';
import CountryList from './components/CountryList.jsx';
import City from './components/City.jsx';
import Form from './components/Form.jsx';
import { CitiesProvider } from './contexts/CitiesContext.jsx';

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<LogIn />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
