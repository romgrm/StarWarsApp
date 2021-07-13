import React, {useContext} from 'react'
import { View, Text } from 'react-native';
import { PseudoContext } from "../context/pseudoContext";

type Props = {
    pseudo: string;
  };

export default function starships() {

    const { pseudo } = useContext(PseudoContext); 
    return (
        <View>
            <Text>HELLO {pseudo}</Text>
        </View>
    )
}
