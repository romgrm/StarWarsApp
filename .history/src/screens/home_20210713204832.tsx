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

  const onResetPseudo$ = (): void => {
    setInput("");
    console.log(input);
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

        <Button title="CLICK" onPress={() => onSendPseudo(input)} />

        <Button title="RESET" onPress={onResetPseudo$} />
      </ImageBackground>
    </View>
  );
};

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
