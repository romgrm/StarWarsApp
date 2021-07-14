import React, { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Starship } from "../interface/starshipsInterface";
import { Card, Button, ListItem } from "react-native-elements";
import { Pilots } from '../interface/pilotsInterface';

export const CardStarships: FC<Starship> = (props) => {
  let displayPilot: boolean = false;
  const displayPilots = (pilots: any) => {
    if (pilots.length > 0) {
      displayPilot = true;
    }
    console.log(displayPilot);
  };

  const displayPilotName = (item: Pilots) => {
    console.log(item.name)
    props.navigation.navigate('Pilots')
    // navigation to a new page with item data (perso data)
  }
  return (
    <>
      <Card>
        <Card.Title>{props.name}</Card.Title>
        <Text>{props.model}</Text>
        <Text>{props.manufacturer}</Text>
        <Text>{props.cost}</Text>
        <Button
          title="pilots"
          onPress={() => displayPilots(props.pilots)}
          containerStyle={{ backgroundColor: "red" }}
        />
        {props.pilots.map((item) => (
          <TouchableOpacity onPress={() => displayPilotName(item)}>
            <ListItem>{item.name}</ListItem>
          </TouchableOpacity>
        ))}
      </Card>
    </>
  );
};
