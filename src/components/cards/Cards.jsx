import React, { useState, useEffect } from "react";
import { cardsData } from "../../data/Data";
import Card from "../card/Card";
import "./Cards.css";
import API from "../../Api";
   export default function Cards () {
    const [Cardsdata, setCardsData] = useState([]);
    const properties = ["cars","trucks","buses"];
    let cardataset = [{name:"cars", data:[]}];
    let truckdataset = [{name:"trucks", data:[]}];
    let busesdataset = [{name:"buses", data:[]}];
    const [series, setSeries] = useState([[], [], []]);
    const RecupData = () => {
        API.get('/data').then((response) => {
                setCardsData([]);
                setCardsData(response.data);
                cardataset[0].data.push(response.data["cars"]);
                truckdataset[0].data.push(response.data["trucks"]);
                busesdataset[0].data.push(response.data["buses"]);
             });
             setSeries([
                cardataset, truckdataset, busesdataset
            ]);
             console.log(cardataset);
             console.log(series[0]);
            //setTimeout(RecupData, 10000);
      };
      
      useEffect(() => {
            RecupData();
       }, []);
    return (
        <div className="Cards">
            {cardsData.map((card,id) => {
                return (
                    <div className="parentContainer" key={id}>
                        <Card
                            title={card.title}
                            color={card.color}
                            barValue={Math.floor((Cardsdata[properties[id]]*100)/(Cardsdata[properties[id]]+Cardsdata[properties[(id+1) % 3 ]]+Cardsdata[properties[(id+2) % 3]]))}
                            value={Cardsdata[properties[id]]}
                            png={card.png}
                            series={series[id]}
                        />
                    </div>
                );
            })}
        </div>
    );
};
