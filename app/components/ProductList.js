import React, { useState, useRef } from "react";
import { View, StyleSheet, FlatList, Button, ScrollView } from "react-native";

import colors from "../config/colors";
import ProductAdd from "./ProductAdd";

function ProductList({ productId }) {
  const scrollView = useRef();

  return (
    <>
      <ScrollView
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
        showsVerticalScrollIndicator={false}
      >
        <ProductAdd productKey={productId + "product"}></ProductAdd>
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
