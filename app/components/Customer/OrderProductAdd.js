import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../config/colors";
import OrderProductPicker from "./OrderProductPicker";
import handlerApi from "../../api/handlerApi";
import AppText from "../AppText";
import OrderDetails from "./OrderDetails";

function OrderProductAdd({ shopId, setData }) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    const result = await handlerApi.getItem("orderlist", {
      shopId: shopId,
      length: false,
      status: false,
    });
    setProduct([]);
    if (result.data != null) {
      setProduct(result.data);
      setData(true);
    } else {
      setProduct([]);
      setData(false);
    }
  };

  return (
    <>
      <>
        {product.length > 0 ? (
          <OrderDetails
            product={product}
            shopId={shopId}
            status={false}
          ></OrderDetails>
        ) : (
          <></>
        )}
        <View style={styles.list}>
          {product.length > 0 ? (
            product.map((item) => (
              <OrderProductPicker
                key={item.id + "product"}
                item={item}
                shopId={shopId}
                getProduct={getProduct}
              />
            ))
          ) : (
            <>
              <AppText style={styles.text}>
                {"Sorry, Your Cart is Empty"}
              </AppText>
            </>
          )}
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
    fontSize: 14,
    marginTop: 50,
    marginBottom: 80,
    alignSelf: "center",
    color: colors.medium,
  },
});

export default OrderProductAdd;
