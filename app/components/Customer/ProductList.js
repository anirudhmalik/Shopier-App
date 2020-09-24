import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import colors from "../../config/colors";
import ProductAdd from "./ProductAdd";

function ProductList({ productId, shopId }) {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProductAdd
          productKey={productId + "product"}
          shopId={shopId}
        ></ProductAdd>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
});

export default ProductList;
