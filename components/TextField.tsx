import { StyleSheet, TextInput, View, Text } from "react-native";

type TextFieldProps = {
  placeholder: string;
  value: string;
  onChangeText: React.Dispatch<React.SetStateAction<string>>;
  inputMode: string;
  label: string;
};

const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  value,
  onChangeText,
  inputMode,
  label,
}) => {
  return (
    <View style={styles.textFieldContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        inputMode={"text" || inputMode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textFieldContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    height: "5%",
    borderBottomColor: "darkgrey",
    borderBottomWidth: 2,
    marginHorizontal: 20,
    marginVertical: 15,
  },
  label: { fontSize: 20 },
  input: { fontSize: 20 },
});

export default TextField;
