import React, { useState, useEffect } from "react";
import axios from "react-native-axios";

export default function starshipRequest() {
    const [fetchData, setFetchData] = useState([]);
    useEffect(() => {
        const fetchingData = async () => {
          await axios.get("https://swapi.dev/api/people/1/").then((response) => {
            setFetchData(response.data);
            console.log(response.data);
          });
        };
        fetchingData();
      }, []);
    return (
        <div>
            {/* <CardPilots name={fetchData["name"]} height={50} />
        <Test title="Romain"></Test> */}
        </div>
    )
}
