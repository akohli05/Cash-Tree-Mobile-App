import { Text, StyleSheet, Pressable } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../App";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

type DashboardProps = {
  navigation: NativeStackNavigationProp<StackParamList>;
};

const Dashboard: React.FC<DashboardProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to CashTree!</Text>
      <Pressable
        onPress={() => navigation.navigate("LearnMore")}
        accessibilityLabel="Open an account button"
        style={styles.openAccountButton}
      >
        <Text style={styles.buttonText}>{"Open an Account"}</Text>
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
  title: {
    position: "absolute",
    left: 10,
    right: 0,
    top: 15,
    margin: "auto",
    color: "#6db369",
    fontSize: 30,
  },
  openAccountButton: {
    width: "60%",
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

export default Dashboard;
