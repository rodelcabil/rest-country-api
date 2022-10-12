import styled from 'styled-components'

export const DetailsContainer = styled.div`
   width: 100%;
   background-color:  ${({ theme }) => theme.background};
   transition: ${({ theme }) => theme.transition};
   min-height: 100vh;


  
`

export const DetailsContent = styled.div`

    max-width: 1500px;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 120px 0 20px 0;
   

    @media screen and (max-width: 800px){
        position: none;    
    }

  
`
export const RowContainer = styled.div`

    width: 100%;
    display: flex;
    margin-top: 80px;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.color};
    height: auto;

    h1{
        color: ${({ theme }) => theme.color};
    }

    .left{
        display: flex;
        flex-basis: 50%;
        

        img{
            height: 400px;
          

            @media screen and (max-width: 800px){
                width: 100%;
            }
        }
    }

    .right{
        display: flex;
        flex-basis: 50%;
        flex-direction: column;

        .details{
            display: flex;
            flex-direction: row;

            .right-details,  .left-details{
                display: flex;
                flex-basis: 50%;
                flex-direction: column;

                p{
                    font-size: 16px;

                    span{
                        font-weight: 600;
                    }

                    .language {
                        font-weight: normal;
                    }
                    
                }
            }
            

            @media screen and (max-width: 800px){
            display: block;
           
        }

        }

        .borderCountries{
            font-weight: 600;
            font-size: 16px;
            
            .border{
                padding: 10px;
                margin-right: 10px;
                box-shadow: 2px 2px 9px 0px  rgb(0 0 0 / 0.2);
                -webkit-box-shadow: 2px 2px 9px 0px  rgb(0 0 0 / 0.2);
                -moz-box-shadow: 1px 1px 10px 0px  rgb(0 0 0 / 0.2);
            }
        }

        
    }


    @media screen and (max-width: 800px){
        display: block;
        margin: auto;
    }

`

export const BackButton = styled.button`

    border: none;
    background-color: ${({ theme }) => theme.secondaryColor};
    display: flex;
    align-items: center;
    box-shadow: 2px 2px 9px 0px  rgb(0 0 0 / 0.2);
    -webkit-box-shadow: 2px 2px 9px 0px  rgb(0 0 0 / 0.2);
    -moz-box-shadow: 1px 1px 10px 0px  rgb(0 0 0 / 0.2);
    width: fit-content;
    padding: 10px 30px;
    border-radius: 5px;
    color: ${({ theme }) => theme.color};
    transition: ${({ theme }) => theme.transition};
    cursor: pointer;

`