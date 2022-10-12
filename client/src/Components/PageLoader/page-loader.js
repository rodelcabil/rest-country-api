import React from 'react'
import { FidgetSpinner } from "react-loader-spinner";
import { LoadingContainer } from './page-loader-elements';

const PageLoader = (props) => {
    return (
        <LoadingContainer theme={props.theme} style={{height: props.height}}>
            <FidgetSpinner 
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
                ballColors={['#2988B4', '#2988B4', '#2988B4']}
                backgroundColor="#2988B4"
            />
            <br/>
            <h4>{props.title}</h4>
        </LoadingContainer>
    )
}

export default PageLoader
