import React, { useContext, FC, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import { PseudoContext } from "../context/pseudoContext";
import { ContextType } from "../types/contextType";
import axios from "react-native-axios";
import { Starship } from "../interface/starshipsInterface";
import { Pilots } from "../interface/pilotsInterface";
import { Card, ListItem, Divider } from "react-native-elements";

/**
 * @constant Starships is the screen where we fetch all the data, display her and passed her in props for other screens.
 * @const pseudoPlayer allow to fetch pseudo's player with context.
 * @function onScreenPilots allow to navigate to pilots screen and passed through her the data
 */

type Props = {
  navigation: any;
};

export const Starships: FC<Props> = ({ navigation }) => {
  const { pseudoPlayer } = useContext(PseudoContext) as ContextType;
  const [fetchData, setFetchData] = useState<Starship[]>([]);
  const [display, setDisplay] = useState<boolean>(false);
  const seePilots: string = "see pilots";
  const hidePilots: string = "hide pilots";
  const [nameButtonPilots, setNameButtonPilots] = useState<string>(seePilots);

  /**
   * Fetch the starships data, then for each starship, execute getAllPilotesFrom() method who fetch pilots data
   with their urls. After pilots data is fetching, remplace urls by their data (startshipItem.pilots = await pilotsData). After, put all data fetched in fetchData state. 
   */
  useEffect(() => {
    axios.get("https://swapi.dev/api/starships/").then(async (res: any) => {
      const starships = res.data.results;

      const eachStarship = await axios.all(
        starships.map(async (startshipItem: any) => {
          const pilotsData = await getAllPilotsFrom(startshipItem);
          startshipItem.pilots = await pilotsData;
          return await startshipItem;
        })
      );

      await setFetchData(eachStarship);
    });

    /**
     * axios.all allow to executing multiple urls
     */
    const getAllPilotsFrom = async (starship: any) => {
      return axios.all(
        starship.pilots.map(async (url: any) => {
          const res = await axios.get(url);
          return res.data;
        })
      );
    };
  }, []);

  const onScreenPilots = (pilot: Pilots, starship: Starship) => {
    navigation.navigate("Pilots", {
      name: pilot.name,
      height: pilot.height,
      gender: pilot.gender,
      birthYear: pilot.birth_year,
      starship: starship,
    });
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
    <ScrollView>
      <View>
        <ImageBackground
          source={require("../../assets/StarWars.png")}
          resizeMode="repeat"
          style={styles.image}
        >
          <Text style={styles.title}>STARWARSAPP</Text>
          <View style={styles.containerIntro}>
            <Text style={styles.text}>
              Hi {pseudoPlayer}, please choose your starship for your journey.
              You can see the details and pilots of each starship by clicking on
              the cards
            </Text>
          </View>
          {fetchData.map((starship: any, key: number) => (
            <TouchableOpacity onPress={() => onDisplayPilots()} key={key}>
              <Card containerStyle={styles.cardContainer}>
                <Card.Title style={styles.cardTitle}>
                  {starship.name}
                </Card.Title>
                <Divider
                  orientation="horizontal"
                  color="white"
                  style={styles.divider1}
                />
                <Text style={styles.cardText}>
                  Starship Model : {starship.model}
                </Text>
                <Text style={styles.cardText}>
                  Constructor : {starship.manufacturer}
                </Text>
                {display === true ? (
                  <View>
                    {starship.pilots.length > 0 ? (
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
                    {starship.pilots.map((pilot: any, key: number) => (
                      <TouchableOpacity
                        onPress={() => onScreenPilots(pilot, starship)}
                        key={key}
                      >
                        <ListItem containerStyle={styles.listItemContainer}>
                          <Text style={{ color: "white" }}>{pilot.name}</Text>
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
    </ScrollView>
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
    fontFamily: "Star",
    fontSize: 12,
    color: "white",
    textAlign: "center",
  },
});
