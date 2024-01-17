import { Control, Controller } from "react-hook-form";
import { StyleSheet, TextInput, View, Text } from "react-native";

type TextFieldProps = {
  placeholder: string;
  inputMode: string;
  label: string;
  control: Control<any, any>;
};

const TextField: React.FC<TextFieldProps> = ({
  control,
  placeholder,
  inputMode,
  label,
}) => {
  return (
    <Controller
      control={control}
      name={label}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, value } }) => (
        <View style={styles.textFieldContainer}>
          <Text style={styles.label}>{label}</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            inputMode={"text" || inputMode}
          />
        </View>
      )}
    />
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
