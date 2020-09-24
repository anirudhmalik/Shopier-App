import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../components/Screen";
import Icon from "../components/Icon";
import colors from "../config/colors";
import AppText from "./AppText";

function BuilderAppBar({ shopname, address }) {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[colors.green, colors.blue]}
      style={styles.container}
    >
      <Screen style={styles.appbar}>
        <View style={styles.leftLogo}>
          <Icon name="account" size={35} borderWidth={2} />
        </View>
        <View style={styles.text}>
          <AppText style={styles.shopName}>{shopname}</AppText>
          <AppText style={styles.address}>{address}</AppText>
        </View>

        <View style={styles.rightLogo1}>
          <MaterialCommunityIcons
            name="shopping-search"
            size={35}
            color={colors.white}
          />
        </View>
        <View style={styles.rightLogo2}>
          <MaterialCommunityIcons name="cart" size={35} color={colors.white} />
        </View>
      </Screen>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  address: {
    fontSize: 10,
    color: colors.white,
  },
  appbar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  container: {
    flex: 0.11,
    paddingBottom: 5,
  },
  leftLogo: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    width: "10%",
  },
  rightLogo1: {
    justifyContent: "center",
    alignItems: "center",
    width: "10%",
    marginRight: 5,
  },
  rightLogo2: {
    justifyContent: "center",
    alignItems: "center",
    width: "10%",
    marginRight: 10,
  },
  shopName: {
    fontSize: 34,
    fontWeight: "700",
    color: colors.white,
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    width: "67%",
  },
});

export default BuilderAppBar;
