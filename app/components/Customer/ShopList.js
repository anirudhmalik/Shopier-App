import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ShopCard from "./ShopCard";
import colors from "../../config/colors";
import handlerApi from "../../api/handlerApi";
import AppText from "../AppText";
import ActivityIndicator from "../../components/ActivityIndicator";
function ShopList({ navigation }) {
  const [shop, setShop] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getShops();
  }, []);
  const getShops = async () => {
    setLoading(true);
    const result = await handlerApi.getItem("shops");
    setShop(result.data);
    setLoading(false);
  };
  return (
    <>
      <ActivityIndicator visible={loading} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {shop.length > 0 && !loading ? (
          shop.map((data) => (
            <View key={data.userId}>
              <ShopCard
                item={data}
                navigation={navigation}
                setLoading={setLoading}
              ></ShopCard>
            </View>
          ))
        ) : !loading ? (
          <AppText style={styles.text}>
            {"Sorry, No shops near you update your location"}
          </AppText>
        ) : (
          <></>
        )}
        {!loading ? (
          <TouchableWithoutFeedback
            onPress={() => {
              setShop([]);
              getShops();
            }}
          >
            <View style={styles.loading}>
              <MaterialCommunityIcons
                name="reload"
                size={20}
                color={colors.blue}
              />
            </View>
          </TouchableWithoutFeedback>
        ) : (
          <></>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  loading: {
    marginTop: 10,
    alignItems: "center",
    height: 100,
  },
  text: {
    fontSize: 14,
    marginTop: 50,
    marginBottom: 80,
    alignSelf: "center",
    color: colors.medium,
  },
});

export default ShopList;
