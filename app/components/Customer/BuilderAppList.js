import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Story from "./Story";
import CategoryCard from "./CategoryCard";
import colors from "../../config/colors";
import Banner from "./Banner";
import ProductCard from "./ProductCard";
function BuilderAppList({ navigation, shopId }) {
  return (
    <>
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        colors={[colors.green, colors.blue]}
        style={styles.container}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: "row" }}>
            <Story
              navigation={navigation}
              id={"category1"}
              shopId={shopId}
            ></Story>
            <Story
              navigation={navigation}
              id={"category2"}
              shopId={shopId}
            ></Story>
            <Story
              navigation={navigation}
              id={"category3"}
              shopId={shopId}
            ></Story>
            <Story
              navigation={navigation}
              id={"category4"}
              shopId={shopId}
            ></Story>
            <Story
              navigation={navigation}
              id={"category5"}
              shopId={shopId}
            ></Story>
            <Story
              navigation={navigation}
              id={"category6"}
              shopId={shopId}
            ></Story>
          </View>
        </ScrollView>
        <View style={styles.banner}>
          <Banner shopId={shopId}></Banner>
        </View>
      </LinearGradient>
      <View style={styles.categoryCard}>
        <CategoryCard navigation={navigation} shopId={shopId}></CategoryCard>
      </View>
      <View style={styles.categoryCard}>
        <ProductCard
          title="Trending Products"
          productKey={"trndPrdct"}
        ></ProductCard>
      </View>
      <View style={{ height: 50, backgroundColor: colors.light }} />
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  categoryCard: {
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    paddingTop: 5,
  },
});

export default BuilderAppList;
