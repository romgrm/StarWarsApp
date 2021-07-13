import React, {useContext} from 'react'
import { View, Text } from 'react-native';
import { PseudoContext } from "../context/pseudoContext";

type Props = {
    todo: ITodo;
    updateTodo: (id: number) => void;
  };
  
export default function starships() {

    const { pseudo } = useContext(PseudoContext); 
    return (
        <View>
            <Text>HELLO {pseudo}</Text>
        </View>
    )
}
