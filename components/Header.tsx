import { StyleSheet, Text } from "react-native";
import { Circle, Svg } from "react-native-svg";
import { deviceHeight, deviceWidth } from "../constants/device";

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Svg preserveAspectRatio="none" height={100} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Circle
        cx={deviceWidth / 2}
        cy={`-${898 - 100 + 2}`}
        r="898.5"
        fill="#c1dc86"
        stroke="#C5CACD"
        strokeWidth="2"
      />
    </Svg>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    marginTop: deviceHeight * 0.055,
    fontSize: 20,
  },
  container: {
    justifyContent: "center",
  },
});

export default Header;
