import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Icon from "../Icon";
import AppText from "../AppText";
import colors from "../../config/colors";
import cache from "../../utility/cache";
import handlerApi from "../../api/handlerApi";

function Story({ navigation, id, shopId }) {
  const [selectedItem, setSelectedItem] = useState();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
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
      <TouchableWithoutFeedback
        underlayColor={colors.transparent}
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
