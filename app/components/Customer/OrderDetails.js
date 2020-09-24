import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";
import handlerApi from "../../api/handlerApi";

function OrderDetails({ product, shopId, status }) {
  const [mrp, setMrp] = useState(0);
  const [total, setTotal] = useState(0);
  const discount = 6;
  const delivery = 36;
  useEffect(() => {
    getMrp();
  }, []);
  const getMrp = async () => {
    var cost = 0;
    product.map(async (item) => {
      const result = await handlerApi.getItem("order", {
        shopId: shopId,
        productId: item.id,
        status: status,
      });
      cost += item.cost * result.data;
      setMrp(cost);
      setTotal(cost + delivery - discount);
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <AppText style={styles.text}>{"M.R.P"}</AppText>
        <View style={styles.text1}>
          <AppText style={styles.text2}>{"₹" + mrp}</AppText>
        </View>
      </View>
      <View style={styles.textContainer}>
        <AppText style={styles.text}>{"Products Discount"}</AppText>
        <View style={styles.text1}>
          <AppText style={[styles.text2, { color: colors.green }]}>
            {"-₹6"}
          </AppText>
        </View>
      </View>
      <View style={styles.textContainer}>
        <AppText style={styles.text}>{"Delivery Charges"}</AppText>
        <View style={styles.text1}>
          <AppText style={[styles.text2, { color: colors.danger }]}>
            {"+₹36"}
          </AppText>
        </View>
      </View>
      <View style={styles.textContainer1}>
        <AppText style={styles.textSub}>{"Sub Total"}</AppText>
        <View style={styles.text1}>
          <AppText
            style={[styles.text2, { color: colors.black, fontWeight: "bold" }]}
          >
            {"₹" + total}
          </AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 150,
    margin: 7,
    borderRadius: 2,
    flex: 1,
  },
  text: {
    marginLeft: 20,
    marginVertical: 7,
    color: colors.medium,
    fontSize: 16,
  },
  textSub: {
    marginLeft: 20,
    marginVertical: 11,
    color: colors.black,
    fontWeight: "bold",
    fontSize: 18,
  },
  text1: {
    marginRight: 10,
    alignItems: "flex-end",
    flex: 1,
  },
  text2: {
    fontSize: 16,
    color: colors.medium,
  },
  textContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  textContainer1: {
    marginTop: 5,
    borderTopWidth: 2,
    borderTopColor: colors.light,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default OrderDetails;
