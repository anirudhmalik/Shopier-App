import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";
import handlerApi from "../../api/handlerApi";
function Banner({ shopId }) {
  const endPoint = "/details";
  const bannerKey = "bnrhdr";
  const bannerBottom1Key = "bnrbtm1";
  const bannerBottom2Key = "bnrbtm2";
  const [bannerHeader, setBannerHeader] = useState("");
  const [bannerBottom1, setBottom1] = useState("");
  const [bannerBottom2, setBottom2] = useState("");
  useEffect(() => {
    getBannerHeader();
  }, []);
  const getBannerHeader = async () => {
    const result = await handlerApi.getItem(endPoint, {
      id: bannerKey,
      shopId: shopId,
    });
    if (result.data != null) {
      setBannerHeader(result.data);
    }
    const result1 = await handlerApi.getItem(endPoint, {
      id: bannerBottom1Key,
      shopId: shopId,
    });
    if (result1.data != null) {
      setBottom1(result1.data);
    }
    const result2 = await handlerApi.getItem(endPoint, {
      id: bannerBottom2Key,
      shopId: shopId,
    });
    if (result2.data != null) {
      setBottom2(result2.data);
    }
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerBanner}>
          <AppText style={styles.header}>{bannerHeader}</AppText>
        </View>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require("../../assets/logo.png")}
          ></Image>
        </View>
        <View style={styles.headerBanner}>
          <View>
            <AppText style={styles.subText1}>{bannerBottom1}</AppText>
            <AppText style={styles.subText2}>{bannerBottom2}</AppText>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 250,
    backgroundColor: colors.white,
    elevation: 20,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
  },
  headerBanner: {
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
  },
  imageView: {
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    height: 150,
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  subText1: {
    fontSize: 13,
  },
  subText2: {
    fontSize: 13,
    paddingBottom: 5,
  },
});

export default Banner;
