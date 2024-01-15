import { View, StyleSheet, Text } from "react-native";

type CardProps = {
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 120,
    width: 350,
    borderRadius: 6,
    elevation: 5,
    backgroundColor: "white",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 50,
    marginHorizontal: 4,
    marginVertical: 15,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 3,
  },
  cardDescription: {
    fontSize: 15,
  },
});

export default Card;
