import styled from "styled-components";

export const MainContainer = styled.div`
   width: 100%;
   background-color:  ${({ theme }) => theme.background};
   transition: ${({ theme }) => theme.transition};
   min-height: calc(100vh-80px);
  
`
export const CountriesContainer = styled.div`
    max-width: 1500px;
    display: flex;
    flex-direction: column;
    margin: auto;
    height: 100%;
    padding: 30px 0;
    height: 100%;
    
  

    .loadingContainer {
        display: flex;
        width: 100%;
        height: calc(100vh - 222px);
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h2{
            color: ${({ theme }) => theme.color}
        }


    }

    @media screen and (max-width: 1500px){
        padding: 30px 20px;
    }

`
export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    height: fit-content;
    justify-content: space-between;
    margin-top: 80px;

    .search-container{
        ${'' /* border: 1px solid #eee; */}
        display: flex;
        align-items: center;
        border-radius: 5px;
        padding: 5px 16px;
        box-shadow: 2px 2px 9px 0px  rgb(0 0 0 / 0.1);
        -webkit-box-shadow: 2px 2px 9px 0px  rgb(0 0 0 / 0.1);
        -moz-box-shadow: 1px 1px 10px 0px  rgb(0 0 0 / 0.1);
        background-color:  ${({ theme }) => theme.secondaryColor};
        transition: ${({ theme }) => theme.transition};

        .search-icon{
            color: ${({ theme }) => theme.color};
            transition: ${({ theme }) => theme.transition};
        }
    }

    .filter{

            display: flex;
            padding: 12px 20px;
            border: 1px solid #eee;
            font-size: 16px;
            border-radius: 10px;

            &:focus{
                outline: none;
            }
        }

         .ant-select-selector{
            border: none;

            &:focus{
                outline: none;
                box-shadow: none;
                border: none;
                border-color: none;
            }
        }

    .filter-container{
        display: flex;
        
    }

    

`


export const SearchInput = styled.input`
    border: none;
    color: ${({ theme }) => theme.color};
    padding: 12px 20px;
    border-radius: 10px;
    height: 40px;
    font-size: 16px;
    width: 300px;
    background-color:  ${({ theme }) => theme.secondaryColor};
    transition: ${({ theme }) => theme.transition};


    &:focus {
        outline: none;
    }

    @media (min-width: 0px) and (max-width: 570px) {
        margin-right: 10px;
        display: none;
    }
`
export const GridContainer = styled.div`
    width: 100%;
    display: grid;
    
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    align-content: center;
    gap: 15px 15px;
    background-color:  ${({ theme }) => theme.background};
    transition: ${({ theme }) => theme.transition};

    @media (min-width: 801px) and (max-width: 1300px){
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 601px) and (max-width: 800px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 600px){
        display: block;
        margin: auto;
    }
`

export const EmptyContainer = styled.div` 

    display: flex;
    width: 100%;
    height: calc(87vh - 100px);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h1 {
        color: ${({ theme }) => theme.color}
    }

    img{
        height: 200px;
    }
   

`

export const Dropdown = styled.div`

    position: relative;
    display: inline-block;
   

    .dropbtn {
        display: flex;
        align-items: center;
         -webkit-box-shadow: 2px 2px 9px 0px  rgb(0 0 0 / 0.1);
        -moz-box-shadow: 1px 1px 10px 0px  rgb(0 0 0 / 0.1);
        background-color:  ${({ theme }) => theme.secondaryColor};
        transition: ${({ theme }) => theme.transition};
        color: ${({ theme }) => theme.color};;
        border-radius: 5px;
        padding: 5px 16px;
        height: 100%;
        font-size: 16px;
        border: none;
        cursor: pointer;

        .arrow-down-icon {
            margin-left: 10px;
        }
    }

    .dropdown-content {
        display: ${({ click }) => (click ? 'block' : 'none')};
        position: absolute;
        background-color:  ${({ theme }) => theme.secondaryColor};
        transition: ${({ theme }) => theme.transition};
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        margin-top: 10px;
        width: 100%;
        border-radius: 5px;
        span{
            color: ${({ theme }) => theme.color};
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            cursor: pointer;

            &:hover {
                background-color: ${({ theme }) => theme.background};;
            }
        }
    }
`