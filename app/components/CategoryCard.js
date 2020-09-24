import React from "react";
import { View, StyleSheet } from "react-native";
import ShopCategoryCard from "./ShopCategoryCard";
import colors from "../config/colors";

function CategoryCard({ items, navigation, setRefresh }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.container2}>
          <ShopCategoryCard
            setRefresh={setRefresh}
            style={styles.shopcategory}
            items={items}
            navigation={navigation}
            id={"category1"}
          ></ShopCategoryCard>
          <ShopCategoryCard
            setRefresh={setRefresh}
            style={styles.shopcategory}
            items={items}
            navigation={navigation}
            id={"category2"}
          ></ShopCategoryCard>
        </View>
        <View style={styles.container2}>
          <ShopCategoryCard
            setRefresh={setRefresh}
            style={styles.shopcategory}
            items={items}
            navigation={navigation}
            id={"category3"}
          ></ShopCategoryCard>
          <ShopCategoryCard
            setRefresh={setRefresh}
            style={styles.shopcategory}
            items={items}
            navigation={navigation}
            id={"category4"}
          ></ShopCategoryCard>
        </View>
        <View style={styles.container2}>
          <ShopCategoryCard
            setRefresh={setRefresh}
            style={styles.shopcategory}
            items={items}
            navigation={navigation}
            id={"category5"}
          ></ShopCategoryCard>
          <ShopCategoryCard
            setRefresh={setRefresh}
            style={styles.shopcategory}
            items={items}
            navigation={navigation}
            id={"category6"}
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
