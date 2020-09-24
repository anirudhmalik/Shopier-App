import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import ProductList from "../../components/Customer/ProductList";
import colors from "../../config/colors";
import AppText from "../../components/AppText";
import BuilderAppBar from "../../components/Customer/BuilderAppBar";

function AppProduct({ navigation, route }) {
  return (
    <>
      <BuilderAppBar
        navigation={navigation}
        shopId={route.params.shopId}
      ></BuilderAppBar>
      <View style={styles.text}>
        <AppText>Products</AppText>
      </View>
      <ProductList
        productId={route.params.id}
        shopId={route.params.shopId}
      ></ProductList>
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
