import React from 'react'
import { View, Text } from 'react-native'
import { Card } from 'react-native-elements'

export default function Pilots({navigation, route}) {

    
    return (
        <View>
            {console.log(route)}
            <Text>Hello there {route.params.name}</Text>
            <Text>Hello there {route.params.height}</Text>
            <Text>Hello there {route.params.gender}</Text>
                <Card>
                    <Card.Title>{route.params.vaisseau.name}</Card.Title>
                </Card>
        </View>
    )
}
