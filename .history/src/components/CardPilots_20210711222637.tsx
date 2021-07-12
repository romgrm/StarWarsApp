import React, { FC, ReactElement } from "react";
import { View, Text } from "react-native";
import { Pilots } from "../interface/pilotsInterface";


export const CardPilots: FC<Props> = (props) => {
  return (
    <View>
      <Text>Hello {props.title}</Text>
    </View>
  );
};
