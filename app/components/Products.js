import React from "react";
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  Text,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function Products({
  onPress,
  cost = "$0",
  name = "null",
  quantity = "null",
  image,
  style,
}) {
  return (
    <TouchableHighlight
      underlayColor={colors.light}
      style={[styles.container, style]}
      onPress={onPress}
    >
      <View style={styles.containerview}>
        <Image style={styles.image} source={image} />
        <View style={styles.allText}>
          <AppText style={styles.cost}>{cost}</AppText>
          <AppText style={styles.name}>{name}</AppText>
          <AppText style={styles.quantity}>{quantity}</AppText>
        </View>
        <View style={styles.button}>
          <AppText style={styles.addText}>ADD</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  allText: {
    width: "100%",
    justifyContent: "flex-start",
  },
  addText: {
    color: colors.white,
  },
  button: {
    backgroundColor: colors.green,
    width: 90,
    padding: 2,
    marginTop: 15,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
  },
  container: {
    width: 150,
    height: 200,
    backgroundColor: colors.white,
    margin: 15,
    padding: 10,
    elevation: 5,
  },
  containerview: {
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
  },
  image: {
    width: 80,
    height: 80,
  },
  cost: {
    paddingTop: 10,
    fontWeight: "700",
    fontSize: 20,
  },
  name: {
    fontSize: 12,
    color: colors.medium,
  },
  quantity: {
    fontSize: 10,
    color: colors.medium,
  },
});

export default Products;
