import styled from "styled-components";

export const Nav = styled.nav`
   width: 100%;
   height: 80px;
   display: flex;
   box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1); 
   align-items: center;
   padding: 0 20px;
   background:  ${({ theme }) => theme.secondaryColor};
   transition: ${({ theme }) => theme.transition};
   position: fixed;
   z-index: 1000;
`

export const NavbarContainer = styled.div`
height: 80px;
display: flex;
margin: auto;
width: 1500px;
justify-content: space-between;
align-items: center;

h4{
    font-size: 18px;
    font-weight: 600;
    margin: 0;
    color: ${({ theme }) => theme.color};
}


.dark-mode-container{
    display: flex;
    align-items: center;
    cursor: pointer;

    .icon{
        color: ${({ theme }) => theme.color};
    }

    p{
        font-size: 16px;
        font-weight: 400;
        margin: 0;
        color: ${({ theme }) => theme.color};
    }
}

@media (min-width: 250px) and (max-width: 910px){
    padding: 0;

}
`;