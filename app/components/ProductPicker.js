import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

function ProductPicker({ item, onPress, uri }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={uri} />
        <View>
          <AppText style={styles.text}>{item.label}</AppText>
          <AppText style={styles.text2}>{item.quantity}</AppText>
        </View>
        <View style={styles.leftView}>
          <View style={styles.cost}>
            <AppText style={styles.text3}>{item.cost}</AppText>
          </View>
          <View style={styles.button}>
            <AppText style={styles.addText}>ADD</AppText>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: colors.white,
    flexDirection: "row",
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 10,
    margin: 2,
    height: 100,
    marginHorizontal: 5,
  },
  cost: {
    width: 90,
    padding: 2,
    marginTop: 15,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
  },
  leftView: {
    paddingRight: 20,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  text: {
    paddingLeft: 20,
    fontSize: 24,
  },
  text2: {
    paddingLeft: 20,
    fontSize: 16,
    color: colors.medium,
  },
  text3: {
    fontWeight: "700",
  },
});

export default ProductPicker;
