import React from "react";
import { View, StyleSheet } from "react-native";
import AppAccount from "../components/AppAccount";
import AppText from "../components/AppText";
import colors from "../config/colors";
import Icon from "../components/Icon";
import AppBottomBar from "../components/AppBottomBar";

function Account(props) {
  return (
    <>
      <View style={styles.container}>
        <AppAccount></AppAccount>
        <View style={styles.container}>
          <AppText style={styles.text}>Your Orders</AppText>
          <AppText style={styles.text}>Edit Profile</AppText>
          <AppText style={styles.text}>Settings</AppText>
          <AppText style={styles.text}>Security</AppText>
          <AppText style={styles.text}>Privacy</AppText>
        </View>
        <View style={styles.logout}>
          <AppText style={{ color: colors.medium }}>Logout</AppText>
          <Icon name="power" iconColor={colors.medium}></Icon>
        </View>
      </View>
      <AppBottomBar
        acc_clr={colors.green}
        odr_clr={colors.black}
        hm_clr={colors.black}
      ></AppBottomBar>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  logout: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    marginLeft: 20,
    marginVertical: 10,
    color: colors.medium,
  },
});

export default Account;
