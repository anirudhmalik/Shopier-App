import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../config/colors";
import ProductPicker from "./ProductPicker";
import handlerApi from "../../api/handlerApi";

function ProductAdd({ productKey, shopId }) {
  const endPoint = "/products";
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    const result = await handlerApi.getItem(endPoint, {
      id: productKey,
      shopId: shopId,
    });

    if (result.data != null) {
      setProduct(result.data);
    }
  };

  return (
    <>
      <>
        <View style={styles.list}>
          {product.map((item) => (
            <ProductPicker
              key={item.id + "product"}
              item={item}
              shopId={shopId}
            />
          ))}
        </View>
      </>
    </>
  );
}

const styles = StyleSheet.create({
  close: {
    paddingRight: 20,
    paddingTop: 5,
    position: "absolute",
  },
  container: {
    backgroundColor: colors.white,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 2,
    height: 100,
    marginHorizontal: 5,
  },
  image: {
    height: 70,
    width: 70,
  },
  list: {
    backgroundColor: colors.light,
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.light,
  },
});

export default ProductAdd;
