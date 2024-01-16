import { SafeAreaView } from "react-native-safe-area-context";
import IconCard from "../components/IconCard";
import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { AccountType, ApplicationContext } from "../context/ApplicationContext";
import { StackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Pressable, View, Text, StyleSheet } from "react-native";

type AccountSelectionProps = {};

const AccountSelection: React.FC<AccountSelectionProps> = ({}) => {
  const navigation: NativeStackNavigationProp<StackParamList> = useNavigation();

  //import useContext save the new object here
  const applicationContext = useContext(ApplicationContext);

  //Handles the on submit action
  const onSave = (accountTypes: AccountType[]) => {
    applicationContext.updateAccountTypes(accountTypes);

    //navigate to CustomerInformation screen
    navigation.navigate("CustomerInformation");
  };

  const accountFormContext = useForm<AccountType[]>({});

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = accountFormContext;

  return (
    <SafeAreaView>
      <Controller
        control={control}
        name={""}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <View>
            <IconCard
              title="Savings"
              value={value}
              onPress={() => {
                onChange("Savings");
              }}
            />
            <IconCard
              title="Checking"
              value={value}
              onPress={() => {
                onChange("Checkings");
              }}
            />
            <IconCard
              title="Money Market"
              value={value}
              onPress={() => {
                onChange("Money Market");
              }}
            />
            <IconCard
              title="Certificate of Deposit"
              value={value}
              onPress={() => {
                onChange("Certificate of Deposit");
              }}
            />
          </View>
        )}
      />

      <Pressable
        onPress={handleSubmit((data) => onSave(data))}
        accessibilityLabel="Next button"
        style={styles.nextButton}
      >
        <Text style={styles.buttonText}>Next</Text>
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
  nextButton: {
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

export default AccountSelection;
