import React, { useContext, FC } from "react";
import { View, Text } from "react-native";
import Pseudo from "../context/pseudoContext";
import { PseudoContext } from "../context/pseudoContext";
import { ContextType } from "../types/contextType";

/**
 * 
 * @returns the pseudo of the player enter 
 */
export const starships = () => {
  const { pseudoPlayer } = useContext(PseudoContext) as ContextType;

  return (
    <View>
      <Text>HELLO {pseudoPlayer}</Text>
    </View>
  );
};
