import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-elements/dist/card/Card";
import axios from "react-native-axios";
import { Test } from "./src/components/Test";
import { CardPilots } from "./src/components/CardPilots";

interface test {
  name: string; 
}
export default function App() {
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
      {/* {fetchData.map((item) => (
          <Text>{item}</Text>
        ))} */}

      <CardPilots name="hello" height="there" />
      <Test title="Romain"></Test>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
