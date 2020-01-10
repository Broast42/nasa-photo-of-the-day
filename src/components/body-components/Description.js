import React from "react";
import styled from "styled-components";

const DesDiv = styled.div`
    padding: 0px 20px;
    font-size: 1.2rem;
    
`;

export default function Description(props){
    return(
       <DesDiv>
           <p>{props.description}</p>
       </DesDiv> 
    );
}