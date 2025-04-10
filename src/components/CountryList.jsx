import React from 'react';
import { useSelector } from 'react-redux';
import CountryCard from './CountryCard';

const CountryList = () => {
  const { list, status } = useSelector((state) => state.countries);

  if (status === 'loading') return <p>Loading...</p>;

  return (
    <div className="country-list">
      {list.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
};

export default CountryList;
