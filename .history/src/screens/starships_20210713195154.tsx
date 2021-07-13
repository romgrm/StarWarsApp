import React, {useContext, FC} from 'react'
import { View, Text } from 'react-native';
import Pseudo from '../context/pseudoContext'


type Props = {
    pseudo: typeof Pseudo;
  };

export const starships: FC<Props> = ({ name }) => {
    
    return (
        <View>
            <Text>HELLO {name.name}</Text>
        </View>
    )
}
