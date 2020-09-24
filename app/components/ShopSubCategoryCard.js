import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  Modal,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import CategoryList from "./CategoryList";
import CloseIcon from "./CloseIcon";
import cache from "../utility/cache";
import apiCache from "../utility/apiCache";

function ShopSubCategoryCard({
  navigation,
  style,
  items,
  categoryId,
  subCategoryId,
}) {
  const endPoint = "/subcategories";
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  useEffect(() => {
    getSubCategory();
  }, []);
  const getSubCategory = async () => {
    //const data = await cache.get(categoryId + subCategoryId);
    //setSelectedItem(data);
    const data = await apiCache.getData(
      "/subcategories",
      categoryId + subCategoryId
    ); //fetching data from server
    if (data != null) {
      setSelectedItem(data[0]);
      //await cache.store(categoryId + subCategoryId, data[0]); //cache data locally
    }
  };
  const setSubCategory = async (value) => {
    await cache.store(categoryId + subCategoryId, value);
    const data = await cache.get(categoryId + subCategoryId);
    setSelectedItem(data);
    await apiCache.post(endPoint, categoryId + subCategoryId, {
      itemId: value.id,
    });
  };
  const removeSubCategory = async () => {
    await cache.removeBranch(categoryId + subCategoryId);
    await apiCache.deleteData(endPoint, categoryId + subCategoryId);
  };
  return (
    <>
      <TouchableHighlight
        underlayColor={selectedItem ? colors.light : colors.white}
        style={[styles.container, style]}
        onPress={() => {
          selectedItem ? setModalVisible(false) : setModalVisible(true);
          selectedItem
            ? navigation.navigate("appProduct", {
                id: categoryId + subCategoryId,
              })
            : "";
        }}
      >
        <>
          <View style={styles.close}>
            <CloseIcon
              name={"window-close"}
              iconColor={colors.green}
              size={selectedItem ? 35 : 0}
              onPress={() => {
                removeSubCategory();
                setSelectedItem();
              }}
            ></CloseIcon>
          </View>
          <View style={styles.containerview}>
            <Image
              style={styles.image}
              source={
                selectedItem
                  ? require("../assets/logo.png")
                  : require("../assets/add.png")
              }
            />
            <AppText style={styles.title}>
              {selectedItem ? selectedItem.label : "Add SubCategories"}
            </AppText>
          </View>
        </>
      </TouchableHighlight>
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <CategoryList
          onSelectedItem={(value) => setSubCategory(value)}
          onModalVisible={(value) => setModalVisible(value)}
          items={items}
        ></CategoryList>
      </Modal>
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
    fontSize: 14,
  },
});

export default ShopSubCategoryCard;
