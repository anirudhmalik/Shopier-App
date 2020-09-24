import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableHighlight, Image } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";
import handlerApi from "../../api/handlerApi";

function ShopCategoryCard({ style, navigation, id, shopId }) {
  const [selectedItem, setSelectedItem] = useState();

  useEffect(() => {
    getCategory();
  }, []);
  const getCategory = async () => {
    const result = await handlerApi.getItem("/categories", {
      id: id,
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
            ? navigation.navigate("subCategory", {
                categoryId: id,
                shopId: shopId,
                label: selectedItem.label,
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

export default ShopCategoryCard;
