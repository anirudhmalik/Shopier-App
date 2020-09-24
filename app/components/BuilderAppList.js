import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Story from "./Story";
import Banner from "./Banner";
import colors from "../config/colors";
import CategoryCard from "./CategoryCard";
import ProductCard from "./ProductCard";
import apiCache from "../utility/apiCache";

function BuilderAppList({ navigation }) {
  const endPoint = "/categorylist";
  const [refresh, setRefresh] = useState(true);
  const [items, setItems] = useState();

  useEffect(() => {
    getCategory();
  }, []);
  const getCategory = async () => {
    const data1 = await apiCache.getData(endPoint);
    setItems(data1);
  };

  return (
    <>
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        colors={[colors.green, colors.blue]}
        style={styles.container}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {refresh ? (
            <View style={{ flexDirection: "row" }}>
              <Story navigation={navigation} id={"category1"}></Story>
              <Story navigation={navigation} id={"category2"}></Story>
              <Story navigation={navigation} id={"category3"}></Story>
              <Story navigation={navigation} id={"category4"}></Story>
              <Story navigation={navigation} id={"category5"}></Story>
              <Story navigation={navigation} id={"category6"}></Story>
            </View>
          ) : null}
        </ScrollView>
        <View style={styles.banner}>
          <Banner></Banner>
        </View>
      </LinearGradient>
      <View style={styles.categoryCard}>
        <CategoryCard
          items={items}
          navigation={navigation}
          setRefresh={(value) => setRefresh(value)}
        ></CategoryCard>
      </View>
      <View style={styles.categoryCard}>
        <ProductCard
          title="Trending Products"
          productKey={"trndPrdct"}
        ></ProductCard>
      </View>
      <View style={styles.categoryCard}>
        <ProductCard title="Best Deals" productKey={"bstDls"}></ProductCard>
      </View>
      <View style={{ height: 100, backgroundColor: colors.light }} />
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
