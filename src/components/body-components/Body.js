import React from "react";
import Pic from "./Pic";
import Description from "./Description";
import styled from "styled-components";

const BodyDiv = styled.div`
    width: 100%;
    color: white;
`;

const BodyH2 = styled.h2`
    text-align: center;
    font-size: 2rem;
`;

export default function Body(props){
    return(
        <BodyDiv>
            <BodyH2>{props.title}</BodyH2>
            <Pic picture={props.picture} copyright={props.copyright}/>
            <Description description={props.description}/>
        </BodyDiv>
            
    );
}