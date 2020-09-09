import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
background: #002db3;
color: white;
min-height: 100px;
border-top: 10px solid #cc0000;
text-align: center;
padding: 20px;
`;

export default function Footer(){
    return(
        <StyledFooter>
            <h3>This information is provided by NASA's APOD API </h3>            
        </StyledFooter>
    );
}