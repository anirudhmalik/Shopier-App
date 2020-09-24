import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import ShopSubCategoryCard from "./ShopSubCategoryCard";
const items = [
  {
    label: "Table",
    uri: "../components/logo.png",
    value: 1,
  },
  {
    label: "Chair",
    uri: "../components/logo.png",
    value: 2,
  },
  { label: "Soffa", uri: "../components/logo.png", value: 3 },
  {
    label: "Almira",
    uri: "../components/logo.png",
    value: 0,
  },
];

function SubCategoryCard({ onPress, style }) {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <ShopSubCategoryCard
          items={items}
          style={styles.subcateogry}
        ></ShopSubCategoryCard>
        <ShopSubCategoryCard
          items={items}
          style={styles.subcateogry}
        ></ShopSubCategoryCard>
        <ShopSubCategoryCard
          items={items}
          style={styles.subcateogry}
        ></ShopSubCategoryCard>
      </View>
      <View style={styles.container2}>
        <ShopSubCategoryCard
          items={items}
          style={styles.subcateogry}
        ></ShopSubCategoryCard>
        <ShopSubCategoryCard
          items={items}
          style={styles.subcateogry}
        ></ShopSubCategoryCard>
        <ShopSubCategoryCard
          items={items}
          style={styles.subcateogry}
        ></ShopSubCategoryCard>
      </View>
      <View style={styles.container2}>
        <ShopSubCategoryCard
          items={items}
          style={styles.subcateogry}
        ></ShopSubCategoryCard>
        <ShopSubCategoryCard
          items={items}
          style={styles.subcateogry}
        ></ShopSubCategoryCard>
        <ShopSubCategoryCard
          items={items}
          style={styles.subcateogry}
        ></ShopSubCategoryCard>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.transparent,
    borderRadius: 10,
    width: "95%",
    marginVertical: 20,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  container2: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  subcateogry: {
    elevation: 5,
    width: "33%",
    height: 120,
    margin: 1,
  },
});

export default SubCategoryCard;
