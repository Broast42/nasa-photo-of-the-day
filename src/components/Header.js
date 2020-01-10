import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
   background: #002db3;
   color: white;
   height: 150px;
   border-bottom: 10px solid #cc0000;
   text-align: center;
   padding: 20px; 
`;

const StyledH1 = styled.h1`
    font-size: 3rem;
`;

const StyledP = styled.p`
    font-size: 2rem;
`;

export default function Header(props){

    return(
        <StyledHeader>
            <StyledH1>Astronomy Picture of the Day</StyledH1>
            <StyledP>{props.date}</StyledP>
        </StyledHeader>
    );
}