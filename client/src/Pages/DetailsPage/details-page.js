import React from 'react'
import { BackButton, DetailsContainer, DetailsContent, RowContainer } from './details-page-elements'
import { useSelector } from 'react-redux'
import { LightTheme, DarkTheme } from '../../Theme/theme';
import { MdKeyboardBackspace } from 'react-icons/md'
import { useLocation } from 'react-router-dom'
const DetailsPage = ({ history }) => {

  const theme = useSelector((state) => state.theme.theme);
  const ternary = theme === 'light' || theme === null;

  const location = useLocation();
  const { country } = location.state;

  const countryLanguage = Object.values(country.languages);

  // 

  console.log("Details Page: ", country)

  return (
    <DetailsContainer theme={ternary ? LightTheme : DarkTheme}>
      <DetailsContent>
        <BackButton theme={ternary ? LightTheme : DarkTheme} onClick={() => history.goBack()}>
          <MdKeyboardBackspace size="16px" />&nbsp;&nbsp;
          <span>Back</span>
        </BackButton>
        <RowContainer theme={ternary ? LightTheme : DarkTheme} >
          <div className="left">
            <img src={country.flags.svg} alt={country.name.common + "Flag"} />
          </div>
          <div className="right">
            <h1>{country.name.common}</h1>
            <br/>
            <div className="details">
              <div className="left-details">
                <p>
                  <span>Native Name:  </span>
                  {country.name.common}
                </p>
                <p>
                  <span>Population: </span>
                  {country.population}
                </p>
                <p>
                  <span>Region: </span>
                  {country.region}
                </p>
                <p>
                  <span>Sub Region: </span>
                  {country.subregion}
                </p>
                <p>
                  <span>Capital: </span>
                  {country.capital}
                </p>
              </div>
              <div className="right-details">
                <p>
                  <span>Top Level Domain: </span>
                  {country.tld}
                </p>
                <p>
                  <span>Currencies: </span>
                 { Object.values(country.currencies)[0].name}
                </p>
                <p>
                  <span>Languages: </span>
                  {countryLanguage.map((language, index) => {
                    return <span className='language' key={index}>{language}{index < countryLanguage.length - 1 ? ', ' : ''}</span>
                  })}
                </p>
              </div>
            </div>
            
            {/* <div>
              <p className='borderCountries'>Border Countries: &nbsp;&nbsp;
                {country.borders.map((border, i) => {
                  return <span key={i} className="border">{border}</span>
                })}
                
              </p>
            </div> */}
            
          </div>
        </RowContainer>
      </DetailsContent>
    </DetailsContainer>
  )
}

export default DetailsPage