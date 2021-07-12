import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-elements/dist/card/Card";
import axios from "react-native-axios";
import { Test } from "./src/components/Test";
import { CardPilots } from "./src/components/CardPilots";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

interface test {
  name: string;
}

const Stack = createStackNavigator();


export default function App() {
  let [fontsLoaded] = useFonts({
    "Star": require("./assets/fonts/Starjedi.ttf"),
    
  });

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

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        {/* {fetchData.map((item) => (
          <Text>{item}</Text>
        ))} */}
        <Text style={styles.text}>STARWARS</Text>
        <CardPilots name={fetchData["name"]} height={50} />
        <Test title="Romain"></Test>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    fontFamily: 'Star'
  }
});
