import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, Button, Pressable } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import App, { StackParamList } from "../App";
import AccountSelection from "./AccountSelection";
import Stepper from "react-native-stepper-ui";
import { useState } from "react";
import CustomerInformation from "./CustomerInformation";
import Terms from "./Terms";
import ApplicationProvider from "../context/ApplicationContext";

type CreateAccountFormProps = {
  navigation: NativeStackNavigationProp<StackParamList>;
};

const content = [<AccountSelection />, <CustomerInformation />, <Terms />];

const CreateAccountForm: React.FC<CreateAccountFormProps> = ({
  navigation,
}) => {
  const [active, setActive] = useState(0);
  return (
    <ApplicationProvider>
      <SafeAreaView style={styles.container}>
        <Stepper
          active={active}
          content={content}
          onBack={() => setActive((p) => p - 1)}
          onFinish={() => alert("Finish")}
          onNext={() => setActive((p) => p + 1)}
          buttonStyle={styles.stepperButtons}
          buttonTextStyle={styles.stepperButtonsText}
        />
      </SafeAreaView>
    </ApplicationProvider>
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
  stepperButtons: {
    marginVertical: 50,
    marginHorizontal: "auto",
    width: 160,
    height: 60,
    padding: 15,
    backgroundColor: "lightgrey",
    borderRadius: 20,
  },
  stepperButtonsText: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
  },
});

export default CreateAccountForm;
