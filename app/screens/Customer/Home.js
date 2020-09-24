import React from "react";
import { StyleSheet } from "react-native";
import AppTopBar from "../../components/Customer/AppTopBar";
import AppBottomBar from "../../components/Customer/AppBottomBar";
import ShopList from "../../components/Customer/ShopList";
import colors from "../../config/colors";

function Home({ navigation }) {
  return (
    <>
      <AppTopBar navigation={navigation}></AppTopBar>
      <ShopList navigation={navigation}></ShopList>
      <AppBottomBar
        navigation={navigation}
        hm_clr={colors.white}
        hrt_clr={colors.black}
        acc_clr={colors.black}
      ></AppBottomBar>
    </>
  );
}

const styles = StyleSheet.create({});

export default Home;
