import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet} from "react-native";
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
 * @PseudoContextProvider the provider of the Context
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