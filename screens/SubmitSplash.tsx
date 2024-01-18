import { StackActions, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import LottieView from "lottie-react-native";
import { useEffect, useRef } from "react";
import { StyleSheet } from "react-native";
import { StackParamList } from "../App";
import { Animated, Easing } from "react-native";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const SubmitSplash = () => {
  const navigation: NativeStackNavigationProp<StackParamList> = useNavigation();

  const animationProgress = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animationProgress.current, {
          toValue: 1,
          duration: 3000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]),
      {
        iterations: 3,
      },
    ).start();
    setTimeout(() => {
      navigation.dispatch(StackActions.replace("Success"));
    }, 9000);
  }, []);

  return (
    /* <LottieView
      style={{
        flex: 1,
        backgroundColor: "#c1dc86",
      }}
      source={require("../assets/coins.json")}
      autoPlay={true}
      loop={true}
    /> */
    <AnimatedLottieView
      style={{
        flex: 1,
        backgroundColor: "#c1dc86",
      }}
      source={require("../assets/coins.json")}
      progress={animationProgress.current}
      loop={true}
      autoPlay={true}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c1dc86",
  },
});

export default SubmitSplash;
