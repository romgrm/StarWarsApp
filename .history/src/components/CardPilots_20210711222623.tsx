import React, { FC, ReactElement } from "react";
import { View, Text } from "react-native";

interface Props {
  title: string;
}

export const CardPilots: FC<Props> = (props) => {
  return (
    <View>
      <Text>Hello {props.title}</Text>
    </View>
  );
};
