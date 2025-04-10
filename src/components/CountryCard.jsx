import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
  return (
    <Link to={`/country/${country.cca3}`} className="country-card">
      <img src={country.flags.png} alt={country.name.common} />
      <p>{country.name.common}</p>
    </Link>
  );
};

export default CountryCard;
