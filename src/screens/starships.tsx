import React, { useContext, FC, useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { PseudoContext } from "../context/pseudoContext";
import { ContextType } from "../types/contextType";
import StarshipRequest from "../services/starshipRequest";
import axios from "react-native-axios";
import { Starship } from "../interface/starshipsInterface";
import { CardStarships } from "../components/CardStarships";
import { Pilots } from "../interface/pilotsInterface";
import { Card, Button, ListItem } from "react-native-elements";

/**
 * @pseudoPlayer the state present in the pseudoContext
 * @returns the pseudo of the player enter in the input before
 */
export const starships = ({navigation}) => {
  const { pseudoPlayer } = useContext(PseudoContext) as ContextType;
  const [fetchData, setFetchData] = useState<Starship[]>([]);

  useEffect(() => {

    axios.get("https://swapi.dev/api/starships/").then(async (res) => {
      const vaisseauxBrut = res.data.results; // data vaisseaux
      //pour chaque vaisseau
      const vaisseaux = await axios.all(
        vaisseauxBrut.map(async (vaisseau) => {
          const pilotes = await getAllPilotesFrom(vaisseau)
          vaisseau.pilots = await pilotes;
          return await vaisseau
        })
      )
      //do something with the vaisseaux
      await setFetchData(vaisseaux);
      await console.log(vaisseaux)
    })
    
    
    const getAllPilotesFrom = async (vaisseau) => {
      // on remplace tous les url de pilots par le résultat du fetch de l'url,
      // et on retourne rien tant qu'on les a pas tous récupérés
      // (l'array de vaisseaux n'est pas modifié ici !)
      return axios.all(vaisseau.pilots.map(async (url) =>{ 
        const res = await axios.get(url);
        return res.data; // pilots data
      }))
    }
    
  }, []);

  const displayPilotName = (item: Pilots) => {
    console.log(item)
    navigation.navigate('Pilots', {name: item['name'], height: item.height, gender: item.gender})
    // navigation to a new page with item data (perso data)
  }

  return (
    <View>
      <Text>HELLO {pseudoPlayer}</Text>
      {fetchData.map((vaisseau, key) => (
        <Card>
        <Card.Title>{vaisseau.name}</Card.Title>
        <Text>{vaisseau.model}</Text>
        <Text>{vaisseau.manufacturer}</Text>
        <Text>{vaisseau.cost}</Text>
        {vaisseau.pilots.map((item) => (
          <TouchableOpacity onPress={() => displayPilotName(item)}>
            <ListItem>{item.name}</ListItem>
          </TouchableOpacity>
        ))}
      </Card>
     
    ))}
    </View>
  );
};
