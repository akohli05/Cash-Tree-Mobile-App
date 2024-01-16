import { useState } from "react";
import {
  Linking,
  TextInput,
  Text,
  StyleSheet,
  View,
  Pressable,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import currencyCountries from "../constants/currency";
import { SelectList } from "react-native-dropdown-select-list";
import axios from "axios";
import { FontAwesome } from "@expo/vector-icons";

const CurrencyExchange = () => {
  const [amount, onChangeAmount] = useState("");
  const [fromSelectedValue, setFromSelected] = useState("");
  const [toSelectedValue, setToSelected] = useState("");
  const [responseAmount, setResponseAmount] = useState("");

  const baseUrl = "https://www.amdoren.com/api/currency.php";
  const api = "yourapikey";

  const currencyConvert = () => {
    axios({
      method: "get",
      url: `${baseUrl}?api_key=${api}&from=${fromSelectedValue}&to=${toSelectedValue}&amount=${amount}`,
    }).then((response) => {
      const amountConverted = response.data.amount;
      setResponseAmount(amountConverted.toFixed(4));
    });
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${baseUrl}?api_key=${api}&from=${fromSelectedValue}&to=${toSelectedValue}&amount=${amount}`,
      );
      const responseJson = await response.json();
      console.log(responseJson.data);
      setResponseAmount(responseJson.data);
    } catch (error) {
      console.log(error);
    }
  };

  const validation = () => {
    if (fromSelectedValue === "" || toSelectedValue === "" || amount === "") {
      console.log("nope");
      Alert.alert("Error!", "Please make sure you have filled all fields.", [
        { text: "OK" },
      ]);
    } else currencyConvert();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.currencyText}>Currency Converter</Text>

      <TextInput
        onChangeText={onChangeAmount}
        value={amount}
        placeholder="Amount*"
        inputMode="numeric"
        style={styles.amountField}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 100,
        }}
      >
        <SelectList
          setSelected={(val: string) => setFromSelected(val)}
          data={currencyCountries}
          placeholder="From*"
          boxStyles={styles.box}
          inputStyles={styles.selectionText}
          dropdownStyles={styles.dropdown}
          dropdownTextStyles={styles.dropdownTextItem}
        />

        <SelectList
          setSelected={(val: string) => setToSelected(val)}
          data={currencyCountries}
          placeholder="To*"
          boxStyles={styles.box}
          inputStyles={styles.selectionText}
          dropdownStyles={styles.dropdown}
          dropdownTextStyles={styles.dropdownTextItem}
        />
      </View>
      <Pressable
        onPress={validation}
        accessibilityLabel="Convert button"
        style={styles.currencyConvertButton}
      >
        <FontAwesome name="check" size={30} color="black" />
      </Pressable>

      {responseAmount && (
        <View style={styles.convertedCurrencyBox}>
          <Text style={styles.convertedCurrencyBoxText}>{responseAmount}</Text>
        </View>
      )}
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
  currencyText: {
    position: "absolute",
    left: 10,
    right: 0,
    top: 15,
    margin: "auto",
    color: "#6db369",
    fontSize: 30,
  },
  amountField: {
    width: 250,
    borderBottomColor: "darkgrey",
    borderBottomWidth: 5,
    fontSize: 30,
  },
  box: {
    width: 150,
    margin: 10,
  },
  dropdown: {
    width: 150,
    marginHorizontal: 10,
  },
  selectionText: {
    fontSize: 20,
  },
  dropdownTextItem: {
    fontSize: 20,
  },
  currencyConvertButton: {
    width: 60,
    height: 60,
    padding: 15,
    backgroundColor: "lightgrey",
    borderRadius: 30,
  },
  convertedCurrencyBox: {
    marginVertical: 50,
    minWidth: 200,
    minHeight: 50,
    backgroundColor: "lightblue",
    borderRadius: 20,
    padding: 15,
  },
  convertedCurrencyBoxText: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default CurrencyExchange;
