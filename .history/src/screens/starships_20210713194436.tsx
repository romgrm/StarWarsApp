import React, {useContext, FC} from 'react'
import { View, Text } from 'react-native';
import { PseudoContext } from "../context/pseudoContext";

type Props = {
    pseudo: string;
  };

const starships: FC<Props> = ({ pseudo}) {

    const { pseudo } = useContext(PseudoContext); 
    return (
        <View>
            <Text>HELLO {pseudo}</Text>
        </View>
    )
}
