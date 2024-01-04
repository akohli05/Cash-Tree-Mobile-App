import { Text, StyleSheet, Button } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../App";
import { SafeAreaView } from "react-native-safe-area-context";

type DashboardProps = {
  navigation: NativeStackNavigationProp<StackParamList>;
};

const Dashboard: React.FC<DashboardProps> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>Welcome to CashTree!</Text>
      <Button
        onPress={() => navigation.navigate("LearnMore")}
        title="Open an Account"
        accessibilityLabel="Open an account button"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#6db369",
    fontSize: 20,
  },
});

export default Dashboard;
