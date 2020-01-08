import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "./components/Header";
import Body from "./components/body-components/Body";
import Footer from "./components/Footer";
import Choose from "./components/Choose";
import "./App.css";

function App() {
  const [nasa, setNasa] = useState([]);
  
  useEffect(()=>{
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res =>{
        setNasa(res.data);
      })
      .catch(error =>{
        console.log("No data returned", error);
      });
  },[]);

  console.log("state data: ", nasa);


  return (
    <div className="App">
      <Header date={nasa.date}/>
      <Body title={nasa.title} picture={nasa.hdurl} description={nasa.explanation}/>
      <Footer copyright={nasa.copyright}/>
      <Choose/>
      
    </div>
  );
}

export default App;
