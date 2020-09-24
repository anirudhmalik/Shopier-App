import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Story from "./Story";
import Banner from "./Banner";
import colors from "../config/colors";
import CategoryCard from "./CategoryCard";
import ProductCard from "./ProductCard";
const items = [
  {
    icon: "amazon",
    label: "Clothing",
    uri: "../components/logo.png",
    value: 1,
  },
  {
    icon: "chair-school",
    label: "Furniture",
    uri: "../components/logo.png",
    value: 2,
  },
  { icon: "basket", label: "Grocery", uri: "../components/logo.png", value: 3 },
  {
    icon: "cake",
    label: "Confectionery",
    uri: "../components/logo.png",
    value: 0,
  },
];
function BuilderAppList(props) {
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
            <Story iconName="plus" items={items}></Story>
            <Story iconName="plus" items={items}></Story>
            <Story iconName="plus" items={items}></Story>
            <Story iconName="plus" items={items}></Story>
            <Story iconName="plus" items={items}></Story>
            <Story iconName="plus" items={items}></Story>
            <Story iconName="plus" items={items}></Story>
            <Story iconName="plus" items={items}></Story>
          </View>
        </ScrollView>

        <View style={styles.banner}>
          <Banner></Banner>
        </View>
      </LinearGradient>
      <View style={styles.categoryCard}>
        <CategoryCard items={items}></CategoryCard>
      </View>
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
