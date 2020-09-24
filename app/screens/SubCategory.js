import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import BuilderAppBar from "../components/BuilderAppBar";
import SubCategoryList from "../components/SubCategoryList";
import Screen from "../components/Screen";
import AppBottomBar from "../components/AppBottomBar";
import colors from "../config/colors";

function SubCategory({ navigation, route }) {
  return (
    <>
      <BuilderAppBar
        shopname="Malik Grocery"
        address="GolfLink,GZb"
      ></BuilderAppBar>
      <Screen style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SubCategoryList
            categoryId={route.params.categoryId}
            navigation={navigation}
          ></SubCategoryList>
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

export default SubCategory;
