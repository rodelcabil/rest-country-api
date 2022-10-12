import styled from 'styled-components'



export const LoadingContainer = styled.div`
        max-width: 100vw;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;
        transition: ${({ theme }) => theme.transition} !important;
        background: ${({ theme }) => theme.backgroundColor} !important;

        h4{
            color: ${({ theme }) => theme.color} !important;
        }
        
     
        @media screen and (max-width: 600px){
            width: 100%;
        
        }
`;
