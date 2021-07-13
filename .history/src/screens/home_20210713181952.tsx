import React, { useState, useEffect, FC } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Input } from "react-native-elements";
import axios from "react-native-axios";
import { Test } from "../components/Test";
import { CardPilots } from "../components/CardPilots";
import { Button } from "react-native-elements/dist/buttons/Button";
import { PseudoContext } from "../context/pseudoContext";

interface Props {
  pseudo: string, 
  setPseudo: string, 
}
export const Home: FC<Props> = ({navigation}) => {

  const [pseudo, setPseudo] = useState("");

  const testZer = (): void => {
    console.log(pseudo);
  };

  const onReset = (): void => {
    setPseudo("");
    console.log(pseudo);
  };
  return (
    <PseudoContext.Provider value={{pseudo, setPseudo}}> 
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
            onChangeText={(value) => setPseudo(value)}
            value={pseudo}
          />

          <Button
            title="CLICK"
            onPress={testZer}
            onPressIn={() => navigation.navigate("Starship")}
          />

          <Button title="RESET" onPress={onReset} />
        </ImageBackground>
      </View>
    </PseudoContext.Provider>
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
  input: {
    // backgroundColor: 'red',
  },
  inputText: {
    color: "white",
  },
});
