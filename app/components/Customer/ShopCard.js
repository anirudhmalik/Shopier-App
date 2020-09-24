import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import AppText from "../AppText";
import handlerApi from "../../api/handlerApi";
function ShopCard({ item, navigation }) {
  const [button, setButton] = useState();
  const [btcolor, setBtcolor] = useState();
  const [undrcolor, setUndrcolor] = useState();
  useEffect(() => {
    getButton();
  }, []);
  const getButton = async () => {
    const result = await handlerApi.addData("buyershops", {
      shopId: item.userId,
    });
    if (result.data) {
      setButton("remove");
      setBtcolor(colors.blue);
      setUndrcolor(colors.green);
    } else {
      setButton("add");
      setBtcolor(colors.green);
      setUndrcolor(colors.blue);
    }
  };
  const removeShop = async () => {
    const result = await handlerApi.removeData("buyershops", {
      shopId: item.userId,
    });
    if (result.ok) {
      setButton("add");
      setBtcolor(colors.green);
      setUndrcolor(colors.blue);
    }
  };
  const addShop = async (value) => {
    const result = await handlerApi.addData("shops", {
      shopId: value,
    });
    if (result.data == null) {
      removeShop();
    } else {
      setButton("remove");
      setBtcolor(colors.blue);
      setUndrcolor(colors.green);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => console.log("Shop Profile Pic clicked")}
      >
        <View style={styles.imageContainer}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[colors.green, colors.blue]}
            style={styles.imageBorder}
          >
            <Image
              style={styles.image}
              source={require("../../assets/profile_pic.jpg")}
            ></Image>
          </LinearGradient>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate("appbuilder", { shopId: item.userId });
        }}
      >
        <View style={styles.textContainer}>
          <View style={styles.textTick}>
            <AppText style={styles.title}>{item.shopname}</AppText>
            <MaterialCommunityIcons
              name="check-decagram"
              size={17}
              color={colors.green}
            />
          </View>
          <AppText style={styles.subTitle}>{"Golf Links, Gzb"}</AppText>
        </View>
      </TouchableWithoutFeedback>
      {
        <TouchableHighlight
          style={[styles.buttonContainer, { backgroundColor: btcolor }]}
          underlayColor={undrcolor}
          onPress={() => {
            addShop(item.userId);
          }}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>{button}</Text>
          </View>
        </TouchableHighlight>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    transform: [{ rotate: "-90deg" }],
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.green,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    flex: 0.24,
  },
  buttonText: {
    color: colors.white,
    fontSize: 15,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  container: {
    marginHorizontal: 6,
    marginTop: 10,
    flexDirection: "row",
    flex: 1,
    borderWidth: 0.8,
    borderColor: colors.lightest,
    borderRadius: 8,
    height: 125,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 100,
  },
  imageBorder: {
    width: 80,
    height: 80,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  subTitle: {
    fontSize: 14,
  },
  textContainer: {
    marginLeft: 15,
    flex: 1,
    justifyContent: "center",
  },
  textTick: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: colors.medium,
    marginRight: 5,
  },
});

export default ShopCard;
