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

function ShopCategoryCard({ style, items, navigation, id, setRefresh }) {
  const endPoint = "/categories";
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  useEffect(() => {
    getCategory();
  }, []);
  const getCategory = async () => {
    //const data1 = await cache.get(id);
    //setSelectedItem(data1);
    const data = await apiCache.getData("/categories", id); //fetching data from server
    if (data != null) {
      setSelectedItem(data[0]);
      await cache.store(id, data[0]); //cache data locally
    }
  };
  const setCategory = async (key, object) => {
    await cache.store(key, object);
    const data = await cache.get(key);
    setSelectedItem(data);
    setRefresh(false);
    setRefresh(true);
    await apiCache.post(endPoint, key, { itemId: object.id });
  };
  const removeCategory = async (key) => {
    await cache.removeBranch(key);
    setRefresh(false);
    setRefresh(true);
    await apiCache.deleteData(endPoint, key);
  };
  return (
    <>
      <TouchableHighlight
        underlayColor={selectedItem ? colors.light : colors.white}
        style={[styles.container, style]}
        onPress={() => {
          selectedItem ? setModalVisible(false) : setModalVisible(true);
          selectedItem
            ? navigation.navigate("subCategory", { categoryId: id })
            : "";
        }}
      >
        <>
          <View style={styles.close}>
            <CloseIcon
              name={"window-close"}
              iconColor={colors.green}
              size={selectedItem ? 40 : 0}
              onPress={() => {
                setSelectedItem();
                removeCategory(id);
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
              {selectedItem ? selectedItem.label : "Add Categories"}
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
          onSelectedItem={(value) => setCategory(id, value)}
          onModalVisible={(value) => setModalVisible(value)}
          items={items}
        ></CategoryList>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  close: {
    width: 155,
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
