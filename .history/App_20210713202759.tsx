import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-elements/dist/card/Card";
import axios from "react-native-axios";
import { Test } from "./src/components/Test";
import { CardPilots } from "./src/components/CardPilots";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./src/screens/home";
import { starships } from "./src/screens/starships";
import PseudoContextProvider from "./src/context/pseudoContext";


/**
 * @Stack the stack of screens, from react-navigation, who allow to move screen to screen
 * @fontsLoaded display the home screen only when fonts are loaded
 * @PseudoContext
 */
const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Star: require("./assets/fonts/Starjedi.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <PseudoContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="starships" component={starships} />
          </Stack.Navigator>
        </NavigationContainer>
      </PseudoContextProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Star",
  },
});
