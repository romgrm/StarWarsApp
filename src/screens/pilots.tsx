import React, { FC } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { Card, Divider, Button } from "react-native-elements";
import { Pilots as PilotInterface } from "../interface/pilotsInterface";
import { Starship } from "../interface/starshipsInterface";

/**
 * @constant Pilots is the screen where we fetch and display data's pilot. We also passed the starship data for the last screen.
 * @function onDisplayFinal allow us to navigate to journey screen and passed some data.
 * @function onDisplayStarships allow us to go back, on starships screen.
 * @param navigation and @param route are part of the react navigation library, it's destructuring to navigate between screens and recover data.
 */

type Props = {
  navigation: any;
  route: any;
};

export const Pilots: FC<Props> = ({ navigation, route }) => {
  const { params } = route;
  const { starship } = params;

  const onDisplayFinal = (params: PilotInterface, starship: Starship) => {
    navigation.navigate("Journey", {
      pilotName: params.name,
      starshipName: starship.name,
      starshipModel: starship.model,
    });
  };
  const onDisplayStarships = () => {
    navigation.goBack();
  };
  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/StarWars.png")}
        resizeMode="repeat"
        style={styles.image}
      >
        <Text style={styles.title}>STARWARSAPP</Text>

        <Card containerStyle={styles.cardContainer}>
          <Card.Title style={styles.cardTitle}>{params.name}</Card.Title>
          <Divider
            orientation="horizontal"
            color="white"
            style={styles.divider2}
          />
          <Text style={styles.cardText}>Height : {params.height}</Text>
          <Text style={styles.cardText}>Gender : {params.gender}</Text>
          <Text style={styles.cardText}>Birth Year : {params.birthYear}</Text>
        </Card>
        <View style={styles.buttonContainer}>
          <Button
            title="Choose this pilot"
            onPress={() => onDisplayFinal(params, starship)}
            type="outline"
            raised
            containerStyle={{ marginBottom: 10, width: "50%" }}
            titleStyle={{ color: "white" }}
            buttonStyle={{ borderColor: "none", backgroundColor: "#cfb874" }}
          />
          <Button
            title="Choose an other starship"
            onPress={() => onDisplayStarships()}
            type="outline"
            raised
            containerStyle={{ marginBottom: 10, width: "50%" }}
            titleStyle={{ color: "white" }}
            buttonStyle={{ borderColor: "none", backgroundColor: "#e06e41" }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  title: {
    fontFamily: "Star",
    textAlign: "center",
    fontSize: 30,
    color: "#cfb874",
  },
  cardTitle: {
    color: "#cfb874",
    fontFamily: "Star",
    fontSize: 15,
  },
  cardText: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 5,
  },
  cardContainer: {
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    borderRadius: 16,
  },
  divider2: {
    marginBottom: 15,
    marginTop: 5,
  },
  buttonContainer: {
    display: "flex",
    width: "100%",
    padding: 20,
    alignItems: "center",
  },
});
