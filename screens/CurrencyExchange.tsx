import { SetStateAction, useState } from "react";
import { TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DropDown from "../components/DropDown";
import currencyCountries from "../constants/currency";

const CurrencyExchange = () => {
  const [amount, onChangeAmount] = useState("");
  const [value, setValue] = useState("fruit");

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

      <a href="https://www.amdoren.com">Amdoren</a>
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
