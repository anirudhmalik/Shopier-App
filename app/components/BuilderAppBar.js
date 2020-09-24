import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../components/Screen";
import Icon from "../components/Icon";
import colors from "../config/colors";
import AppText from "./AppText";
import AlertInput from "./AlertInput";
import cache from "../utility/cache";
import apiCache from "../utility/apiCache";

function BuilderAppBar() {
  const shopKey = "shpnme";
  const endPoint = "/details";
  const [modalVisible, setModalVisible] = useState(false);
  const [shopname, setShopeName] = useState("");
  useEffect(() => {
    getShopName();
  }, []);
  const addShopName = async (value) => {
    await cache.store(shopKey, value);
    const data = await cache.get(shopKey);
    setShopeName(data);
    await apiCache.post(endPoint, shopKey, { value: value });
  };
  const getShopName = async () => {
    const data = await apiCache.getData("/details", "shpnme");
    //const data = await cache.get(shopKey);
    if (data != null) {
      setShopeName(data);
    } else {
      setShopeName(" Shop Name ");
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
          <View style={styles.leftLogo}>
            <Icon name="account" size={35} borderWidth={2} />
          </View>
          <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <View style={styles.text}>
              <AppText style={styles.shopName}>{shopname}</AppText>
              <MaterialCommunityIcons
                name="lead-pencil"
                size={20}
                color={colors.light}
                style={{ marginHorizontal: 8, paddingTop: 5 }}
              />
            </View>
          </TouchableWithoutFeedback>

          <View style={styles.rightLogo1}>
            <MaterialCommunityIcons
              name="shopping-search"
              size={35}
              color={colors.white}
            />
          </View>
          <View style={styles.rightLogo2}>
            <MaterialCommunityIcons
              name="cart"
              size={35}
              color={colors.white}
            />
          </View>
        </Screen>
      </LinearGradient>
      <Modal
        visible={modalVisible}
        animationType={"slide"}
        onRequestClose={() => setModalVisible(false)}
        transparent={true}
      >
        <AlertInput
          setModalVisible={(value) => setModalVisible(value)}
          setShopName={(value) => addShopName(value)}
          shopname={shopname}
        ></AlertInput>
      </Modal>
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
    flex: 0.11,
    paddingBottom: 5,
  },
  leftLogo: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    width: "10%",
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
  },
  text: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "67%",
  },
});

export default BuilderAppBar;
