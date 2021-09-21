import React from 'react'
import './Country.css';

const Country = (props) => {
    const { name, flag, capital, population, region } = props.country
    console.log(props.country)
    return (
        <div className="rest-country">
            <h2>Country name: {name}</h2>
            <img style={{ width: "300px" }} src={flag} alt="" />
            <h4>Capital: {capital}</h4>
            <h4>Population: {population}</h4>
            <small>Region: {region}</small>
        </div>
    )
}

export default Country
