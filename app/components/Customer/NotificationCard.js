import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import handlerApi from "../../api/handlerApi";
import colors from "../../config/colors";
import AppText from "../AppText";
import OrderDetails from "./OrderDetails";

function NotificationCard({ shopId }) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    const result = await handlerApi.getItem("orderlist", {
      shopId: shopId,
      length: false,
      status: true,
    });
    setProduct([]);
    if (result.data != null) {
      console.log(result.data);
      setProduct(result.data);
    } else {
      setProduct([]);
    }
  };
  return (
    <View style={styles.list}>
      {product.length > 0 ? (
        <OrderDetails
          product={product}
          shopId={shopId}
          status={true}
        ></OrderDetails>
      ) : (
        <>
          <AppText style={styles.text}>{"Sorry, No Order Placed"}</AppText>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  list: {
    backgroundColor: colors.light,
  },
  text: {
    fontSize: 14,
    marginTop: 50,
    marginBottom: 80,
    alignSelf: "center",
    color: colors.medium,
  },
});

export default NotificationCard;
