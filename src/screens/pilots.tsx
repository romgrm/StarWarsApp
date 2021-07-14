import React from 'react'
import { View, Text } from 'react-native'

export default function Pilots({navigation, route}) {

    
    return (
        <View>

            <Text>Hello there {route.params.name}</Text>
            <Text>Hello there {route.params.height}</Text>
            <Text>Hello there {route.params.gender}</Text>
        </View>
    )
}
