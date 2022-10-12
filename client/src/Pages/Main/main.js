import React, { useState, useEffect } from 'react'
import { CountriesContainer, MainContainer, SearchInput, HeaderContainer, GridContainer, EmptyContainer, Dropdown } from './main-elements'
import { CgSearch } from 'react-icons/cg'
import { FiChevronDown } from 'react-icons/fi'
import CountryCard from '../../Components/CountryCard/countryCard';
import { Oval } from 'react-loader-spinner';
import { useSelector } from 'react-redux'
import { LightTheme, DarkTheme } from '../../Theme/theme';

import Empty from '../../images/empty-flag.svg'
import ScrollToTopButton from '../../Components/ScrollToTopButton/scrollToTopButton';

const Main = () => {

    const [countries, setCountries] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [filter, setFilter] = useState('');
    const [isClick, setIsClick] = useState(false);

    const [isZero, setIsZero] = useState(false);

    const theme = useSelector((state) => state.theme.theme);
    const ternary = theme === 'light' || theme === null;

    useEffect(() => {

        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setLoading(false);
                setCountries(data);
                return;
            });

        checkIfListIsZero();

    }, [isZero]);

    const searchFAQ = (value) => {
        setFilter(value)
    }


    let countrySearch = countries?.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    });

    const checkIfListIsZero = () => {
        if (countrySearch.length > 0) {
            setIsZero(false);
        }
        else {
            setIsZero(true)
        }
    }

    const showDropDownContent = () => {
        setIsClick(!isClick)
    }

    const filterByRegion = (region) =>{
        setLoading(true);
        fetch(`https://restcountries.com/v3.1/region/${region}`)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setLoading(false);
                setCountries(data);
                return;
            });

        checkIfListIsZero();
    }



    return (
        <MainContainer theme={ternary ? LightTheme : DarkTheme}>
            <CountriesContainer theme={ternary ? LightTheme : DarkTheme}>
                <HeaderContainer theme={ternary ? LightTheme : DarkTheme}>
                    <div className='search-container'>
                        <CgSearch size="20" className='search-icon' />
                        <SearchInput theme={ternary ? LightTheme : DarkTheme} type="search" placeholder='Search for a country...' onChange={(e) => searchFAQ(e.target.value)} />
                    </div>
                    <Dropdown theme={ternary ? LightTheme : DarkTheme} click={isClick}>
                        <button className="dropbtn" onClick={showDropDownContent}>Filter by Region <FiChevronDown className='arrow-down-icon' size="16px"/></button>
                        <div className="dropdown-content">
                            <span onClick={()=> filterByRegion("africa")}>Africa</span>
                            <span onClick={() => filterByRegion("america")}>America</span>
                            <span onClick={() => filterByRegion("asia")}>Asia</span>
                            <span onClick={() => filterByRegion("europe")}>Europe</span>
                            <span onClick={() => filterByRegion("oceania")}>Oceania</span>
                        </div>
                    </Dropdown>
                </HeaderContainer>
                <br /><br />
                {
                    isLoading ?
                        <div className='loadingContainer'>
                            <Oval
                                height={80}
                                width={80}
                                color="#2988B4"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel='oval-loading'
                                secondaryColor="#2988B4"
                                strokeWidth={2}
                                strokeWidthSecondary={2}

                            />
                            <br />
                            <h2>Fetching countries. Please Wait</h2>
                        </div>

                        :
                        <>
                            {
                                countrySearch.length !== 0 ?
                                    <GridContainer theme={ternary ? LightTheme : DarkTheme}>
                                        {
                                            countrySearch.map((item, i) => {
                                                return (

                                                    <CountryCard
                                                        key={i}
                                                        countryDetails={item}
                                                        country={item.name.common}
                                                        imgPath={item.flags.png}
                                                        population={item.population}
                                                        region={item.region}
                                                        capital={item.capital}
                                                    />
                                                )
                                            })
                                        }
                                    </GridContainer>
                                    :
                                    <EmptyContainer theme={ternary ? LightTheme : DarkTheme}>
                                        <img src={Empty} alt="Empty" />
                                        <br />
                                        <h1>No country was found!</h1>
                                    </EmptyContainer>
                            }
                        </>
                }


            </CountriesContainer>
            <ScrollToTopButton />
        </MainContainer>
    )
}

export default Main