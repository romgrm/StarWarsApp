import React, { FC } from "react";
import { View, Text } from "react-native";
import { Starship } from "../interface/starshipsInterface";
import { Card } from "react-native-elements";

export const CardStarships: FC<Starship> = (props) => {
  return (
    <>
        
      <Card >
        <Card.Title>{props.name}</Card.Title>
        <Text>{props.model}</Text>
        <Text>{props.manufacturer}</Text>
        <Text>{props.cost}</Text>
        <Text>{props.pilots}</Text>
      </Card>
    </>
  );
};
