import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, Button } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../App";

type LearnMoreProps = {
  navigation: NativeStackNavigationProp<StackParamList>;
};

const LearnMore: React.FC<LearnMoreProps> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Welcome to CashTree!</Text>
      <Button
        onPress={() => navigation.navigate("LearnMore")}
        title="Open an Account"
        color="#841584"
        accessibilityLabel="Open an account button"
      />
    </SafeAreaView>
  );
};

export default LearnMore;
