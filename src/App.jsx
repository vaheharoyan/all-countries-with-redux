import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCountriesRequest, fetchCountriesSuccess, fetchCountriesFailure } from './store/countriesReducer';
import AppHeader from './components/AppHeader';
import './App.css'; 
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCountries = async () => {
      dispatch(fetchCountriesRequest());
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        dispatch(fetchCountriesSuccess(data));
      } catch (error) {
        dispatch(fetchCountriesFailure());
      }
    };
    fetchCountries();
  }, [dispatch]);

  return (
    <div className="app">
      <AppHeader />
      <div className="main-layout">
        <Routes>
          <Route path="/" element={<CountryList />} />
          <Route path="/country/:code" element={<CountryDetail />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
