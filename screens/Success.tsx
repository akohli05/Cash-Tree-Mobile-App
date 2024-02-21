import { Text, StyleSheet, Pressable } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../App";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext } from "react";
import { ApplicationContext } from "../context/ApplicationContext";

type SuccessProps = {
  navigation: NativeStackNavigationProp<StackParamList>;
};

const Success: React.FC<SuccessProps> = ({ navigation }) => {
  const applicationContext = useContext(ApplicationContext);

  const accountType = applicationContext.state.accountType;

  const { firstName, lastName, ...data } = applicationContext.state.customer;
  console.log(firstName);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Congrats, {lastName}! {"\n"}Your {accountType} account is now open!
      </Text>
      <Pressable
        onPress={() => navigation.navigate("Home")}
        accessibilityLabel="Go to Home button"
        style={styles.goHomeButton}
      >
        <Text style={styles.buttonText}>Go back to your dashboard!</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    position: "absolute",
    left: 10,
    right: 0,
    top: 15,
    margin: "auto",
    color: "#6db369",
    fontSize: 30,
    lineHeight: 50,
  },
  goHomeButton: {
    width: "80%",
    height: 60,
    padding: 15,
    backgroundColor: "lightgrey",
    borderRadius: 20,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default Success;
