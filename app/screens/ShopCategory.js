import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import AppShopCategoryCard from "../components/AppShopCategoryCard";
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

function ShopCategory({ navigation }) {
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
          <AppShopCategoryCard
            title="Ration"
            onPress={() => navigation.navigate("Location")}
          ></AppShopCategoryCard>
          <AppShopCategoryCard
            title="Sweets"
            onPress={() => navigation.navigate("Location")}
          ></AppShopCategoryCard>
        </View>
        <View style={styles.container}>
          <AppShopCategoryCard
            title="Crockery"
            onPress={() => navigation.navigate("Location")}
          ></AppShopCategoryCard>
          <AppShopCategoryCard
            title="Medical"
            onPress={() => navigation.navigate("Location")}
          ></AppShopCategoryCard>
        </View>
        <View style={styles.container}>
          <AppShopCategoryCard
            title="Clothing"
            onPress={() => navigation.navigate("Register")}
          ></AppShopCategoryCard>
          <AppShopCategoryCard
            title="Mobile"
            onPress={() => navigation.navigate("Register")}
          ></AppShopCategoryCard>
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
