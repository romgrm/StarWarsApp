import React, { useContext, FC, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { PseudoContext } from "../context/pseudoContext";
import { ContextType } from "../types/contextType";
import axios from "react-native-axios";
import { Starship } from "../interface/starshipsInterface";
import { Pilots } from "../interface/pilotsInterface";
import { Card, Button, ListItem, Divider } from "react-native-elements";

/**
 * @pseudoPlayer the state present in the pseudoContext
 * @returns the pseudo of the player enter in the input before
 */
export const Starships = ({ navigation }) => {
  const { pseudoPlayer } = useContext(PseudoContext) as ContextType;
  const [fetchData, setFetchData] = useState<Starship[]>([]);
  const [display, setDisplay] = useState<boolean>(false);
  const seePilots: string = "see pilots";
  const hidePilots: string = "hide pilots";
  const [nameButtonPilots, setNameButtonPilots] = useState<string>(seePilots);

  useEffect(() => {
    axios.get("https://swapi.dev/api/starships/").then(async (res) => {
      const vaisseauxBrut = res.data.results; // data vaisseaux
      //pour chaque vaisseau
      const vaisseaux = await axios.all(
        vaisseauxBrut.map(async (vaisseau) => {
          const pilotes = await getAllPilotesFrom(vaisseau);
          vaisseau.pilots = await pilotes;
          return await vaisseau;
        })
      );
      //do something with the vaisseaux
      await setFetchData(vaisseaux);
      await console.log(vaisseaux);
    });

    const getAllPilotesFrom = async (vaisseau) => {
      // on remplace tous les url de pilots par le résultat du fetch de l'url,
      // et on retourne rien tant qu'on les a pas tous récupérés
      // (l'array de vaisseaux n'est pas modifié ici !)
      return axios.all(
        vaisseau.pilots.map(async (url) => {
          const res = await axios.get(url);
          return res.data; // pilots data
        })
      );
    };
  }, []);

  const displayPilotName = (item: Pilots, vaisseau: Starship) => {
    console.log(item);
    navigation.navigate("Pilots", {
      name: item.name,
      height: item.height,
      gender: item.gender,
      birthYear: item.birth_year,
      vaisseau: vaisseau,
    });
    // navigation to a new page with item data (perso data)
  };

  const onDisplayPilots = () => {
    setDisplay(!display);
    if (nameButtonPilots == seePilots) {
      setNameButtonPilots(hidePilots);
    } else {
      setNameButtonPilots(seePilots);
    }
  };

  return (
    <View>
      <ImageBackground
        source={require("../../assets/StarWars.png")}
        resizeMode="repeat"
        style={styles.image}
      >
        <Text style={styles.title}>STARWARSAPP</Text>
        <View style={styles.containerIntro}>
          <Text style={styles.text}>
            Hi {pseudoPlayer}, please choose your starship for your journey. You
            can see the details and pilots of each starship by clicking on the
            cards
          </Text>
        </View>
        {/* <Button title={nameButtonPilots} onPress={() => onDisplayPilots()} /> */}
        {fetchData.map((vaisseau, key) => (
          <TouchableOpacity onPress={() => onDisplayPilots()}>
            <Card containerStyle={styles.cardContainer}>
              <Card.Title style={styles.cardTitle}>{vaisseau.name}</Card.Title>
              <Divider
                orientation="horizontal"
                color="white"
                style={styles.divider1}
              />
              <Text style={styles.cardText}>
                Starship Model : {vaisseau.model}
              </Text>
              <Text style={styles.cardText}>
                Constructor : {vaisseau.manufacturer}
              </Text>
              <Text>{vaisseau.cost}</Text>
              {display === true ? (
                <View>
                  {vaisseau.pilots.length > 0 ? (
                    <View>
                      <Text style={styles.cardText}> Select your pilot</Text>
                      <Divider
                        orientation="horizontal"
                        color="white"
                        style={styles.divider2}
                      />
                    </View>
                  ) : (
                    <View>
                      <Divider
                        orientation="horizontal"
                        color="white"
                        style={styles.divider2}
                      />
                      <Text style={styles.noPilotText}>
                        No pilots for this starship, choose an other please
                      </Text>
                    </View>
                  )}
                  {vaisseau.pilots.map((item) => (
                    <TouchableOpacity
                      onPress={() => displayPilotName(item, vaisseau)}
                    >
                      <ListItem containerStyle={styles.listItemContainer}>
                        {item.name}
                      </ListItem>
                    </TouchableOpacity>
                  ))}
                </View>
              ) : null}
            </Card>
          </TouchableOpacity>
        ))}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  title: {
    fontFamily: "Star",
    textAlign: "center",
    fontSize: 30,
    color: "#cfb874",
  },
  containerIntro: {
    display: "flex",
    margin: 20,
    padding: 10,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    borderRadius: 16,
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  cardContainer: {
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    borderRadius: 16,
  },
  listItemContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 16,
    marginTop: 5,
    marginBottom: 5,
    fontFamily: "Star",
    color: "white",
    fontSize: 12,
    justifyContent: "center",
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
  },
  divider1: {
    marginBottom: 15,
  },
  divider2: {
    marginBottom: 15,
    marginTop: 15,
  },
  noPilotText: {
    fontFamily: 'Star', 
    fontSize: 12, 
    color: 'white', 
    textAlign: 'center'
  }
});
