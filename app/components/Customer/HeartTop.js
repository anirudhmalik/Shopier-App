import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../config/colors";
import AppText from "../AppText";
function HeartTop(props) {
  return (
    <>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[colors.green, colors.blue]}
        style={styles.topMargin}
      ></LinearGradient>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[colors.green, colors.blue]}
        style={styles.containerText}
      >
        <AppText style={styles.text}>{"MY SHOPS"}</AppText>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  containerText: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginLeft: 10,
    fontSize: 20,
    color: colors.white,
  },
  topMargin: {
    height: 40,
  },
});

export default HeartTop;
