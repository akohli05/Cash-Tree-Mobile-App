import { Control, Controller, FieldError } from "react-hook-form";
import { StyleSheet, TextInput, View, Text } from "react-native";

type TextFieldProps = {
  placeholder: string;
  inputMode: string;
  inputName: string;
  label: string;
  control: Control<any, any>;
  error?: FieldError;
};

const TextField: React.FC<TextFieldProps> = ({
  control,
  placeholder,
  inputMode,
  inputName,
  label,
  error,
}) => {
  return (
    <Controller
      control={control}
      name={inputName}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, value } }) => (
        <View
          style={[
            styles.textFieldContainer,
            error && { borderBottomColor: "darkred" },
          ]}
        >
          <Text style={[styles.label, error && { color: "darkred" }]}>
            {label}
          </Text>
          <TextInput
            style={[styles.input]}
            onChangeText={onChange}
            value={value}
            placeholder={error ? "" : placeholder}
            inputMode={"text" || inputMode}
          />
          {error && (
            <Text style={{ color: "darkred", fontSize: 15 }}>Required!</Text>
          )}
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
