import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountres] = useState([])
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountres(data))
    }, [])
    return (
        <div>
            <h2>Gelo Countries: {countries.length}</h2>
            <div className="countries-container">

                {
                    countries.map(country => <Country key={country.alpha2Code} country={country}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;
