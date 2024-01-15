import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../App";
import Card from "../components/Card";
import {
  learnMoreCardContent1,
  learnMoreCardContent2,
  learnMoreCardContent3,
} from "../constants/learnMoreCardContent";

type LearnMoreProps = {
  navigation: NativeStackNavigationProp<StackParamList>;
};

const LearnMore: React.FC<LearnMoreProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.bankInformationText}>
        CashTree is here to always assist their customers and provide the best
        experience. CashTree is the perfect bank for you and here our reasons
        why.
      </Text>
      <Card title="1. The Right Account" description={learnMoreCardContent1} />
      <Card title="2. No Hidden Fees" description={learnMoreCardContent2} />
      <Card
        title="3. Pick Your Convenience"
        description={learnMoreCardContent3}
      />
      <Pressable
        onPress={() => navigation.navigate("CreateAccountForm")}
        accessibilityLabel="Create Account button"
        style={styles.createAccountButton}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  bankInformationText: {
    width: 350,
    position: "absolute",
    top: 15,
    margin: 10,
    color: "#6db369",
    fontSize: 20,
  },
  createAccountButton: {
    width: "60%",
    height: 60,
    padding: 15,
    marginTop: 15,
    backgroundColor: "lightgrey",
    borderRadius: 20,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default LearnMore;
