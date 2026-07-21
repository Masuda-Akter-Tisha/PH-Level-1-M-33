import React from 'react';
import './country.css';

const Country = ({country}) => {
    console.log(country);
    
    return (
        <div className='country'>
              <img src = {country.flags.flags.png} alt={country.flags.flags.alt} />
              <h3>Name : {country.name.common}</h3>
              <h3>Population : {country.population.population}</h3>
        </div>
    );
};

export default Country;

