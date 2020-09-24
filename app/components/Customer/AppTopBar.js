import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../Screen";
import colors from "../../config/colors";
import AppText from "../AppText";
function AppTopBar({ navigation }) {
  return (
    <>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[colors.green, colors.blue]}
        style={styles.container}
      >
        <Screen style={styles.safeArea}>
          <TouchableWithoutFeedback onPress={() => console.log("Location Set")}>
            <View style={styles.locationContiner}>
              <View style={styles.logoGps}>
                <MaterialCommunityIcons
                  name="map-marker"
                  size={25}
                  color={colors.danger}
                />
              </View>
              <AppText style={styles.locationText}>
                {"Unamed Road, Shamli"}
              </AppText>
              <View style={styles.logoGps}>
                <MaterialCommunityIcons
                  name="menu-down"
                  size={25}
                  color={colors.light}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("search")}
          >
            <View style={styles.appbar}>
              <View style={styles.logo}>
                <MaterialCommunityIcons
                  name="search-web"
                  size={30}
                  color={colors.medium}
                />
              </View>
              <AppText style={styles.text}>
                {"Find Shops Near You And More..."}
              </AppText>
            </View>
          </TouchableWithoutFeedback>
        </Screen>
      </LinearGradient>
      <View style={styles.text2}>
        <AppText style={styles.text}>{"Shops Near You"}</AppText>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appbar: {
    width: "85%",
    height: "40%",
    backgroundColor: colors.light,
    borderRadius: 5,
    marginLeft: 10,
    marginBottom: 3,
    flexDirection: "row",
  },
  safeArea: {
    flex: 1,
  },
  container: {
    height: "15%",
    paddingBottom: 5,
  },
  locationContiner: {
    flexDirection: "row",
    flex: 1,
  },
  locationText: {
    marginLeft: 4,
    alignSelf: "center",
    color: colors.light,
  },
  logoGps: {
    paddingLeft: 10,
    alignSelf: "center",
  },
  logo: {
    paddingLeft: 8,
    alignSelf: "center",
  },
  text: {
    marginLeft: 20,
    alignSelf: "center",
    color: colors.medium,
  },
  text2: {
    margin: 5,
  },
});

export default AppTopBar;
