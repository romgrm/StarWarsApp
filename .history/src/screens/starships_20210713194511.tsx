import React, {useContext, FC} from 'react'
import { View, Text } from 'react-native';


type Props = {
    pseudo: string;
  };

const starships: FC<Props> = ({ pseudo }) => {
    
    return (
        <View>
            <Text>HELLO {pseudo}</Text>
        </View>
    )
}
