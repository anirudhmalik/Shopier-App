import React from "react";
import { View, StyleSheet } from "react-native";
import NotificationList from "../../components/Customer/NotificationList";

import { LinearGradient } from "expo-linear-gradient";
import AppText from "../../components/AppText";
import colors from "../../config/colors";
function Notification({ route }) {
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
        <AppText style={styles.text}>{"My Orders"}</AppText>
      </LinearGradient>
      <NotificationList shopId={route.params.shopId}></NotificationList>
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

export default Notification;
