import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  Modal,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import CategoryList from "./CategoryList";
import CloseIcon from "./CloseIcon";

function AppShopCategoryCard({ style, title = "text", onPress }) {
  return (
    <>
      <TouchableHighlight
        underlayColor={colors.light}
        style={[styles.container, style]}
        onPress={onPress}
      >
        <View style={styles.containerview}>
          <Image style={styles.image} source={require("../assets/logo.png")} />
          <AppText style={styles.title}>{title}</AppText>
        </View>
      </TouchableHighlight>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 150,
    backgroundColor: colors.white,
    margin: 10,
    padding: 10,
    elevation: 20,
    borderRadius: 10,
    flexDirection: "row",
  },
  containerview: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  image: {
    width: 80,
    height: 80,
  },
  title: {
    paddingTop: 10,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 20,
  },
});

export default AppShopCategoryCard;
