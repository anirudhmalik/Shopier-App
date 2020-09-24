import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import ProductList from "../components/ProductList";
import colors from "../config/colors";
import AppText from "../components/AppText";

function AppProduct({ route }) {
  return (
    <>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[colors.green, colors.blue]}
        style={styles.container}
      ></LinearGradient>
      <View style={styles.text}>
        <AppText>Products</AppText>
      </View>
      <ProductList productId={route.params.id}></ProductList>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
  },
  text: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light,
  },
});

export default AppProduct;
