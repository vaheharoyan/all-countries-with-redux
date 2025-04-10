import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CountryDetail = () => {
  const { code } = useParams();
  const navigate = useNavigate();

  const country = useSelector((state) =>
    state.countries.list.find((c) => c.cca3 === code)
  );

  if (!country) return <p>Country not found</p>;

  const { name, capital, population, region, flags, latlng } = country;

  return (
    <div className="country-detail">
      <button onClick={() => navigate(-1)} className="back-button">← Back</button>

      <h2>{name.common}</h2>
      <img src={flags.png} alt={name.common} />
      <p><strong>Capital:</strong> {capital?.[0]}</p>
      <p><strong>Population:</strong> {population.toLocaleString()}</p>
      <p><strong>Region:</strong> {region}</p>

      <div className="map-container">
        <iframe
          title="map"
          src={`https://maps.google.com/maps?q=${latlng[0]},${latlng[1]}&z=4&ie=UTF8&iwloc=&output=embed`}
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};


{country.coatOfArms?.png && (
  <div className="coat-of-arms">
    <h4>Coat of Arms:</h4>
    <img
      src={country.coatOfArms.png}
      alt={`${country.name.common} coat of arms`}
      style={{ width: '150px', marginTop: '10px' }}
    />
  </div>
)}


export default CountryDetail;
