import React, { useState } from "react";
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

function ShopCategoryCard({ style, items }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  return (
    <>
      <TouchableHighlight
        underlayColor={selectedItem ? colors.light : colors.white}
        style={[styles.container, style]}
        onPress={() => {
          selectedItem ? setModalVisible(false) : setModalVisible(true);
          selectedItem ? console.log(selectedItem.label) : "";
        }}
      >
        <View style={styles.containerview}>
          <CloseIcon
            name={"window-close"}
            iconColor={colors.green}
            size={selectedItem ? 30 : 0}
            onPress={() => setSelectedItem()}
          ></CloseIcon>
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
      </TouchableHighlight>
      <Modal visible={modalVisible} animationType="slide">
        <CategoryList
          onSelectedItem={(value) => setSelectedItem(value)}
          onModalVisible={(value) => setModalVisible(value)}
          items={items}
        ></CategoryList>
      </Modal>
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
