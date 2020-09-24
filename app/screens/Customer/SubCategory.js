import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import BuilderAppBar from "../../components/Customer/BuilderAppBar";
import SubCategoryList from "../../components/Customer/SubCategoryList";
import Screen from "../../components/Screen";
import AppBottomBar from "../../components/Customer/AppBottomBar";
import colors from "../../config/colors";

function SubCategory({ navigation, route }) {
  return (
    <>
      <BuilderAppBar
        navigation={navigation}
        shopId={route.params.shopId}
      ></BuilderAppBar>
      <Screen style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SubCategoryList
            categoryId={route.params.categoryId}
            shopId={route.params.shopId}
            label={route.params.label}
            navigation={navigation}
          ></SubCategoryList>
        </ScrollView>
      </Screen>
      <AppBottomBar
        navigation={navigation}
        acc_clr={colors.black}
        hm_clr={colors.black}
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
