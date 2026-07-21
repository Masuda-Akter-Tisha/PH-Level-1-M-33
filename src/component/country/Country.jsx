import React, { useState } from 'react';
import './country.css';

const Country = ({country}) => {
    console.log(country);

    const [state, setState] = useState ('');

    const handleState = () => {
        const updateState = 'Visited';
        setState (updateState);
        
    }
    
    return (
        <div className = {country.area.area > 10000 ? "country" : "country2"}>
              <img src = {country.flags.flags.png} alt={country.flags.flags.alt} />
              <h3>Name : {country.name.common}</h3>
              <h3>Population : {country.population.population}</h3>
              <p>Area : {country.area.area} - {country.area.area > 10000 ? 'Big Country' : 'Small Country'}</p>
              <button onClick={handleState}> {!state ? 'Not Visited' : 'Visited'} </button>
        </div>
    );
};

export default Country;

