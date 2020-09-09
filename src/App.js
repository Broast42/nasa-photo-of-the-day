import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "./components/Header";
import Body from "./components/body-components/Body";
import Footer from "./components/Footer";
import Choose from "./components/Choose";
import styled from "styled-components"; 
import "./App.css";

const PageWrapper = styled.div`
  max-width: 900px;
  margin: 0px auto;
  background: #00004d;
`;

function App() {
  const [nasa, setNasa] = useState([]);
  
  useEffect(()=>{
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=rF8vrbsi27mHmdwRF2Gt8cE2xIHi2CL1nQIf6izv`)
      .then(res =>{
        setNasa(res.data);
      })
      .catch(error =>{
        console.log("No data returned", error);
      });
  },[]);

  console.log("state data: ", nasa);


  return (
    <PageWrapper>
      <Header date={nasa.date}/>
      <Body title={nasa.title} picture={nasa.hdurl} description={nasa.explanation} copyright={nasa.copyright}/>
      <Choose/>
      <Footer/>
    </PageWrapper>
  );
}

export default App;
