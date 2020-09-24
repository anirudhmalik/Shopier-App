import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Products from "./Products";

function ProductCard({ title }) {
  return (
    <View style={styles.container}>
      <View>
        <AppText style={styles.text}>{title}</AppText>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.productlist}>
          <Products
            cost="$200"
            name="Jacket"
            quantity="1pc"
            image={require("../assets/logo.png")}
            onPress={() => console.log("Ration")}
          ></Products>
          <Products
            cost="$80"
            name="Dal"
            quantity="1pc"
            image={require("../assets/logo.png")}
            onPress={() => console.log("Ration")}
          ></Products>
          <Products
            cost="$20"
            name="namkeen"
            quantity="1pc"
            image={require("../assets/logo.png")}
            onPress={() => console.log("Ration")}
          ></Products>
          <Products
            cost="$100"
            name="nahker"
            quantity="1pc"
            image={require("../assets/logo.png")}
            onPress={() => console.log("Ration")}
          ></Products>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    justifyContent: "center",
    width: "95%",
    marginVertical: 20,
    paddingVertical: 10,
  },
  productlist: {
    flexDirection: "row",
  },
  text: {
    paddingLeft: 10,
  },
});

export default ProductCard;
