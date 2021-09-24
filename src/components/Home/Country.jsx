import React from 'react';
import { Link } from 'react-router-dom';
import { useAnimatePresence } from 'use-animate-presence';
import CountryFlag from './CountryFlag';
import LazyLoad from 'react-lazy-load';

const variants = {
  y: { from: 100, to: 0 },
  opacity: { from: 0, to: 1 },
};

const Country = ({
  alpha3Code,
  name,
  flag,
  flags,
  population,
  region,
  capital,
}) => {
  const animatedDiv = useAnimatePresence({
    variants,
    initial: 'visible',
  });

  return (
    <div ref={animatedDiv.ref}>
      <LazyLoad offsetVertical={3000}>
        <Link to={`/details/${alpha3Code}`}>
          <div className="country">
            <CountryFlag flag={flag} name={name} alpha3Code={alpha3Code} />

            <div className="country__info">
              <h3 className="country__info__name">{name}</h3>
              <ul className="country__info__details">
                <li className="country__info__details__population">
                  <span>Population: </span>
                  {population.toLocaleString()}
                </li>
                <li className="country__info__details__region">
                  <span>Region: </span>
                  {region}
                </li>
                <li className="country__info__details__capital">
                  <span>Capital: </span>
                  {capital}
                </li>
              </ul>
            </div>
          </div>
        </Link>
      </LazyLoad>
    </div>
  );
};
export default Country;
