import React from "react";
import { View, StyleSheet } from "react-native";
import ShopCategoryCard from "./ShopCategoryCard";
import colors from "../config/colors";

function CategoryCard({ items }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.container2}>
          <ShopCategoryCard
            style={styles.shopcategory}
            items={items}
          ></ShopCategoryCard>
          <ShopCategoryCard
            style={styles.shopcategory}
            items={items}
          ></ShopCategoryCard>
        </View>
        <View style={styles.container2}>
          <ShopCategoryCard
            style={styles.shopcategory}
            items={items}
          ></ShopCategoryCard>
          <ShopCategoryCard
            style={styles.shopcategory}
            items={items}
          ></ShopCategoryCard>
        </View>
        <View style={styles.container2}>
          <ShopCategoryCard
            style={styles.shopcategory}
            items={items}
          ></ShopCategoryCard>
          <ShopCategoryCard
            style={styles.shopcategory}
            items={items}
          ></ShopCategoryCard>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    marginVertical: 20,
    paddingVertical: 10,
  },
  container2: {
    flexDirection: "row",
  },
  shopcategory: {
    width: 160,
    backgroundColor: colors.light,
    elevation: 10,
  },
});

export default CategoryCard;
