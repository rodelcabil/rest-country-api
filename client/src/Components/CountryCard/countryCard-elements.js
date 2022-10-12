import styled from "styled-components";

export const CardContainer = styled.div`
    max-width: 500px;
    min-width: 200px;
    display: flex;
    height: 100%;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 2px 2px 9px 0px  rgb(0 0 0 / 0.1);
    -webkit-box-shadow: 2px 2px 9px 0px  rgb(0 0 0 / 0.1);
    -moz-box-shadow: 1px 1px 10px 0px  rgb(0 0 0 / 0.1);
    margin-bottom: 20px;
    background-color:  ${({ theme }) => theme.secondaryColor};
    transition: ${({ theme }) => theme.transition};
    cursor: pointer;

    img {
        width: 100%;
        height: 200px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .details-container{
        display: flex;
        flex-direction: column;
        padding: 20px 30px;
        color:  ${({ theme }) => theme.color};

        h4{
            font-size: 18px;
            font-weight: 700;
            color:  ${({ theme }) => theme.color};
        }
        p{
            font-size: 14px;

            span{
                font-weight: 700;
            }
        }
    }

     @media screen and (max-width: 600px){
        width: 100%;
        margin: auto;
        margin-bottom: 10px;
    }

`