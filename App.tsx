import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Dashboard from "./screens/Dashboard";
import SplashScreen from "./screens/SplashScreen";
import LearnMore from "./screens/LearnMore";
import CurrencyExchange from "./screens/CurrencyExchange";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type StackParamList = {
  SplashScreen: undefined;
  Home: undefined;
  LearnMore: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator(); //tab navigavtion

function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="CurrencyExchange" component={CurrencyExchange} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerBackVisible: false }}
        />
        <Stack.Screen name="LearnMore" component={LearnMore} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
