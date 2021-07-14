import React, { useState, FC, useContext } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Input } from "react-native-elements";
import { Button } from "react-native-elements/dist/buttons/Button";
import { PseudoContext } from "../context/pseudoContext";
import { ContextType } from "../types/contextType";

type Props = {
  navigation: any;
};

export const Home: FC<Props> = ({ navigation }) => {
  const { savePseudo } = useContext(PseudoContext) as ContextType;
  const [input, setInput] = useState<string>("");

  const onSendPseudo = (input: string): void => {
    savePseudo(input);
    console.log(input);
    navigation.navigate("starships");
  };

  const onResetPseudo = (): void => {
    setInput("");
    console.log(input);
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/StarWars.png")}
        resizeMode="repeat"
        style={styles.image}
      >
        <View style={styles.containerTitle}>
          <Text style={styles.text}>STARWARSAPP</Text>
        </View>
        <View style={styles.containerInput}>
          <Input
            placeholder="Enter your pseudo"
            inputContainerStyle={styles.input}
            containerStyle={styles.input}
            inputStyle={styles.inputText}
            onChangeText={(value) => setInput(value)}
            value={input}
          />
        <View style={styles.buttonContainer}>
          <Button
            title="CLICK"
            onPress={() => onSendPseudo(input)}
            style={styles.buttonClick}
            type="outline"
            raised
          />
          <Button
            title="RESET"
            onPress={onResetPseudo}
            style={styles.buttonReset}
            type="outline"
            raised
          />
        </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTitle: {
    // backgroundColor: "red",
    // marginBottom: "50%",
    flex: 1,
  },
  text: {
    fontFamily: "Star",
    color: "#CFB874",
    textAlign: "center",
    fontSize: 40,
  },
  containerInput: {
    // backgroundColor: 'green',
    // marginBottom: '50%'
    flex: 1,
    display: "flex",
  },
  image: {
    flex: 1,
    // justifyContent: "center",
    // width: "100%",
  },
  input: {
    // backgroundColor: 'red',
  },
  inputText: {
    textDecorationColor: "white",
    backgroundColor: "white",
    fontFamily: "Star",
  },
  buttonContainer: {
    display: 'flex', 
    width: '100%',
    // backgroundColor: 'yellow',
    // justifyContent: "space-between",
    alignItems: 'center'
  },
  buttonClick: {
    backgroundColor: "#cfb874",
  },
  buttonReset: {
    backgroundColor: "#e06e41",
  },
});
