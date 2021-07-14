import React, { useState, useEffect } from "react";
import axios from "react-native-axios";
import { Starship } from "../interface/starshipsInterface";
import { View, Text, TouchableOpacity } from "react-native";
import { CardStarships } from "../components/CardStarships";
import { Pilots } from "../interface/pilotsInterface";

export default function starshipRequest() {
  const [fetchData, setFetchData] = useState<Starship[]>([]);
  const [fetchPilots, setFetchPilots] = useState<Starship[]>([]);
  const [fetchDataPilots, setFetchDataPilots] = useState<Pilots>();

  useEffect(() => {
    const fetchingData = async () => {
      await axios.get("https://swapi.dev/api/starships/").then((response) => {
        setFetchData(response.data.results);
        // setFetchPilots(response.data.results); 
        // setFetchPilots(response.data.results);
        // console.log(response.data.results[4].pilots);
      });
    };
    fetchingData();

    
  }, []);

  // useEffect(() => {
  //   let test:string; 
  //   console.log("zeub")
  //   const fetchingTest = fetchData.forEach(element => {
  //     console.log(element)
  //   });
  //   fetchingTest; 
  // }, [])

  // useEffect(() => {

    
  //   fetchData?.find(value => {
  
  //     if(value.pilots.length > 0){
  //       console.log(value)
  //       setFetchPilots(value); 
  //     }
  //   })
  // }, [])

  useEffect(() => {

  })
  const displayPilots = (item: Starship) => {
    if(item['pilots'].length > 0){
      setFetchData(item['pilots'])
    }
  }



  let isPilot: Boolean = false;
  // const onFetchPilots = (item: Starship) => {
  //   console.log(item);
  //   if (item["pilots"].length > 0) {
  //     isPilot = true;
  //   }
  // };
  // onPress={() => onFetchPilots(item)}
  return (
    <>
      {/* <Text>{fetchData?.name}</Text> */}
      {fetchData.map((item, key) => (
        <TouchableOpacity onPress={() => displayPilots(item)}>
          <CardStarships
            // index={item['name']}
            key={key}
            index={key}
            name={item["name"]}
            model={item["model"]}
            manufacturer={item["manufacturer"]}
            cost={item["cost"]}
            pilot={item[2]}
              // pilots={item['pilots']}
            // pilots={isPilot ? item["pilots"] : "No pilots for this starship"}
            // pilots={isPilot ? console.log(isPilot): console.log(isPilot) }
          />
        </TouchableOpacity>
      ))}
    </>
  );
}
