import "react-native-gesture-handler";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, StyleSheet } from "react-native";
import Dashboard from "./screens/Dashboard";
import SplashScreen from "./screens/SplashScreen";
import LearnMore from "./screens/LearnMore";
import CurrencyExchange from "./screens/CurrencyExchange";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Header from "./components/Header";
import { deviceHeight } from "./constants/device";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import AccountSelection from "./screens/AccountSelection";
import CreateAccountForm from "./screens/CreateAccountForm";
import CustomerInformation from "./screens/CustomerInformation";
import Terms from "./screens/Terms";

export type StackParamList = {
  SplashScreen: undefined;
  Home: undefined;
  LearnMore: undefined;
  CreateAccountForm: undefined;
  AccountSelection: undefined;
  CustomerInformation: undefined;
  Terms: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator(); //tab navigavtion

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#c1dc86",
          height: deviceHeight * 0.08,
          paddingBottom: 5,
          paddingTop: 7,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          borderLeftWidth: 0.2,
          borderRightWidth: 0.2,
          overflow: "hidden",
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "black",
        tabBarLabelStyle: {
          fontSize: 20,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color="black" size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="CurrencyExchange"
        component={CurrencyExchange}
        options={{
          tabBarLabel: "Exchange",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="exchange" size={33} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: () => <Header title="Dashboard" />,
          }}
        />
        <Stack.Screen
          name="LearnMore"
          component={LearnMore}
          options={{ header: () => <Header title="Learn More" /> }}
        />
        <Stack.Screen
          name="CreateAccountForm"
          component={CreateAccountForm}
          options={{ header: () => <Header title="New Account Form" /> }}
        />
        <Stack.Screen
          name="AccountSelection"
          component={AccountSelection}
          options={{ header: () => <Header title="Account Selection" /> }}
        />
        <Stack.Screen
          name="CustomerInformation"
          component={CustomerInformation}
          options={{ header: () => <Header title="Basics About You" /> }}
        />
        <Stack.Screen
          name="Terms"
          component={Terms}
          options={{ header: () => <Header title="Terms" /> }}
        />
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
  tabBar: {
    backgroundColor: "#c1dc86",
    height: deviceHeight * 0.08,
    paddingBottom: 5,
    paddingTop: 7,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderLeftWidth: 0.2,
    borderRightWidth: 0.2,
    position: "absolute",
    overflow: "hidden",
  },
});
