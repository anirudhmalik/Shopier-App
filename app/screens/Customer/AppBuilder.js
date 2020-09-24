import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import BuilderAppBar from "../../components/Customer/BuilderAppBar";
import AppBottomBar from "../../components/Customer/AppBottomBar";
import colors from "../../config/colors";
import Screen from "../../components/Screen";
import BuilderAppList from "../../components/Customer/BuilderAppList";

function AppBuilder({ navigation, route }) {
  return (
    <>
      <BuilderAppBar
        shopId={route.params.shopId}
        navigation={navigation}
      ></BuilderAppBar>
      <Screen style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <BuilderAppList
            shopId={route.params.shopId}
            navigation={navigation}
          ></BuilderAppList>
        </ScrollView>
      </Screen>
      <AppBottomBar
        navigation={navigation}
        hm_clr={colors.black}
        hrt_clr={colors.black}
        acc_clr={colors.black}
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
