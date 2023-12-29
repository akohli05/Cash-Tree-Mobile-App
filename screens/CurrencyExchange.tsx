import { SetStateAction, useState } from "react";
import { Linking, TextInput, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DropDown from "../components/DropDown";
import currencyCountries from "../constants/currency";

const CurrencyExchange = () => {
  const [amount, onChangeAmount] = useState("");
  const [value, setValue] = useState("");

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setValue(event.target.value);
  };

  return (
    <SafeAreaView>
      <TextInput
        onChangeText={onChangeAmount}
        value={amount}
        placeholder="Amount"
        keyboardType="numeric"
      />

      <Text
        style={{ color: "blue" }}
        onPress={() => Linking.openURL("https://www.amdoren.com")}
      ></Text>

      <DropDown
        label="Hi"
        name="test"
        options={currencyCountries}
        onChange={handleChange}
      />
    </SafeAreaView>
  );
};

export default CurrencyExchange;
