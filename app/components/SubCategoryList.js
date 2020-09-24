import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppText from "./AppText";
import colors from "../config/colors";
import SubCategoryCard from "./SubCategoryCard";
import ProductCard from "./ProductCard";

function SubCategoryList({ category = "Furniture" }) {
  return (
    <>
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        colors={["#27ae60", "#1e90ff"]}
        style={styles.container}
      >
        <View style={styles.topview}>
          <Image style={styles.image} source={require("../assets/logo.png")} />
          <View style={styles.title}>
            <AppText style={styles.titleText}>{category}</AppText>
            <AppText style={styles.subTitleText}>
              Chair,Table,Almira....
            </AppText>
          </View>
        </View>
        <View style={styles.subcategorycard}>
          <SubCategoryCard></SubCategoryCard>
        </View>
      </LinearGradient>

      <View style={styles.categoryCard}>
        <ProductCard title="Trending Products"></ProductCard>
      </View>
      <View style={styles.categoryCard}>
        <ProductCard title="Best Deals"></ProductCard>
      </View>
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
    fontSize: 24,
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
