import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../../components/Screen";
import Icon from "../../components/Icon";
import colors from "../../config/colors";
import AppText from "../AppText";
import handlerApi from "../../api/handlerApi";

function BuilderAppBar({ shopId, navigation }) {
  const [shopname, setShopeName] = useState("");
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  useEffect(() => {
    getShopName();
  }, []);
  const getShopName = async () => {
    const result = await handlerApi.getItem("/details", {
      id: "shpnme",
      shopId: shopId,
    });
    if (result.data != null) {
      setShopeName(result.data);
    } else {
      setShopeName(" Shop Name ");
    }
    const result1 = await handlerApi.getItem("orderlist", {
      shopId: shopId,
      length: true,
      status: false,
    });
    const result2 = await handlerApi.getItem("orderlist", {
      shopId: shopId,
      length: true,
      status: true,
    });
    //count
    if (result1.data != null) {
      setCount(result1.data);
    }
    if (result2.data != null) {
      setCount1(result2.data);
    }
  };
  return (
    <>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[colors.green, colors.blue]}
        style={styles.container}
      >
        <Screen style={styles.appbar}>
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate("notification", { shopId: shopId })
            }
          >
            <View style={styles.leftLogo}>
              <MaterialCommunityIcons
                name="bell"
                size={30}
                color={colors.white}
              />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => console.log("shopname pressed")}
          >
            <View style={styles.text}>
              <AppText style={styles.shopName}>{shopname}</AppText>
            </View>
          </TouchableWithoutFeedback>

          <View style={styles.rightLogo1}>
            <MaterialCommunityIcons
              name="shopping-search"
              size={35}
              color={colors.white}
            />
          </View>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate("order", { shopId: shopId });
            }}
          >
            <View style={styles.rightLogo2}>
              <MaterialCommunityIcons
                name="cart"
                size={35}
                color={colors.white}
              />
            </View>
          </TouchableWithoutFeedback>
        </Screen>
      </LinearGradient>
      {count != 0 ? (
        <View style={styles.notify}>
          <AppText style={styles.count}>{count}</AppText>
        </View>
      ) : (
        <></>
      )}
      {count1 != 0 ? (
        <View style={styles.notify1}>
          <AppText style={styles.count}>{count1}</AppText>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  address: {
    fontSize: 10,
    color: colors.white,
  },
  appbar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  container: {
    height: 90,
    paddingBottom: 5,
  },
  count: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.white,
  },
  leftLogo: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    width: "10%",
  },
  notify: {
    height: 18,
    width: 18,
    backgroundColor: colors.danger,
    position: "absolute",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 361,
    marginTop: 28,
  },
  notify1: {
    height: 13,
    width: 13,
    backgroundColor: colors.danger,
    position: "absolute",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 27,
    marginTop: 44,
  },
  rightLogo1: {
    justifyContent: "center",
    alignItems: "center",
    width: "10%",
    marginRight: 5,
  },
  rightLogo2: {
    justifyContent: "center",
    alignItems: "center",
    width: "10%",
    marginRight: 10,
  },
  shopName: {
    fontSize: 32,
    fontWeight: "700",
    color: colors.white,
    alignSelf: "center",
  },
  text: {
    width: "67%",
    justifyContent: "center",
    alignContent: "center",
  },
});

export default BuilderAppBar;
