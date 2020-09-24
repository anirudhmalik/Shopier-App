import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";
import BannerHeader from "./BannerHeader";
import cache from "../utility/cache";
import BannerBottom from "./BannerBottom";
import apiCache from "../utility/apiCache";
import apiClient from "../api/client";

function Banner(props) {
  const endPoint = "/details";
  const bannerKey = "bnrhdr";
  const bannerBottom1Key = "bnrbtm1";
  const bannerBottom2Key = "bnrbtm2";
  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [bannerHeader, setBannerHeader] = useState("");
  const [bannerBottom1, setBottom1] = useState("Open time : 8:00am.");
  const [bannerBottom2, setBottom2] = useState(
    "Free deliver on order above $50."
  );
  useEffect(() => {
    getBannerHeader();
  }, []);
  const addBannerHeader = async (value) => {
    await cache.store(bannerKey, value);
    const data = await cache.get(bannerKey);
    setBannerHeader(data);
    await apiCache.post(endPoint, bannerKey, { value: value });
  };
  const addBannerBottom1 = async (value) => {
    await cache.store(bannerBottom1Key, value);
    const data = await cache.get(bannerBottom1Key);
    setBottom1(data);
    await apiCache.post(endPoint, bannerBottom1Key, { value: value });
  };
  const addBannerBottom2 = async (value) => {
    await cache.store(bannerBottom2Key, value);
    const data = await cache.get(bannerBottom2Key);
    setBottom2(data);
    await apiCache.post(endPoint, bannerBottom2Key, { value: value });
  };
  const getBannerHeader = async () => {
    //const data = await cache.get(bannerKey);
    const data = await apiCache.getData(endPoint, bannerKey);
    if (data != null) {
      setBannerHeader(data);
    } else {
      setBannerHeader("Delivery in 2 hrs.");
    }
    //const data1 = await cache.get(bannerBottom1Key);
    const data1 = await apiCache.getData(endPoint, bannerBottom1Key);
    if (data1 != null) {
      setBottom1(data1);
    } else {
      setBottom1("Open Time : 8:00am.");
    }
    //const data2 = await cache.get(bannerBottom2Key);
    const data2 = await apiCache.getData(endPoint, bannerBottom2Key);
    if (data2 != null) {
      setBottom2(data2);
    } else {
      setBottom2("Free Delivery on Order above $50.");
    }
  };
  return (
    <>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => setModal1Visible(true)}>
          <View style={styles.headerBanner}>
            <AppText style={styles.header}>{bannerHeader}</AppText>
            <MaterialCommunityIcons
              name="lead-pencil"
              size={20}
              color={colors.black}
              style={{ marginHorizontal: 8 }}
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require("../assets/logo.png")}
          ></Image>
        </View>
        <TouchableWithoutFeedback onPress={() => setModal2Visible(true)}>
          <View style={styles.headerBanner}>
            <View>
              <AppText style={styles.subText1}>{bannerBottom1}</AppText>
              <AppText style={styles.subText2}>{bannerBottom2}</AppText>
            </View>
            <MaterialCommunityIcons
              name="lead-pencil"
              size={25}
              color={colors.black}
              style={{ paddingLeft: 20 }}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <Modal
        transparent={true}
        visible={modal1Visible}
        onRequestClose={() => setModal1Visible(false)}
      >
        <BannerHeader
          bannerHeader={bannerHeader}
          setBannerHeader={(value) => addBannerHeader(value)}
          setModal1Visible={(value) => setModal1Visible(value)}
        ></BannerHeader>
      </Modal>
      <Modal
        transparent={true}
        visible={modal2Visible}
        onRequestClose={() => setModal2Visible(false)}
      >
        <BannerBottom
          bannerBottom1={bannerBottom1}
          bannerBottom2={bannerBottom2}
          setBottom1={(value) => addBannerBottom1(value)}
          setBottom2={(value) => addBannerBottom2(value)}
          setModal2Visible={(value) => setModal2Visible(value)}
        ></BannerBottom>
      </Modal>
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
