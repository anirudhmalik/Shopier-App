import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import BuilderAppBar from "../components/BuilderAppBar";
import BuilderAppList from "../components/BuilderAppList";
import Screen from "../components/Screen";
import AppBottomBar from "../components/AppBottomBar";
import colors from "../config/colors";

function AppBuilder({ navigation }) {
  return (
    <>
      <BuilderAppBar></BuilderAppBar>
      <Screen style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <BuilderAppList navigation={navigation}></BuilderAppList>
        </ScrollView>
      </Screen>
      <AppBottomBar
        navigation={navigation}
        acc_clr={colors.black}
        hm_clr={colors.green}
        odr_clr={colors.black}
      ></AppBottomBar>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
});

export default AppBuilder;
