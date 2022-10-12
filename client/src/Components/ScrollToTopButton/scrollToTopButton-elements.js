import styled from "styled-components";

export const ScrollToTopButtonContainer = styled.button`
    border: none;
    position: fixed; 
    right: 3%;
    bottom: 40px;
    z-index: 1;
    cursor: pointer;
    color: #fff;
    padding: 10px 12px;
    border-radius: 5px;
    font-size: 18px;
    background: #2988B4;
    display:  ${({ scrolled }) => (scrolled ? 'flex' : 'none')};
    align-items: center;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
    transition: all 0.5s ease;

`