import React, { useEffect, useState } from "react";
import { StyleSheet, ImageBackground, Animated } from "react-native";
import { StackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

type SplashScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList>;
};

const ANIMATION_DURATION_MS = 1000;

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  const animatedSpin = new Animated.Value(0);

  const spin = animatedSpin.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const animateClokwise = Animated.timing(animatedSpin, {
    toValue: 1,
    duration: ANIMATION_DURATION_MS,
    useNativeDriver: true,
  });

  const animateCounterclockwise = Animated.timing(animatedSpin, {
    toValue: 0,
    duration: ANIMATION_DURATION_MS,
    useNativeDriver: true,
  });

  const sequence = Animated.sequence([
    animateClokwise,
    animateCounterclockwise,
  ]);

  Animated.loop(sequence).start();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={[styles.background, { backgroundColor: "#c1dc86" }]}>
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/logo.png")}
        ></ImageBackground>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 180,
    height: 180,
  },
});

export default SplashScreen;
