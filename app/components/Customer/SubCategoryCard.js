import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../config/colors";
import ShopSubCategoryCard from "./ShopSubCategoryCard";

function SubCategoryCard({ navigation, categoryId, shopId }) {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <ShopSubCategoryCard
          style={styles.subcateogry}
          navigation={navigation}
          categoryId={categoryId}
          subCategoryId={"subcategory1"}
          shopId={shopId}
        ></ShopSubCategoryCard>
        <ShopSubCategoryCard
          style={styles.subcateogry}
          navigation={navigation}
          categoryId={categoryId}
          subCategoryId={"subcategory2"}
          shopId={shopId}
        ></ShopSubCategoryCard>
        <ShopSubCategoryCard
          style={styles.subcateogry}
          navigation={navigation}
          categoryId={categoryId}
          subCategoryId={"subcategory3"}
          shopId={shopId}
        ></ShopSubCategoryCard>
      </View>
      <View style={styles.container2}>
        <ShopSubCategoryCard
          style={styles.subcateogry}
          navigation={navigation}
          categoryId={categoryId}
          subCategoryId={"subcategory4"}
          shopId={shopId}
        ></ShopSubCategoryCard>
        <ShopSubCategoryCard
          style={styles.subcateogry}
          navigation={navigation}
          categoryId={categoryId}
          subCategoryId={"subcategory5"}
          shopId={shopId}
        ></ShopSubCategoryCard>
        <ShopSubCategoryCard
          style={styles.subcateogry}
          navigation={navigation}
          categoryId={categoryId}
          subCategoryId={"subcategory6"}
          shopId={shopId}
        ></ShopSubCategoryCard>
      </View>
      <View style={styles.container2}>
        <ShopSubCategoryCard
          style={styles.subcateogry}
          navigation={navigation}
          categoryId={categoryId}
          subCategoryId={"subcategory7"}
          shopId={shopId}
        ></ShopSubCategoryCard>
        <ShopSubCategoryCard
          style={styles.subcateogry}
          navigation={navigation}
          categoryId={categoryId}
          subCategoryId={"subcategory8"}
          shopId={shopId}
        ></ShopSubCategoryCard>
        <ShopSubCategoryCard
          style={styles.subcateogry}
          navigation={navigation}
          categoryId={categoryId}
          subCategoryId={"subcategory9"}
          shopId={shopId}
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
