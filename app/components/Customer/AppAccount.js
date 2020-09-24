import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../config/colors";
import AppText from "../AppText";
function AppAccount(props) {
  return (
    <>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[colors.green, colors.blue]}
        style={styles.topMargin}
      ></LinearGradient>
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
        <TouchableWithoutFeedback onPress={() => console.log("Shop :-> ")}>
          <View style={styles.textContainer}>
            <AppText style={styles.title}>{"Anil Kumar"}</AppText>
            <AppText style={styles.subTitle}>{"Golf Links, Gzb"}</AppText>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 6,
    marginTop: 10,
    flexDirection: "row",
    height: 180,
  },
  image: {
    width: 113,
    height: 113,
    borderRadius: 100,
  },
  imageBorder: {
    width: 120,
    height: 120,
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
    marginLeft: 20,
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    color: colors.medium,
    marginRight: 5,
  },
  topMargin: {
    height: 40,
  },
});

export default AppAccount;
