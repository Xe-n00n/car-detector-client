import React, { useState,useEffect } from "react";
import Cards from "../cards/Cards";
import "./MainDash.css";
import PieChart from "../chart/Chart";

import API from "../../Api";
const MainDash = () => {
   //const [serie, setSerie] = useState([]);
   //setSerie([10, 25, 15, 30, 12, 15, 20]);
   const [Cardsdata, setCardsData] = useState([]);
   const properties = ["cars","trucks","buses"];
   const serie = [];
   const RecupData = () => {
    API.get('/data').then((response) => {
            setCardsData([]);
            setCardsData(response.data);
         });
        setTimeout(RecupData, 10000);
  };
  
  useEffect(() => {
        RecupData();
   }, []);

   for(let i=0; i < 3; i++) {
    serie.push(Math.floor((Cardsdata[properties[i]]*100)/(Cardsdata[properties[i]]+Cardsdata[properties[(i+1) % 3 ]]+Cardsdata[properties[(i+2) % 3]])))
   }
    return (
      <div className="MainDash">
        <h1>Dashboard</h1>
        <Cards />
        <div className="container">
          <div className="left-div">
            <PieChart series={serie} />
          </div>
        </div>
      </div>
    );
}

export default MainDash;