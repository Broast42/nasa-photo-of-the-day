import React from "react";
import styled from "styled-components"

const PicDiv = styled.div`
    text-align: center;
    padding: 0px 5px;
    
`;

const PicImg = styled.img`
    width: 100%;
    max-width: 800px;
    border: 5px solid #cc0000;
    border-radius: 15px;
`;

export default function Pic(props){
    const copy = props.copyright;
    let copyText = "";
    if(copy){
        copyText = `Image copyright: ${copy}`;
    }
    return(
        <PicDiv>
            <PicImg src={props.picture} alt={props.title}/> 
            <p>{copyText}</p>
        </PicDiv>
       
    );
}