import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HeartShopCard from "./HeartShopCard";
import colors from "../../config/colors";
import handlerApi from "../../api/handlerApi";
import AppText from "../AppText";
function HeartShopList({ navigation }) {
  const [shop, setShop] = useState([]);
  useEffect(() => {
    getShops();
  }, []);
  const getShops = async () => {
    const result = await handlerApi.getItem("buyershops");
    if (result.ok) {
      setShop(result.data);
    }
  };
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {shop != null ? (
            shop.map((data) => (
              <View key={data.userId}>
                <HeartShopCard
                  item={data}
                  getShops={getShops}
                  navigation={navigation}
                ></HeartShopCard>
              </View>
            ))
          ) : (
            <AppText style={styles.text}>
              {"Sorry, No shops Add Some Shops"}
            </AppText>
          )}
        </View>
        <View style={styles.loading}>
          <MaterialCommunityIcons
            name="reload"
            size={20}
            color={colors.green}
          />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  loading: {
    marginTop: 10,
    alignItems: "center",
    height: 90,
  },
  text: {
    fontSize: 14,
    marginTop: 50,
    marginBottom: 80,
    alignSelf: "center",
    color: colors.medium,
  },
});

export default HeartShopList;
