import React, {useContext, FC} from 'react'
import { View, Text } from 'react-native';
import Pseudo from '../context/pseudoContext'


type Props = {
    name: type of Pseudo;
  };

export const starships: FC<Props> = ({ name }) => {
    
    return (
        <View>
            <Text>HELLO {name}</Text>
        </View>
    )
}
