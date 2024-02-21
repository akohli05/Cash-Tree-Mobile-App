import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  termsAndConditions,
  termsAndConditions1,
} from "../constants/termsAndConditions";
import Checkbox from "expo-checkbox";
import { StackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";

type TermsProps = {
  navigation: NativeStackNavigationProp<StackParamList>;
};

const Terms: React.FC<TermsProps> = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const handleCheckbox = () => {
    setChecked(!checked);
    setDisabled(!disabled);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.termsAndConditionsText}>
        {termsAndConditions}
        {termsAndConditions1}
      </Text>
      <View style={styles.checkboxContainer}>
        <Text style={styles.agreeText}>
          Do you agree to these terms and conditions?
        </Text>
        <Checkbox
          style={styles.checkbox}
          value={checked}
          onValueChange={handleCheckbox}
        />
      </View>
      <Pressable
        disabled={disabled}
        onPress={() => navigation.navigate("SubmitSplash")}
        accessibilityLabel="Submit button"
        style={styles.submitButton}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  termsAndConditionsText: {
    width: 350,
    margin: 10,
    color: "black",
    fontSize: 20,
    lineHeight: 30,
  },
  agreeText: {
    color: "#6db369",
    fontSize: 25,
  },
  checkboxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    width: 350,
    marginVertical: 10,
  },
  checkbox: {},
  submitButton: {
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
