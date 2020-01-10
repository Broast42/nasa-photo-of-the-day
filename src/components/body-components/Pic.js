import React from "react";

export default function Pic(props){
    const copy = props.copyright;
    let copyText = "";
    if(copy){
        copyText = `Image copyright: ${copy}`;
    }
    return(
        <div>
            <img src={props.picture} alt={props.title}/> 
            <p>{copyText}</p>
        </div>
       
    );
}