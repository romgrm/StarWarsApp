import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import axios from "react-native-axios";
import { Test } from "../components/Test";
import { CardPilots } from "../components/CardPilots";

export default function home() {
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
      <View style={styles.container}>
          <ImageBackground
            source={require("../../assets/StarWars.png")}
            resizeMode="cover"
            style={styles.image}
          >
        <Text style={styles.text}>STARWARS</Text>
        <CardPilots name={fetchData["name"]} height={50} />
        <Test title="Romain"></Test>
    </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  text: {
    fontFamily: "Star",
    color: "white",
    textAlign: "center",
    fontSize: 50, 
    top: 0,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: '100%',
  },
});
