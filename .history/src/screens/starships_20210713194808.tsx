import React, {useContext, FC} from 'react'
import { View, Text } from 'react-native';


type Props = {
    name: string;
  };

export const starships: FC<Props> = ({ name }) => {
    
    return (
        <View>
            <Text>HELLO {name}</Text>
        </View>
    )
}
