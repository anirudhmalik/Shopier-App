import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import ShopCategoryCard from "../components/ShopCategoryCard";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import colors from "../config/colors";
const items = [
  {
    icon: "amazon",
    label: "Clothing",
    uri: "../components/logo.png",
    value: 1,
  },
  {
    icon: "chair-school",
    label: "Furniture",
    uri: "../components/logo.png",
    value: 2,
  },
  { icon: "basket", label: "Grocery", uri: "../components/logo.png", value: 3 },
  {
    icon: "cake",
    label: "Confectionery",
    uri: "../components/logo.png",
    value: 0,
  },
];

function ShopCategory(props) {
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      imageStyle={styles.imagestyle}
      source={require("../assets/background.png")}
    >
      <Screen style={styles.screen}>
        <View style={styles.containerText}>
          <AppText style={styles.appText}>Your Shop Category :</AppText>
        </View>
        <View style={styles.container}>
          <ShopCategoryCard items={items}></ShopCategoryCard>
          <ShopCategoryCard items={items}></ShopCategoryCard>
        </View>
        <View style={styles.container}>
          <ShopCategoryCard items={items}></ShopCategoryCard>
          <ShopCategoryCard items={items}></ShopCategoryCard>
        </View>
        <View style={styles.container}>
          <ShopCategoryCard items={items}></ShopCategoryCard>
          <ShopCategoryCard items={items}></ShopCategoryCard>
        </View>
      </Screen>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  appText: {
    color: colors.green,
    fontSize: 30,
    fontWeight: "700",
  },
  background: {
    flex: 1,
  },
  container: {
    justifyContent: "center",
    flexDirection: "row",
  },
  containerText: {
    paddingBottom: 50,
  },
  imagestyle: {
    width: "100%",
    height: "100%",
  },
  screen: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ShopCategory;
