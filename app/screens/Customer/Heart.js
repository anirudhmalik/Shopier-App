import React from "react";
import { StyleSheet } from "react-native";
import AppBottomBar from "../../components/Customer/AppBottomBar";
import HeartTop from "../../components/Customer/HeartTop";
import HeartShopList from "../../components/Customer/HeartShopList";
import colors from "../../config/colors";

function Heart({ navigation }) {
  return (
    <>
      <HeartTop></HeartTop>
      <HeartShopList navigation={navigation}></HeartShopList>
      <AppBottomBar
        navigation={navigation}
        hm_clr={colors.black}
        hrt_clr={colors.danger}
        acc_clr={colors.black}
      ></AppBottomBar>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Heart;
