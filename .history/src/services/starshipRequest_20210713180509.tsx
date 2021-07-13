import React, { useState, useEffect } from "react";

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
            
        </div>
    )
}
