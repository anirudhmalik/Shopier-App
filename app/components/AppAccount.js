import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "./Icon";
import colors from "../config/colors";
import AppText from "./AppText";
import cache from "../utility/cache";
import apiCache from "../utility/apiCache";

function AppAccount(props) {
  const [shopname, setShopeName] = useState("");
  useEffect(() => {
    getShopName();
  }, []);
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
        style={styles.topMargin}
      ></LinearGradient>

      <View style={styles.container}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={[colors.green, colors.blue]}
          style={styles.imageBorder}
        >
          <Image
            style={styles.image}
            source={require("../assets/profile_pic.jpg")}
          ></Image>
        </LinearGradient>

        <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
          <AppText style={styles.title}>{shopname}</AppText>
          <AppText style={styles.subTitle}>Not Verified Yet. </AppText>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 190,
    height: 190,
    borderRadius: 100,
  },
  imageBorder: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 20,
    fontSize: 32,
    fontWeight: "700",
  },
  topMargin: {
    height: 40,
  },
  subTitle: {
    fontSize: 12,
    color: colors.medium,
  },
});

export default AppAccount;
