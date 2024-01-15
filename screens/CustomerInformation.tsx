import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, TextInput } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import TextField from "../components/TextField";

type CustomerInformationProps = {};

const CustomerInformation: React.FC<CustomerInformationProps> = ({}) => {
  const navigation: NativeStackNavigationProp<StackParamList> = useNavigation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [socialSecurity, setSocialSecurity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <TextField
        onChangeText={setFirstName}
        value={firstName}
        placeholder="first name"
        inputMode="text"
        label="First Name*"
      />
      <TextField
        onChangeText={setLastName}
        value={lastName}
        placeholder="last name"
        inputMode="text"
        label="Last Name*"
      />
      <TextField
        onChangeText={setBirthDate}
        value={birthDate}
        placeholder="MM/DD/YYYY"
        inputMode="text"
        label="Birth Date*"
      />
      <TextField
        onChangeText={setSocialSecurity}
        value={socialSecurity}
        placeholder="***-**-***"
        inputMode="numeric"
        label="Social Security*"
      />
      <TextField
        onChangeText={setEmail}
        value={email}
        placeholder="random@sample.com"
        inputMode="email"
        label="Email*"
      />
      <TextField
        onChangeText={setPhone}
        value={phone}
        placeholder="704-704-7044"
        inputMode="tel"
        label="Phone*"
      />
      <TextField
        onChangeText={setHomeAddress}
        value={homeAddress}
        placeholder="address"
        inputMode="text"
        label="Home Address*"
      />
      <TextField
        onChangeText={setCity}
        value={city}
        placeholder="city"
        inputMode="text"
        label="City*"
      />
      <TextField
        onChangeText={setState}
        value={state}
        placeholder="state"
        inputMode="text"
        label="State*"
      />
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
});

export default CustomerInformation;
