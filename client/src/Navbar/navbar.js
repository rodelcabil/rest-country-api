import React from 'react'
import { Nav, NavbarContainer } from './navbar-elements'
import { RiSunFill, RiMoonFill } from 'react-icons/ri'
import { useDispatch, useSelector } from "react-redux";
import { setLightTheme, setDarkTheme } from '../ReduxStore/themeSlice'
import {LightTheme, DarkTheme} from '../Theme/theme'


const Navbar = () => {

    const theme = useSelector((state) => state.theme.theme);
    const ternary = theme === 'light' || theme === null;
    
    const dispatch = useDispatch();

    const enableLightMode = () => {
        dispatch(setLightTheme());

    }

    const enableDarkMode = () => {
        dispatch(setDarkTheme());
    }

    return (
        <Nav theme={ternary ? LightTheme : DarkTheme}>
            <NavbarContainer theme={ternary ? LightTheme : DarkTheme}>
                <h4>Where in the world?</h4>
                <div className='dark-mode-container'>  
                    {ternary ? <RiMoonFill size="20" onClick={enableDarkMode} className="icon" /> : <RiSunFill size="20" onClick={enableLightMode} className="icon" />} &nbsp;&nbsp;
                    <p>Dark Mode</p>
                </div>
               
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar