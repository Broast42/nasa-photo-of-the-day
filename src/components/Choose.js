import React, {useState, useEffect} from "react";
import axios from "axios";

export default function Choose(){
    const [apiData, setApiData] = useState([]);
    const [userDate, setUserDate] = useState("2019-12-31");

    useEffect(()=>{
        axios
          .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=" + userDate)
          .then(res =>{
            setApiData(res.data);
          })
          .catch(error =>{
            console.log("No data returned", error);
          });
      },[userDate]);
      console.log("from choose", apiData);
    return(
        <div className="choose-date">
            <h2>Choose your own date for more pictures.</h2>
            <input type="date" value={userDate} onChange={e => setUserDate(e.target.value)}/>
            <h3>{apiData.title}</h3>
            <img src={apiData.hdurl} alt={apiData.title}/>
            <p>{apiData.explanation}</p>
            
        </div>
    );
}