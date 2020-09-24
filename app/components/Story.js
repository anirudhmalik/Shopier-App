import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  Alert,
} from "react-native";
import Icon from "./Icon";
import AppText from "./AppText";
import colors from "../config/colors";
import CategoryList from "./CategoryList";
function Story({ iconName, title = "", items }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  return (
    <>
      <TouchableWithoutFeedback
        underlayColor={colors.transparent}
        onPress={() => {
          selectedItem ? setModalVisible(false) : setModalVisible(true);
          selectedItem ? console.log(selectedItem.label) : "";
        }}
        onLongPress={() => {
          selectedItem
            ? Alert.alert(
                "Delete",
                "Are you sure want to remove this category ?",
                [
                  { text: "no" },
                  { text: "yes", onPress: () => setSelectedItem() },
                ]
              )
            : "";
        }}
      >
        <View style={styles.container}>
          <Icon
            name={selectedItem ? selectedItem.icon : iconName}
            size={55}
            borderWidth={2}
          ></Icon>
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : title}
          </AppText>
        </View>
      </TouchableWithoutFeedback>
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
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15,
  },
  text: {
    color: colors.white,
    fontSize: 12,
  },
});

export default Story;
