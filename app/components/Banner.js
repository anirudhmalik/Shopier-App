import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function Banner(props) {
  return (
    <View style={styles.container}>
      <AppText style={styles.header}>Delivery in Two Hours</AppText>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={require("../assets/logo.png")}
        ></Image>
      </View>
      <View style={styles.text}>
        <AppText style={styles.subText1}>Open time : 8:00am.</AppText>
        <AppText style={styles.subText2}>
          Free deliver on order above $50.
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 250,
    backgroundColor: colors.white,
    elevation: 20,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    paddingBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  imageView: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: 150,
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  subText1: {
    fontSize: 13,
  },
  subText2: {
    fontSize: 13,
    paddingBottom: 5,
  },
  text: {
    paddingTop: 20,
  },
});

export default Banner;
