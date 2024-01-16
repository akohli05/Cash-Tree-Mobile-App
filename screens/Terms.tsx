import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text } from "react-native";
import { termsAndConditions } from "../constants/termsAndConditions";

type TermsProps = {};

const Terms: React.FC<TermsProps> = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.bankInformationText}>{termsAndConditions}</Text>
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
    height: "auto",
    position: "absolute",
    margin: 10,
    color: "#6db369",
    fontSize: 20,
  },
  continueButton: {
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

export default Terms;
