import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../AppText";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";
import handlerApi from "../../api/handlerApi";
import { Value } from "react-native-reanimated";

function ProductPicker({ item, shopId }) {
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    getQuantity();
  }, []);
  const getQuantity = async () => {
    const result = await handlerApi.getItem("order", {
      shopId: shopId,
      productId: item.id,
    });
    setQuantity(result.data);
  };
  const addOrder = async (data) => {
    const result = await handlerApi.addData("order", {
      shopId: shopId,
      productId: item.id,
      what: data,
    });
    setQuantity(result.data);
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/logo.png")} />
      <View>
        <AppText style={styles.text}>{item.label}</AppText>
        <AppText style={styles.text2}>{item.quantity}</AppText>
      </View>
      <View style={styles.leftView}>
        <View style={styles.cost}>
          <AppText style={styles.text3}>{"₹" + item.cost}</AppText>
        </View>
        {quantity == 0 ? (
          <TouchableHighlight
            underlayColor={colors.blue}
            style={styles.button}
            onPress={() => {
              addOrder(false);
            }}
          >
            <AppText style={styles.addText}>ADD</AppText>
          </TouchableHighlight>
        ) : (
          <>
            <View style={styles.button1}>
              <TouchableHighlight
                underlayColor={colors.blue}
                style={styles.buttonMinus}
                onPress={() => {
                  addOrder(false);
                }}
              >
                <MaterialCommunityIcons
                  name="minus"
                  size={20}
                  color={colors.white}
                />
              </TouchableHighlight>
              <View style={styles.addText2}>
                <AppText style={styles.addText1}>{quantity}</AppText>
              </View>
              <TouchableHighlight
                underlayColor={colors.green}
                style={styles.buttonPlus}
                onPress={() => {
                  addOrder(true);
                }}
              >
                <MaterialCommunityIcons
                  name="plus"
                  size={20}
                  color={colors.white}
                />
              </TouchableHighlight>
            </View>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addText: {
    color: colors.white,
  },
  addText1: {
    color: colors.medium,
  },
  addText2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.green,
    width: 90,
    padding: 2,
    marginTop: 15,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
  },
  button1: {
    width: 100,
    height: 25,
    marginTop: 15,
    flexDirection: "row",
  },
  buttonMinus: {
    backgroundColor: colors.green,
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPlus: {
    backgroundColor: colors.blue,
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: colors.white,
    flexDirection: "row",
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 10,
    margin: 2,
    height: 100,
    marginHorizontal: 5,
  },
  cost: {
    width: 90,
    padding: 2,
    marginTop: 15,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
  },
  leftView: {
    paddingRight: 20,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  text: {
    paddingLeft: 20,
    fontSize: 24,
  },
  text2: {
    paddingLeft: 20,
    fontSize: 16,
    color: colors.medium,
  },
  text3: {
    fontWeight: "700",
  },
});

export default ProductPicker;
