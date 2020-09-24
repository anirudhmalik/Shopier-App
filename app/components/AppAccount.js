import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "./Icon";
import colors from "../config/colors";
import AppText from "./AppText";

function AppAccount(props) {
  return (
    <>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[colors.green, colors.blue]}
        style={styles.topMargin}
      ></LinearGradient>
      <View style={styles.container}>
        <View style={styles.imageBorder}>
          <Image
            style={styles.image}
            source={require("../assets/profile_pic.jpg")}
          ></Image>
        </View>
        <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
          <AppText style={styles.title}>Malik Sweets</AppText>
          <AppText style={styles.subTitle}>GolfLinks, GZB</AppText>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 190,
    height: 190,
    borderRadius: 100,
  },
  imageBorder: {
    backgroundColor: "green",
    borderColor: colors.blue,
    borderWidth: 10,
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 20,
    fontSize: 32,
    fontWeight: "700",
  },
  topMargin: {
    height: 40,
  },
  subTitle: {
    fontSize: 12,
    color: colors.medium,
  },
});

export default AppAccount;
