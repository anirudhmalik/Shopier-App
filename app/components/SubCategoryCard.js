import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import ShopSubCategoryCard from "./ShopSubCategoryCard";
import apiCache from "../utility/apiCache";

function SubCategoryCard({ navigation, categoryId }) {
  const endPoint = "/subcategorylist";
  const [items, setItems] = useState();

  useEffect(() => {
    getCategory();
  }, []);
  const getCategory = async () => {
    const data1 = await apiCache.getData(endPoint);
    setItems(data1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <ShopSubCategoryCard
          items={items}
          style={styles.subcateogry}
          navigation={navigation}
          categoryId={categoryId}
          subCategoryId={"subcategory1"}
        ></ShopSubCategoryCard>
        <ShopSubCategoryCard
          items={items}
          style={styles.subcateogry}
          navigation={navigation}
          categoryId={categoryId}
          subCategoryId={"subcategory2"}
        ></ShopSubCategoryCard>
        <ShopSubCategoryCard
          items={items}
          style={styles.subcateogry}
          navigation={navigation}
          categoryId={categoryId}
          subCategoryId={"subcategory3"}
        ></ShopSubCategoryCard>
      </View>
      <View style={styles.container2}>
        <ShopSubCategoryCard
          items={items}
          style={styles.subcateogry}
          navigation={navigation}
          categoryId={categoryId}
          subCategoryId={"subcategory4"}
        ></ShopSubCategoryCard>
        <ShopSubCategoryCard
          items={items}
          style={styles.subcateogry}
          navigation={navigation}
          categoryId={categoryId}
          subCategoryId={"subcategory5"}
        ></ShopSubCategoryCard>
        <ShopSubCategoryCard
          items={items}
          style={styles.subcateogry}
          navigation={navigation}
          categoryId={categoryId}
          subCategoryId={"subcategory6"}
        ></ShopSubCategoryCard>
      </View>
      <View style={styles.container2}>
        <ShopSubCategoryCard
          items={items}
          style={styles.subcateogry}
          navigation={navigation}
          categoryId={categoryId}
          subCategoryId={"subcategory7"}
        ></ShopSubCategoryCard>
        <ShopSubCategoryCard
          items={items}
          style={styles.subcateogry}
          navigation={navigation}
          categoryId={categoryId}
          subCategoryId={"subcategory8"}
        ></ShopSubCategoryCard>
        <ShopSubCategoryCard
          items={items}
          style={styles.subcateogry}
          navigation={navigation}
          categoryId={categoryId}
          subCategoryId={"subcategory9"}
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
