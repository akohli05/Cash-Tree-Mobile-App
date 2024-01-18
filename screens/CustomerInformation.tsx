import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, StyleSheet, Text } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";
import TextField from "../components/TextField";
import { useForm } from "react-hook-form";
import {
  AccountType,
  ApplicationContext,
  Customer,
} from "../context/ApplicationContext";
import { useContext } from "react";

type CustomerInformationProps = {};

const CustomerInformation: React.FC<CustomerInformationProps> = ({}) => {
  const navigation: NativeStackNavigationProp<StackParamList> = useNavigation();

  const applicationContext = useContext(ApplicationContext);

  const onSave = (customer: Customer) => {
    //applicationContext.updateCustomer(customer);

    applicationContext.updateCustomer(customer);

    //navigate to Terms
    navigation.navigate("Terms");
  };

  //Form and context set up
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Customer>({
    defaultValues: {
      firstName: applicationContext.state.customer?.firstName,
      lastName: applicationContext.state.customer?.lastName,
      birthDate: applicationContext.state.customer?.birthDate,
      socialSecurity: applicationContext.state.customer?.socialSecurity,
      email: applicationContext.state.customer?.email,
      personalPhone: applicationContext.state.customer?.personalPhone,
      address: applicationContext.state.customer?.address,
      city: applicationContext.state.customer?.city,
      state: applicationContext.state.customer?.state,
    },
  });

  console.log("sdfsfsdf", JSON.stringify(errors.firstName));
  return (
    <SafeAreaView style={styles.container}>
      <TextField
        inputName="firstName"
        control={control}
        error={errors.firstName}
        placeholder="first name"
        inputMode="text"
        label="First Name*"
      />
      <TextField
        inputName="lastName"
        control={control}
        error={errors.lastName}
        placeholder="last name"
        inputMode="text"
        label="Last Name*"
      />
      <TextField
        inputName="birthDate"
        control={control}
        error={errors.birthDate}
        placeholder="MM/DD/YYYY"
        inputMode="text"
        label="Birth Date*"
      />
      <TextField
        inputName="socialSecurity"
        control={control}
        error={errors.socialSecurity}
        placeholder="***-**-***"
        inputMode="numeric"
        label="Social Security*"
      />
      <TextField
        inputName="email"
        control={control}
        error={errors.email}
        placeholder="random@sample.com"
        inputMode="email"
        label="Email*"
      />
      <TextField
        inputName="personalPhone"
        control={control}
        error={errors.personalPhone}
        placeholder="704-704-7044"
        inputMode="tel"
        label="Phone*"
      />
      <TextField
        inputName="address"
        control={control}
        error={errors.address}
        placeholder="address"
        inputMode="text"
        label="Home Address*"
      />
      <TextField
        inputName="city"
        control={control}
        error={errors.city}
        placeholder="city"
        inputMode="text"
        label="City*"
      />
      <TextField
        inputName="state"
        control={control}
        error={errors.state}
        placeholder="state"
        inputMode="text"
        label="State*"
      />

      <Pressable
        onPress={handleSubmit((data) => onSave(data))}
        accessibilityLabel="Next button"
        style={[styles.nextButton, isValid && { backgroundColor: "#d8bbfc" }]}
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
  bankInformationText: {
    width: 350,
    position: "absolute",
    top: 15,
    margin: 10,
    color: "#6db369",
    fontSize: 20,
  },
  inputField: {
    width: 250,
    borderBottomColor: "darkgrey",
    borderBottomWidth: 5,
    fontSize: 20,
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

export default CustomerInformation;
