import React from "react";
import { View, StyleSheet } from "react-native";
import ShopCategoryCard from "./ShopCategoryCard";
import colors from "../../config/colors";

function CategoryCard({ navigation, shopId }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.container2}>
          <ShopCategoryCard
            style={styles.shopcategory}
            navigation={navigation}
            id={"category1"}
            shopId={shopId}
          ></ShopCategoryCard>
          <ShopCategoryCard
            style={styles.shopcategory}
            navigation={navigation}
            id={"category2"}
            shopId={shopId}
          ></ShopCategoryCard>
        </View>
        <View style={styles.container2}>
          <ShopCategoryCard
            style={styles.shopcategory}
            navigation={navigation}
            id={"category3"}
            shopId={shopId}
          ></ShopCategoryCard>
          <ShopCategoryCard
            style={styles.shopcategory}
            navigation={navigation}
            id={"category4"}
            shopId={shopId}
          ></ShopCategoryCard>
        </View>
        <View style={styles.container2}>
          <ShopCategoryCard
            style={styles.shopcategory}
            navigation={navigation}
            id={"category5"}
            shopId={shopId}
          ></ShopCategoryCard>
          <ShopCategoryCard
            style={styles.shopcategory}
            navigation={navigation}
            id={"category6"}
            shopId={shopId}
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
