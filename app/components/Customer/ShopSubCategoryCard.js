import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableHighlight, Image } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";
import handlerApi from "../../api/handlerApi";

function ShopSubCategoryCard({
  navigation,
  style,
  categoryId,
  subCategoryId,
  shopId,
}) {
  const [selectedItem, setSelectedItem] = useState();
  useEffect(() => {
    getSubCategory();
  }, []);
  const getSubCategory = async () => {
    const result = await handlerApi.getItem("/subcategories", {
      id: categoryId + subCategoryId,
      shopId: shopId,
    });

    if (result.data != null) {
      setSelectedItem(result.data[0]);
    }
  };

  return (
    <>
      <TouchableHighlight
        underlayColor={selectedItem ? colors.light : colors.white}
        style={[styles.container, style]}
        onPress={() => {
          selectedItem
            ? navigation.navigate("appProduct", {
                id: categoryId + subCategoryId,
                shopId: shopId,
              })
            : "";
        }}
      >
        <>
          <View style={styles.containerview}>
            <Image
              style={styles.image}
              source={
                selectedItem
                  ? require("../../assets/logo.png")
                  : require("../../assets/logo.png")
              }
            />
            <AppText style={styles.title}>
              {selectedItem ? selectedItem.label : ""}
            </AppText>
          </View>
        </>
      </TouchableHighlight>
    </>
  );
}

const styles = StyleSheet.create({
  close: {
    width: 114,
    marginTop: 2,
    position: "absolute",
  },
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
    width: 70,
    height: 70,
  },
  title: {
    paddingTop: 10,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default ShopSubCategoryCard;
