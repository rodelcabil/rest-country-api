import { createGlobalStyle } from 'styled-components';

const  GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
        font-family: 'Nunito Sans', sans-serif;
    }

   

    a{
        padding: 0;
        margin: 0;
    }

    
`;

export default GlobalStyle;