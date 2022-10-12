import React from 'react'
import { CardContainer } from './countryCard-elements'
import { useSelector } from 'react-redux'
import { DarkTheme, LightTheme } from '../../Theme/theme';
import { Link } from 'react-router-dom'

const CountryCard = ({ imgPath, country, population, region, capital, countryDetails }) => {

  const theme = useSelector((state) => state.theme.theme);
  const ternary = theme === 'light' || theme === null;

  

  return (
    <Link to={{ pathname: `/view-country/${country}`, state: { country: countryDetails } }}  >
      <CardContainer theme={ternary ? LightTheme : DarkTheme} >
        <img src={imgPath} alt={country} />
        <div className="details-container">
          <h4>{country}</h4>
          <br />
          <p><span>Population:</span> {population.toLocaleString('en-US')}</p>
          <p><span>Region:</span> {region}</p>
          <p><span>Capital:</span> {capital}</p>
        </div>
      </CardContainer>
    </Link>
  )
}

export default CountryCard