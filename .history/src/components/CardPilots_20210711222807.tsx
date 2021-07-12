import React, { FC, ReactElement } from "react";
import { View, Text } from "react-native";
import { Pilots } from "../interface/pilotsInterface";


export const CardPilots: FC<Pilots> = (props) => {
  return (
    <View>
      <Text>Hello {props.name}</Text>
      <Text>Your height is {props.</Text>
    </View>
  );
};
