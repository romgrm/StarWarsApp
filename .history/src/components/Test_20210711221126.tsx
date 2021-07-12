import React from 'react'
import { View, Text} from 'react-native'

interface Props {
    title: string; 
}

export default function Test(): React.FC<Props>  => {
    return (
       <View>
           <Text>Hello {title}</Text>
       </View>
    )
}


