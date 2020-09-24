import React from "react";
import {
  View,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
} from "react-native";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import colors from "../config/colors";

function UserSelector(props) {
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      imageStyle={styles.imagestyle}
      source={require("../assets/background.png")}
    >
      <Screen style={styles.screen}>
        <View style={styles.containerText}>
          <AppText style={styles.appText}>You Are:</AppText>
        </View>
        <TouchableHighlight
          underlayColor={colors.light}
          style={styles.container}
          onPress={() => console.log("Seller Tapped")}
        >
          <AppText style={styles.text}>Seller</AppText>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={colors.light}
          style={styles.container}
          onPress={() => console.log("Buyer Tapped")}
        >
          <AppText style={styles.text}>Buyer</AppText>
        </TouchableHighlight>
      </Screen>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  appText: {
    color: colors.green,
    fontSize: 30,
    fontWeight: "700",
  },
  background: {
    flex: 1,
  },
  container: {
    width: 180,
    height: 130,
    backgroundColor: colors.white,
    marginVertical: 30,
    elevation: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  containerText: {
    paddingBottom: 50,
  },
  imagestyle: {
    width: "100%",
    height: "100%",
  },
  screen: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 50,
    fontWeight: "700",
    color: colors.black,
  },
});

export default UserSelector;
