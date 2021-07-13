import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import { Input } from "react-native-elements";
import axios from "react-native-axios";
import { Test } from "../components/Test";
import { CardPilots } from "../components/CardPilots";
import { Button } from "react-native-elements/dist/buttons/Button";

export default function home({navigation}) {
  const [fetchData, setFetchData] = useState([]);
  const [pseudo, setPseudo] = useState('');

  useEffect(() => {
    const fetchingData = async () => {
      await axios.get("https://swapi.dev/api/people/1/").then((response) => {
        setFetchData(response.data);
        console.log(response.data);
      });
    };
    fetchingData();
  }, []);

  const testZer = (): void => {
    console.log(pseudo);
  }

  const onReset = (): void => {
    setPseudo(''); 
    console.log(pseudo);
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/StarWars.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>STARWARS</Text>
        <Input 
        placeholder="Enter your pseudo"
        inputContainerStyle={styles.input}
        inputStyle={styles.inputText}
        onChangeText={value => setPseudo(value)}
        value={pseudo}
        />
        <TouchableOpacity>
          
        </TouchableOpacity>
        <Button title="CLICK" onPress={testZer} />
        <Button title="RESET" onPress={onReset} />
        <CardPilots name={fetchData["name"]} height={50} />
        <Test title="Romain"></Test>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontFamily: "Star",
    color: "white",
    textAlign: "center",
    fontSize: 50,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  input:{
    // backgroundColor: 'red', 
  },
  inputText:{
    color: 'white',
  }
});