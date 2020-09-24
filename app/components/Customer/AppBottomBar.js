import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../config/colors";
function AppBottomBar({ navigation, hm_clr, hrt_clr, acc_clr }) {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[colors.green, colors.blue]}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={() => navigation.navigate("home")}>
        <View style={styles.home}>
          <MaterialCommunityIcons name="home" size={30} color={hm_clr} />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("heart")}>
        <View style={styles.heart}>
          <MaterialCommunityIcons name="heart" size={30} color={hrt_clr} />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("account")}>
        <View style={styles.account}>
          <MaterialCommunityIcons name="account" size={30} color={acc_clr} />
        </View>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 775,
    position: "absolute",
    flexDirection: "row",
    width: "100%",
    height: "7%",
    backgroundColor: colors.green,
  },
  home: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  heart: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  account: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppBottomBar;
