import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Icon from "./Icon";
import AppText from "./AppText";
import colors from "../config/colors";
import cache from "../utility/cache";
import apiCache from "../utility/apiCache";

function Story({ navigation, id }) {
  const [selectedItem, setSelectedItem] = useState();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data1 = await apiCache.getData("/categories", id);
    const data = await cache.get(id);
    data
      ? setSelectedItem(data)
      : data1
      ? setSelectedItem(data1[0])
      : setSelectedItem();
  };
  return (
    <>
      <TouchableWithoutFeedback
        underlayColor={colors.transparent}
        onPress={() => {
          selectedItem
            ? navigation.navigate("subCategory", { categoryId: id })
            : "";
        }}
      >
        <View style={styles.container}>
          <Icon
            name={selectedItem ? selectedItem.icon : "album"}
            size={55}
            borderWidth={2}
          ></Icon>
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : ""}
          </AppText>
        </View>
      </TouchableWithoutFeedback>
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
