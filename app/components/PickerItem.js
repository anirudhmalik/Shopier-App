import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

function PickerItem({ label, onPress, uri }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={uri} />
        <AppText style={styles.text}>{label}</AppText>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
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
});

export default PickerItem;
