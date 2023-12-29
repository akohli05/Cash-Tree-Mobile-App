import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, Button } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../App";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CurrencyExchange from "./CurrencyExchange";

const Tab = createBottomTabNavigator(); //tab navigavtion

type DashboardProps = {
  navigation: NativeStackNavigationProp<StackParamList>;
};

const Dashboard: React.FC<DashboardProps> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Welcome to CashTree!</Text>
      <Button
        onPress={() => navigation.navigate("LearnMore")}
        title="Open an Account"
        color="#841584"
        accessibilityLabel="Open an account button"
      />
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Dashboard} />
        <Tab.Screen name="CurrencyExchange" component={CurrencyExchange} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Dashboard;
