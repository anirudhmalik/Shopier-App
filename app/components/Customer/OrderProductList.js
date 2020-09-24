import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import colors from "../../config/colors";
import OrderProductAdd from "./OrderProductAdd";
import { TouchableHighlight } from "react-native-gesture-handler";
import AppText from "../AppText";
import handlerApi from "../../api/handlerApi";
import ActivityOrder from "../ActivityOrder";
function OrderProductList({ shopId, navigation }) {
  const [data, setData] = useState(false);
  const [refresh, setRefresh] = useState(true);
  const [visible, setVisible] = useState(false);
  const placeOrder = async () => {
    setRefresh(false);
    setVisible(true);
    const result = await handlerApi.addData("orderlist", { shopId: shopId });
    console.log(result.data);
    setData(false);
  };
  return (
    <>
      <ActivityOrder visible={visible}></ActivityOrder>
      <ScrollView showsVerticalScrollIndicator={false}>
        {refresh ? (
          <OrderProductAdd shopId={shopId} setData={setData}></OrderProductAdd>
        ) : (
          <></>
        )}
      </ScrollView>
      {data ? (
        <TouchableHighlight
          underlayColor={colors.green}
          style={styles.submit}
          onPress={() => {
            placeOrder();
          }}
        >
          <AppText style={styles.text}>{"Place Order"}</AppText>
        </TouchableHighlight>
      ) : (
        <>
          {visible ? (
            <>
              <View style={styles.submit1}>
                <TouchableHighlight
                  underlayColor={colors.green}
                  style={styles.submit3}
                  onPress={() => {
                    navigation.navigate("appbuilder", { shopId: shopId });
                  }}
                >
                  <AppText style={styles.text1}>
                    {"Go Back to Shopping"}
                  </AppText>
                </TouchableHighlight>
              </View>
              <View style={styles.submit2}>
                <AppText style={styles.text}>
                  {"Order Placed Successful"}
                </AppText>
              </View>
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
  submit: {
    width: "100%",
    height: 55,
    backgroundColor: colors.blue,
    justifyContent: "center",
    alignItems: "center",
  },
  submit1: {
    width: "100%",
    height: 55,

    marginBottom: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  submit2: {
    width: "100%",
    height: 55,
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
  },
  submit3: {
    width: 180,
    height: 50,
    backgroundColor: colors.blue,
    elevation: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    color: colors.white,
  },
  text1: {
    fontSize: 16,
    color: colors.white,
  },
});

export default OrderProductList;
