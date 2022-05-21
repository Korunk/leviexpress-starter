import React from 'react';

export const CityOptions = ({ cities }) => {
  return (
    <>
      <option value="">Vyberte</option>
      {cities.map((city) => (
        <option value={city.name} key={city.code}>
          {city.name}
        </option>
      ))}
    </>
  );
};
