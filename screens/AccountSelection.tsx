import { SafeAreaView } from "react-native-safe-area-context";
import IconCard from "../components/IconCard";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AccountType } from "../context/ApplicationContext";

type AccountSelectionProps = {};

const AccountSelection: React.FC<AccountSelectionProps> = ({}) => {
  //Form and context set up
  const accountFormContext = useForm<AccountType[]>({
    /**defaultValues: {
			accountTypes: applicationContext.state?.accountTypes,
		},*/
  });

  const { handleSubmit } = accountFormContext;

  const [selectedAccountType, setAccountType] = useState("");

  const handleRadioPress = (value: string) => {
    setAccountType(value);
    console.log(value);
  };

  return (
    <SafeAreaView>
      <IconCard
        title="Savings"
        selectedAccountType={selectedAccountType}
        onPress={handleRadioPress}
      />
      <IconCard
        title="Checking"
        selectedAccountType={selectedAccountType}
        onPress={handleRadioPress}
      />
      <IconCard
        title="Money Market"
        selectedAccountType={selectedAccountType}
        onPress={handleRadioPress}
      />
      <IconCard
        title="Certificate of Deposit"
        selectedAccountType={selectedAccountType}
        onPress={handleRadioPress}
      />
    </SafeAreaView>
  );
};

export default AccountSelection;
