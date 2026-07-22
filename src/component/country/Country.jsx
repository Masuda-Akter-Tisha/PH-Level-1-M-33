import React, { useState } from 'react';
import './country.css';

const Country = ({country}) => {
    console.log(country);

    const [visited, setVisited] = useState (false);

    const handleVisited = () => {
        // 1.
        // if (visited) {
        //     setVisited (false);
        // }
        // else {
        //     setVisited (true);
        // }

        //  2. 
        // setVisited (visited ? false : true);
        setVisited (!visited);

        console.log(country.name.common);
        
    }
    
    return (
        <div className = {visited ? "country-visited" : "country"}>
              <img src = {country.flags.flags.png} alt={country.flags.flags.alt} />
              <h3>Name : {country.name.common}</h3>
              <h3>Population : {country.population.population}</h3>
              <p>Area : {country.area.area} - {country.area.area > 10000 ? 'Big Country' : 'Small Country'}</p>
              <button onClick={handleVisited}> {visited ? 'Visited' : 'Not Visited'} </button>
        </div>
    );
};

export default Country;

