import React, { useState, useEffect, FC, useContext } from "react";
import { ContextType } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Input } from "react-native-elements";
import { Button } from "react-native-elements/dist/buttons/Button";
import { PseudoContext } from "../context/pseudoContext";
import Starships from '../screens/starships'; 

interface Props {
  pseudo: string, 
  setPseudo: string, 
  navigation: any,
}
export const Home: FC<Props> = ({navigation} : Props) => {

  const { savePseudo } = useContext(PseudoContext);
  const [input, setInput] = useState<string>(""); 

  const testZer = (): void => {
    console.log(input);
  };

  const onReset = (): void => {
    setInput("");
    console.log(pseudo);
  };
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
            onChangeText={(value) => setInput(value)}
            value={input}
          />

          <Button
            title="CLICK"
            onPress={testZer}
            onPressIn={() => navigation.navigate("Starship")}
          />

          <Button title="RESET" onPress={onReset} />
          
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
  input: {
    // backgroundColor: 'red',
  },
  inputText: {
    color: "white",
  },
});
