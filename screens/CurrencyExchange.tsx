import { useState } from "react";
import {
  Linking,
  TextInput,
  Text,
  StyleSheet,
  View,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  Platform,
  AlertStatic,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import currencyCountries from "../constants/currency";
import { SelectList } from "react-native-dropdown-select-list";
import axios from "axios";
import { FontAwesome } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const CurrencyExchange = () => {
  const [amount, onChangeAmount] = useState("");
  const [fromSelectedValue, setFromSelected] = useState("");
  const [toSelectedValue, setToSelected] = useState("");
  const [responseAmount, setResponseAmount] = useState("");

  const baseUrl = "https://www.amdoren.com/api/currency.php";
  const api = "yourapikey"; ///Note - amorden has an api limit for the free account

  const currencyConvert = () => {
    axios({
      method: "get",
      url: `${baseUrl}?api_key=${api}&from=${fromSelectedValue}&to=${toSelectedValue}&amount=${amount}`,
    }).then((response) => {
      console.log(response.data);
      if (response.data.error) {
        Alert.alert("Error!", "Something went wrong. Please try again .");
      }
      const amountConverted = response.data.amount;
      setResponseAmount(amountConverted.toFixed(2));
    });
  };

  const validation = () => {
    if (fromSelectedValue === "" || toSelectedValue === "" || amount === "") {
      console.log("nope");
      Alert.alert("Error!", "Please make sure you have filled all fields.");
    } else currencyConvert();
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.outerContainer}>
      <SafeAreaView style={styles.innerContainer}>
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

        {responseAmount ? (
          <View style={styles.convertedCurrencyBox}>
            <Text style={styles.convertedCurrencyBoxText}>
              {responseAmount}
            </Text>
          </View>
        ) : null}
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
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
