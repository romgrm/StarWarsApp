import React, { FC } from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { Card, Divider, Button } from "react-native-elements";

/**
 * @const Journey is the last screen who display the starship & the pilot selected
 * @param navigation and @param route have the same roles as the pilots screen.
 * @function onDisplayHomeScreen allows you to return to the home screen.
 */

type Props = {
  navigation: any;
  route: any;
};

export const Journey: FC<Props> = ({ navigation, route }) => {
  const { params } = route;

  const onDisplayHomeScreen = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/StarWars.png")}
        resizeMode="repeat"
        style={styles.image}
      >
        <Text style={styles.title}>STARWARSAPP</Text>
        <Text>{params.pilotName}</Text>
        <Text>{params.starshipName}</Text>
        <Card containerStyle={styles.cardContainer}>
          <Card.Title style={styles.cardTitle}>
            {params.starshipName}
          </Card.Title>
          <Text style={styles.cardSubTitle}>{params.starshipModel}</Text>
          <Divider
            orientation="horizontal"
            color="white"
            style={styles.divider2}
          />
          <Image
            source={require("../../assets/starship.png")}
            style={styles.starshipImg}
          />
          <Text style={styles.cardText}>
            So, you and {params.pilotName} are about to experience a great
            adventure with this good old {params.starshipName}, have a nice trip
            !
          </Text>
        </Card>
        <View style={styles.buttonContainer}>
          <Button
            title="Restart"
            onPress={() => onDisplayHomeScreen()}
            type="outline"
            raised
            containerStyle={{ marginBottom: 10, width: "50%" }}
            titleStyle={{ color: "white" }}
            buttonStyle={{ borderColor: "none", backgroundColor: "#cfb874" }}
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
  cardSubTitle: {
    color: "#cfb874",
    fontFamily: "Star",
    fontSize: 12,
    textAlign: "center",
  },
  cardText: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 15,
    marginTop: 20,
  },
  cardContainer: {
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    borderRadius: 16,
  },
  divider2: {
    marginBottom: 30,
    marginTop: 25,
  },
  starshipImg: {
    width: 300,
    height: 200,
  },
  buttonContainer: {
    display: "flex",
    width: "100%",
    padding: 20,
    alignItems: "center",
  },
});
