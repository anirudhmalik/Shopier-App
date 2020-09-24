import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";
import Products from "./Products";
import apiCache from "../../utility/apiCache";

function ProductCard({ title, productKey }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    const data1 = await apiCache.getData("/productlist");
    setProduct(data1);
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <AppText style={styles.text}>{title}</AppText>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.productlist}>
            {product.map((item) => (
              <>
                <Products
                  key={item.value}
                  item={item}
                  image={require("../../assets/logo.png")}
                  onPress={() => console.log(item.label)}
                />
              </>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  AddCard: {
    width: 150,
    height: 200,
    backgroundColor: colors.white,
    margin: 15,
    padding: 10,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    justifyContent: "center",
    width: "95%",
    marginVertical: 20,
    paddingVertical: 10,
  },
  close: {
    paddingRight: 20,
    paddingTop: 15,
    position: "absolute",
    elevation: 10,
  },
  productlist: {
    flexDirection: "row",
  },
  text: {
    paddingLeft: 10,
  },
  text1: {
    backgroundColor: colors.light,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
});

export default ProductCard;
