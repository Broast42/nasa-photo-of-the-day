import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

const ChooseDiv = styled.div`
    margin-top: 10px;
    border-top: 5px dashed #cc0000;
`;

const Title = styled.div`
    color: white;
    text-align: center;
`;

const FlexDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
`;

const Container = styled.div`
    width: 50%;
    padding: 0px 20px; 
    color: white;

`;

const Container1 = styled(Container)`
    text-align: center;
`;

const Container2 = styled(Container)`
    padding-top: 40px;
`;

const ChooseImg = styled.img`
    width: 400px;
    border: 4px solid #cc0000;
    border-radius: 12px;
`;

export default function Choose(){
    const [apiData, setApiData] = useState([]);
    const [userDate, setUserDate] = useState("2019-12-31");

    useEffect(()=>{
        axios
          .get("https://api.nasa.gov/planetary/apod?api_key=rF8vrbsi27mHmdwRF2Gt8cE2xIHi2CL1nQIf6izv&date=" + userDate)
          .then(res =>{
            setApiData(res.data);
          })
          .catch(error =>{
            console.log("No data returned", error);
          });
    },[userDate]);
      
    console.log("from choose", apiData);
    const copy = apiData.copyright;
    let copyText = "";
    if(copy){
        copyText = `Image copyright: ${copy}`;
    }


    return(
        <ChooseDiv>
            <Title>
                <h2>Choose your own date for more pictures.</h2>
                <input type="date" value={userDate} onChange={e => setUserDate(e.target.value)}/>
            </Title>
            <FlexDiv>
                <Container1>
                    <h3>{apiData.title}</h3>
                    <ChooseImg src={apiData.hdurl} alt={apiData.title}/>
                    <p>{copyText}</p>
                </Container1>
                <Container2>
                    <p>{apiData.explanation}</p>
                </Container2>    
            </FlexDiv>            
        </ChooseDiv>
    );
}