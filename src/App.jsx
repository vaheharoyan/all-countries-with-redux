import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries, selectCountry } from './store/countriesReducer';
import AppHeader from './components/AppHeader';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';

const App = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.countries.selected);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div className="app">
      <AppHeader />
      <div className="main-layout">
        <CountryList />
        {selected && <CountryDetail />}
      </div>
    </div>
  );
};

export default App;
