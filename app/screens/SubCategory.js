import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import BuilderAppBar from "../components/BuilderAppBar";
import SubCategoryList from "../components/SubCategoryList";
import Screen from "../components/Screen";

function SubCategory({ category }) {
  return (
    <>
      <BuilderAppBar
        shopname="Malik Grocery"
        address="GolfLink,GZb"
      ></BuilderAppBar>
      <Screen style={styles.container}>
        <ScrollView>
          <SubCategoryList category={category}></SubCategoryList>
        </ScrollView>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
});

export default SubCategory;
