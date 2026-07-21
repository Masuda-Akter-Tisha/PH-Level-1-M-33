import React, { use } from 'react';
import Country from '../country/Country';
import './countries.css';

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    console.log(countries);
    
    
    return (
        <div style={{margin: '20px'}}>
            <h1>In the countries : {countries.length}</h1>
            <div className='countries'>
                {
                countries.map (country => <Country key={country.cca3.cca3} country = {country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;