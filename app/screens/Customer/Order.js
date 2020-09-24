import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../config/colors";
import AppText from "../../components/AppText";
import OrderProductList from "../../components/Customer/OrderProductList";

function Order({ route, navigation }) {
  return (
    <>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[colors.green, colors.blue]}
        style={styles.topMargin}
      ></LinearGradient>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[colors.green, colors.blue]}
        style={styles.containerText}
      >
        <AppText style={styles.text}>{"My Cart"}</AppText>
      </LinearGradient>
      <OrderProductList
        shopId={route.params.shopId}
        navigation={navigation}
      ></OrderProductList>
    </>
  );
}

const styles = StyleSheet.create({
  containerText: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginLeft: 10,
    fontSize: 20,
    color: colors.white,
  },
  topMargin: {
    height: 40,
  },
});

export default Order;
