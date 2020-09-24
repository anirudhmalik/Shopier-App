import React from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  FlatList,
} from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import Icon from "./Icon";
import PickerItem from "./PickerItem";

function CategoryList({ items, onModalVisible, onSelectedItem }) {
  return (
    <>
      <View style={styles.barr}>
        <AppText style={styles.title}>Select From Below</AppText>
        <TouchableWithoutFeedback onPress={() => onModalVisible(false)}>
          <View>
            <Icon name="window-close" iconColor={colors.green}></Icon>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.value.toString()}
        renderItem={({ item }) => (
          <PickerItem
            label={item.label}
            onPress={() => {
              onSelectedItem(item);
              onModalVisible(false);
            }}
            uri={require("../assets/logo.png")}
          />
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  barr: {
    backgroundColor: colors.light,
    flexDirection: "row",
    padding: 10,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  container: {
    backgroundColor: colors.white,
    flexDirection: "row",
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 10,
    margin: 5,
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    paddingLeft: 20,
    fontSize: 24,
  },
  title: {
    flex: 1,
    paddingLeft: 20,
    fontSize: 24,
    fontWeight: "700",
    padding: 5,
  },
});

export default CategoryList;
