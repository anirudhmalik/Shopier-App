import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppText from "../AppText";
import colors from "../../config/colors";
import SubCategoryCard from "./SubCategoryCard";
import ProductCard from "./ProductCard";

function SubCategoryList({ categoryId, navigation, shopId, label }) {
  return (
    <>
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        colors={[colors.green, colors.blue]}
        style={styles.container}
      >
        <View style={styles.topview}>
          <Image
            style={styles.image}
            source={require("../../assets/logo.png")}
          />
          <View style={styles.title}>
            <AppText style={styles.titleText}>{label}</AppText>
            <AppText style={styles.subTitleText}>
              Chair,Table,Almira....
            </AppText>
          </View>
        </View>
        <View style={styles.subcategorycard}>
          <SubCategoryCard
            categoryId={categoryId}
            navigation={navigation}
            shopId={shopId}
          ></SubCategoryCard>
        </View>
      </LinearGradient>

      <View style={styles.categoryCard}>
        <ProductCard
          title="Trending Products"
          productKey={"trndPrdct"}
        ></ProductCard>
      </View>

      <View style={{ height: 100, backgroundColor: colors.light }} />
    </>
  );
}

const styles = StyleSheet.create({
  categoryCard: {
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    paddingTop: 5,
  },
  image: {
    width: 80,
    height: 80,
  },
  subTitleText: {
    fontSize: 12,
    paddingLeft: 30,
    color: colors.white,
  },
  subcategorycard: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    justifyContent: "center",
    flex: 1,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "700",
    paddingLeft: 30,
    color: colors.white,
  },
  topview: {
    padding: 20,
    flexDirection: "row",
  },
});

export default SubCategoryList;
