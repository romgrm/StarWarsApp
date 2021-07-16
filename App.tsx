import React from "react";
import { StyleSheet, SafeAreaView, ImageBackground } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./src/screens/home";
import { Starships } from "./src/screens/starships";
import { Pilots } from "./src/screens/pilots";
import { Journey } from "./src/screens/journey";
import PseudoContextProvider from "./src/context/pseudoContext";

/**
 * @constant Stack the stack of screens, from react-navigation, who allow to move screen to screen
 * @param fontsLoaded display the home screen only when fonts are loaded
 * @PseudoContextProvider is the provider of the Context
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
        <ImageBackground
          source={require("./assets/StarWars.png")}
          resizeMode="repeat"
          style={{ flex: 1 }}
        >
          <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
              <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                  headerShown: false,
                }}
              >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Starships" component={Starships} />
                <Stack.Screen name="Pilots" component={Pilots} />
                <Stack.Screen name="Journey" component={Journey} />
              </Stack.Navigator>
            </NavigationContainer>
          </SafeAreaView>
        </ImageBackground>
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
