import React, { useEffect, useState } from 'react';
import { CityOptions } from '../CityOptions';
import mapImage from './img/map.svg';
import { DataOptions } from '../../DataOption';
import './style.css';

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [dates, setDates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch('https://apps.kodim.cz/daweb/leviexpress/api/cities')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCities(data.results);
      });
    fetch('https://apps.kodim.cz/daweb/leviexpress/api/dates')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDates(data.results);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      `https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`,
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        onJourneyChange(data.results);
      });
  };
  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form className="journey-picker__form" onSubmit={handleSubmit}>
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select onChange={(udalost) => setFromCity(udalost.target.value)}>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select onChange={(udalost) => setToCity(udalost.target.value)}>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select onChange={(udalost) => setDate(udalost.target.value)}>
              <DataOptions dates={dates} />
            </select>
          </label>
          <div className="journey-picker__controls">
            <button
              className="btn"
              type="submit"
              disabled={fromCity === '' || toCity === '' || date === ''}
              onClick={handleSubmit}
            >
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src={mapImage} />
      </div>
    </div>
  );
};
