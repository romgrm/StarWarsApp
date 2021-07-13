import React, {useContext, FC} from 'react'
import { View, Text } from 'react-native';
import Pseudo from '../context/pseudoContext';
import { PseudoContext } from '../context/pseudoContext';
import { ContextType } from '../types/contextType';


const { pseudo } = useContext(PseudoContext) as ContextType;

export const starships = (({ pseudo })) => {
    
    return (
        <View>
            <Text>HELLO {pseudoPerson}</Text>
        </View>
    )
}
