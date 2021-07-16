import React, { useState, FC, useContext } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Input, Button } from "react-native-elements";
import { PseudoContext } from "../context/pseudoContext";
import { ContextType } from "../types/contextType";

/**
 * @constant Home is the home screen who fetch the player's pseudo and allow us to go to starships screen.
 * @function onSendPseudo allow us to send the pseudo and navigate to starships screen. 
 * @function onResetPseudo allow us to reset the pseudo. 
 */

type Props = {
  navigation: any;
};

export const Home: FC<Props> = ({ navigation }) => {
  const { savePseudo } = useContext(PseudoContext) as ContextType;
  const [input, setInput] = useState<string>("");

  const onSendPseudo = (input: string): void => {
    if (input === '') {
      alert("Please enter your pseudo");
    } else {
      savePseudo(input);
      navigation.navigate("Starships");
      onResetPseudo();
    }
  };

  const onResetPseudo = (): void => {
    setInput('');
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
            inputStyle={styles.inputText}
            onChangeText={(value) => setInput(value)}
            value={input}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Let's go"
              onPress={() => onSendPseudo(input)}
              type="outline"
              raised
              containerStyle={{ marginBottom: 10, width: "50%", marginTop: 10 }}
              titleStyle={{ color: "white" }}
              buttonStyle={{ borderColor: "none", backgroundColor: "#cfb874" }}
            />
            <Button
              title="Reset"
              onPress={onResetPseudo}
              type="outline"
              raised
              containerStyle={{ marginBottom: 10, width: "50%" }}
              titleStyle={{ color: "white" }}
              buttonStyle={{ borderColor: "none", backgroundColor: "#e06e41" }}
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
    flex: 1,
  },
  text: {
    fontFamily: "Star",
    color: "#CFB874",
    textAlign: "center",
    fontSize: 40,
  },
  containerInput: {
    flex: 1,
    display: "flex",
    marginBottom: 200,
  },
  image: {
    flex: 1,
  },
  inputText: {
    textDecorationColor: "white",
    backgroundColor: "white",
    fontFamily: "Star",
  },
  buttonContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
  },
});
