import React, {useContext, FC} from 'react'
import { View, Text } from 'react-native';
import Pseudo from '../context/pseudoContext';
import { PseudoContext } from '../context/pseudoContext';


const { } = useContext(PseudoContext)

export const starships: FC<Props> = ({ pseudoPerson }) => {
    
    return (
        <View>
            <Text>HELLO {pseudoPerson}</Text>
        </View>
    )
}
