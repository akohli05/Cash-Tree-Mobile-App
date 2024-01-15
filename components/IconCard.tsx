import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Savings from "../assets/savings.svg";
import Checking from "../assets/checking.svg";
import MoneyMarket from "../assets/moneymarket.svg";
import CD from "../assets/cd.svg";

type IconCardProps = {
  title: string;
  selectedAccountType: string;
  onPress: (value: string) => void;
};

const IconCard: React.FC<IconCardProps> = ({
  title,
  selectedAccountType,
  onPress,
}) => {
  function accountTypeIcon() {
    switch (title) {
      case "Savings":
        return <Savings style={styles.cardIcon} />;
      case "Money Market":
        return <MoneyMarket style={styles.cardIcon} />;
      case "Certificate of Deposit":
        return <CD style={styles.cardIcon} />;
      case "Checking":
        return <Checking style={styles.cardIcon} />;
    }
  }

  function getBackgroundColor() {
    if (selectedAccountType === title) {
      return { backgroundColor: "#faeeed" };
    } else {
      return { backgroundColor: "lightblue" };
    }
  }
  return (
    <Pressable id={title} onPress={() => onPress(title)}>
      <View style={[styles.card, getBackgroundColor()]}>
        <View style={styles.cardContent}>
          {accountTypeIcon()}
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    height: 90,
    width: 350,
    borderRadius: 6,
    elevation: 5,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 50,
    marginHorizontal: 4,
    marginVertical: 15,
    textAlign: "center",
  },
  cardContent: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  cardIcon: {
    height: 60,
    width: 60,
  },
  cardTitle: {
    top: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default IconCard;
