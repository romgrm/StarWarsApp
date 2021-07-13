import React, {useContext, FC} from 'react'
import { View, Text } from 'react-native';
import Pseudo from '../context/pseudoContext'


type Props = {
    pseudo: typeof Pseudo;
  };

export const starships: FC<Props> = ({ pseudo }) => {
    
    return (
        <View>
            <Text>HELLO {pseudo.di}</Text>
        </View>
    )
}
