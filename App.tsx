import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Dashboard from "./screens/Dashboard";
import SplashScreen from "./screens/SplashScreen";
import LearnMore from "./screens/LearnMore";
import * as DefaultSplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export type StackParamList = {
  SplashScreen: undefined;
  Dashboard: undefined;
  LearnMore: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
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
